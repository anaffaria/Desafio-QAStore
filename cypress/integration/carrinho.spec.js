import RealizaCadastro from "../pages/cadastro/RealizaCadastro"
import RealizaPedido from "../pages/carrinho/RealizaPedido"
import RealizaLogin from "../pages/login/RealizaLogin"
import RealizaPagamento from "../pages/pagamento/RealizaPagamento"

describe('Valida Valor Limite para realizar compra', function(){

    beforeEach(function () {
        cy.visit('https://qastoredesafio.lojaintegrada.com.br/')
        RealizaCadastro.vaParaMinhaConta();
        RealizaLogin.fazerLogin();
    })
    
    it('Não permite a compra de produto com valor inferior a 20.000,00', function(){
        RealizaPedido.vaParaProdutoCategoriaNivelUm();
        RealizaPedido.escolhaProdutoDaLista();
        RealizaPedido.clicarEmComprar();
        RealizaPedido.quantidadeProduto249();
        RealizaPedido.validaBotaoCompraDesativado();

    })

    it('Permite a compra de produto com valor igual a 20.000,00', function(){
        RealizaPedido.vaParaProdutoCategoriaNivelUm();
        RealizaPedido.escolhaProdutoDaLista();
        RealizaPedido.clicarEmComprar();
        RealizaPedido.quantidadeProduto250();
        RealizaPedido.validaBotaoCompraAtivado();
    })
})

describe('Realizar compra', function(){

    beforeEach(function () {
        cy.visit('https://qastoredesafio.lojaintegrada.com.br/')
        RealizaCadastro.vaParaMinhaConta();
        RealizaLogin.fazerLogin();
    })

    it('Realiza compra de produto nivel 1 utilizando cartao de credito sem cupom', function(){
        RealizaPedido.vaParaProdutoCategoriaNivelUm();
        RealizaPedido.escolhaProdutoDaLista();
        RealizaPedido.clicarEmComprar();
        RealizaPedido.alterarQuantidadeProduto();
        RealizaPedido.validaValorDoProdutoNivelUm();
        RealizaPedido.clickEmFinalizarCompra();
        RealizaPagamento.formaPagamentoComCartaoDeCredito();
        RealizaPagamento.preencheDadosCartaoDeCredito();
        RealizaPagamento.clickEmFinalizarCompra();
    })

    it('Realiza compra de produto nivel 1 utilizando mercado pago sem cupom', function(){
        RealizaPedido.vaParaProdutoCategoriaNivelUm();
        RealizaPedido.escolhaProdutoDaLista();
        RealizaPedido.clicarEmComprar();
        RealizaPedido.alterarQuantidadeProduto();
        RealizaPedido.validaValorDoProdutoNivelUm();
        RealizaPedido.clickEmFinalizarCompra();
        RealizaPagamento.formaPagamentoComMercadoPago();
        RealizaPagamento.clickEmFinalizarCompra();
    })

    it('Realiza compra de produto nivel 1 utilizando boleto sem cupom', function(){
        RealizaPedido.vaParaProdutoCategoriaNivelUm();
        RealizaPedido.escolhaProdutoDaLista();
        RealizaPedido.clicarEmComprar();
        RealizaPedido.alterarQuantidadeProduto();
        RealizaPedido.validaValorDoProdutoNivelUm();
        RealizaPedido.clickEmFinalizarCompra();
        RealizaPagamento.formaDeEnvioEntregarPessoalmente();
        RealizaPagamento.formaPagamentoComBoleto();
        RealizaPagamento.clickEmFinalizarCompra();
    })

    it('Realiza compra de produto nivel 2 utilizando cartao de credito', function(){
        RealizaPedido.vaParaProdutoCategoriaNivelDois();
        RealizaPedido.escolhaProdutoDaLista();
        RealizaPedido.clicarEmComprar();
        RealizaPedido.alterarQuantidadeProduto();
        RealizaPedido.validaValorDoProdutoNivelDois();
        RealizaPedido.clickEmFinalizarCompra();
        RealizaPagamento.formaDeEnvioEntregarPessoalmente();
        RealizaPagamento.formaPagamentoComCartaoDeCredito();
        RealizaPagamento.preencheDadosCartaoDeCredito();
        RealizaPagamento.clickEmFinalizarCompra();
    })

    it('Realiza compra de produto nivel 2 utilizando mercado pago', function(){
        RealizaPedido.vaParaProdutoCategoriaNivelDois();
        RealizaPedido.escolhaProdutoDaLista();
        RealizaPedido.clicarEmComprar();
        RealizaPedido.alterarQuantidadeProduto();
        RealizaPedido.validaValorDoProdutoNivelDois();
        RealizaPedido.clickEmFinalizarCompra();
        RealizaPagamento.formaDeEnvioEntregarPessoalmente();
        RealizaPagamento.formaPagamentoComMercadoPago();
        RealizaPagamento.clickEmFinalizarCompra();
    })

    it('Realiza compra de produto nivel 2 utilizando boleto', function(){
        RealizaPedido.vaParaProdutoCategoriaNivelDois();
        RealizaPedido.escolhaProdutoDaLista();
        RealizaPedido.clicarEmComprar();
        RealizaPedido.alterarQuantidadeProduto();
        RealizaPedido.validaValorDoProdutoNivelDois();
        RealizaPedido.clickEmFinalizarCompra();
        RealizaPagamento.formaDeEnvioEntregarPessoalmente();
        RealizaPagamento.formaPagamentoComBoleto();
        RealizaPagamento.clickEmFinalizarCompra();
    })

    it('Realiza compra de produto nivel 3 cartao de credito', function(){
        RealizaPedido.vaParaProdutoCategoriaNivelTres();
        RealizaPedido.escolhaProdutoDaLista();
        RealizaPedido.clicarEmComprar();
        RealizaPedido.alterarQuantidadeProduto();
        RealizaPedido.clickEmFinalizarCompra();
        RealizaPagamento.formaDeEnvioEntregarPessoalmente();
        RealizaPagamento.formaPagamentoComCartaoDeCredito();
        RealizaPagamento.preencheDadosCartaoDeCredito();
        RealizaPagamento.clickEmFinalizarCompra();
    })

    it('Realiza compra de produto nivel 3 mercado pago', function(){
        RealizaPedido.vaParaProdutoCategoriaNivelTres();
        RealizaPedido.escolhaProdutoDaLista();
        RealizaPedido.clicarEmComprar();
        RealizaPedido.alterarQuantidadeProduto();
        RealizaPedido.clickEmFinalizarCompra();
        RealizaPagamento.formaDeEnvioEntregarPessoalmente();
        RealizaPagamento.formaPagamentoComMercadoPago();
        RealizaPagamento.clickEmFinalizarCompra();
    })

    it('Realiza compra de produto nivel 3 utilizando boleto', function(){
        RealizaPedido.vaParaProdutoCategoriaNivelTres();
        RealizaPedido.escolhaProdutoDaLista();
        RealizaPedido.clicarEmComprar();
        RealizaPedido.alterarQuantidadeProduto();
        RealizaPedido.clickEmFinalizarCompra();
        RealizaPagamento.formaDeEnvioEntregarPessoalmente();
        RealizaPagamento.formaPagamentoComBoleto();
        RealizaPagamento.clickEmFinalizarCompra();
    })
})