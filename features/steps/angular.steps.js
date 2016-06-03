
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

///// Your World /////

// set this.World to your custom world (optional)
module.exports = function() {
	var CustomWorld = function() {};

	CustomWorld.prototype.variable = 0;

	CustomWorld.prototype.setTo = function(number) {
	  this.variable = parseInt(number);
	};

	CustomWorld.prototype.incrementBy = function(number) {
	  this.variable += parseInt(number);
	};

	this.World = CustomWorld;

	///// Your step definitions /////

	// use this.Given(), this.When() and this.Then() to declare step definitions

	this.Given(/^I am on the angular homepage$/, function(callback) {
       browser.get('https://angularjs.org');
       callback();
	});

	this.When(/^I add a todo with text (.+)$/, function(text, callback) {
	  element(by.model('todoList.todoText')).sendKeys(text);
	  element(by.css('[value="add"]')).click();
	  callback();
	});

	this.Then(/^the list should contain (.+)$/, function(text, callback) {
      var todoList = element.all(by.repeater('todo in todoList.todos'));
      expect(todoList.count()).to.eventually.equal(3);
      expect(todoList.get(2).getText()).to.eventually.equal(text);

      // You wrote your first test, cross it off the list
      todoList.get(2).element(by.css('input')).click();
      var completedAmount = element.all(by.css('.done-true'));
      expect(completedAmount.count()).to.eventually.equal(2).and.notify(callback);
	});
}
