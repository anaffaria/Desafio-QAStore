/// <reference types="Cypress" />
import RealizaCadastro from "../pages/cadastro/RealizaCadastro"


describe('Cadastrar um novo usuário', function () {

    beforeEach(function () {
        cy.visit('https://qastoredesafio.lojaintegrada.com.br/')
    })

    it('Cadastra um novo usuário com sucesso', function () {

        RealizaCadastro.vaParaMinhaConta();
        RealizaCadastro.vaParaFormularioDeCadastroComSucesso();
        RealizaCadastro.preencherFormulario();
        RealizaCadastro.submeterFormulario();
        RealizaCadastro.validaMensagemDeUsuarioCriadoComSucesso();

    })

    it('Não realizar cadastro com dados do formulário em branco', function () {

        RealizaCadastro.vaParaMinhaConta();
        RealizaCadastro.vaParaFormularioDeCadastro();
        RealizaCadastro.naoPreencherFormulario();
        RealizaCadastro.submeterFormulario();
        RealizaCadastro.validaErroAoSubmeterFormularioVazio();

    })

    it('Não realizar cadastro com email existente', function(){

        RealizaCadastro.vaParaMinhaConta();
        RealizaCadastro.vaParaFormularioDeCadastro();
        RealizaCadastro.emailEmUso();
        RealizaCadastro.submeterFormulario();
        RealizaCadastro.validaErroAoSubmeterFormularioComEmailInvalido();
        
    })

})


