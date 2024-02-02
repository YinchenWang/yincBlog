#!/usr/bin/env sh
# set -e

# npm run build
# cd public
# git init
# git add -A
# git commit -m "deploy"

# git remote add origin root@121.36.111.221:/~/projet.git

# git push -f root@121.36.111.221:/~/projet.git master
# cd -

# git add .
# git commit -m "update"
# git push

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/YinchenWang.github.io/yincBlog.git

cd -

