const target = new Date('2026-02-20T00:00:00');

const kado = document.getElementById('kado');
const countdown = document.getElementById('countdown');

if (kado) {
  kado.onclick = function () {
    if (new Date() < target) {
      alert('Hadiah belum bisa dibuka sampai 20 Februari 2026');
    } else {
      window.location = 'pesan.html';
    }
  }
}

setInterval(() => {
  if (countdown) {
    const now = new Date();
    const diff = target - now;

    if (diff > 0) {
      const d = Math.floor(diff / 86400000);
      const h = Math.floor(diff / 3600000) % 24;
      const m = Math.floor(diff / 60000) % 60;
      const s = Math.floor(diff / 1000) % 60;

      countdown.innerHTML = `${d} Hari ${h} Jam ${m} Menit ${s} Detik`;
    } else {
      countdown.innerHTML = 'Hadiah sudah bisa dibuka!';
    }
  }
}, 1000);

function showLove() {
  const box = document.getElementById('loveBox');
  if (box) box.style.display = 'block';
}

function toggleMusic() {
  const musik = document.getElementById('musik');
  if (musik.paused) musik.play();
  else musik.pause();
}

setInterval(()=>{
  const container=document.getElementById("bubbleContainer");
  if(!container) return;

  const love=document.createElement("div");
  love.className="love";
  love.innerHTML="❤";
  love.style.left=Math.random()*window.innerWidth+"px";

  container.appendChild(love);

  setTimeout(()=>love.remove(),6000);
},3500);
