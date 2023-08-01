// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("busca", (produto) => {
	cy.get("#twotabsearchtextbox", { timeout: 10000 })
		.should("be.visible")
		.clear()
		.type(produto + "{enter}")
})

Cypress.Commands.add("checarResultadoBusca", (textoParaChecar) => {
	return cy.contains(textoParaChecar, { timeout: 10000 })
})

Cypress.Commands.add("selecionarProduto", (numeroNaLista) => {
	cy.get('[data-component-type="s-search-results"] [data-index="' + (numeroNaLista + 2) + '"] a', { timeout: 10000 })
		.first()
		.should("be.visible")
		.click()
	cy.get("#productTitle", { timeout: 10000 }).should("exist")
})

Cypress.Commands.add("pegarTituloProduto", () => {
	return cy.get("#productTitle", { timeout: 10000 }).should("be.visible").invoke("text")
})

Cypress.Commands.add("adicionarAoCarrinho", () => {
	cy.get("#add-to-cart-button", { timeout: 10000 }).should("be.visible").click()
})

Cypress.Commands.add("acessarCarrinho", () => {
	cy.get("#nav-cart-count", { timeout: 10000 }).should("be.visible").click()
})

Cypress.Commands.add("removerDoCarrinho", (tituloProduto) => {
	cy.contains(tituloProduto, { timeout: 10000 }).should("exist").as("elementoTitulo", { type: "static" })
	cy.get(".sc-action-delete > .a-declarative > .a-color-link", { timeout: 10000 }).should("be.visible").click()
})

Cypress.Commands.add("checarSeTemProduto", () => {
	cy.get("@elementoTitulo", { timeout: 10000 }).should("not.exist")
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
