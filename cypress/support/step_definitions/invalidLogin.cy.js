import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";


  When('I Enter Incorrect Password', () => {
    cy.get('#password').type('Password!');
  });
  
  Then('it should show me an Error', () => {
    cy.url().should('eq', 'https://onepitch.co/login');
    cy.contains('Wrong password');
  });


