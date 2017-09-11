git config username 
git config email 

git status tell us how 

git add -A  // takes all files, subdirectories and files we already reamoved them
/// moving to middle section 
git status --> if they are in stging area they are green 

git commit -m "verb present tense, add day 20 files"
// it moves from staging area to repository 

git log 
git log graph 

git branch 
list for you all branches of our git repository

git branch -v 
returns unique id of a brancj

git branch <name>
this create a new branch 

git checkout <new one name>
switched to branch 'new one name'

git merge <name of the branch that currently you are not -m "any message of this merge"> 
then we go and delete any conflict messages 

git add -a
git commit -m " fixes merge"


git branch -D se0-meta-tags
to delete a branch


git checkout -b external-css  // not only create but also moves into 

git push origin mybranchName 

// if a repository has different branches so by saying origin/nameOfBranch we assign which 
// branch we want to work and it creates same local branch in our machine
 git checkout --track origin/assets
 
 // it returns all branches in local and remote repository 
 git branch -a  

all git commands
alias ga='git add'
alias gp='git push'
alias gl='git log'
alias gs='git status'
alias gd='git diff'
alias gm='git commit -m'
alias gma='git commit -am'
alias gb='git branch'
alias gc='git checkout'
alias gra='git remote add'
alias grr='git remote rm'
alias gpu='git pull'
alias gcl='git clone'
alias gphm="git push heroku master"











