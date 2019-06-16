# Spurtcommerce
Spurtcommerce - Server
## ❯ Getting Started

### Step 1: Set up the Development Environment

You need to set up your development environment before you can do anything.

Install [Node.js and NPM](https://nodejs.org/en/download/)

- on OSX use [homebrew](http://brew.sh) `brew install node`
- on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

Install npm globally

```bash
npm install npm -g
```

Install a MySQL database.

> If you work with a mac, we recommend to use homebrew for the installation.
> Database file available under repository spurtcommerce.sql.

### Step 2: Create New Project

Fork or download this project. Configure your package.json for your new project.

Then copy the `.env.example` file and rename it to `.env`. In this file you have to add your database connection information.

Create a new database with the name you have in your `.env`-file.
### Environment Setup On  Local Machine
  > .env file used for development process..
  > In the .env file, we used our localhost Mysql setup. Likewise, you can setup your own localhost MySQL connection string and also Application detail.
   
  ### Environment Setup On Production & Staging
  >  .env.production file used for production process.
  > .env.staging file used for staging process.
    
Then setup your application environment.

```bash
npm run setup
```

> This installs all dependencies with npm. 
```bash
npm run dbseed
```
if it migratration completed properly and then seeds some test data into it. So after that your development environment is ready to use.

### Step 3: Serve your App

Go to the project dir and start your app with this npm script.

```bash
npm start serve
```

> This starts a local server using `nodemon`, which will watch for any file changes and will restart the sever according to these changes.
> The server address will be displayed to you as `http://0.0.0.0:3000`.


## ❯ Scripts and Tasks

All script are defined in the `package-scripts.js` file, but the most important ones are listed here.

### Install

- Install all dependencies with `npm install`

### Running in dev mode

- Run `npm start serve` to start nodemon with ts-node, to serve the app.
- The server address will be displayed to you as `http://0.0.0.0:3000`

### Building the project and run it

- Run `npm start build` to generated all JavaScript files from the TypeScript sources (There is also a vscode task for this called `build`).
- To start the builded app located in `dist` use `npm start`.

### Mail Configuration

Outgoing mail configuration is done with environment variables.
- Set mail configuration in .env file.

| Property | Description |
| ------ | ------ |
| MAIL_DRIVER | Specify the driver you would like to use. On most installations, you can leave this as smtp. |
| MAIL_HOST | Specify the hostname for your outgoing mail server. |
| MAIL_PORT | Set the port number that your mail server expects to send from. Some common port numbers are: 25 for unencrypted connections 587 for encrypted |
| MAIL_USERNAME | Set the username of the authenticated user you'll be sending email as. |
| MAIL_PASSWORD | Set the password for the authenticated user you'll be sending as. |
| MAIL_ENCRYPTION | Here you may specify the encryption protocol that should be used when the application sends e-mail messages. |
| MAIL_SECURE |  Boolean that true/false SSL support for your SMTP client. |
| MAIL_FROM |  Specify the name that should show up in the recipient's inbox when they receive email from your instance. |

### Pre-commit hooks

- tslint
