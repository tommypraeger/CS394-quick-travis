describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('shows welcome screen', () => {
    cy.visit ('/');
    cy.get('[data-cy=title]').should('contain', 'OneHouse');
  });

  it ('shows sign in button after expanding nav bar', () => {
    cy.visit ('/');
    cy.get('.navbar-burger').click();
    cy.get('[data-cy=sign-in]').should('be.visible');
  });


  it ('opens and closes navbar', () => {
    cy.visit ('/');
    cy.get('.navbar-burger').click();
    cy.get('[data-cy=sign-in]').should('be.visible');
    cy.get('.navbar-burger').click();
    cy.get('[data-cy=sign-in]').should('not.be.visible');
  });
});
