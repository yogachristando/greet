const pgp = require('pg-promise')();

const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: '1234'
});


fastify.get('buku, async function (request, reply) {
    const buku = await db.query{select * from buku where judul = s
const fastify = require('fastify')({
  logger: true
})

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send('hello nyet!' )
})

fastify.post('/', function (request, reply) {
    reply.send('hello post!' )
  })

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})

