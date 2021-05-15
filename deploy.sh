#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd /dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# githubUrl=git@github.com:mp5088643/mp5088643.github.io.git

# deploy to github
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:mp5088643/mp5088643.github.io.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://git@github.com:${GITHUB_TOKEN}@github.com/mp5088643.github.io.git
  git config --global user.name "mp5088643"
  git config --global user.email "mp5088643@qq.com"
fi

git init
git add -A
git commit -m "${msg}"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>:gh-pages
git push -f $githubUrl master

cd -