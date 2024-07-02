export class Category {
  elements = {
    categoryWomen: () => cy.get('ul li a[href="/mujer"]'),
  };
  selectCategory () {
    this.elements.categoryWomen().should('be.visible').click()
  }
}
