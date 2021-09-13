#! /bin/bash
git remote rename github-origin
git remote rename origin local-origin
git remote add origin git@github.com:Space-Huntsman/KarmanUI.git
git push -u origin --all
git push -u origin --tags
