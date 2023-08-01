# Desafio ZUP Automação Web

Este é um **Projeto Cypress** e foi criado conforme requisito abaixo, utilizando os seguintes recursos:

-   Javascript;
-   NPM;
-   Cypress;
-   Padrão robot;
-   Pluguins p/ relatórios automatizados;

**Avisos Importantes:**

-   Os teste foram validados no **Google Chrome**.
-   Os testes foram feito no site da Amazon. Por conta disso, as vezes eles conseguem detectar que os testes estão sendo executados com o Cypress e são bloqueados. Nesse caso, é necessário rodar os testes novamente.
-   Para rodar os testes usando o aplicativo do Cypress, deve ser utilizado o comando "npm run cypress", se estiver usando npm, ou "yarn cypress", se estiver usando yarn, no terminal.
-   Para rodar os testes em modo headless e gerar os relatórios, deve ser utilizado o comando "npm run tests", se estiver usando npm, ou "yarn tests", se estiver usando yarn, no terminal.
-   Para rodar os testes individualmente, deve ser utilizado os comandos "npm run teste-carrinho" ou "npm run teste-busca", se estiver usando npm, ou "yarn teste-carrinho" ou "yarn teste-busca", se estiver usando yarn, no terminal.

## Requisitos

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

-   Cenário: Busca um produto válido
-   Cenário: Não busca um produto inválido
-   Cenário: Não busca por produto com o campo de pesquisa vazio

Para a funcionalidade do carrinho eu criei um cenários:

-   Cenário: Carrinho - adicionar produto
