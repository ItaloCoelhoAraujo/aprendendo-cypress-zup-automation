# Desafio ZUP Automação Web

Este é um **Projeto Maven** e foi criado conforme requisito abaixo, utilizando os seguintes recursos:

-   Javascript;
-   NPM;
-   Cypress;
-   Padrão robot;
-   Pluguins p/ relatórios automatizados;

**Avisos Importantes:**

Os teste foram validados no **Google Chrome**.

## Requisito

Utilizando as ferramentas que preferir crie um teste automatizado que faça o fluxo de ponta a ponta de um cliente que:

_1 - Entre em um grande portal de comércio online_
_(Exemplo: Americanas, Submarino, Magazine Luiza)_

_2 - Faça uma busca por um produto_

_3 - Valide o retorno da busca_

_4 - Escolha um produto na lista_

_5 - Adicione o carrinho_

_6 - Valide o produto no carrinho_

Para a criação dos cenários de testes devem ser considerados casos de sucesso e fluxos alternativos.

---

## Planejamento dos Testes

Baseado nos requisitos, eu identifiquei duas funcionalidades a serem testadas: busca de produto e o carrinho.

Para a funcionalidade de busca de produto, eu criei 3 cenários de teste:

-   Cenário: Busca por produto válido
-   Cenário: Busca por produto inválido
-   Cenário: Busca por produto com o campo de pesquisa vazio

Para a funcionalidade do carrinho eu criei 2 cenários:

-   Cenário: Carrinho - adicionar produto
-   Cenário: Carrinho - excluir produto

O cenário de excluir produto pode fazer parte de uma suite de testes mais específica que eu chamei de "alterar lista do carrinho".
