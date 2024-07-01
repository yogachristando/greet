const pgp = require('pg-promise')();

const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: '1234'
});

// // // insert data
// // async function insertData() {
// //     await db.query('insert into buku(sku, judul, harga, stock) values($1, $2, $3, $4)',
// //         ['buku-gambar', 'buku gambar', 10000, 50]
// //     );
// // }

// insertData()
// .then(() => {
//     console.log('berhasil');
// })

// //read data
// async function readData() {
//     const buku = await db.query("select * from buku where judul = $1", ['buku gambar']);
//     return buku;
// }

// //insert data()
// readData()
// .then((res) => {
//     console.log('berhasil', JSON.stringify(res,null,2));
// })

//update data
// async function updateData() {
//     await db.query("update buku set sku = $1, judul = $2, harga = $3, stock = $4 where id = $5",
//         ['buku-anak', 'buku anak', 15000, 100, 1]
//     );
// }

// updateData()
// .then(() => {
//     console.log('berhasil');
// })

//delete data
async function deleteData() {
        await db.query("delete from buku where id = $1", [1]);
}

deleteData()
.then(() => {
    console.log('berhasil');
})



