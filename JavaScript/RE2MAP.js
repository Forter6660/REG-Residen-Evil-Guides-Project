const container = document.getElementById("map-container");
const inner = document.getElementById("map-inner");

let scale = 1, tx = 0, ty = 0;

function move() {
    inner.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
}

let dragging = false, startX, startY, origTx, origTy;

container.addEventListener("mousedown", e => {
    dragging = true;
    startX = e.clientX; startY = e.clientY;
    origTx = tx; origTy = ty;
});

window.addEventListener("mousemove", e => {
    if (!dragging) return;
    tx = origTx + (e.clientX - startX);
    ty = origTy + (e.clientY - startY);
    move();
});

window.addEventListener("mouseup", () => dragging = false);

container.addEventListener("wheel", e => {
    e.preventDefault();
    scale += e.deltaY < 0 ? 0.1 : -0.1;
    scale = Math.min(4, Math.max(0.5, scale));
    move();
}, { passive: false });

document.getElementById('submit').addEventListener('click', function() {
    const selectedValue = document.getElementById('area-option').value;
    
    const routes = {
        'RPD-1F':       'http://localhost/pROJECTive/HTML/RE2-REMAKE/RPD-1F.html',
        'RPD-2F':       'http://localhost/pROJECTive/HTML/RE2-REMAKE/RPD-2F.html',
        'RPD-3F':       'http://localhost/pROJECTive/HTML/RE2-REMAKE/RPD-3F.html',
        'RPD-B1':       'http://localhost/pROJECTive/HTML/RE2-REMAKE/RPD-1B.html',
        'UNDG-Upper':   'http://localhost/pROJECTive/HTML/RE2-REMAKE/RPD-UFU.html',
        'UNDG-Middle':  'http://localhost/pROJECTive/HTML/RE2-REMAKE/RPD-UFM.html',
        'UNDG-Lower':   'http://localhost/pROJECTive/HTML/RE2-REMAKE/RPD-UFL.html',
        'RPD-Behind':   'http://localhost/pROJECTive/HTML/RE2-REMAKE/RPD-Behind.html',
        'SWR-ENTR':     'http://localhost/pROJECTive/HTML/RE2-REMAKE/Sewer-ENTR.html',
        'SWR-UPR':      'http://localhost/pROJECTive/HTML/RE2-REMAKE/Sewer-UPR.html',
        'SWR-MID':      'http://localhost/pROJECTive/HTML/RE2-REMAKE/Sewer-MID.html',
        'SWR-LWR':      'http://localhost/pROJECTive/HTML/RE2-REMAKE/Sewer-LWR.html',
        'LAB-B1':       'http://localhost/pROJECTive/HTML/RE2-REMAKE/LAB-1B.html',
        'LAB-B2':       'http://localhost/pROJECTive/HTML/RE2-REMAKE/LAB-2B.html',
        'LAB-B3':       'http://localhost/pROJECTive/HTML/RE2-REMAKE/LAB-3B.html',
        'LAB-B4':       'http://localhost/pROJECTive/HTML/RE2-REMAKE/LAB-4B.html',
    };

    const destination = routes[selectedValue];
    if (destination) {
        window.location.href = destination;
    }
});
