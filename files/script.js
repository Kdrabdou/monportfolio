
let progress = document.querySelector(".progress1"),
    valeur = document.querySelector(".valeur1");
let ValeurStart = 0,
    ValeurEnd = 45,
    Vitesse = 50;
let interval = setInterval(() =>{
    ValeurStart++;
    valeur.textContent = `${ValeurStart}%`;
    progress.style.background = `conic-gradient(#640202 ${ValeurStart * 3.6}deg,rgb(177, 172, 172) 0deg)`;
    if (ValeurStart === ValeurEnd) {
        clearInterval(interval);
    }
}, Vitesse);


// competences 2

let progress2 = document.querySelector(".progress2"),
    valeur2 = document.querySelector(".valeur2");
let ValeurStart2 = 0,
    ValeurEnd2 = 40,
    Vitesse2 = 50;
let interval2 = setInterval(() =>{
    ValeurStart2++;
    valeur2.textContent = `${ValeurStart2}%`;
    progress2.style.background = `conic-gradient(#640202 ${ValeurStart * 3.6}deg, rgb(177, 172, 172) 0deg)`;
    if (ValeurStart2 === ValeurEnd2) {
        clearInterval(interval2);
    }
}, Vitesse2);


// competences 3

let progress3 = document.querySelector(".progress3"),
    valeur3 = document.querySelector(".valeur3");
let ValeurStart3 = 0,
    ValeurEnd3 = 40,
    Vitesse3 = 50;
let interval3 = setInterval(() =>{
    ValeurStart3++;
    valeur3.textContent = `${ValeurStart3}%`;
    progress3.style.background = `conic-gradient(#640202 ${ValeurStart * 3.6}deg, rgb(177, 172, 172) 0deg)`;
    if (ValeurStart3 === ValeurEnd3) {
        clearInterval(interval3);
    }
}, Vitesse3);

// gestion de l'heure

function afficheHeure() {
    const maintenant = new Date();
    const options = {
        year : 'numeric',
        month : 'long',
        day : 'numeric',
        hour : '2-digit',
        minute : '2-digit',
        second : '2-digit'
    } ;
    const heure = maintenant.toLocaleDateString('fr-FR', options);
    document.getElementById('heure').innerText = heure;
}

setInterval(afficheHeure, 1000);
afficheHeure();

// affiche socials icones

let btnaffiche = document.getElementById("affiche"),
    elemntssocials = document.getElementById("masquer");
btnaffiche.addEventListener('click', ()=>{
    if(elemntssocials.classList.contains('masquer')){
        elemntssocials.classList.remove('masquer');
        btnaffiche.innerHTML = 'Masquer <i class="fa fa-caret-left">';
    }else{
        elemntssocials.classList.add('masquer');
        btnaffiche.innerHTML = 'Afficher <i class="fa fa-caret-right">';
    }
});

// scroll animation

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// gestion du formulaires

emailjs.init("ocIC_JSOWrZ1F2FY8");
document.getElementById("formulaire").addEventListener('submit', function(event){
    event.preventDefault();
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    emailjs.send("service_7f4vv2c", "template_aubq0ag",{
        from_name : nom,
        from_email : email,
        message : message
    }).then((email_message) => {
        document.getElementById("email_message").innerHTML = '<div class="success">Messge envoyé avec succès !</div>';
        document.getElementById("formulaire").reset();
    }).catch((error) => {
        document.getElementById("email_message").innerHTML = '<div class="erreur">Une erreur est survenue. Réessayez plus tard !</div>';
    });
});