/* =====================
   MUSIK
===================== */

const musik = document.getElementById("musik");
const musicText = document.getElementById("musicText");

function toggleMusic() {

    if (musik.paused) {

        musik.play();

        musicText.innerText = "Stop Music";

    } else {

        musik.pause();

        musicText.innerText = "Play Music";

    }

}


/* =====================
   COUNTER
===================== */

/*
   GANTI TANGGAL DI BAWAH
   dengan tanggal kalian mulai bersama.
*/

const tanggalMulai = new Date("2024-11-27T00:00:00");

function updateCounter() {

    const sekarang = new Date();

    let selisih =
        sekarang - tanggalMulai;

    const hari =
        Math.floor(
            selisih /
            (1000 * 60 * 60 * 24)
        );

    const jam =
        Math.floor(
            (selisih /
            (1000 * 60 * 60)) % 24
        );

    const menit =
        Math.floor(
            (selisih /
            (1000 * 60)) % 60
        );

    const detik =
        Math.floor(
            (selisih /
            1000) % 60
        );

    document.getElementById("counter").innerHTML =
        `${hari} Hari ${jam} Jam ${menit} Menit ${detik} Detik`;

}

function bukaPesan() {
    const musik = document.getElementById("musiks");
    musik.play();
    const pesan = document.getElementById("pesan");
    pesan.style.display = "block";
    pesan.scrollIntoView({ 
        behavior: "smooth"
    });
}

setInterval(updateCounter, 1000);

updateCounter();