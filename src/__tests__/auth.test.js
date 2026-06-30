const request = require('supertest');
const app = require('../app');

describe('Rota de autenticação', () => {
  it('retorna token ao fazer login válido', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ username: 'usuario', password: 'senha' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
    expect(response.body).toHaveProperty('user');
    expect(response.body.user.username).toBe('usuario');
  });
});
