import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProdutoPage from '../../pages/ProdutoPage';
import CarrinhoPage from '../../pages/CarrinhoPage';
import CheckoutPage from "../../pages/CheckoutPage";
import StatusPage from "../../pages/StatusPage";

const produtoPage = new ProdutoPage();
const carrinhoPage = new CarrinhoPage();
const checkoutPage = new CheckoutPage();
const statusPage = new StatusPage();

Given('que estou na página de produtos', () => {
  produtoPage.visit();
  cy.screenshot('1.1-Dado que estou na página de produtos');
});

When('clico no botão "Adicionar ao Carrinho" do primeiro produto', () => {
  produtoPage.clicarPrimeiroProduto();
  cy.screenshot('1.2-Quando clico no botão "Adicionar ao Carrinho" do primeiro produto');
});

When('clico no botão "Carrinho"', () => {
  produtoPage.clicarCarrinho();
    cy.screenshot('1.3-E clico no botão "Carrinho"');
});

Then('valido que o primeiro produto foi adicionado ao carrinho com sucesso', () => {
  produtoPage.validarPrimeiroProdutoNoCarrinho();
  cy.screenshot('1.4-Então valido que o primeiro produto foi adicionado ao carrinho com sucesso');
  carrinhoPage.removerProduto();
});

Given('que estou na página do carrinho com o primeiro produto adicionado ao carrinho', () => {
  produtoPage.visit();
  produtoPage.clicarPrimeiroProduto();
  carrinhoPage.visitCarrinho();
  cy.screenshot('2.1-Dado que estou na página do carrinho com o primeiro produto adicionado ao carrinho');
});

Given('clico no botão "Ir para o Checkout"', () => {
  carrinhoPage.clicarCheckout();
  cy.screenshot('2.2-Dado que clico no botão "Ir para o Checkout"');
});

Given('acesso a página de checkout', () => {
  cy.screenshot('2.3-E acesso a página de checkout');
});

When('preencho os campos obrigatórios', () => {
  checkoutPage.preencherDadosObrigatorios();
  cy.screenshot('2.4-Quando preencho os campos obrigatórios');
});

When('clico no botão "Finalizar Pedido"', () => {
  checkoutPage.clicarFinalizarPedido();
  cy.screenshot('2.5-E clico no botão "Finalizar Pedido"');
});

Then('devo ser direcionado para a página do status do pedido, com a informação "Pagamento aprovado"', () => {
  statusPage.validarStatusPedido();
  cy.screenshot('2.6-Então devo ser direcionado para a página do status do pedido, com a informação "Pagamento aprovado"');
});

Given('que estou na página de checkout com produto adicionado ao carrinho', () => {
  produtoPage.visit();
  produtoPage.clicarPrimeiroProduto();
  carrinhoPage.visitCarrinho();
  carrinhoPage.clicarCheckout();
  cy.screenshot('3.1-Dado que estou na página de checkout com o primeiro produto adicionado ao carrinho');
});

Given('não preenchi os campos obrigatórios', () => {
  cy.screenshot('3.2-Dado que não preenchi todos os campos obrigatórios');
});

When('clico em "Finalizar Pedido"', () => {
  checkoutPage.clicarFinalizarPedido();
  cy.screenshot('3.3-Quando eu clicar no botão "Finalizar Pedido"');
});

Then('devo ser apresentado a mensagens de erro "Por favor, preencha todos os campos obrigatório marcados com asteriscos!"', () => {
  checkoutPage.validarMensagemErroCamposObrigatorios();
  cy.screenshot('3.4-Então devo ser apresentado a mensagens de erro "Por favor, preencha todos os campos obrigatório marcados com asteriscos!"');
  carrinhoPage.visitCarrinho();
  carrinhoPage.removerProduto();
});