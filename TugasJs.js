//Program if ,else,nested if

/* const usia = 70;

if (usia < 0) {
    console.log("Usia tidak valid.");
} else if (usia < 18) {
    console.log("Anda masih anak-anak.");
} else if (usia < 60) {
    console.log("Anda adalah seorang dewasa.");
} else if (usia < 80) {
    console.log("Anda adalah seorang lansia.");
} else {
    console.log("Anda adalah seorang manula.");
}*/

//program switch case

/* const namaBuah = "rambutan"; // Ganti dengan nama buah yang ingin Anda periksa

switch (namaBuah) {
    case "rambutan":
        console.log("rambutan berwarna merah rasanya manis.");
        break;
    case "manggis":
        console.log("manggis berwarna ungun rasanya manis");
        break;
    case "jeruk":
        console.log("jeruk berwarna orange rasanya manis.");
        break;
    case "anggur":
        console.log("anggur berwarna ungun,hijau rasanya manis.");
        break;
    default:
        console.log("Buah tidak dikenali.");
}*/

//Program for statement

/*loopBulan:for (let n = 1; n < 13; n++) {
    console.log(n)
loopHari:for (let a = 1; a < 31; a++) {
        console.log("Bulan"+n +  ":"  + "Hari"+ a)

}
}*/


//Program while & do while

/*let angka = 0

while (angka<13) {
    angka ++
    console.log(angka)
}*/

/*let angka = 0

do {
    angka ++
    console.log(angka)
} while (angka<13); */


//Program fuction
// Contoh fungsi pengurangan
function Kurangkan(n, r) {
    return n - r;
}

// Memanggil fungsi dan menyimpan hasilnya
const hasil = Kurangkan(16, 3);
console.log("Hasil pengurangan:", hasil);