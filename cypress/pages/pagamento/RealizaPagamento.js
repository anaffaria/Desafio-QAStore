class PayPage{

    formaPagamentoComCartaoDeCredito(){
        cy.get('#radio-cartao').check()
    }

    formaPagamentoComMercadoPago(){
        cy.get('#radio-mercadopagov1-18').check()
    }

    formaPagamentoComBoleto(){
        cy.get('#radio-mercadopagov1-520160').check()
    }

    formaDeEnvioEntregarPessoalmente(){
        cy.get('#formaEnvio12015-retirar_pessoalmente').check().wait(2)
    }
    
    preencheDadosCartaoDeCredito(){
        cy.get('#cartao_cartao_numero').type('4876098763121594').wait(1000)
        cy.get('#cartao_cartao_data_expiracao').type('1023').wait(1000)
        cy.get('#cartao_cartao_nome').type('Ana Caroline Fonseca').wait(1000)
        cy.get('#cartao_cartao_cvv').type('193').wait(2000)
        cy.get('#cartao_cartao_parcelas').select(1).should('have.value', 1)
    }

    clickEmFinalizarCompra(){
        cy.get('#finalizarCompra').click()
    }
}
export default new PayPage;