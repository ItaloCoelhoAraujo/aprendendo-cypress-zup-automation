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
	cy.get("#twotabsearchtextbox")
		.should("be.visible")
		.clear()
		.type(produto + "{enter}")
})

Cypress.Commands.add("checarResultadoBusca", (textoParaChecar) => {
	return cy.contains(textoParaChecar)
})

Cypress.Commands.add("selecionarProduto", (numeroNaLista) => {
	cy.get('.s-result-list [data-index="' + (numeroNaLista + 1) + '"] span')
		.first()
		.should("be.visible")
		.click()
	cy.get("#productTitle").should("exist")
})

Cypress.Commands.add("pegarTituloProduto", () => {
	return cy.get("#productTitle").should("be.visible").invoke("text")
})

Cypress.Commands.add("adicionarAoCarrinho", () => {
	cy.get("#add-to-cart-button").should("be.visible").click()
})

Cypress.Commands.add("acessarCarrinho", () => {
	cy.get("#nav-cart-count").should("be.visible").click()
})

Cypress.Commands.add("removerDoCarrinho", (tituloProduto) => {
	cy.contains(tituloProduto).should("exist").as("elementoTitulo", { type: "static" })
	cy.get(".sc-action-delete > .a-declarative > .a-color-link").should("be.visible").click()
})

Cypress.Commands.add("checarSeTemProduto", () => {
	cy.get("@elementoTitulo").should("not.exist")
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
