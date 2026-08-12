require("@syncfusion/ej2-sample-helper-test");

var fs = require('fs');
var glob = require('glob');
var gulp = require("gulp");

var cssTemplate = `.sb-bread-crumb-text {
  font-size: 22px;
  padding-left: 20px;
  padding-top: 24px;
  /* padding-bottom: 10px; */
  margin: 0;
}`;

process.env.AWS_SDK_JS_SUPPRESS_MAINTENANCE_MODE_MESSAGE = '1';

gulp.task('CDN-changes', function (done) {
    var samples = glob.sync('./samples/**/**/index.html');
    if (fs.existsSync('./node_modules/@syncfusion/ej2-sample-helpers/config.json')) {
        for (var i = 0; i < samples.length; i++) {
            var htmlFile = fs.readFileSync(samples[i], 'utf8');
            var config = JSON.parse(fs.readFileSync('./node_modules/@syncfusion/ej2-sample-helpers/config.json', 'utf-8'));
            htmlFile = htmlFile.replace(/https:\/\/cdn.syncfusion.com\/ej2\//, 'https://cdn.syncfusion.com/ej2/' + config.releaseVersion + '/');
            fs.writeFileSync(samples[i], htmlFile, 'utf8');
        }
    }
    done();
});

gulp.task('cdn-styles', function(done) {
    var samples = glob.sync('./samples/**/**/index.html');
    for (var i = 0; i < samples.length; i++) {
        var htmlFile = fs.readFileSync(samples[i], 'utf8');
        htmlFile = htmlFile.replace(`<link href="https://cdn.syncfusion.com/ej2/' + themeName + '.css"`, '<link href="../../styles/material.css"');
        fs.writeFileSync(samples[i], htmlFile, 'utf8');
    }
    done();
});

gulp.task('SEO-changes', function (done) {
    var newWindowSamples = glob.sync('./samples/**/**/index.html');
    var samplsListJson = JSON.parse(fs.readFileSync('./sampleName.json'));

    for (var i = 0; i < newWindowSamples.length; i++) {

        var indexFile = fs.readFileSync(newWindowSamples[i], 'utf8');
        var parts = newWindowSamples[i].split("/");
        var desiredPart = `${parts[2]}/${parts[3]}/`;
        var canon = `<link rel="canonical" href="https://ej2.syncfusion.com/react/demos/${desiredPart}">`;
        var ControlName, sampleName;
        if (samplsListJson[newWindowSamples[i].split('/')[2]] === undefined) {
            console.log(`${i}------${newWindowSamples[i]}`);
            ControlName = (newWindowSamples[i].split('/')[2]).replace(/(^|-)([a-z])/g, (_, separator, letter) => (separator ? ' ' : '') + letter.toUpperCase()).trim();
            sampleName = (newWindowSamples[i].split('/')[3]).replace(/(^|-)([a-z])/g, (_, separator, letter) => (separator ? ' ' : '') + letter.toUpperCase()).trim();
        }
        else {
            ControlName = samplsListJson[newWindowSamples[i].split('/')[2]].ControlName;
            sampleName = samplsListJson[newWindowSamples[i].split('/')[2]].Samples[newWindowSamples[i].split('/')[3]];
            if (sampleName === undefined) {
                sampleName = (newWindowSamples[i].split('/')[3]).replace(/(^|-)([a-z])/g, (_, separator, letter) => (separator ? ' ' : '') + letter.toUpperCase()).trim();
            }
        }
            indexFile = !indexFile.includes(`<h1 class="sb-bread-crumb-text">Example of ${sampleName} in React ${ControlName}`) ? indexFile.replace(/<meta name="description"(.*)/g, '') : indexFile;

            var headerDesc = '';
            var h1Regex = /<h1 class="sb-bread-crumb-text">/g;
            var h2Regex = /<h2 class="sb-bread-crumb-text">/g;

            if (h1Regex.test(indexFile) && h2Regex.test(indexFile)) {
                indexFile = indexFile.replace(/<h1 class="sb-bread-crumb-text">[^<h1>]+\<\/h1\>/g, '');
                headerDesc = `<h1 class="sb-bread-crumb-text">Example of ${sampleName} in React ${ControlName} Component</h1>`;
                indexFile = !indexFile.includes(headerDesc) ? indexFile.replace(/<h2 class=/g, `${headerDesc}\n<h2 class=`) : indexFile;
            } else {
                headerDesc = `<h1 class="sb-bread-crumb-text">Example of ${sampleName} in React ${ControlName} Component</h1>`;
                indexFile = !indexFile.includes(headerDesc) ? indexFile.replace('</h1>', '</h2>').replace(/<h1 class=/g, `${headerDesc}\n<h2 class=`) : indexFile;
            }

            var metaTagTemplate = `<meta name="description" content="This example demonstrates the ${sampleName} functionality within the React ${ControlName} Component. Explore here for more details." />`;
            indexFile = !indexFile.includes(metaTagTemplate) ? indexFile.replace(/<title>(.*)/g, '<title>' + 'React ' + ControlName + ' ' + sampleName + ' Example - Syncfusion Demos</title>\n\t' + metaTagTemplate) : indexFile;
            indexFile = !indexFile.includes(cssTemplate) ? indexFile.replace(/<style>/g, '<style>\n' + cssTemplate) : indexFile;
            indexFile = indexFile.replace(/Essential JS 2/g,'Essential Studio');
            indexFile = indexFile.replace(/<head>/, `<head>
            <script>function _0xde02(){var _0x5f2ba3=['9TYJyPJ','8519130vccODC','length','indexOf','642676nYqdEN','split','1588446jBtanR','1207348wihLFo','204856gJKXOd','1996386mrrBRO','7202905WqbCdL','href','ej2.syncfusion.com','36VGEwVI'];_0xde02=function(){return _0x5f2ba3;};return _0xde02();}var _0x5c03ce=_0x2e99;(function(_0x4610ba,_0x2edf38){var _0x2bab05=_0x2e99,_0x295339=_0x4610ba();while(!![]){try{var _0x258b1a=parseInt(_0x2bab05(0xd5))/0x1+-parseInt(_0x2bab05(0xd7))/0x2+parseInt(_0x2bab05(0xd1))/0x3*(parseInt(_0x2bab05(0xd8))/0x4)+-parseInt(_0x2bab05(0xdb))/0x5+parseInt(_0x2bab05(0xd2))/0x6+parseInt(_0x2bab05(0xda))/0x7+-parseInt(_0x2bab05(0xd9))/0x8*(parseInt(_0x2bab05(0xd0))/0x9);if(_0x258b1a===_0x2edf38)break;else _0x295339['push'](_0x295339['shift']());}catch(_0x5cb54d){_0x295339['push'](_0x295339['shift']());}}}(_0xde02,0xdfa28));var bypassKey=[0x73,0x79,0x6e,0x63,0x66,0x75,0x73,0x69,0x6f,0x6e,0x2e,0x69,0x73,0x4c,0x69,0x63,0x56,0x61,0x6c,0x69,0x64,0x61,0x74,0x65,0x64];function _0x2e99(_0x50a339,_0x56f268){var _0xde0271=_0xde02();return _0x2e99=function(_0x2e9975,_0x55ee02){_0x2e9975=_0x2e9975-0xce;var _0x32119=_0xde0271[_0x2e9975];return _0x32119;},_0x2e99(_0x50a339,_0x56f268);}function convertToChar(_0x3e5688){var _0x37d95d=_0x2e99,_0x30ade7='';for(var _0x30d200=0x0,_0x532558=_0x3e5688;_0x30d200<_0x532558[_0x37d95d(0xd3)];_0x30d200++){var _0xc98512=_0x532558[_0x30d200];_0x30ade7+=String['fromCharCode'](_0xc98512);}return _0x30ade7;}location[_0x5c03ce(0xce)]&&location['href'][_0x5c03ce(0xd4)](_0x5c03ce(0xcf))!==-0x1&&(window[convertToChar(bypassKey)['split']('.')[0x0]]={},window[convertToChar(bypassKey)[_0x5c03ce(0xd6)]('.')[0x0]][convertToChar(bypassKey)[_0x5c03ce(0xd6)]('.')[0x1]]=!![]);</script>`);
            indexFile = indexFile.replace(/https:\/\/www\.syncfusion\.com\/react-ui-components\//g, 'https://www.syncfusion.com/react-components/');
            indexFile = indexFile.replace('</head>',canon +"\n</head>")
            fs.writeFileSync(newWindowSamples[i], indexFile, 'utf8');
    }
    done();
});
