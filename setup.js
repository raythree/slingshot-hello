var copyFiles = require('copyfiles');
var fs = require('fs');

function setup() {
  if (process.argv.length != 3) {
    console.error("\nUSAGE: npm run setup <path-to-slingshot-folder>\n");
    return;
  }
  var folder = process.argv[2];
  if (!checkFolder(folder)) {
    console.log("ERROR: there does not appear to be a slingshot project at " + folder);
    return;
  }


  console.log("setting up app in " + folder);
}

function checkFolder(folder) {
  if (folder.lastIndexOf("/") !== (folder.length - 1) ) folder = folder + "/";
  console.log("checking slingshot folder " + folder);

  if (!fs.existsSync(folder + "package.json")) {
    return false;
  }
  if (!fs.existsSync(folder + "src")) {
    return false;
  }
  return true;
}

setup();
