var penumpang = [];

// var penumpang = ['sandika', undefined, 'agus'];
var tambahPenumpang = function (namaPenumpang, penumpang) {

    //jika angkotny kosong 
    if (penumpang.length == 0) {
        //tambah penumpang di awal array
        penumpang.push(namaPenumpang);

        //kembalikan isi array & keluar dr function
        return penumpang;

    } else {

        //telusuri seluruh kursi dr awal
        for (var i = 0; i < penumpang.length; i++) {

            //jika ada kurdi yang kosong
            if (penumpang[i] == undefined) {

                //tambah penumpang dikursi tersebut
                penumpang[i] = namaPenumpang;

                //kembalikan isi array dan keluar dr function
                return penumpang;
            } else if (i == penumpang.length - 1) {
                //tambah penumpang diakhir array
                penumpang.push(namaPenumpang);

                //kembalikan isi array & keluar dari function
                return penumpang;
            } else if (penumpang[i] == namaPenumpang) {
                //tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' sudah ada didalam angkot');

                //kembalikan isi array dan keluar dr function
                return penumpang;
            }

        }
    }
}


var hapusPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log('angkot masih kosong');

    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                console.log(namaPenumpang + 'tidak ada didalam angkot');
                return penumpang;
            }
        }
    }
    return penumpang;
}