export interface Product {
	description: string;
	price: number;
}

const phone: Product = {
	description: 'Nokia A1',
	price: 150.0
};

const tabblet: Product = {
	description: 'Ipad Air',
	price: 250.0
};

interface TaxCalculationsOptions {
	tax: number;
	products: Product[];
}

export const taxCalculator = (options: TaxCalculationsOptions): number[] => {
	const { products, tax } = options;

	let total = 0;

	products.forEach(({ price }) => {
		total += price;
	});
	return [total, total * tax];
};

const shoppingCart = [phone, tabblet];
const tax = 0.15;

const [total, finalTax] = taxCalculator({ products: shoppingCart, tax: tax });

// console.log(`Total: ${total}`);
// console.log(`Tax: ${finalTax}`);
