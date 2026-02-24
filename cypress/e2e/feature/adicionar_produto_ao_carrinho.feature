# language: pt

Funcionalidade: Adicionar Produto ao Carrinho
  Como um usuário
  Eu quero adicionar um produto ao carrinho
  Para que eu possa comprá-lo posteriormente

  Cenário: Adicionar um produto ao carrinho com sucesso
    Dado que estou na página de produto
    Quando eu clicar no botão "Adicionar ao Carrinho"
    Então aparece uma mensagem de confirmação "Produto adicionado ao carrinho!"
    E o produto deve ser exibido no carrinho, com as informações corretas