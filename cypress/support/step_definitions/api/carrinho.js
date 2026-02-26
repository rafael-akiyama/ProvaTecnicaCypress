import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CarrinhoApi from '../../../pages/api/carrinhoApi';

const carrinhoApi = new CarrinhoApi();

When("envio um POST para adicionar produto no carrinho", () => {
  carrinhoApi.adicionarProdutoNoCarrinho();
});

Then("o status code deve ser {int} ou {int}", (status1, status2) => {
  carrinhoApi.statusCodeDeveSer(status1, status2);
});

Then("a resposta deve conter a mensagem {string}", (msg) => {
  carrinhoApi.respostaDeveConterMensagem(msg);
});

Then("a resposta deve conter informações do produto que foi adicionado ao carrinho", function () {
  const response = carrinhoApi.getResponse();
  if (!response) {
    throw new Error("A variável response não foi inicializada.");
  }
  expect(response.body).to.have.property("productId");
  expect(response.body).to.have.property("name");
  expect(response.body).to.have.property("price");
  expect(response.body).to.have.property("quantity");
});

Given("que um produto foi adicionado ao carrinho", () => {
  carrinhoApi.adicionarProdutoNoCarrinho();
});

When("envio um GET para listar os itens do carrinho", () => {
  carrinhoApi.listarProdutoNoCarrinho();
});

Then("o status code deve ser {int}", (status) => {
  carrinhoApi.statusCodeDeveSer(status);
});

Then("a resposta deve conter o campo {string}", (campo) => {
  carrinhoApi.respostaDeveConterCampo(campo);
});