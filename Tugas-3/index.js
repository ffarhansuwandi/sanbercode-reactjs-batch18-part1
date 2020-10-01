/*Soal 1 */
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var a = kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1)
var b = kataKeempat.toUpperCase()

console.log(kataPertama +' '+ a +' '+ kataKetiga +' '+ b)

/*Soal 2*/
var kataPertama = '1';
var kataKedua = "2";
var kataKetiga = '4';
var kataKeempat = '5';
var kataPertama1 = parseInt(kataPertama);
var kataKedua1 = parseInt(kataKedua);
var kataKetiga1 = parseInt(kataKetiga);
var kataKeempat1 = parseInt(kataKeempat);
var jawaban2 = kataPertama1 + kataKedua1 + kataKetiga1 + kataKeempat1
console.log(jawaban2)

/*Soal 3*/
var kalimat = 'wah javascript itu keren sekali'; 

var tulisanPertama = kalimat.substring(0, 3); 
var tulisanKedua = kalimat.substring(4, 14);
var tulisanKetiga = kalimat.substring(15, 18)
var tulisanKeempat = kalimat.substring(19, 24)
var tulisanKelima = kalimat.substring(25, 31)

console.log('Kata Pertama: ' + tulisanPertama); 
console.log('Kata Kedua: ' + tulisanKedua); 
console.log('Kata Ketiga: ' + tulisanKetiga); 
console.log('Kata Keempat: ' + tulisanKeempat); 
console.log('Kata Kelima: ' + tulisanKelima);

/*Soal 4*/
var nilai = 98
if (nilai >= 80) {
    console.log("Indeks A")
} else if (nilai >= 70) {
    console.log('Indeks B')
} else if (nilai >= 60) {
    console.log('Indeks C')
} else if (nilai >= 50) {
    console.log('Indeks D')
} else {
    console.log('Indeks E')
}

/*Soal 5*/
var tanggal = 6;
var bulan = 7;
var tahun = 1998;

switch(bulan) {
    case 1 : {console.log(tanggal + ' ' +"Januari" + ' ' + tahun);break;}
    case 2 : {console.log(tanggal + ' ' +"Februari" + ' ' + tahun);break;}
    case 3 : {console.log(tanggal + ' ' +"Maret" + ' ' + tahun);break;}
    case 4 : {console.log(tanggal + ' ' +"April" + ' ' + tahun);break;}
    case 5 : {console.log(tanggal + ' ' +"Mei" + ' ' + tahun);break;}
    case 6 : {console.log(tanggal + ' ' +"Juni" + ' ' + tahun);break;}
    case 7 : {console.log(tanggal + ' ' +"Juli" + ' ' + tahun);break;}
    case 8 : {console.log(tanggal + ' ' +"Agustus" + ' ' + tahun);break;}
    case 9 : {console.log(tanggal + ' ' +"September" + ' ' + tahun);break;}
    case 10 : {console.log(tanggal + ' ' +"Oktober" + ' ' + tahun);break;}
    case 11 : {console.log(tanggal + ' ' +"November" + ' ' + tahun);break;}
    case 12 : {console.log(tanggal + ' ' +"Desember" + ' ' + tahun);break;}
    default : {console.log("false");}
}