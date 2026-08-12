'use strict';

var gulp = require('gulp');
var fs = require('fs');
var shelljs = require('shelljs');
var runSequence = require('gulp4-run-sequence');
require('./file');
var mapping = {
    'index': 'TypeScript',
    'javascript': 'JavaScript',
    'angular': 'Angular',
    'react': 'React',
    'vue': 'Vue',
    'aspnetmvc': 'ASP.NET MVC',
    'aspnetcore': 'ASP.NET Core'
};
var link = 'https://ej2.syncfusion.com/';
var keys = Object.keys(mapping);

/**
 * If beta release,change url path 
 */
var packJson = JSON.parse(fs.readFileSync('./package.json'));
link = packJson.isBeta ? 'https://ej2.syncfusion.com/beta/' : link;

/**
 * get current repository name 
 */
var currentRepo = shelljs.exec('git rev-parse --show-toplevel', {
        silent: true
    })
    .stdout.split('\n')[0].trim();
exports.currentRepo = currentRepo;

/**
 * Compile ts files
 */
 gulp.task('scripts', function (done) {
    var ts = require('gulp-typescript');
    var tsProject = ts.createProject('tsconfig.json', {
        typescript: require('typescript')
    });

    var tsResult = gulp.src(['./**/*.ts', './**/*.tsx', '!./node_modules/**/*.ts', '!./node_modules/**/*.tsx'], {
            base: '.'
        })
        .pipe(tsProject());
    tsResult.js.pipe(gulp.dest('./'))
        .on('end', function () {
            done();
        });
});


/**
 * Build ts and scss files
 */
gulp.task('build', gulp.series('scripts', 'access-search-files', function (done) {
    if (packJson.isBeta) {
        runSequence('beta-banner');
    }
    done();
}));

gulp.task('live-demo', function(done) {
    for (var i = 0; i < keys.length; i++) {
        var file = fs.readFileSync('./' + keys[i] + '.html', 'utf8');
        if (currentRepo.indexOf('repositories') !== -1) {
            file = file.replace(/{{:LINK}}/g, '../' + mapping[keys[i]]);
        } else {
            if (keys[i] === 'index') {
                file = file.replace(/{{:LINK}}/g, link + 'demos');
            } else if (keys[i] === 'aspnetmvc') {
                file = file.replace(/{{:LINK}}/g, 'https://ej2.syncfusion.com/aspnetmvc');
            } else if (keys[i] === 'aspnetcore') {
                file = file.replace(/{{:LINK}}/g, 'https://ej2.syncfusion.com/aspnetcore');
            } else {
                file = file.replace(/{{:LINK}}/g, link + keys[i] + '/demos');
            }
        }
        fs.writeFileSync('./' + keys[i] + '.html', file);
    }
    done();
})
/**
 * Adding banner tag
 */
gulp.task('beta-banner', function(done) {
    for (var i = 0; i < keys.length; i++) {
        var file = fs.readFileSync('./' + keys[i] + '.html', 'utf8');
        var bannerString = `        <!-- beta banner -->
        <div class="no-ssh-key-message alert alert-warning alignment" id='beta-wrapper'style='margin:0px;'>
            Click <a class="alert-link" href="https://ej2.syncfusion.com/beta/${keys[i] === 'index' ? '' : keys[i]+'/demos/'}"> here </a> to view samples
            from Essential Studio beta release `+ packJson.version +`
            <span id='close' style='float:right;cursor: pointer' onclick='hide()'>x</span>
        </div>
        <script>
            function hide() {
                document.getElementById('beta-wrapper').style.display = 'none';
                var removeCss =document.getElementById('searching');
                removeCss.classList.remove('betasearch');
            }
        </script>
        <!-- End beta banner -->`
        file = file.replace(`<!-- beta banner -->`, bannerString);
        var scripts = `<script src="dist/index.min.js"></script>
        <script>
        var betaTag =document.getElementById('searching');
            betaTag.classList.add('betasearch');
            </script>`;
            file = file.includes('var betaTag') ? file : file.replace(`<script src="dist/index.min.js"></script>`, scripts);
        fs.writeFileSync('./' + keys[i] + '.html', file);
    }
    done();
})

// Task to hide the license banner in the base library files
gulp.task('hide-license', function (done) {
    if (process.env.samples === 'true') {
        console.log('Skipped the hide license task for ES Build');
        done();
    } else {
        try {
            let patternArray = ['it.validate(component)', 'licenseValidator.validate(component)'];
            let pathArray = [
                require.resolve('@syncfusion/ej2-base/dist/ej2-base.umd.min.js'),
                require.resolve('@syncfusion/ej2-base/dist/es6/ej2-base.es5.js'),
                require.resolve('@syncfusion/ej2-base/dist/es6/ej2-base.es2015.js'),
                require.resolve('@syncfusion/ej2-base/src/validate-lic.js')
            ];

            for (let i in pathArray) { replaceStringInFile(pathArray[i], patternArray[i === '0' ? 0 : 1], 'true'); }

        } catch (error) { if (error) console.log('Gulp task to hide license ', error); }
        done();
    }
});

function replaceStringInFile(filePath, pattern, replaceString) {
    try {
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            if (data && pattern && replaceString && data.includes(pattern)) {
                fs.writeFileSync(filePath, data.replace(pattern, replaceString), 'utf8');
            }
        }
    } catch (error) { if (error) console.log('replaceStringInFile function: ', error); }
}
exports.replaceStringInFile = replaceStringInFile;

var branchName = process.env.githubSourceBranch || 'development';
var isReleaseBranch = /^((release\/))/g.test(process.env.githubSourceBranch);
exports.isReleaseBranch = isReleaseBranch;

var isHotfixBranch = /^((hotfix\/))/g.test(process.env.githubSourceBranch);
exports.isHotfixBranch = isHotfixBranch;

var isDevBranch = process.env.githubSourceBranch === 'development';
exports.isDevBranch = isDevBranch;

var isProtectedBranch = isReleaseBranch || isHotfixBranch || isDevBranch;
exports.isProtectedBranch = isProtectedBranch;

/**
 * Remove AspNet Core, Mvc and Blazor platforms from landing page
 */
gulp.task('remove-aspnet-platforms', function (done) {
    var platformRemoveRegex = /\{[^\}]+template\:.*href=\"[^"]+(aspnet(core|mvc)|blazor)[^"]+[^\}]+\}+((,)|)/g;
    console.log('Removing----- AspNet Core, Mvc and Blazor from landing page');
    try {
        var platformTemplate = fs.readFileSync('./src/index.ts', 'utf8');    
        platformTemplate = platformTemplate.replace(platformRemoveRegex,'');
        fs.writeFileSync('./src/index.ts', platformTemplate);
        console.log('Removed----- AspNet Core, Mvc and Blazor from landing page');
        done();
    } catch (error) {
        console.error('Error removing ASP.NET platforms:', error);
        done(error);
    }
});

/**
 * Ship files to external repository
 * Replaces {{:LINK}} with relative paths, copies all files to Home folder, then commits
 */
gulp.task('ship-files', function (done) {
    if (isProtectedBranch) {
        var giteaRepoPath = 'ej2-landing-page-build';
        var user = 'SyncfusionAutomation';
        var token = process.env.GiteaBuildAutomation_Autocommit_PrivateToken;
        var giteaRepoUrl = 'https://' + user + ':' + token + '@gitea.syncfusion.com/essential-studio/ej2-landing-page-build';
        var homeDir = giteaRepoPath;


        // Clone repository if it doesn't exist
        if (!fs.existsSync(giteaRepoPath)) {
            var clone = 'git clone ' + giteaRepoUrl + ' ' + giteaRepoPath + ' -b ' + branchName;
            var cloneResult = shelljs.exec(clone, { silent: true });
            if (cloneResult.code !== 0) {
                console.error('✗ Failed to clone repository');
                done(new Error('Clone failed'));
                return;
            }
            console.log('✓ Repository cloned');
        }

        // Create Home directory
        if (!fs.existsSync(homeDir)) {
            shelljs.mkdir('-p', homeDir);
        }

        // Ship HTML files with link replacement
        var htmlCount = 0;
        for (var i = 0; i < keys.length; i++) {
            var htmlFile = './' + keys[i] + '.html';
            if (fs.existsSync(htmlFile)) {
                var content = fs.readFileSync(htmlFile, 'utf8');
                if (keys[i] === 'index') {
                    content = content.replace(/https:\/\/ej2\.syncfusion\.com\/demos/g, '../' + mapping[keys[i]]);
                } else if (keys[i] === 'aspnetmvc') {
                    content = content.replace(/https:\/\/ej2\.syncfusion\.com\/aspnetmvc/g, '../' + mapping[keys[i]]);
                } else if (keys[i] === 'aspnetcore') {
                    content = content.replace(/https:\/\/ej2\.syncfusion\.com\/aspnetcore/g, '../' + mapping[keys[i]]);
                } else {
                    // Dynamic regex for javascript, angular, react, vue
                    // Replace: https://ej2.syncfusion.com/{platform}/demos with ../PlatformName
                    var dynamicRegex = new RegExp('https:\\/\\/ej2\\.syncfusion\\.com\\/' + keys[i] + '\\/demos', 'g');
                    content = content.replace(dynamicRegex, '../' + mapping[keys[i]]);
                }
                var aspMatches = content.match(/(id\=\"((asp\-(core|mvc))|((aspnet)\-(core|mvc)\-blazor))\")|(id\=\'((aspnetcore|aspnetmvc)|(aspnetcore|aspnetmvc)\-blazor)\')/g);
                if (aspMatches) {
                    for (var k = 0; k < aspMatches.length; k++) {
                        content = content.replace(aspMatches[k], aspMatches[k] + ' style="display: none"');
                    }
                }
                fs.writeFileSync(homeDir + '/' + keys[i] + '.html', content);
                htmlCount++;
            }
        }

        // Copy directories
        var directories = ['dist', 'styles', 'src', 'images', 'build'];
        var dirCount = 0;

        directories.forEach(function (dir) {
            var sourcePath = './' + dir;
            var destPath = homeDir + '/' + dir;

            if (fs.existsSync(sourcePath)) {
                if (fs.existsSync(destPath)) {
                    shelljs.rm('-rf', destPath);
                }
                shelljs.cp('-r', sourcePath, destPath);
                dirCount++;
            }
        });
        console.log('✓ Shipped ' + dirCount + ' directories');

        // Copy configuration files
        var files = ['package.json', 'gulpfile.js', 'tsconfig.json', 'webpack.config.js', 'manifest.webmanifest', 'favicon.ico', 'README.md'];
        var fileCount = 0;

        files.forEach(function (file) {
            var sourcePath = './' + file;
            var destPath = homeDir + '/' + file;

            if (fs.existsSync(sourcePath)) {
                shelljs.cp(sourcePath, destPath);
                fileCount++;
            }
        });
        console.log('✓ Shipped ' + fileCount + ' configuration files');

        // Git operations
        shelljs.cd(giteaRepoPath);
        if (shelljs.exec('git status').stdout.includes('modified:')) {
            console.log('Changes are made in the repository --- ' + giteaRepoPath);
            shelljs.exec('git config user.email "buildautomation@syncfusion.com"');
            shelljs.exec('git config user.name "SyncfusionAutomation"');
            shelljs.exec('git add .');
            shelljs.exec(`git commit -m "Updated landing page changes"`);
            shelljs.exec('git push');
        }
        console.log('\n✅ Ship completed successfully!');
        shelljs.cd('../');
        shelljs.rm('-rf', './' + giteaRepoPath + '/');
    }
     done();
});

gulp.task('ci-report', function(done){
    done();
})

/* jshint strict: false */
/* jshint undef: false */
