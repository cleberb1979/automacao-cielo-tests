/// <reference types="cypress" />

describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('https://www.cielo.com.br/')
    cy.get('#lgpd-banner-accept-all').click()
    
})

it('should click on button Saiba Mais', () => {
  
  cy.get('.client-installment-text > .button').click()
  cy.injectAxe()
  cy.checkA11y();
})
});