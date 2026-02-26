let response;

class CarrinhoApi{

adicionarProdutoNoCarrinho() {
  cy.request({
    method: "POST",
    url: `${Cypress.env("apiBaseUrl")}/api/carrinho`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: {
      userId: 1,
      productId: 1,
      quantity: 1,
    },
    failOnStatusCode: false,
  }).then((res) => {
    response = res;
  });
};

statusCodeDeveSer(status1, status2) {
  expect([status1, status2]).to.include(response.status);
};

respostaDeveConterMensagem(msg) {
  expect(response.body).to.have.property("message", msg);
};

listarProdutoNoCarrinho() {
  cy.request({
    method: "GET",
    url: `${Cypress.env("apiBaseUrl")}/api/carrinho/1`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    failOnStatusCode: false,
  }).then((res) => {
    response = res;
  });
};

respostaDeveConterCampo(campo) {
    expect(response.body).to.be.an("array");
    response.body.forEach((item) => {
    expect(item).to.have.property(campo);
  });
  };
};

export default CarrinhoApi;