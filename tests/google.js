module.exports = {
  'Demo test Google': function (client) {
    client
      .url('http://www.example.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Example Domain')
      .assert.visible('a')
      .click('a')
      .pause(1000)
      .assert.containsText('body', 'Example domains')
      .end();
  }
};