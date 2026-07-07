# 🚀 API de Gerenciamento de Usuários

Uma API REST simples desenvolvida com **Node.js**, **TypeScript** e **Express** para praticar os conceitos básicos de criação de servidores, rotas HTTP e manipulação de dados em memória.

> **Observação:** Os dados são armazenados apenas em memória. Ao reiniciar a aplicação, todas as informações cadastradas são perdidas.

---

## 📚 Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- Jest
- Supertest

---

## ⚙️ Funcionalidades

- ✅ Verificar se a API está online
- ✅ Cadastrar usuários
- ✅ Listar todos os usuários cadastrados

---

## 📌 Rotas

### GET /

Verifica se a API está funcionando.

**Resposta**

```json
{
  "ok": true
}
```

---

### POST /user

Cadastra um novo usuário.

#### Body

```json
{
  "name": "João Silva",
  "email": "joao@email.com"
}
```

#### Resposta

```json
{
  "id": "uuid-gerado",
  "name": "João Silva",
  "email": "joao@email.com"
}
```

---

### GET /user

Retorna todos os usuários cadastrados.

#### Resposta

```json
[
  {
    "id": "uuid-gerado",
    "name": "João Silva",
    "email": "joao@email.com"
  }
]
```

---

## ▶️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Acesse a pasta

```bash
cd seu-repositorio
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

A aplicação será iniciada em:

```
http://localhost:3000
```

---

## 📂 Estrutura do projeto

```
src/
├── app.ts         # Configuração da aplicação e rotas
├── server.ts      # Inicialização do servidor

dist/              # Arquivos compilados
```

---

## 🧪 Testes

Para executar os testes:

```bash
npm test
```

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido para praticar:

- Estruturação de uma API REST
- Organização de um projeto com TypeScript
- Criação de rotas utilizando Express
- Recebimento de dados via requisições HTTP
- Geração de identificadores únicos com `crypto.randomUUID()`
- Conceitos iniciais de testes com Jest

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e aprendizado.
