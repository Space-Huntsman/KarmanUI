#! /bin/bash
cd existing_repo
git remote remove local-origin
git remote rename origin github-origin
git remote add origin ssh://git@gitlab.hl.xa:9002/wangwei/karman-ui.git
git push -u origin --all
git push -u origin --tags
