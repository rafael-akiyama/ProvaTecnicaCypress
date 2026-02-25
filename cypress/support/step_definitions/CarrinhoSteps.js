import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProdutoPage from '../../pages/ProdutoPage';

const produtoPage = new ProdutoPage();

Given('que estou na página de produtos', () => {
  produtoPage.visit();
  cy.screenshot('1-Dado que estou na página de produtos');
});

When('clico no botão "Adicionar ao Carrinho" do primeiro produto', () => {
  produtoPage.clicarPrimeiroProduto();
  cy.screenshot('2-Quando clico no botão "Adicionar ao Carrinho" do primeiro produto');
});

When('clico no botão "Carrinho"', () => {
  produtoPage.clicarCarrinho();
    cy.screenshot('3-E clico no botão "Carrinho"');
});

Then('valido que o primeiro produto foi adicionado ao carrinho com sucesso', () => {
  produtoPage.validarPrimeiroProdutoNoCarrinho();
  cy.screenshot('4-Então valido que o primeiro produto foi adicionado ao carrinho com sucesso');
});
