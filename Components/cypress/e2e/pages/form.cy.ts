/// <reference types="cypress" />

describe('Form page', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('successfully loads form page', () => {
    cy.get('[data-cy="header__nav"] > a').should(($link) => {
      expect($link[2]).to.contain('Form');
      const className = $link[2].className;

      expect(className).to.include('active');
    });

    cy.get('h2').should('include.text', 'Form Page');
  });

  it('should submit the form if inputs are valid', () => {
    const category = 'Sweaters';
    const collection = '2023-04-09';
    const title = 'pants';
    const price = '123';
    const description = 'Very good pants';

    cy.get('[data-cy="title"]').type(title);
    cy.get('[data-cy="collection"]').type(collection);
    cy.get('[data-cy="category"]').select(category);
    cy.get('[data-cy="price"]').type(price);
    cy.get('[data-cy="description"]').type(description);
    cy.get('[data-cy="favorite"]').click();
    cy.get('[data-cy="stock"]').click();
    cy.get('[data-cy="file"]').selectFile({
      fileName: 'img.png',
      contents: Cypress.Buffer.from('foo'),
    });

    cy.get('[data-cy="submit"]').click();

    cy.get('[data-cy="title"]').should('not.have.value');
    cy.get('[data-cy="collection"]').should('not.have.value');
    cy.get('[data-cy="category"] option:selected').should('include.text', 'Select category');
    cy.get('[data-cy="price"]').should('not.have.value');
    cy.get('[data-cy="description"]').should('not.have.value');
    cy.get('[data-cy="favorite"]').should('not.be.checked');
    cy.get('[data-cy="stock"]').should('not.be.checked');
    cy.get('[data-cy="file"]').should('not.have.value');

    cy.get('[data-testid="form-item"]').within(() => {
      cy.contains(title).should('be.visible');
      cy.contains('Category').should('include.text', category);
      cy.get('.product__desc').should('include.text', description);
      cy.get('.product__new-price').should('include.text', price);
    });
  });

  it('should show errors if an empty form is submitted', () => {
    cy.get('[data-cy="submit"]').click();

    cy.contains('Select a category').should('be.visible');
    cy.contains('This field cannot be empty').should('be.visible');
    cy.contains('Enter brand name').should('be.visible');
    cy.contains('Enter product price').should('be.visible');
    cy.contains('Enter product description').should('be.visible');
    cy.contains('Choose one option').should('be.visible');
    cy.contains('No file chosen').should('be.visible');
  });
});
