#! /bin/bash
git remote remove local-origin
git remote rename origin github-origin
git remote add origin ssh://git@gitlab.hl.xa:9002/wangwei/karman-ui.git
git pull
# 思考良久决定还是让手动向上推
#git push -u origin --all
#git push -u origin --tags

