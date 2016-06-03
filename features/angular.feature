Feature: Angular Homepage 
  In order to learn angular
  As a developer
  I want to record my todo list

  @foo
  Scenario: add todo
    Given I am on the angular homepage
    When I add a todo with text 'write first protractor test'
    Then the list should contain 'write first protractor test'

  @bar
  Scenario Outline: add parameterised todo
    Given I am on the angular homepage
    When I add a todo with text <todo>
    Then the list should contain <todo>

    Examples:
      | todo                           |
      | 'write first protractor test'  |
      | 'write second protractor test' |

