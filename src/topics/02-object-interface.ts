let skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
	name: string;
	hp: number;
	skills: string[];
	homeTown?: string;
	// homeTown?: string; => con el ? defininos que es opcional
}
const struder: Character = {
	name: 'Strider',
	hp: 100,
	skills: ['Bash', 'Counter']
};
struder.homeTown = 'Rivendell';

console.table(struder);

export {};
