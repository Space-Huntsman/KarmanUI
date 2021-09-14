#! /bin/bash
git remote remove github-origin
git remote rename origin local-origin
git remote remove origin
git remote add origin git@github.com:Space-Huntsman/KarmanUI.git
git pull
# 思考良久决定还是让手动向上推
#git push -u origin --all
#git push -u origin --tags
