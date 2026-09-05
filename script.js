/* =====================
   MUSIK
===================== */

const musik = document.getElementById("musik");
const musicText = document.getElementById("musicText");

function toggleMusic() {

    if (musik.paused) {

        musik.play();

        musicText.innerText = "Matikan Musik";

    } else {

        musik.pause();

        musicText.innerText = "Putar Musik";

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

setInterval(updateCounter, 1000);

updateCounter();