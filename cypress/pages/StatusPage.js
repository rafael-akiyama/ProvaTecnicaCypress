import { ELEMENTS as el } from "./Elements";

class StatusPage{

  validarStatusPedido() {
    cy.get(el.statusPedido).should('contain', 'Pagamento aprovado');
}

}

export default StatusPage