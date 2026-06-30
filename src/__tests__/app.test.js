const request = require('supertest');
const app = require('../app');

describe('App básico', () => {
  it('retorna mensagem de boa-vinda na rota raiz', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'API de chat em tempo real rodando' });
  });
});
