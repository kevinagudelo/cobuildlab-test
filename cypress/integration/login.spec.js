/// <reference types="cypress" />


describe('Test Login Auth0', () => {

    it('logging in with a registered user',()=> {
        cy.visit('http://localhost:3001/');
        cy.get("#LoginBtn").click();
        cy.get('#username').type(Cypress.env("EMAIL"));
        cy.get("input[type='password']").type(Cypress.env("PASSWORD"));
        cy.get("button[value='default']").click()
    })

})