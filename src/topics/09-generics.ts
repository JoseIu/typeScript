export const whatsMyType = <T>(argument: T): T => {
	return argument;
};

const amIstring = whatsMyType<string>('Hola Mundo');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIstring.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));
