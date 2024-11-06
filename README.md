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
1. Crie o Banco de Dados e a Tabela no terminal do PostgreSQL
```bash
  CREATE DATABASE nome_do_banco;

  CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      description TEXT NOT NULL,
      price NUMERIC(10, 2) NOT NULL,
      quantity INT NOT NULL,
      data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
```
2. Crie um arquivo.env na raiz do projeto com a URL de conexão ao banco de dados
```
DATABASE_URL="postgresql://usuario_do_banco:senha_do_banco@localhost:5433/nome_do_banco"
```
Substitua usuario_do_banco, senha_do_banco, localhost, 5433 e nome_do_banco conforme a configuração do seu ambiente.

### 4. Execução
```bash
  npm run dev
```
A API estará disponível em: http://localhost:3000

## Endpoints
- GET /produtos - Lista todos os produtos.
- GET /produtos/:id - Retorna um produto específico pelo ID.
- POST /produtos - Cria um novo produto.
- PUT /produtos/:id - Atualiza um produto existente.
- DELETE /produtos/:id - Exclui um produto.

