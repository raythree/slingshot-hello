# slingshot-hello
React-slingshot is probably the best react starter project. However, the fuel-saving app that comes with it is not going to meet everyone's needs, and the ```"npm remove-demo"``` script that deletes it also removes some of the key elements needed to jumpstart any real app. The goal of this repo is to recreate a simple app that can be used as the starting point for your real app with minimum edits.

## quickstart

Clone react-slingshot, remove the demo, and clone the slingshot-hello repo:

```
git clone https://github.com/coryhouse/react-slingshot.git

cd react-slingshot
npm run setup
npm run remove-demo

cd ..
git clone https://github.com/raythree/slingshot-hello.git
cd slingshot-hello
npm run setup -- ../react-slingshot
```

After the setup script completes:

```
cd ../react-slingshot
npm start -s
```
Rename/edit the contents of the "src/hello" folder. 






