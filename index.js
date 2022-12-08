var valyuta = document.querySelector(".valyuta");
console.log(valyuta);
var priceUsd = 11315.0;
var priceEur = 12350.0;
var priceRub = 190.0;

var convertation =
  prompt(`Assalom aleyko'm. Valyuta shahobchasiga xush kelibsiz. Qaysi valyutani sotib olasiz ? 

Markaziy bankning 08.12.2022 yilga nisbatan valyuta narxlari: 
USD - 1 $ sotib olish kursi -  ${priceUsd} so'm; 
EUR - 1 € sotib olish kursi -  ${priceEur} so'm; 
RUB - 1 ₽ sotib olish kursi -  ${priceRub} so'm;

Ma'lumotni USD - EUR - RUB ko'rinishida kiriting!`);
// console.log(typeof convertation);

var cash = prompt("Mablag'ingizni kiriting (so'mda)");
// console.log(typeof cash);

var priceUsd = cash / priceUsd;
console.log(priceUsd);
var priceEur = cash / priceEur;
console.log(priceEur);
var priceRub = cash / priceRub;
console.log(priceRub);

if (convertation === "usd") {
  valyuta.textContent = `${cash} so'mingiz uchun Siz ${priceUsd.toFixed(1)} $ valyuta xarid qila olasiz!`;
} else if (convertation === "eur") {
  valyuta.textContent = `${cash} so'mingiz uchun Siz ${priceEur.toFixed(1)} € valyuta xarid qila olasiz!`;
} else if (convertation === "rub") {
  valyuta.textContent = `${cash} so'mingiz uchun Siz ${priceRub.toFixed(1)} ₽  valyuta xarid qila olasiz!`;
} else {
    alert("Noto'g'ri valyuta qiymatini kiritingiz. Boshqatan urinib ko'ring! ");
    valyuta.textContent = `Noto'g'ri valyuta qiymatini kiritingiz. Boshqatan urinib ko'ring!`;
}
