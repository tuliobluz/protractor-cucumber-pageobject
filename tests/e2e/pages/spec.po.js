let SpecPage = function () {
  let nameInput = element(by.model('yourName')),
    greeting = element(by.binding('yourName'));

  this.get = function (string) {
    browser.get(string);
  };
  this.setName = function (name) {
    nameInput.sendKeys(name);
  };
  this.getGreetingText = function () {
    return greeting.getText();
  };
};
module.exports = new SpecPage();