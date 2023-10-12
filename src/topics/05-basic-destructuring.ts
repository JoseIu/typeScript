interface AudioPlayer {
	audioVolume: number;
	songDuration: number;
	song: string;
	details: Deatails;
}

interface Deatails {
	author: string;
	year: number;
}

const audioPlayer: AudioPlayer = {
	audioVolume: 90,
	songDuration: 36,
	song: 'Mess',
	details: {
		author: 'Ed Sheeren',
		year: 2015
	}
};

//DESTRUCTURING

// const { author } = audioPlayer.details;
const {
	audioVolume,
	song,
	details: { author }
} = audioPlayer;

console.log(`Volumen: ${audioVolume}, de la canción: ${song} de: ${author}`);

export {};
