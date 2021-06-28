# NLW Valoriza: __Trilha Node.js__

O objetivo desse projeto é aprofundar conhecimentos no desenvovilmento backend com Node.js e Typescript, juntamente com um banco de dados, aplicando conceitos de autenticação de usuários e relacionamento entre tabelas com PostgreSQL.

### Tecnologias :star: :
- Typescript
- Express
- PostgreSQL

### Ferramentas utilizadas :hammer_and_wrench: :
- JsonWebToken
- TypeORM 
- uuid
- bcryptjs

### Rodando o projeto:
- Requisitos:
	- Node.js
	- Yarn
	- PostgreSQL
	- Insomnia ou Postman

- 
- Passo 1: `Adicione suas credenciais do Postgre ao arquivo 'ormconfig.json'`
- Passo 2: `Rode o comando 'yarn install'`
- Passo 3: `Rode o comando 'yarn typeorm migration:run'`
- Passo 4: `Rode 'yarn dev'`
- Passo 5: `Acesse as rotas no seu insmonia ou postman`

- Rotas:
	- BaseURL: `http://localhost:3000`
	- (POST) Create user: `/users`
	- (POST) Login: `/login`
	- (POST) Create Tag: `/tags`
	- (POST) Create Compliment: `/compliments`
	- (GET) Receive Compliment: `/compliments/receive`
	- (GET) Send Compliment: `/compliments/send`
	- (GET) List Tags: `/tags`
