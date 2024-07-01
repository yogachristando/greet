// // const hitungluaspersegipanjang = require('./library');

// // const hasil = hitungluaspersegipanjang(5, 3);
// // console.log(`hasil: ${hasil}`);


// // // function hitungluaspersegipanjang(panjang, lebar) {
// // //     return panjang * lebar;
// // // }

// // // const hitungluaspersegipanjang = function(panjang, lebar){
// // //     return panjang * lebar;
// // // }

// // // const hitungluaspersegipanjang = (panjang, lebar) => panjang * lebar;




// // // const hasil = hitungluaspersegipanjang(78, 90);
// // // console.log(`hasil: ${hasil}`);

// // // function tambahlima(angka) {
// // //     angka = angka + 5;
// // //     return angka;
// // // }

// // // const nilai = 5;
// // // const hasil = tambahlima(nilai);
// // // console.log(`nilai: ${nilai}`);
// // // console.log(`hasil: ${hasil}`);

// // // function tambahlima(obj) {
// // //     obj.angka = obj.angka + 5;
// // //     return obj.angka;
// // // }

// // // const nilai = {
// // //     angka: 5
// // // }
// // // const hasil = tambahlima(nilai);
// // // console.log(`nilai: ${JSON.stringify(nilai)}`);
// // // console.log(`hasil: ${JSON.stringify(hasil)}`);


// // const halo2 = function() {
// //     console.log('halo 2');
// // }

// // const halo = function (namaste) {
// //     console.log('halo');
// //     namaste();
// // }

// // halo(halo2);




// const axios = require('axios');

// // axios.get('https://api2-lb.jubelio.com/ping')
// // .then(function(response) {
// //     console.log(response.data);
// // })

// async function callApi () {
//     const response = await axios.get('https://api2-lb.jubelio.com/ping');
//     console.log(response.data);
// }
// callApi();


var convert = require('color-convert');
 
// Hex to LAB
convert.hex.lab('DEADBF');         // [ 76, 21, -2 ]
convert.hex.lab.raw('DEADBF');     // [ 75.56213190997677, 20.653827952644754, -2.290532499330533 ]
 
// RGB to CMYK
convert.rgb.cmyk(167, 255, 4);     // [ 35, 0, 98, 0 ]
convert.rgb.cmyk.raw(167, 255, 4); // 