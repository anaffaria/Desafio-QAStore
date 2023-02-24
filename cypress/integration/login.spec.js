/// <reference types="Cypress" />
import RealizaCadastro from "../pages/cadastro/RealizaCadastro"
import RealizaLogin from "../pages/login/RealizaLogin"

describe('Fazer login com um usuário já cadastrado', function () {
    
    beforeEach(function () {
        cy.visit('https://qastoredesafio.lojaintegrada.com.br/')
    })

    it('Realiza o login de um usuário já cadastrado com sucesso', function () {
        RealizaCadastro.vaParaMinhaConta();
        RealizaLogin.fazerLogin();
    })

    it('Não realiza login com email e senha em branco', function () {
        RealizaCadastro.vaParaMinhaConta();
        RealizaLogin.preencheEmailESenhaEmBranco();
        RealizaLogin.validaCampoObrigatorioEmBranco()
    })

    it('Não realiza login com email em branco', function () {
        RealizaCadastro.vaParaMinhaConta();
        RealizaLogin.preencheEmailEmBranco();
        RealizaLogin.validaCampoObrigatorioEmBranco()
    })

    it('Não realiza login com senha em branco', function () {
        RealizaCadastro.vaParaMinhaConta();
        RealizaLogin.preencheSenhaEmBranco();
        RealizaLogin.validaCampoObrigatorioEmBranco()
    })

    it('Não realiza login com email inválido', function () {
        RealizaCadastro.vaParaMinhaConta();
        RealizaLogin.preencheEmailInvalido();
        RealizaLogin.validaCampoObrigatorioInvalido();  
    })

    it('Não realiza login com senha inválida', function () {
        RealizaCadastro.vaParaMinhaConta();
        RealizaLogin.preencheSenhaInvalida();
        RealizaLogin.validaMensagemEmailOuSenhaNaoConferem();  
    })
    


})