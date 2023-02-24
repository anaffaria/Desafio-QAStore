
class LoginPage{

    fazerLogin(){
        cy.get('.controls > #id_email').type('ana@gmail.com')
        cy.get('#id_senha').type('123456')
        cy.get('.controls > .botao').click()
        cy.get('.btn-group > .botao').contains('Olá, Ana Caroline')
    }

    preencheEmailESenhaEmBranco(){
        cy.get('#id_email').clear()
        cy.get('#id_senha').clear()
        cy.get('.controls > .botao').click()
    }

    preencheEmailEmBranco(){
        cy.get('#id_email').type('Este campo é obrigatório.')
        cy.get('#id_senha').clear();
        cy.get('.controls > .botao').click()
    }

    preencheSenhaEmBranco(){
        cy.get('#id_email').clear()
        cy.get('#id_senha').type('Este campo é obrigatório.')
        cy.get('.controls > .botao').click()
    }

    preencheEmailInvalido(){
        cy.get('#id_email').type('ana&gmail.com')
        cy.get('#id_senha').type('123456')
        cy.get('.controls > .botao').click()
    }

    preencheSenhaInvalida(){
        cy.get('#id_email').type('ana@gmail.com')
        cy.get('#id_senha').type('1234567')
        cy.get('.controls > .botao').click()
    }

    validaCampoObrigatorioEmBranco(){
        cy.get('.errorlist > li').contains('Este campo é obrigatório.')
    }

    validaCampoObrigatorioInvalido(){
        cy.get('.errorlist > li').contains('Digite um endereço de email válido.')
    }

    validaMensagemEmailOuSenhaNaoConferem(){
        cy.get('.alert-danger').contains("Não foi possível entrar pois o email ou senha não conferem. Por favor tente novamente com outro email ou senha.")
    }

}
export default new LoginPage;