// CommonJs
const fastify = require('fastify')({
    logger: true
  })
  
  const pgp = require('pg-promise')();
  
  const db  = pgp({
      host: 'localhost',
      port: '5432',
      database: 'postgres',
      user: 'postgres',
      password: '1234'
  });
  
//   Declare a route
//   1. list semua buku, bisa search by judul
//   //search by params
  fastify.get('/buku/:search', async function (request, reply) {
      const buku = await db.query('SELECT * FROM buku WHERE judul LIKE $1', [`%${request.params.search}%`]);
      return buku;
  })
  
  // //search by query string
  fastify.get('/buku', async function (request, reply) {
      const buku = await db.query('SELECT * FROM buku WHERE judul LIKE $1', [`%${request.query.search}%`]);
      return buku;
  })
  
  //search by payload
  fastify.post('/buku', async function (request, reply) {
      const buku = await db.query('SELECT * FROM buku WHERE judul LIKE $1', [`%${request.body.search}%`]);
      return buku;
  })
  
  // 2. detail buku by id, get, params
  fastify.get('/buku/:id', async function (request, reply) {
      const buku = await db.query('SELECT * FROM buku WHERE id = $1', [`${request.params.id}`]);
      return buku;
  })
  
//   3. insert buku, post, body
  fastify.post('/buku', async function (request, reply) {
    const buku = await db.query(
      "INSERT INTO buku (sku, judul, harga, stock) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        request.body.sku,
        request.body.judul,
        request.body.harga,
        request.body.stock
      ]
    );
    reply
      .code(201)
      .send({ message: 'Data succesfully created!', data: buku
      });
  })
  
  // 4. update/edit buku by id, put, params dan body
  fastify.put('/buku/:id', async function (request, reply) {
    const buku = await db.query(
      "UPDATE buku SET sku = $1, judul = $2, harga = $3, stock = $4 WHERE id = $5 RETURNING *",
      [
        request.body.sku,
        request.body.judul,
        request.body.harga,
        request.body.stock,
        request.params.id
      ]
    );
    reply
      .send({ message: 'Data succesfully updated!', data: buku
      });
  });
  
  // 5. hapus buku by id, delete, params
  fastify.delete('/buku/:id', async function (request, reply) {
    const buku = await db.query("DELETE FROM buku WHERE id = $1 RETURNING id",
      [request.params.id]
    );
    reply
    .send({ message: 'Data succesfully deleted!', id: buku
    });
  }) 
  
  // Run the server!
  fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })