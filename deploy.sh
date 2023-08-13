#!/usr/bin/env sh
set -e

npm run build
git add .
git commit -m "update"
git push
cd public
git init
git add -A
git commit -m "deploy"

git remote add origin root@121.36.111.221:/~/projet.git

git push -f root@121.36.111.221:/~/projet.git master
cd -

