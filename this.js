// function declaration (this) this mengembalikkan objek global

// function Hello() {
//     console.log(this);
//     console.log('hallo');
// }
// this.Hello();



//function literal (this) mengembalikan objek yg bersangkutan

// var obj = {
//     a: 10,
//     nama: 'slamet'
// };
// obj.halo = function () {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();


// function constractor (this) mengembalikkan objek yang baru dibuat

function Halo() {
    console.log('halo');
    console.log(this);
}
var obj1 = new Halo();
var obj2 = new Halo();