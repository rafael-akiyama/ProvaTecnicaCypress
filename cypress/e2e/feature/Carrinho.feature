# language: pt

Funcionalidade: Comprar o primeiro produto
  Como um usuário
  Eu quero adicionar o primeiro produto ao carrinho de compras
  Para que eu possa efetuar a compra com sucesso

  
  Cenário: Adicionar Primeiro Produto ao Carrinho
    Dado que estou na página de produtos
    Quando clico no botão "Adicionar ao Carrinho" do primeiro produto
    E clico no botão "Carrinho"
    Então valido que o primeiro produto foi adicionado ao carrinho com sucesso