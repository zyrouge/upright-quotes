@echo off
set previousDir=%cd%
if "%1" == "add" (
	cd backend
	cmd /C yarn add-quote
) else if "%1" == "push" (
	git add .
	git commit -m "feat: new quote"
	git push
) else if "%1" == "" (
	echo Available Commands: add, push.
) else (
	echo Unknown Command: %1!
)
cd %previousDir%
