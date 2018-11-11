## Test e2e

This repository was created to help in this guide:

[Automation with Protractor, PageObject and Cucumber](https://medium.com/@tuliobluz/automa%C3%A7%C3%A3o-com-protractor-pageobject-e-cucumber-122537179ab7)

### Requirement

- [Node.js](https://nodejs.org/en/download/) installed;
- Its need to have the [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/downloads/index.html) installed to run the standalone Selenium Server.

### To set up

- Run ```npm install``` to install dependencies;
- Run ```webdriver-manager update``` to install the helper that download the browsers and instance of Selenium.

### Technologies used

I used the technologies below:

* [Protractor](https://www.protractortest.org/#/): Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would;
* [Page Objects](https://www.protractortest.org/#/page-objects): Page Objects help you write cleaner tests by encapsulating information about the elements on your application page. A Page Object can be reused across multiple tests, and if the template of your application changes, you only need to update the Page Object;
* [CucumberJS](https://github.com/cucumber/cucumber-js): Cucumber is a tool for running automated tests written in plain language. Because they're written in plain language, they can be read by anyone on your team. Because they can be read by anyone, you can use them to help improve communication, collaboration and trust on your team;

### Running tests

- Start the Selenium Server ```webdriver-manage start```

- Run the tests ```protractor protractor.conf.js```

- Just run the tests are done protractor ```protractor protractor.conf.js -- --cucumberOpts.tags='@pending'``` without pending scenarios
