### _This project is not in a complete or portfolio ready state, and should not be considered representiational of professional work._


# Currency Exchanger

#### This is an application that converts USD to other currencies using API calls 

#### By Collin Chapman

## Preview

  * Follow this [path](https://github.com/) to view the project on GitHub Pages

## Technologies Used

* _Babel 7.6.4_
* _Babel/plugin-transform-modules-commonjs 7.6.0_
* _Bootstrap 4.5.0_
* _clean-webpack-plugin 3.0.0_
* _CSS_
* _css-loader 3.2.0_
* _eslint 6.3.0_
* _eslint-loader 3.0.0_
* _file-loader 1.1.6_
* _HTML5_
* _html-loader 0.5.5_
* _html-webpack-plugin 3.2.0_
* _JavaScript ES6_
* _Jest 24.9.0_
* _jQuery 3.5.1_
* _Node Package Manager 6.14.9_
* _popper.js 1.16.1_
* _style-loader 1.0.0_
* _webpack 4.39.3_
* _webpack-cli 3.3.8_
* _webpack-dev-server 3.11.2_
* _dotenv-webpack 2.0.0_

## Description

This project utilizes asynchronous code and API calls to create a currency exchange application. A user should be able to enter an amount (in USD) and then specify another currency to convert to. The user should see the total amount they entered in converted currency. This application allows the user to choose from five different types of currency to convert to. If the API call results in an error or the query repsonse doesn't include the chosen currency, the user should receive a notification with an error message. 

## Setup/Installation Requirements

* _Open the terminal on your local machine_
* _If [Node.js](https://nodejs.org/en/) and [Node Package Manager (npm)](https://www.npmjs.com/) are not installed on your local device, follow the instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js)_
* _Navigate to the directory inside of which you wish to house this project_
* _Clone this project with the following command  `$ git clone <https://github.com/colchapm/currency-exchanger>`_
* _Navigate to the top level of the repository with the command `$ cd currency-exchanger`_
* _Visit the [ExchangeRate-API](https://www.exchangerate-api.com/). Input your email address and click the "Get Free Key" button_
* _You will be prompted to create an account with your email, first name and a password. Agree to the terms os use and click "Get Started!"_
* _Navigate back to the top level of your repository and create a .env file with the command `$ touch .env`_
* _Place your API token in the .env with the sytnax: `API_KEY='your api key here'`_
* _Recreate project environment and install required dependencies with terminal command `$ npm install`_
* _Create production environment with terminal command `$ npm run build`_
* Open project in a development server in the browswer of your choice with the command `$ npm run start`_
* _Lint code with the command `$ npm run lint`_
* _Run tests in Jest with the command `$ npm test`_

## Known Bugs

* _No known bugs at this time_

## License

[MIT](https://choosealicense.com/licenses/mit/)

_Copyright (c) **2021 Collin Chapman**_

## Contact Information

cchap14@gmail.com