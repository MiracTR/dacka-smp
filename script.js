const serverIP = "play-dackasmp.dev.tc";

// IP Kopyalama
function copyIP() {
navigator.clipboard.writeText(serverIP);

```
const btns = document.querySelectorAll("button");
btns.forEach(btn => {
    if (btn.innerText.includes("Kopyala")) {
        btn.innerText = "Kopyalandı!";
        setTimeout(() => {
            btn.innerText = "Kopyala";
        }, 2000);
    }
});
```

}

// Sunucu durumu çekme (API)
async function fetchServerStatus() {
try {
const res = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
const data = await res.json();

```
    const statusText = document.getElementById("status-text");
    const dot = document.querySelector(".dot");

    if (data.online) {
        statusText.innerText = `Online • ${data.players.online}/${data.players.max} oyuncu`;
        dot.style.background = "lime";
        dot.style.boxShadow = "0 0 10px lime";
    } else {
        statusText.innerText = "Offline";
        dot.style.background = "red";
        dot.style.boxShadow = "0 0 10px red";
    }
} catch (err) {
    document.getElementById("status-text").innerText = "Durum alınamadı";
}
```

}

// Sayfa yüklenince çalıştır
fetchServerStatus();

// Her 30 saniyede güncelle
setInterval(fetchServerStatus, 30000);
