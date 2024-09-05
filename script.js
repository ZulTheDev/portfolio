// age function
let birth = new Date('2006-12-28');
let current = new Date();
let age = Math.floor((current - birth) / (1000 * 60 * 60 * 24 * 365.25));
document.getElementById("age").innerHTML = age;
