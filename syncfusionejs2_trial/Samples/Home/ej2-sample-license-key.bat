@echo off
setlocal enabledelayedexpansion

REM Get script directory
set "SCRIPT_DIR=%~dp0"
set "PROCESSED_COUNT=0"

echo ============================================================
echo CSS Injection Script
echo ============================================================
echo Script Directory: %SCRIPT_DIR%
echo.

REM Define all build folders with full paths
set "PATH[0]=..\JavaScript\styles\app-styles.css"
set "PATH[1]=..\TypeScript\styles\app-styles.css"
set "PATH[2]=..\Angular\styles\app-styles.css"
set "PATH[3]=..\React\styles\app-styles.css"
set "PATH[4]=..\Vue\styles\app-styles.css"

REM Define HTML files to inject style tag
set "HTML_PATH[0]=index.html"
set "HTML_PATH[1]=javascript.html"
set "HTML_PATH[2]=angular.html"
set "HTML_PATH[3]=react.html"
set "HTML_PATH[4]=vue.html"

echo Folder Configuration:
echo ============================================================
for /l %%i in (0,1,4) do (
    echo !PATH[%%i]!
)
echo.

REM Loop through each entry
for /l %%i in (0,1,4) do (
    setlocal enabledelayedexpansion
    
    REM Get full path
    set "FULL_PATH=!PATH[%%i]!"
    set "CSS_FILE=%SCRIPT_DIR%!FULL_PATH!"
    
    REM Check if app-styles.css exists
    if exist "!CSS_FILE!" (
        echo [FOUND] !FULL_PATH!
        
        REM Append CSS content
        (
            echo li[control-name="diagram"],
            echo li[control-name="rich-text-editor"],
            echo li[control-name="gantt"],
            echo li[control-name="schedule"],
            echo li[control-name="kanban"],
            echo li[control-name="block-editor"],
            echo li[control-name="mark-down-editor"],
            echo li[control-name="markdown-editor"] {
            echo   display: none;
            echo }
            echo #controlTree ^> ul ^> li:nth-child^(2^) {
            echo   display: none ^^^!important;
            echo }
        ) >> "!CSS_FILE!"
        
        if errorlevel 1 (
            echo [ERROR] Failed to write to !FULL_PATH!
        ) else (
            echo [SUCCESS] CSS injected to !FULL_PATH!
            set /a PROCESSED_COUNT+=1
        )
        echo.
    ) else (
        echo [INFO] !FULL_PATH! not found
    )
    
    endlocal
)

REM Loop through HTML files and inject style tag
echo Injecting style tag to HTML files...
echo ============================================================
for /l %%i in (0,1,4) do (
    setlocal enabledelayedexpansion

    REM Get full path
    set "FULL_HTML_PATH=!HTML_PATH[%%i]!"
    set "HTML_FILE=%SCRIPT_DIR%!FULL_HTML_PATH!"

    REM Check if HTML file exists
    if exist "!HTML_FILE!" (
        echo [FOUND] !FULL_HTML_PATH!

        REM Append style tag before </head>
        (
            echo ^<style^>.sb-sdk-hide { display: none;}^</style^>
        ) >> "!HTML_FILE!"

        if errorlevel 1 (
            echo [ERROR] Failed to write to !FULL_HTML_PATH!
        ) else (
            echo [SUCCESS] Style tag injected to !FULL_HTML_PATH!
            set /a PROCESSED_COUNT+=1
        )
        echo.
    ) else (
        echo [INFO] !FULL_HTML_PATH! not found
    )

    endlocal
)

echo ============================================================
echo SUMMARY
echo ============================================================
echo Files updated: %PROCESSED_COUNT%
echo.

if %PROCESSED_COUNT% gtr 0 (
    echo [SUCCESS] CSS injection completed!
) else (
    echo [WARNING] No CSS files were updated
)

:end
endlocal