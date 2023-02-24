import { faker } from '@faker-js/faker';

class SignupPage {

    constructor(){

        this.emailAleatorio = faker.internet.email(),
        this.senhaAleatoria = faker.internet.password()
        
    }


    vaParaMinhaConta() {
        cy.contains('Minha Conta').click()
    }

    vaParaFormularioDeCadastroComSucesso() {
        cy.get('fieldset > div > #id_email').type(this.emailAleatorio)
        cy.get('fieldset > div > .botao').click()
        cy.contains('Faça o seu login ou crie uma conta caso ainda não possua cadastro')

    }

    vaParaFormularioDeCadastro() {
        cy.get('fieldset > div > #id_email').type("userteste@gmail.com")
        cy.get('fieldset > div > .botao').click()
        cy.contains('Faça o seu login ou crie uma conta caso ainda não possua cadastro')

    }

    preencherFormulario(){
        cy.get('#id_confirmacao_email').type(this.emailAleatorio.toLocaleLowerCase())
        cy.get('#id_senha').type(this.senhaAleatoria)
        cy.get('#id_confirmacao_senha').type(this.senhaAleatoria)
        cy.get('input[value="PF"]').check()
        cy.get('#id_nome').type('Antonio Fernandes')
        cy.get('#id_cpf').type('54409483927')
        cy.get('#id_telefone_celular').type('11986579635')
        cy.get('#id_cep').type('08820350').wait(1000)
        cy.get('#id_numero').type('85')
    }
    
    naoPreencherFormulario(){
        cy.get('#id_email').type(this.emailAleatorio.toLocaleLowerCase()).clear()
        cy.get('#id_confirmacao_email').clear()
        cy.get('#id_senha').clear()
        cy.get('#id_confirmacao_senha').clear()
        cy.get('input[value="PF"]').check()
        cy.get('#id_nome').clear()
        cy.get('#id_cpf').clear()
        cy.get('#id_telefone_celular').clear()
        cy.get('#id_cep').clear()
        cy.get('#id_numero').clear()
    }

    emailEmUso(){
        cy.get('#id_email').clear().type('aninha@gmail')
        cy.get('#id_confirmacao_email').type('aninha@gmail')
        cy.get('#id_senha').type(this.senhaAleatoria)
        cy.get('#id_confirmacao_senha').type(this.senhaAleatoria)
        cy.get('input[value="PF"]').check()
        cy.get('#id_nome').type('Ana Caroline')
        cy.get('#id_cpf').type('54409483927')
        cy.get('#id_telefone_celular').type('11986579635')
        cy.get('#id_cep').type('08820350').wait(1000)
        cy.get('#id_numero').type('85')
    }

    submeterFormulario(){
       cy.get('button[type="submit"]').click() 
    }

    validaMensagemDeUsuarioCriadoComSucesso() {
        cy.get('.alert').contains('Cliente criado com sucesso.')
    }

    validaErroAoSubmeterFormularioVazio(){
        cy.get('.control-group ').should('have.class', 'required erro error')
    }

    validaErroAoSubmeterFormularioComEmailInvalido(){
        cy.get('.controls > .help-block > .errorlist > li').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(2) > .help-block > .errorlist > li').should('be.visible')
    }
}

export default new SignupPage