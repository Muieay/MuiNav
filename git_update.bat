@echo off
call git add .
call git commit -m "update"
call git pull
call git push
pause
