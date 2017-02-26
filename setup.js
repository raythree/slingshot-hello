var copyFiles = require('copyfiles');
var fs = require('fs');
var exec = require(‘child_process’).exec;

var packages = require('./packages-to-install');
var rmFolders = require('./folders-to-remove');

function setup() {
  if (process.argv.length != 3) {
    console.error("\nUSAGE: npm run setup <path-to-slingshot-folder>\n");
    return;
  }
  var folder = process.argv[2];
  if (folder.lastIndexOf("/") !== (folder.length - 1) ) folder = folder + "/";

  if (!checkFolder(folder)) {
    console.log("ERROR: there does not appear to be a slingshot project at " + folder);
    return;
  }
  console.log("setting up app in " + folder);

  installPackages(folder);
  removeFolders(folder);
  installFiles(folder);
}

function installPackages(folder) {
  var pwd = process.cwd();
  process.chdir(folder);
  console.log("installing " + packages.length + " packages....");
  packages.forEach(function (pkg) {
    console.log("installing " + pkg);
    cmd.run("npm install " + pkg);
  });
  console.log("PLEASE WAIT....this may take some time");
  process.chdir(pwd);
}

function removeFolders(folder) {
  rmFolders.forEach(function (name) {
    var fullPath = folder + name;
    console.log("RM: " + fullPath);
  });
}

function installFiles(folder) {
}

function checkFolder(folder) {
  console.log("checking slingshot folder " + folder);
  if (!fs.existsSync(folder + "package.json")) {
    return false;
  }
  if (!fs.existsSync(folder + "src")) {
    return false;
  }
  return true;
}

function execSync() {
  async.series([
    execFn(‘git reset –hard HEAD’, ‘/optional/working/dir’),
    execFn(‘git pull origin master’, ‘/optional/working/dir’)
  ]);
}

var execFn = function(cmd, dir) {
  return function(cb) {
    console.log(‘EXECUTING: ‘ + cmd);
    exec(cmd, { cwd: dir }, function() { cb(); });
  }
}

setup();
