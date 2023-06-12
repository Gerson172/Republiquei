describe('Home Page', () => {
  it('passes', () => {
    cy.viewport('macbook-16')
    cy.visit('https://www.republiquei.com')
  })
})

describe('Buscar Republica Page', () => {
  it('passes', () => {
    cy.viewport('macbook-16')
    cy.visit('https://www.republiquei.com/buscarRepublica')
  })
})

describe('Cadastrar Usuario Page', () => {
  it('passes', () => {
    cy.viewport('macbook-16')
    cy.visit('https://www.republiquei.com/cadastrar')
  })
})

describe('Login Page', () => {
  it('passes', () => {
    cy.viewport('macbook-16')
    cy.visit('https://www.republiquei.com/login')
  })
})

describe('Meus Anuncios Page', () => {
  it('passes', () => {
    cy.viewport('macbook-16')
    cy.visit('https://www.republiquei.com/meusAnuncios')
  })
})


describe('Anunciar Republicas Page', () => {
  it('passes', () => {
    cy.viewport('macbook-16')
    cy.visit('https://www.republiquei.com/anunciarRepublicas')

  })
})

describe('Seja um proprietario Page', () => {
  it('passes', () => {
    cy.viewport('macbook-16')
    cy.visit('https://www.republiquei.com/seja-um-proprietario')
  })
})

describe('Sobre Page', () => {
  it('passes', () => {
    cy.viewport('macbook-16')
    cy.visit('https://www.republiquei.com/sobre')
  })
})

describe('Ajuda Page', () => {
  it('passes', () => {
    cy.viewport('macbook-16')
    cy.visit('https://www.republiquei.com/ajuda')
  })
})

export {}
