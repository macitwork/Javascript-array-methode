import {inventory} from "main.js";

//Opdracht 4a:** Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`.
function generateTVName(brand, type, name) {
    return `${brand} ${type} - ${name}`;
}
const brand1 = "Philips";
const type1 = "43PUS6504/12";
const name1 = "4K TV";

const brand2 = "Nikkei";
const type2 = "NH3216SMART";
const name2 = "HD smart TV";

const brand3 = "Samsung";
const type3 = "QE55Q60T";
const name3 = "4K QLED TV";

const brand4 = "Hitachi";
const type4 = "43HAK6152";
const name4 = "Ultra HD SMART TV";

const brand5 = "Philips";
const type5 = "50PUS7304/12";
const name5 = "The One 4K TV";

const brand6 = "Philips";
const type6 = "55PUS7805";
const name6 = "4K LED TV";

const brand7 = "Brandt";
const type7 = "B2450HD";
const name7 = "LED TV";

const brand8 = "Toshiba";
const type8 = "32WL1A63DG";
const name8 = "HD TV";



console.log(generateTVName(brand1, type1, name1));
console.log(generateTVName(brand2, type2, name2));
console.log (generateTVName(brand3, type3,name3));
console.log(generateTVName(brand4, type4, name4));
console.log(generateTVName(brand5, type5, name5));
console.log(generateTVName(brand6, type6, name6));
console.log(generateTVName(brand7, type7, name7));
console.log(generateTVName(brand8, type8, name8));

//4b:** Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals `379` of `159`) teruggeeft in het format `€379,-` of `€159,-`.






//Opdracht 4c:** Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)`
//etc. Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
//schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`. _Let op:_ om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.

function generateTvSizes(sizes) {
    if (sizes.length === 1) {
        const inches = sizes[0];
        const cm = Math.round(inches * 2.54);
        return `${inches} inch (${cm} cm)`;
    } else {
        const sizeStrings = sizes.map(inches => {
            const cm = Math.round(inches * 2.54);
            return `${inches} inch (${cm} cm)`;
        });
        return sizeStrings.join(' | ');
    }
}
