// function addNumbers(a: number, b: number) {
// 	return a + b;
// }
// const addNumbers = (a: number, b: number): number => a + b;

const multiply = (firtnNumber: number, secondNumber?: number, base: number = 2): number => firtnNumber * base;

// const result: number = addNumbers(1, 2);
// const multiplyResult: number = multiply(5);
// console.log({ result, multiplyResult });

interface Character {
	name: string;
	hp: number;
	showHP: () => void;
}
const healCharacter = (character: Character, amount: number) => {
	character.hp += amount;
};

const character: Character = {
	name: 'Strider',
	hp: 50,
	showHP() {
		console.log(`Tienes ${this.hp}`);
	}
};

healCharacter(character, 20);
character.showHP();

export {};
