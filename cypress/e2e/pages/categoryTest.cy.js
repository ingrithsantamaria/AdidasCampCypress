import { Category } from "../components/category";
const category = new Category();
describe("template spec", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit('https://www.adidas.co/', {
      headers: {
        "Accept-Language": "en-US",
        "Referer": "https://google.com",
      },
    });
  });
  it("User should selects one category", () => {
    category.selectCategory()
  })
});
