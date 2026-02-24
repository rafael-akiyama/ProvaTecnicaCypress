# language: pt

Funcionalidade: Checkout Simples
  Como um usuário
  Eu quero finalizar o checkout
  Para que eu possa concluir minha compra

  Cenário: Finalizar o checkout com sucesso
    Dado que estou na página de checkout
    E preenchi todos os campos obrigatórios
    E escolhi um método de pagamento
    Quando eu clicar no botão "Finalizar Compra"
    Então devo ver direcionado para a página do status do pedido, com a informação "Pagamento aprovado"