document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("waytwo").addEventListener("click", () => {
    window.location.href = "../HTML/RICKROLL.html";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("wayone").addEventListener("click", () => {
    window.location.href = "../HTML/RICKROLL.html";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("waythree").addEventListener("click", () => {
    window.location.href = "../HTML/RICKROLL.html";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("user").addEventListener("click", () => {
    window.location.href = "http://localhost/projective/HTML/Register.html";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("LOG-OUT").addEventListener("click", () => {
    window.location.href = "../Php/LOGOUT.php";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("waytwoRE").addEventListener("click", () => {
    window.location.href = "http://localhost/projective/HTML/RE2-REMAKE/RPD-1F.html";
  });
});


document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('search-btn').addEventListener('click', function() {
        const query = document.getElementById('sbar').value.toLowerCase().trim();
        
    const routes = {
        'resident evil 2':          'waytwo',
        'resident evil 2 remake':   'waytwoRE',
        're2':                      'waytwo',
        're 2':                     'waytwo',
        'resident evil 3':          'waythree',
        're3':                      'waythree',
        're 3':                     'waythree',
        'resident evil':            'wayone',
        're':                       'wayone',
        'lidl':                     'partners',
        };


        const targetId = routes[query];

        if (targetId) {
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        } else {
            alert("Not found!");
        }
    });

    document.getElementById('sbar').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('search-btn').click();
        }
    });

});