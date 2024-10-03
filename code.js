//variabel konstanta tidak bisa diubah nilainya
const nama = "Zidan";

//variabel yang bisa diubah nilainya
let usia = 20;

//summon ke html
const biodata = document.getElementById("biodata");
console.log(biodata);

function generateBiodata() {
  let kategori;

  //percabangan/logika
  if (usia > 11 && usia < 18) {
    //kondisi pertama
    kategori = "remaja";
  } else if (usia > 0 && usia <= 4) {
    //kondisi kedua
    kategori = "balita";
  } else if (usia > 5 && usia <= 11) {
    //kondisi ketiga
    kategori = "anak-anak";
  } else {
    //jika kondisi tidak terpenuhi
    kategori = "Dewasa";
  }
  //link ke html
  return (biodata.innerHTML = kategori);

  //mengeluarkan hasil/informasi/data di konsol web
  //console.log(`nama saya adalah ${nama} dan usia saya ${usia} tahun`);
}

console.log(`nama : ${nama}`);
console.log(`usia : ${usia}`);

generateBiodata();
