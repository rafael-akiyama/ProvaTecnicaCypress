# language: pt

Funcionalidade: Carrinho

  @apitag1
  Cenário: Adicionar produto ao carrinho com sucesso
    Quando envio um POST para adicionar produto no carrinho
    Então o status code deve ser 200 ou 201
    E a resposta deve conter a mensagem "Produto adicionado ao carrinho com sucesso."

  @apitag2
  Cenário: Listar itens do carrinho
    Dado que um produto foi adicionado ao carrinho
    Quando envio um GET para listar os itens do carrinho
    Então o status code deve ser 200
    E a resposta deve conter o campo "name"