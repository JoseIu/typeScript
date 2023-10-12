import { Product, taxCalculator } from './06-fuction-destructuring';

const shoppingCart: Product[] = [
	{
		description: 'Nokia',
		price: 100
	},
	{
		description: 'iPad',
		price: 150
	}
];

const tax = 0.15;
const [total, finalTax] = taxCalculator({ products: shoppingCart, tax });

console.log(`Total: ${total}`);
console.log(`Tax: ${finalTax}`);
