import { fastify } from 'fastify'
import { DatabasePostgres } from './database-postgres.js';

const server = fastify();

const database = new DatabasePostgres

//database.create()// POST
//database.read() //GET
//database.update()// PUT
//database.delete()// DELETE

//Endpoints
server.get('/', async () => {
  const artigos = database.read();
  return artigos; 
});

server.get('/senai', () => {
  return 'senai';
});

server.listen({
  port: 3333,
})