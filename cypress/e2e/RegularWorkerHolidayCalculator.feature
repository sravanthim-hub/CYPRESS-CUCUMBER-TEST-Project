Feature: Calcualte Holiday entitlement for regular worker

Background: Start the application
Given I am on calculate holiday entitlement page
And I accept cookies
Then I start the application

Scenario Outline: Calcualte Holiday entitlement based on <number_of_days> days worked per week for full year
Given I am on work type selection page
When I select the work type '<work_type>' and continue
And I select the entitlement type and continue
And I select the holiday year type and continue
And I enter the number of days worked per week '<number_of_days>' 
Then I am on holiday entitlement outcome page
And holidays calculated matches '<expected_holidays>'
Examples:
    | work_type | number_of_days | expected_holidays |
    | regular  | 5 | 28 |