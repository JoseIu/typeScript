// export class Person {
// 	public name: string;
// 	private address: string;

// 	constructor() {
// 		this.name = 'Fernando';
// 		this.address = 'New York';
// 	}

//Por parametros
// 	constructor(name: string, addres: string) {
// 		this.name = name;
// 		this.address = addres;
// 	}

// }
export class Person {
	constructor(
		public firstName: string,
		public secondName: string,
		private addres: string
	) {}
}

export class Hero {
	constructor(
		public alterEgo: string,
		public age: number,
		public realName: string,
		public person: Person
	) {}
}

const tony = new Person('Tony', 'Stark', 'Sevilla');

const iroman = new Hero('Ironman', 45, 'Tony', tony);
console.log(iroman);
