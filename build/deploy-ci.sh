#! /bin/sh
mkdir temp_web
git config --global user.name "karman-bot"
git config --global user.email "wallement@gmail.com"

if [ "$ROT_TOKEN" = "" ]; then
  echo "Bye~"
  exit 0
fi

# release
if [ "$TRAVIS_TAG" ]; then
  # build lib
  npm run dist
  cd temp_web
  git clone https://$ROT_TOKEN@github.com/KarmanUI/lib.git && cd lib
  rm -rf `find * ! -name README.md`
  cp -rf ../../lib/** .
  git add -A .
  git commit -m "[build] $TRAVIS_TAG"
  git tag $TRAVIS_TAG
  git push origin master --tags
  cd ../..

  # build theme-default
  cd temp_web
  git clone https://$ROT_TOKEN@github.com/KarmanUI/theme-default.git && cd theme-default
  rm -rf *
  cp -rf ../../theme/default/** .
  git add -A .
  git commit -m "[build] $TRAVIS_TAG"
  git tag $TRAVIS_TAG
  git push origin master --tags
  cd ../..

  # build site
  npm run deploy:build
  cd temp_web
  git clone --depth 1 -b gh-pages --single-branch https://$ROT_TOKEN@github.com/spaceHuntsman/karman.git && cd karman
  # build sub folder
  echo $TRAVIS_TAG

  SUB_FOLDER='2.15'
  mkdir $SUB_FOLDER
  rm -rf *.js *.css *.map static
  rm -rf $SUB_FOLDER/**
  cp -rf ../../examples/karman-ui/** .
  cp -rf ../../examples/karman-ui/** $SUB_FOLDER/
  git add -A .
  git commit -m "$TRAVIS_COMMIT_MSG"
  git push origin gh-pages
  cd ../..

  echo "DONE, Bye~"
  exit 0
fi

# build dev site
npm run build:file && CI_ENV=/dev/$TRAVIS_BRANCH/ node_modules/.bin/cross-env NODE_ENV=production node_modules/.bin/webpack --config build/webpack.demo.js
cd temp_web
git clone https://$ROT_TOKEN@github.com/KarmanUI/dev.git && cd dev
mkdir $TRAVIS_BRANCH
rm -rf $TRAVIS_BRANCH/**
cp -rf ../../examples/karman-ui/** $TRAVIS_BRANCH/
git add -A .
git commit -m "$TRAVIS_COMMIT_MSG"
git push origin master
cd ../..

# push dev theme-default
cd temp_web
git clone -b $TRAVIS_BRANCH https://$ROT_TOKEN@github.com/KarmanUI/theme-default.git && cd theme-default
rm -rf *
cp -rf ../../theme/default/** .
git add -A .
git commit -m "$TRAVIS_COMMIT_MSG"
git push origin $TRAVIS_BRANCH
cd ../..
