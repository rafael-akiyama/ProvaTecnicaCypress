import { ELEMENTS as el } from "./Elements";

class ProdutoPage{

  visit() {
    cy.visit(el.site)
  }

  clicarPrimeiroProduto() {
    cy.get(el.produto1).click()
  }

  clicarCarrinho() {
    cy.get(el.botaoCarrinho).click()
  }

  validarPrimeiroProdutoNoCarrinho() {
    cy.get(el.confirmacaoProduto1).should('contain', 'Moletom com capuz "Se você acha que nada é impossível..."');
}

}

export default ProdutoPage