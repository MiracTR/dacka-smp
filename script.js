const serverIP = "play-dackasmp.dev.tc";

const btn1 = document.getElementById("copyBtn");
const btn2 = document.getElementById("copyBtn2");

function copyIP() {
if (navigator.clipboard && window.isSecureContext) {
navigator.clipboard.writeText(serverIP);
} else {
const textarea = document.createElement("textarea");
textarea.value = serverIP;
document.body.appendChild(textarea);
textarea.select();
document.execCommand("copy");
textarea.remove();
}

```
btn1.innerText = "Kopyalandı!";
btn2.innerText = "Kopyalandı!";

setTimeout(() => {
    btn1.innerText = "Kopyala";
    btn2.innerText = "IP'yi Kopyala";
}, 2000);
```

}

// Butonlara event bağla
btn1.addEventListener("click", copyIP);
btn2.addEventListener("click", copyIP);

// Sunucu durumu
async function fetchStatus() {
try {
const res = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
const data = await res.json();

```
    const text = document.getElementById("status-text");
    const dot = document.getElementById("status-dot");

    if (data.online) {
        text.innerText = `Online • ${data.players.online}/${data.players.max}`;
        dot.style.background = "lime";
    } else {
        text.innerText = "Offline";
        dot.style.background = "red";
    }
} catch {
    document.getElementById("status-text").innerText = "Hata oluştu";
}
```

}

fetchStatus();
setInterval(fetchStatus, 30000);
