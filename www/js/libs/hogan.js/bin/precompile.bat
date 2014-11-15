@ECHO OFF
set APP_PROJECT_NAME=Fob
set DESTINATION_SOURCE=C:\Users\kemal\PhpstormProjects\%APP_PROJECT_NAME%\www\resources\templates\templates_source.js
set DESTINATION_TARGET=C:\Users\kemal\PhpstormProjects\%APP_PROJECT_NAME%\www\resources\templates\templates.js
set DIR=../../../../resources/templates

FOR /R %DIR% %%i IN (.) DO (
	node hulk %%i\*.html >> %DESTINATION_SOURCE%
)

node prepare %DESTINATION_SOURCE% > %DESTINATION_TARGET%

DEL %DESTINATION_SOURCE%

PAUSE