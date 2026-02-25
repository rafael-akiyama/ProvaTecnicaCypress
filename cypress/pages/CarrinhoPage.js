import { ELEMENTS as el } from "./Elements"

class PageCarrinho{

  clicarCheckout() {
    cy.get(el.botaoCheckout).click()
  }

}

export default PageCarrinho