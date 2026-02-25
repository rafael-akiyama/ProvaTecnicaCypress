# language: pt

Funcionalidade: Comprar o primeiro produto
  Como um usuário
  Eu quero adicionar o primeiro produto ao carrinho de compras
  Para que eu possa efetuar a compra com sucesso
  
  @tag1
  Cenário: Adicionar Primeiro Produto ao Carrinho
    Dado que estou na página de produtos
    Quando clico no botão "Adicionar ao Carrinho" do primeiro produto
    E clico no botão "Carrinho"
    Então valido que o primeiro produto foi adicionado ao carrinho com sucesso

  @tag2
  Cenário: Finalizar o checkout com sucesso
    Dado que estou na página do carrinho com o primeiro produto adicionado ao carrinho
    E clico no botão "Ir para o Checkout"
    E acesso a página de checkout
    Quando preencho os campos obrigatórios
    E clico no botão "Finalizar Pedido"
    Então devo ser direcionado para a página do status do pedido, com a informação "Pagamento aprovado"

  #@tag3
  #Cenário: Exibir mensagens de erro para campos obrigatórios não preenchidos
  #  Dado que estou na página de checkout
  #  E não preenchi todos os campos obrigatórios
  #  Quando eu clicar no botão "Finalizar Pedido"
  #  Então devo ser apresentado a mensagens de erro "Por favor, preencha todos os campos obrigatório marcados com asteriscos!"