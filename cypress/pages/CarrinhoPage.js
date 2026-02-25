import { ELEMENTS as el } from "./Elements"

class CarrinhoPage{

  visitCarrinho() {
    cy.visit(el.carrinhoPage)
  }
  
  clicarCheckout() {
    cy.get(el.botaoCheckout).click()
  }

  removerProduto() {
    cy.get(el.botaoRemoverProduto).click()
  }

}

export default CarrinhoPage