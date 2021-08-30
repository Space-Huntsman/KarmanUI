#! /bin/sh
set -ex
mkdir temp_web
npm run deploy:build
cd temp_web
git clone --depth 1 -b gh-pages --single-branch https://github.com/spaceHuntsman/karman.git && cd karman

# build sub folder
SUB_FOLDER='2.15'
mkdir -p $SUB_FOLDER
rm -rf *.js *.css *.map static
rm -rf $SUB_FOLDER/**
cp -rf ../../examples/karman-ui/** .
cp -rf ../../examples/karman-ui/** $SUB_FOLDER/
cd ../..

# deploy domestic site
faas deploy daily -P karman
rm -rf temp_web
