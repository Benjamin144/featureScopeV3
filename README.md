# Future-Scope Webv3 App

Building a full web scraping app in Javascript. The app combines data from social media urls & product based code sources as an mpv. The app will require minimum user input pulling in data from a random channel url like Odysee, YT, eBay or Amazon websites.

## Contents

- [Content guide](https://github.com/Benjamin144/featureScopeV3/blob/main/README.md#contents)
- [Project Structure](https://github.com/Benjamin144/featureScopeV3/blob/main/README.md#structure)
- [App Features](https://github.com/Benjamin144/featureScopeV3/blob/main/README.md#features)
  - [Features 1 - Recieve price information/storage & time iteration](https://github.com/Benjamin144/feature-scope/blob/main/README.md#features)
  - [Features 2 - Data formatting range over time](https://github.com/Benjamin144/featureScopeV3/blob/main/README.md#features)
  - [Features 3 - Data visualisation over time](https://github.com/Benjamin144/featureScopeV3/blob/main/README.md#features)
  - [Features 4 - Connection issues & process reporting](https://github.com/Benjamin144/featureScopeV3/blob/main/README.md#features)
  - [Features 5 - Alert fluctuuation solution](https://github.com/Benjamin144/featureScopeV3/blob/main/README.md#features)

- [Logs](https://github.com/Benjamin144/featureScopeV3/blob/main/README.md#logs)
- [Stack](https://github.com/Benjamin144/featureScopeV3/blob/main/README.md#stack)
- [Issues](https://github.com/Benjamin144/featureScopeV3/blob/main/README.md#issues)

## Structure

The app is a to analyise data and the solution consists of five tasks.

## Features

- **FrontEndAPI & InformationStorage:**
Requires a front-end solution to connect the user to an API via a form. The user will enter a SM platform url or product based URL, which gets sent through an API to pull data from the SM platforms. The result of which will be inserted into a database, then later served to the frontend when the page gets reloaded. - In development....
- **DataFormatingRange:**
Adjoining platform to filter out specific range over time. In development....

- **DataVisualisation**
A visualisation system to provide a visualization of datasets. In development....

- **ConnectionProcess**
Crash reports and find errors with a tracked platform. In development....

- **AlertFluctuations**
View portal for alerts collaboration and quick visualization. In development....

I will document my work and thought-process, through commits, comments or a log in a .txt file or README.md file.

## Logs

- [npm install -g npm] - to download the latest version of npm, on the command line
- [npm i express] - used this command inmy terminal window to install express.js

### Stack

- [node.js]<nodejs.org/en/> - vanilla JS alongside Nodejs as an open source server environment to create the backend.
- [express-API]<expressjs.com/> - used as a backend framework to node.js.
- [puppeteer]<github.com/puppeteer/> - webscrape & captures a timeline trace of your site to help diagnose performance issues.
- [mySQL] - dbase using TypeORM is a TypeScript ORM library that makes it easy to link TypeScript apps up to relational data.

### Issues
