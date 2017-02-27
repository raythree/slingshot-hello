# slingshot-hello
React-slingshot is the best React starter project out there, with everything you need for development and production environments. However, the demo app is not going to fit everyone's needs, and after running the ```remove-demo``` script you now have to manually wire up your index.js, store, routes, initial container/components, and third-party packages that you use in production to get a functioning app. 

The solution is to create your own starter app, structured the way you want, and drop that into the slingshot starter project after removing the demo.

I wanted an app that was ready to run, and could be turned into the start of a production app in under a minute, just by renaming a couple of components. This starter has the following:

1. A configured store (hello.js "duck") with one action (sayHello) and one async action (sayHelloAsync).
2. A single container (HelloContainer).
3. A single component (HelloComponent).
4. A style sheet with 1 style.
5. The default routes ready to go. 
6. A single test spec that verifies the initial store.

## quickstart

Clone react-slingshot project and remove the demo. Clone slingshot-hello repo and run the setup script, giving it the path to the empty react-slingshot project:

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






