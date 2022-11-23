@echo off
set previousDir=%cd%
if "%1" == "add" (
	cd backend
	cmd /C yarn add-quote
) else if "%1" == "push" (
	cmd /C git add backend/data/quotes.json
	cmd /C git commit -m "feat: new quote"
	cmd /C git push
) else if "%1" == "deploy" (
	cmd /C gh workflow run deploy
) else if "%1" == "" (
	echo Available Commands: add, push, deploy.
) else (
	echo Unknown Command: %1!
)
cd %previousDir%
set "previousDir="
