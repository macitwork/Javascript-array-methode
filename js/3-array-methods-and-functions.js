import {inventory} from "main.js";

const totalStock = inventory.reduce((total, tv) => total + tv.originalStock, 0);
const totalSold = inventory.reduce((total, tv) => total + tv.sold, 0);
const remainingStock = totalStock - totalSold;

console.log(`Er moeten nog ${remainingStock} tv's verkocht worden.`);