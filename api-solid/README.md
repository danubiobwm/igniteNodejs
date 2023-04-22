# GymPass style app.

## 🔥 Techs:

- Nodejs
- TypeScript
- Fastify

# Aplicação com SOLID

- S — Single Responsiblity Principle (Princípio da responsabilidade única);
- O — Open-Closed Principle (Princípio Aberto-Fechado);
- L — Liskov Substitution Principle (Princípio da substituição de Liskov);
- I — Interface Segregation Principle (Princípio da Segregação da Interface);
- D — Dependency Inversion Principle (Princípio da inversão da dependência)

# construction_worker: Installation

You need to install Node.js, Yarn, first and then, in order to clone the project via HTTPS, run this command:

**Install dependencies**

yarn install || npm install

# runner: Getting Started

npm run dev || yarn dev

## RFs (Requisitos funcionais)

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter o seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após ser criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);