// Hide Terminal
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('terminal').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('terminal').style.display = 'none';
            if(document.getElementById('typing')) typeEffect();
            animateBars();
        }, 500);
    }, 1500);
});

// Typing Effect
function typeEffect() {
    const text = ">> ETHICAL HACKER | CYBER_SECURITY | GAMER";
    let i = 0;
    const speed = 70;
    function type() {
        if (i < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Progress Bars
function animateBars() {
    document.querySelectorAll('.progress').forEach(p => {
        p.style.width = p.getAttribute('data-width');
    });
}

// Matrix Rain
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const letters = "01SUJOYSIKDERHACKER%$#@";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff66";
    ctx.font = fontSize + "px monospace";
    drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    });
}
setInterval(draw, 33);