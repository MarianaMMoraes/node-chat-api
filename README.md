# API de Chat em Tempo Real

Esta API oferece um chat em tempo real com autenticação JWT e suporte a Docker.

## Estrutura do projeto

- `src/server.js`
- `src/routes/authRoutes.js`
- `src/controllers/authController.js`
- `src/middlewares/authMiddleware.js`
- `src/sockets/chatSocket.js`

## Tecnologias usadas

- Node.js
- Express
- Socket.IO
- JWT
- Docker

## O que faz

- Chat em tempo real entre vários usuários
- Autenticação JWT para login
- Validação do token no Socket.IO
- Envio de mensagens para todos os clientes conectados

## Executar localmente

1. Instale as dependências:

```bash
npm install
```

2. Rode o projeto:

```bash
npm run dev
```

3. Acesse:

```text
http://localhost:3000
```

## Executar com Docker

1. Construa a imagem:

```bash
docker compose build
```

2. Ligue o serviço:

```bash
docker compose up
```

3. A aplicação ficará disponível em:

```text
http://localhost:3000
```

## Como funciona o tempo real

O Socket.IO cria uma conexão persistente entre cliente e servidor. O cliente envia eventos como `message`, e o servidor repassa essas mensagens para todos os outros clientes.

### Eventos usados

- `connection` — quando o cliente se conecta
- `message` — quando uma mensagem é enviada ou recebida
- `disconnect` — quando o cliente sai

## Testar a API

### Login

Faça um POST em `/api/auth/login` com:

```json
{
  "username": "usuario",
  "password": "senha"
}
```

A resposta retorna um token JWT.

### Conexão Socket.IO

Use o token no handshake:

```js
const socket = io('http://localhost:3000', {
  auth: {
    token: '<SEU_TOKEN_AQUI>'
  }
});

socket.on('message', (message) => {
  console.log(message);
});

socket.emit('message', 'Olá a todos!');
```

## CI/CD

Este projeto usa GitHub Actions para integração contínua. A cada push na branch `main` o pipeline:

- faz checkout do código
- configura o Node.js
- instala dependências
- roda os testes com Jest
- executa o build
- faz build opcional da imagem Docker

Assim, mudanças no repositório são validadas automaticamente antes de qualquer entrega.

## Observação

O sistema pode ser escalado horizontalmente com múltiplas instâncias e suporte a Redis para sincronização de eventos.
