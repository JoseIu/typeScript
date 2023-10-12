export interface Passenger {
	name: string;
	childeren?: string[];
}

const passender1: Passenger = {
	name: 'Joselu'
};
const passender2: Passenger = {
	name: 'Fernando',
	childeren: ['Natalia', 'Elizabeth']
};

const printChildren = (passender: Passenger) => {
	const howMnayChildren = passender.childeren?.length || 0;

	console.log(howMnayChildren);
};

printChildren(passender2);
printChildren(passender1);
