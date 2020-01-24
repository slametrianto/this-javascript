//membuat object 
// var mhs = {
//     nama: "sandika",
//     umur: 31,
//     ipk: [3.00, 32.01, 28.00],
//     //object didlm objek
//     alamat: {
//         jalan: "bandung",
//         kota: "bekasi",
//         provinsi: "jawa barat"

//     }


// };


//object literal

// let mhs = {
//     nama: 'slamet',
//     nrp: '098900',
//     email: 'slamet@yahoo.com',
//     jurusan: 'teknik informatika'


// }


// let mhs2 = {
//     nama: 'slamet',
//     nrp: '098900',
//     email: 'slamet@yahoo.com',
//     jurusan: 'teknik informatika'


// }


//function declaration
// function buatObjekMahasiswa(nama, nrp, email, jurusan) {
//     var mhs = {};
//     mhs.name = nama;
//     mhs.nrp = nrp;
//     mhs.mail = email;
//     mhs.jrs = jurusan;
//     return mhs;
// }

// var mhs3 = buatObjekMahasiswa('yuni', '303032', 'yuni@gmail.com', 'teknik kimia');



//function contructor
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;

}

let mhs4 = new Mahasiswa('erik', '0987900', 'erik@gmail.com', 'teknik mesin');