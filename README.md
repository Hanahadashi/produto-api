# Produto.api

Este projeto é uma API construída com Node.js e Express, conectada a um banco de dados para realizar operações de CRUD de produtos.

## Tecnologias utilizadas:
- Node.js: Ambiente de execução JavaScript
- Express: Framework web para Node.js
- PostgreSQL: Banco de dados relacional
- pg: Biblioteca para conexão com PostgreSQL

## Funcionalidades
- Listar produtos: Retorna todos os produtos disponíveis no banco de dados.
- Buscar produto por ID: Retorna um produto específico baseado no seu ID.
- Criar produto: Adiciona um novo produto ao banco de dados.
- Atualizar produto: Atualiza as informações de um produto existente.
- Excluir produto: Remove um produto do banco de dados.

## Como executar o projeto
### 1. Pré-requisitos
- Node.js instalado
- Banco de dados configurado (ex: PostgreSQL)
### 2. Instalação
Clone o repositório e instale as dependências:
```bash
  git clone https://github.com/Hanahadashi/produto-api.git
  cd <nome-do-diretório-escolhido>
  npm install
```
### 3. Configuração
Configure o arquivo de conexão com o banco de dados na pasta db.
### 4. Execução
```bash
  npm start
```
A API estará disponível em: http://localhost:3000
