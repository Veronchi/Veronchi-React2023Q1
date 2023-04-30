/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successfully loads home page', () => {
    cy.get('[data-cy="header__nav"] > a').should(($link) => {
      expect($link.first()).to.contain('Home');
      const className = $link[0].className;

      expect(className).to.include('active');
    });
    cy.get('[data-cy="search__input"]').should('have.value', '');
  });

  it('should have cards', () => {
    cy.get('[data-testid="products-list"] .card').its('length').should('be.gt', 0);
  });

  it('should have "Not found" text if value incorrect', () => {
    cy.get('input').type('some incorrect value{enter}');
    cy.get('h3').should('include.text', 'Nothing found');
  });

  it('should find an existing character', () => {
    cy.get('input').type('rick{enter}');
    cy.get('[data-testid="products-list"] .card').its('length').should('be.gt', 0);
    cy.contains('Rick Sanchez').click();
    cy.contains('gender: Male').should('be.visible');
  });
});
