# Future-Scope Webv3 App

Building a full web scraping app in Javascript. The app combines data from social media urls & product based code sources as an mpv. The app will require minimum user input pulling in data from a random channel url like Odysee, YouTube, eBay or Amazon sites. #Step 1

Creates a single route (creators) with GET and POST methods to become RESTful. Using NodEjs and Expressjs

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

The app is a to analyise data and the solution consists of five features described below.
However the app requires a front-end solution to connect the user to an API via a form. The user will enter a SM platform url or product based URL, which gets sent through an API to pull data from the SM platforms. The result of which will be inserted into a database, then later served to the frontend when the page gets reloaded.

## Features

- links a form to an API and triggers an event listener submit button on front end
- on serving data back to the front end, the following will occur.

- **InformationStorage:**
- will attempt to retrieve meta data & price info a web source, storing data in a local database every 5 minutes. In development..e.g <https://featurescopev4.com/get/v4.0>

- **DataFormatingRange:**
- will adjoining platform to filter out specific range over time. In development....e.g <https://featurescopev4.com/posts?tags=javascript> This endpoint will fetch any post that has a tag of JavaScript.

- **DataVisualisation**
- will attempt to visualize the data in a meaningful way. In development....

- **ConnectionProcess**
- will report on connectivity and find errors with a tracked platform. In development....

- **AlertFluctuations**
- will supply a modal/portal for alerts collaboration and quick visualization. In development....

I will endeavour to document my work and thought-process, through commits, comments or a log in a .txt file or README.md file.

## Logs

- [npm install -g npm] - to download the latest version of npm, on the command line
- Keeping JS & CSS styling & html together in index.html
- created a new file index.js and added example code there within a server folder and cd.. into the server directory.
- [npm init -y] - to start installing dependancies.
- [npm i express] - used this command to install express.js
- [npm i body-parser] - used this command to install body-parser
- [cd server] - changed folder to run and test in node environment
- [node index.js] - to run or restart the server
- [curl <http://localhost:3000/creators>] - used client URL to test serrver data picked up temporarily in the terminal

### Stack

- [node.js]<nodejs.org/en/> - vanilla JS alongside Nodejs as an open source server environment to create the backend.
- [express-API]<expressjs.com/> - used as a backend framework to node.js.
- [puppeteer]<github.com/puppeteer/> - webscrape & captures a timeline trace of your site to help diagnose performance issues.
- [mySQL] - dbase using TypeORM is a TypeScript ORM library that makes it easy to link TypeScript apps up to relational data.

### Issues

## Credits
