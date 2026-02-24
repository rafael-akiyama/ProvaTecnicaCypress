# language: pt

Funcionalidade: Validação de Campos Obrigatórios
  Como um usuário
  Eu quero ser notificado sobre campos obrigatórios
  Para que eu possa corrigir os erros e concluir minha compra

  Cenário: Exibir mensagens de erro para campos obrigatórios não preenchidos
    Dado que estou na página de checkout
    E não preenchi todos os campos obrigatórios
    Quando eu clicar no botão "Finalizar Pedido"
    Então devo ser apresentado a mensagens de erro "Por favor, preencha todos os campos obrigatório marcados com asteriscos!"