var exec = require('child_process').exec,
    fs = require('fs'),
    del = require('del');


// Shell gitCommands
var gitCommands = {
    clone:          "git clone -b gh-pages https://github.com/groupe-sii/cheatSheets.git gh-pages",
    configUser:     "git config user.name \"Travis-CI\"",
    configEmail:    "git config user.email \"mbrechet@sii.fr\"",
    add:            "git add --all",
    commit:         "git commit -am \"Automatic build from Travis-CI\"",
    push:           "git push \"git@github.com:groupe-sii/cheatSheets.git.git\" gh-pages:gh-pages"
};

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




// Steps for deployment
// 1 - clean gh-pages directory
// 2 - Copy 'dist' directory contents into gh-pages
// 3 - Add, commit and push changes to Github

del('gh-pages/**/*', {force:true, dot:true})
// 2 - Checkout gh-pages from github
.then(function () {
    console.info('Checkout gh-pages');
    return execCommand(gitCommands.clone);
})

// 3 - Copy 'dist' directory contents into gh-pages
.then(function() {
    var path = 'gh-pages/';
    console.info('Copy dist/* into ' + path);
    return execCommand('cp -rf dist/* ' + path);
})

// 4- Add, commit and push changes to Github
.then(execCommand.bind(null, 'cd gh-pages && '+ gitCommands.configUser))
.then(execCommand.bind(null, 'cd gh-pages && '+ gitCommands.configEmail))
.then(execCommand.bind(null, 'cd gh-pages && '+ gitCommands.add))
.then(execCommand.bind(null, 'cd gh-pages && '+ gitCommands.commit))
// .then(execCommand.bind(null, 'cd gh-pages && '+ gitCommands.push))
.catch(function(err){
    console.error(err);
    throw new Error(err);
});