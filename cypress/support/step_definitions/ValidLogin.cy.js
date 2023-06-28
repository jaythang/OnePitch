
import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";


  
  const adminUsername = Cypress.env('ADMIN_USERNAME') || "jered.martin@icloud.com";
  const adminPassword = Cypress.env('ADMIN_PASSWORD') || "MR54321!";





  Given("that I Login to One Pitch Site", () => {
    cy.visit('https://onepitch.co/');
    cy.get('.ml-lg-3').click();
    cy.url().should('contain', 'https://onepitch.co/login');
  });
  
  When("I Enter my Username", () => {
    cy.get('#username').click().type(adminUsername);
  });
  
  When("I Enter my Password", () => {
    cy.get('#password').click().type(adminPassword);
  });
  
  When("I click on SignIn", () => {
    cy.get('.btn-warning').click();
  });
  
  Then("I should be redirected to the Dashboard", () => {
    cy.url().should('include', '/profile');
    cy.wait(3000);
  });