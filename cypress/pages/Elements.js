export const ELEMENTS = {

  // Elementos da Home e Produto //
  site: "http://localhost:3000/",
  produto1: "[data-id='1']",
  adicionadoCarrinho: "[id='alert-container']",
  botaoCarrinho: "a[href='/cart.html']",

  // Elementos do Carrinho //
  carrinhoPage: "http://localhost:3000/cart.html",
  botaoCheckout: ".btn.btn-primary",
  confirmacaoProduto1: "div.cart-item legend",
  botaoRemoverProduto: ".btn.btn-danger.remove-from-cart",

  // Elementos Checkout //
  checkoutPage: "http://localhost:3000/checkout.html",
  campoNome: "[id='first-name']",
  campoSobrenome: "[id='last-name']",
  campoEndereco: "[id='address']",
  campoNumero: "[id='number']",
  campoCEP: "[id='cep']",
  campoEmail: "[id='email']",
  pagamentoPix: "[id='payment-pix']",
  checkTermos: "[id='terms']",
  botaoFinalizarPedido: ".btn.btn-primary",
  mensagemErroCamposObrigatorios: "[id='alert-container']",

  // Elementos Status do Pedido //
  statusPage: "http://localhost:3000/status.html",
  statusPedido: "[id='order-status']"
}