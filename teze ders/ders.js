
let weight = +prompt("Ceknizi yazin: ");
let height = +prompt("Boyunuzu yazin: ");
let BMI = weight / (height * height);
let netice;

if (BMI < 18) {
    netice = 'Siz,ceki azligindan eziyyet cekirsiniz'
} else if (BMI > 18 && BMI <= 20) {
    netice = "Sizin cekiniz azdir. Lakin saglamliq ucun zererli deyl";
} else if (BMI > 20 && BMI <= 26) {
    netice = "Sizin cekiniz normaldir. Tebrikler";
} else if (BMI > 26 && BMI <= 28) {
    netice = "Sizin artiq cekiniz var";
} else if (BMI > 28 && BMI <= 31) {
    netice = "Siz, 1 ci dereceli artiq cekiden eziyyet cekirsiniz";
} else if (BMI > 31 && BMI <= 36) {
    netice = "Siz, 2 ci dereceli artiq cekiden eziyyet cekirsiniz" ;
} else if (BMI > 36 && BMI <= 41) {
    netice = "Siz, 3 cu dereceli artiq cekiden eziyyet cekirsiniz";
} else if (BMI > 41) {
    netice = "Siz, 4 cu dereceli artiq cekiden eziyyet cekirsiniz";
}

document.getElementById('ziko').innerHTML = netice;