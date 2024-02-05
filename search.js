 /* const lyrics = "tumi bondhu kala pakhi. ami jeno ki.bosonto kal e tumi bolta pai ne";

const searchString = 'Pakhi';

const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLowercase = searchString.toLowerCase();

const doesExist = lyricsLowerCase.includes(searchStringLowercase);
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine); */



// Index find 

/* console.log(lyrics.indexOf('ami'));

if(lyrics.indexOf('Kala') !==-1)
{
    console.log('Exists insider the string')
}
else {
    console.log('can not find it.');
} */

// console.log(lyrics.startsWith('tumi'));


// const fileName = 'mybiofile.pdf';
// const otherFile = 'mypic.pdf';

// fileName.endsWith('.pdf');

const lyrics = "tumi bondhu kala pakhi. ami jeno ki.bosonto kal e tumi bolta pai ne.";
const parts = lyrics.split(' ');
console.log(parts);

const sentances = lyrics.split('.');
console.log(sentances);

const partial = lyrics.slice( 5, 8);
console.log(partial);

// line add system
 const line =[
    'Tumi bondhu kala pakhi',
    'Ami jeno ki',
    'Bosonto kal e tumi bolta pai ne',
    ''
  ]
const newSong = line.join(':');
console.log(newSong);