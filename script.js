//button confitee
document.addEventListener("DOMContentLoaded", function() {
    const downloadBtn = document.getElementsByClassName("download-btn pixel-corners")[0];
    
    downloadBtn.addEventListener("click", () => { 
        var count = 100; 
        var defaults = { 
            origin: { y: 0.11, x:0.85 } 
        }; 

        function fire(particleRatio, opts) { 
            confetti({ 
                ...defaults, 
                ...opts, 
                particleCount: Math.floor(count * particleRatio) 
            }); 
        } 

        fire(0.25, { 
            spread: 150, 
            startVelocity: 50, 
        }); 
        fire(0.2, { 
            spread: 150, 
        }); 
        fire(0.35, { 
            spread:150, 
            decay: 0.91, 
            scalar: 0.8 
        }); 
        fire(0.1, { 
            spread: 150, 
            startVelocity: 50, 
            decay: 0.92, 
            scalar: 1.2 
        }); 
        fire(0.1, { 
            spread: 150, 
            startVelocity:50, 
        }); 
    });
});
/////////////////////////// birds

VANTA.BIRDS({
    el: "#bb",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x0,
    color1: 0xc0c0c,
    color2: 0x0,
    colorMode: "varianceGradient",
    speedLimit: 4.50,
    separation: 37.00,
    alignment: 23.00
  })

////// navbar toggle
function toggleNav() {
    var navbar = document.querySelector('.navbar');
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'flex';
    } else {
        navbar.style.display = 'none';
    }
}

//////// auto type

document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector('.dynamic-title');
    const text = title.textContent;
    title.textContent = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(type, 150);
        }
    }
    type();
});
