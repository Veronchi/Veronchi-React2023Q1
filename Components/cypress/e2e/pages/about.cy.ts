/// <reference types="cypress" />

describe('About page', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('successfully loads about page', () => {
    cy.get('[data-cy="header__nav"] > a').should(($link) => {
      expect($link[1]).to.contain('About');
      const className = $link[1].className;

      expect(className).to.include('active');
    });

    cy.get('h1').should('include.text', 'About us');
  });
});
