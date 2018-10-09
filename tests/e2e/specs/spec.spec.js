let specPage = require('../pages/spec.po.js');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1200);

Before(function(){
    specPage.init();
})

// Given('The user go to {string}', function (string) {
//     specPage.get(string);
// });

When('I add {string} in the name field', async function (string) {
    await specPage.setName(string);
});

Then('I should see Hello with the username', async function () {
    await expect(specPage.getGreetingText())
        .to.eventually.equal('Hello Tulios!')
});