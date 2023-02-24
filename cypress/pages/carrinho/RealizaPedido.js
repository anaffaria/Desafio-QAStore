class CheckoutPage {

    vaParaProdutoCategoriaNivelUm(){
        cy.get('[href="https://qastoredesafio.lojaintegrada.com.br/categoria/15610605.html"] > .titulo').click();
    }

    vaParaProdutoCategoriaNivelDois(){
        cy.get('[href="https://qastoredesafio.lojaintegrada.com.br/categoria/15610606.html"]').click({force:true})
    }

    vaParaProdutoCategoriaNivelTres(){
        cy.get('[href="https://qastoredesafio.lojaintegrada.com.br/categoria/15610607.html"]').click({force:true})
    }

    
    escolhaProdutoDaLista(){
        cy.get(':nth-child(1) > .listagem-item > .produto-sobrepor').click()
    }

    clicarEmComprar(){
        cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    }

    alterarQuantidadeProduto(){
        cy.get('.input-mini').clear().type('1000');
        cy.get('.quantidade > .botao').should('be.visible').click()
        
    }

    quantidadeProduto249(){
        cy.get('.input-mini').clear().type('249');
        cy.get('.quantidade > .botao').should('be.visible').click()
        
    }

    quantidadeProduto250(){
        cy.get('.input-mini').clear().type('250');
        cy.get('.quantidade > .botao').should('be.visible').click()
    }

    validaValorDoProdutoNivelUm(){
        cy.get('.total > .titulo').should('have.text', 'R$ 80.000,00').wait(1000)
    }

    validaValorDoProdutoNivelDois(){
        cy.get('.total > .titulo').should('have.text', 'R$ 60.000,00').wait(1000)
    }

    validaValorDoProdutoNivelTres(){
        cy.get('.total > .titulo').should('have.text', 'R$ 128.000,00').wait(1000)
    }

    validaBotaoCompraDesativado(){
        cy.get('.span12 > .principal').should('have.class', 'botao principal grande desativo')
    }

    validaBotaoCompraAtivado(){
        cy.get('.span12 > .principal').should('have.class', 'botao principal grande')
    }

    clickEmFinalizarCompra(){
        cy.contains('Finalizar compra').click();
    }

}

export default new CheckoutPage;