## Installation procedure untuk c9.io
### Update npm
```sh
    $ npm update node
    $ npm update -g npm
```

### Update node path
```sh
    $ echo "export NODE_PATH=$NODE_PATH:/home/ubuntu/.nvm/v0.10.35/lib/node_modules" >> ~/.bashrc && source ~/.bashrc
```

### Install only yo and gulp
Install yeoman dengan gulp sahaja sebab by default dah ada bower dengan grunt-cli
```sh
    $ npm update -g bower           # ni utk jebat, sebab beliau dah ada dah
    $ npm update -g grunt-cli       # ni utk jebat, sebab beliau dah ada dah
    $ npm install -g yo gulp
```
Kalau tak dak lagi bower ngan grunt-cli
```sh
    $ npm install -g bower grunt-cli
```

### Install angular generators
```sh
    $ npm install -g generator-angular generator-karma  # install generators
    $ yo angular                                        # scaffold out a AngularJS project
```
During installation
1. Install Sass with Compass
2. Include Bootstrap
3. Use Sass version of Bootstrap
4. include angular-messages.js
5. Ovewrite README.md
6. Overwrite package.json
7. Sampai kat "Total Execution Time" dia hang lama.. aku tekan arrow down, and overwrite package.json baru settle
```sh
    $ bower install                     # in case kalau ada dependency tak install lagi
    $ npm install                       # in case kalau ada dependency tak install lagi
    $ bower install angular-ui          # install a dependency for your project from Bower
    $ bower install angular-ui-router   # izzad suggest pakai angular-ui-router
    $ grunt test                        # test your app
```
Untuk jebat/c9.io kena tukar server ip dengan port. Dalam Gruntfile.js edit
```js
    // The actual grunt server settings
    connect: {
      options: {
        ...
        port: process.env.PORT,
        hostname: process.env.IP,
        ...
      },
```

### Start Development Server
```sh
    $ grunt serve   # preview your app, untuk jebat: https://<workspace>-shahfazliz.c9.io/
```

### Lastly, to build for deployment
Jangan guna sebelum siap. Sebab semua component references to local javascript file akan tukar ke googleapis files
```sh
    $ grunt         # build the application for deployment
```

