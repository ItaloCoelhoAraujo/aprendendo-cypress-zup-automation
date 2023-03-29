/// <reference types="cypress" />

let productTitle

describe("Carrinho", () => {
	beforeEach(() => {
		cy.visit("https://amazon.com.br/")
		cy.busca("Fogão 4 bocas")
		cy.checarResultadoBusca(/[0-9]*-[0-9]* de [0-9]* resultados para/)
		cy.selecionarProduto(1)
	})

	it("adiciona um item para o carrinho", () => {
		cy.pegarTituloProduto().then(($titulo) => {
			cy.adicionarAoCarrinho()
			cy.acessarCarrinho()
			cy.contains($titulo.trim().slice(0, 30)).should("exist")
		})
	})

	describe("alterar lista do carrinho", () => {
		beforeEach(() => {
			cy.pegarTituloProduto()
				.as("tituloProduto", { type: "static" })
				.then(($titulo) => {
					cy.adicionarAoCarrinho()
					cy.acessarCarrinho()
					cy.contains($titulo.trim().slice(0, 30)).should("exist")
				})
		})

		it("remove um produto da lista", () => {
			cy.get("@tituloProduto").then(($titulo) => {
				cy.removerDoCarrinho($titulo.trim())
				cy.checarSeTemProduto($titulo.trim())
			})
		})
	})

	afterEach(() => {
		cy.screenshot()
	})
})
