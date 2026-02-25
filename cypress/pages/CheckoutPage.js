import { ELEMENTS as el } from "./Elements"
import { CHECKOUT_DATA } from "../support/constants"

class CheckoutPage{

  preencherDadosObrigatorios() {
    cy.get(el.campoNome).type(CHECKOUT_DATA.VALID_CHECKOUT.nome)
    cy.get(el.campoSobrenome).type(CHECKOUT_DATA.VALID_CHECKOUT.sobrenome)
    cy.get(el.campoEndereco).type(CHECKOUT_DATA.VALID_CHECKOUT.endereco) 
    cy.get(el.campoNumero).type(CHECKOUT_DATA.VALID_CHECKOUT.numero)
    cy.get(el.campoCEP).type(CHECKOUT_DATA.VALID_CHECKOUT.cep)
    cy.get(el.campoEmail).type(CHECKOUT_DATA.VALID_CHECKOUT.email)
    cy.get(el.pagamentoPix).click()
    cy.get(el.checkTermos).check()    
  }

  clicarFinalizarPedido() {
    cy.get(el.botaoFinalizarPedido).click()
  }

}

export default CheckoutPage