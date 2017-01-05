var exec = require('child_process').exec,
    fs = require('fs'),
    del = require('del');


// Shell gitCommands
var gitCommands = {
    currentBranch:  "git branch | grep \\* | cut -d ' ' -f2",
    clone:          "git clone -b gh-pages https://github.com/groupe-sii/cheatSheets.git gh-pages",
    configUser:     "git config user.name \"Travis-CI\"",
    configEmail:    "git config user.email \"mbrechet@sii.fr\"",
    add:            "git add --all",
    commit:         "git commit -am \"Automatic build from Travis-CI\"",
    push:           "git push \"https://${GH_TOKEN}@github.com/groupe-sii/cheatSheets.git\" gh-pages:gh-pages"
};

var DEPLOY_BRANCH = 'master';

/**
 * Executes a shell command and returns result in a promise.
 * @return {Promise} the promise that will be resolved when command is executed
 */
var execCommand = function(cmd) {
    var p = new Promise(function(resolve, reject) {
        exec(cmd, function(err, stdout, stderr) {
            if (!err) {
                resolve(stdout);
            } else {
                reject(stderr);
            }
        })
    });
    return p;
};



/**
 * Returns the current branch name.
 * @return {String} the current branch name
 */
var getBranchName = function() {
    if (process.env.TRAVIS_BRANCH) {
        return Promise.resolve(process.env.TRAVIS_BRANCH);
    } else {
        return execCommand(gitCommands.currentBranch);
    }
};


// Steps for deployment
// 1 - get Branch name
// 2 - clean gh-pages directory
// 2 - Copy 'dist' directory contents into gh-pages
// 3 - Add, commit and push changes to Github


// 1 - get Branch name
getBranchName().then(function(branch){
    branch = branch.trim();
    console.log('DEPLOY_BRANCH', DEPLOY_BRANCH, DEPLOY_BRANCH.length);
    console.log("banch", branch, branch.length);
    if(branch === DEPLOY_BRANCH){
        return Promise.resolve();
    }else{
        return Promise.reject("WRONG_BRANCH");
    }
})
// 2 - clean gh-pages directory
.then(
    del('gh-pages/**/*', {force:true, dot:true})
)
// 3 - Checkout gh-pages from github
.then(function () {
    console.info('Checkout gh-pages');
    return execCommand(gitCommands.clone);
})

// 4 - Copy 'dist' directory contents into gh-pages
.then(function() {
    var path = 'gh-pages/';
    console.info('Copy dist/* into ' + path);
    return execCommand('cp -rf dist/* ' + path);
})

// 5- Add, commit and push changes to Github
.then(execCommand.bind(null, 'cd gh-pages && '+ gitCommands.configUser))
.then(execCommand.bind(null, 'cd gh-pages && '+ gitCommands.configEmail))
.then(execCommand.bind(null, 'cd gh-pages && '+ gitCommands.add))
.then(execCommand.bind(null, 'cd gh-pages && '+ gitCommands.commit))
.then(execCommand.bind(null, 'cd gh-pages && '+ gitCommands.push))
.catch(function(err){
    if(err === 'WRONG_BRANCH'){
        console.log('deploy in only available on "'+DEPLOY_BRANCH+'" branch.');
    }else{
        console.error(err);
        throw new Error(err);
    }
    
});