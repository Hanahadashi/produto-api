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
1. Crie um arquivo.env na raiz do projeto com os dados do banco de dados
exemplo:
```
PGUSER=postgres
PGHOST=localhost
PGDATABASE=postgres
PGPASSWORD=root
PGPORT=5432
```
- Certifique-se de que esses valores correspondem às configurações do seu banco de dados PostgreSQL.
- O arquivo db.js cuida da criação da tabela produtos e da inserção dos dados iniciais ao rodar o projeto. Não é necessário executar scripts SQL manualmente.
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

