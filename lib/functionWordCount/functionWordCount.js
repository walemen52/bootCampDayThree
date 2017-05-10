/*This is a function that takes in a string argument and counts the occurences of each word in the string. 
The function should return a JSON object showing the words identified, and their occurrences.
Author: Olawale Animashaun
Task at Andela Boot camp Day 3*/
const words = (word) => {
	var countWords = {};
	var newWord = '';
	word = word.toString().replace(/\t|\n/g, ' ')
	let words = word.split (" ");

		for(let i = 0; i < words.length; i++){
			newWord = words[i];
			if (newWord !== '' ){
				if(!countWords.hasOwnProperty(newWord)){
					countWords[newWord] = [];
				}
				countWords[newWord]++;
			}
		}
	return countWords;
}