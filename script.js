listCardTeknik = [
  {
    nama: "Batik Tulis/Cating",
    image: ".\\batik-tulis.jpg",
    keterangan:
      "Teknik pembuatan batik tulis atau canting adalah metode paling tua dan tradisional. Proses pembuatan batik masih menggunakan alat canting tradisional yang diisi dengan lilin panas sebelum digunakan untuk menggambar pola di atas kain. Setelah pola gambar ditutupi lilin, kemudian kain diwarnai. Bagian lilin kemudian dilepaskan dari kain. Dengan begitu, saat kain dimasukan dalam larutan pewarna, bagian yang tertutup lilin tidak terkena warna dan membentuk motif batik yang cantik. Teknik pembuatan batik dengan metode canting membutuhkan ketelitian tinggi. Tekstur dan motif batik dibuat manual menggunakan tangan. Tidak heran pembuatan batik dengan canting bisa memakan waktu 2 – 3 bulan. Meski begitu, harga batik tulis jauh lebih mahal dibanding batik biasa karena punya nilai seni tinggi.",
  },
  {
    nama: "Batik Cap",
    image: "./batik-cap.jpg",
    keterangan:
      "Teknik pembuatan batik cap muncul sekitar abad ke-20. Metode ini tidak menggunakan canting, melainkan cap yang terbuat dari tembaga berukuran 20 x 20 cm. Bagian tengah cap memiliki motif ukiran batik. Stempel akan dicelupkan ke dalam cairan malam lalu ditekan dengan keras di atas kain. Proses pembuatan batik dengan metode cap tergolong modern. Cara pembuatannnya sama seperti saat kita menggunakan stempel. Kelebihan dari metode ini adalah membuat proses pengerjaan batik lebih cepat. Proses pembuatan batik cap hanya memakan waktu 2 – 3 hari tergantung luas kain.",
  },
  {
    nama: "Batik Kombinasi",
    image: ".\\batik-kombinasi.jpg",
    keterangan:
      "Batik kombinasi adalah perpaduan antara batik tulis (canting) dengan batik cap. Teknik pembuatan batik ini diciptakan untuk menyempurnakan hasil batik cap yang hanya bisa membuat motif besar. Detail motif yang ukurannya lebih kecil kemudian ditambahkan menggunakan canting. Meskipun menggunakan canting, namun kualitas batik kombinasi masih setara dengan batik cap. Karena canting hanya digunakan untuk menambah motif tertentu saja. Keseluruhan proses pembuatan lebih banyak menggunakan cap tembaga. Waktu pengerjaan batik kombinasi sedikit lebih lama dari batik cap karena butuh waktu tambahan untuk menambah detail motif dengan canting.",
  },
  {
    nama: "Batik Ikat Celup (Tie-Dye)",
    image: ".\\batik-ikat.jpg",
    keterangan:
      "Teknik pembuatan batik dengan metode ikat celup juga tergolong modern. Teknik ini banyak digunakan untuk membuat batik yang lebih berwarna-warni. Di Jawa teknik ini disebut Jumputan, di Palembang lebih dikenal dengan nama Cinde, sedangkan di Banjarmasin namanya Sasirangan. Sebelum dicelup ke cairan pewarna, sebagaian kain diikat dengan tali. Setelah semua bagian kain tercelup kemudian angkat kain. Buka ikatan kain dan pastikan bagian yang terikat tidak terkena pewarna. Hasil atau motif batik ikat celup mirip kaos tie dye yang saat ini sedang tren di kalangan anak muda.",
  },
  {
    nama: "Batik Lukis/Colet",
    image: ".\\batik-lukis.jpg",
    keterangan:
      "Teknik pembuatan batik tradisional hanya menghasilkan 1 – 2 warna saja. Namun berbeda dengan teknik pembuatan batik lukis atau colet. Dengan teknik ini, Anda bisa membuat batik beraneka warna. Teknik ini juga membutuhkan keterampilan seni yang tinggi. Semakin bagus hasilnya, maka semakin mahal harganya. Sebelum dilukis, kain polos akan diberi motif agar tetap memiliki ciri khas batiknya. Setelah itu pengrajin akan memberi warna pada motif atau pola gambar tersebut dengan kuas cat. Semakin bagus perpaduan warnanya akan semakin bagus hasilnya.",
  },
  {
    nama: "Batik printing",
    image: ".\\batik-printing.jpg",
    keterangan:
      "Metode pembuatan batik printing adalah teknik yang paling modern dan paling banyak digunakan saat ini. Selain lebih cepat, proses pembuatan batik printing tidak membutuhkan keterampilan khusus. Oleh karena itu, teknik ini paling banyak digunakan oleh pemula untuk membuat banyak batik dalam waktu singkat. Untuk membuat batik printing, Anda hanya membutuhkan komputer, software dan kemampuan untuk membuat motif batik, dan mesin printing kain. Motif yang sudah dibuat di komputer kemudian dicetak di atas kain. Karena nilai seninya lebih rendah, harga kain batik printing lebih murah. Waktu pengerjaan batik printing paling cepat dibanding teknik pembuatan batik lainnya.",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  loadCardTeknik(listCardTeknik);
});

function loadCardTeknik(listAllCard) {
  let card = document.getElementById("listCardTeknik");

  for (var teknik of listAllCard) {
    var listItem = document.createElement("li");
    listItem.className = "teknik-batik";

    var imageDiv = document.createElement("div");
    imageDiv.className = "batik-image";

    var heading = document.createElement("h3");
    heading.innerText = teknik.nama;

    var image = document.createElement("img");
    image.src = teknik.image;

    imageDiv.appendChild(heading);
    imageDiv.appendChild(image);

    var detailDiv = document.createElement("div");
    detailDiv.className = "batik-detail";

    var paragraph = document.createElement("p");
    paragraph.textContent = teknik.keterangan;

    detailDiv.appendChild(paragraph);

    listItem.appendChild(imageDiv);
    listItem.appendChild(detailDiv);

    card.appendChild(listItem);
  }
}
