/// <reference types="cypress" />

describe("Busca de produto", () => {
	beforeEach(() => {
		cy.visit("https://amazon.com.br/")
	})

	it("busca um produto válido", () => {
		cy.busca("Fogão 4 bocas")
		cy.checarResultadoBusca(/[0-9]*-[0-9]* de [0-9]* resultados para/).should("be.visible")
	})
	it("não busca um produto inválido", () => {
		cy.busca("13423454315")
		cy.checarResultadoBusca("Nenhum resultado para").should("be.visible")
	})

	it("não busca com o campo de pesquisa vazio", () => {
		cy.busca("")
		cy.checarResultadoBusca("Nenhum resultado para").should("not.exist")
		cy.checarResultadoBusca(/[0-9]*-[0-9]* de [0-9]* resultados para/).should("not.exist")
	})

	afterEach(() => {
		cy.screenshot({ capture: "viewport" })
	})
})
