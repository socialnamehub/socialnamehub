// Username Generator
function generateUsername() {
    const adjectives = ["cool","fast","smart","king","dark"];
    const nouns = ["lion","coder","ninja","dev","hero"];
    const number = Math.floor(Math.random()*100);
    const username = adjectives[Math.floor(Math.random()*adjectives.length)] + "_" +
                     nouns[Math.floor(Math.random()*nouns.length)] + number;
    document.getElementById("output").innerText = username;
}

// Bio Generator
function generateBio() {
    const bios = [
        "🚀 Turning ideas into reality | Digital growth mindset",
        "🌟 Dream big, work hard, stay humble",
        "🎯 Living life one goal at a time",
        "💻 Coding my way to success",
        "🔥 Passion + Hustle = Results"
    ];
    const bio = bios[Math.floor(Math.random()*bios.length)];
    document.getElementById("output").innerText = bio;
}

// Password Generator
function generatePassword() {
    const length = document.getElementById("length").value;
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let pass = "";
    for (let i=0; i<length; i++) {
        pass += chars.charAt(Math.floor(Math.random()*chars.length));
    }
    document.getElementById("output").innerText = pass;
}

// Password Strength Checker
function checkStrength() {
    const pass = document.getElementById("passCheck").value;
    let strength = "Weak";
    if(pass.length >= 8 && /[A-Z]/.test(pass) && /[0-9]/.test(pass) && /[!@#$%^&*()]/.test(pass)) {
        strength = "Strong";
    } else if(pass.length >= 6) {
        strength = "Medium";
    }
    document.getElementById("output").innerText = "Strength: " + strength;
}
