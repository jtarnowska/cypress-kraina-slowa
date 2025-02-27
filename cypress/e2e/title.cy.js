describe('Test of the title of the page Kraina Slowa', () => {
  it('Check that title is correct', () => {
    // Open the page
    cy.visit('https://krainaslowa.com/');
    // Check the title of the page
    cy.get('title').contains(
      'Odkryj Słowa, które Zmienią Twój Dzień | Cytaty i Sentencje | Kraina Słowa',
    );
  });
});
