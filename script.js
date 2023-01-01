// red,blue,orange,white,gray,purple

let wordList = prompt("enter an amountEnter your list of words with commas as separator");

let wordArray = wordList.split(",");

let maxLength = 0;

let wordStar = '';

wordArray.forEach((item)=>{

    if(maxLength < item.length)
    {
        maxLength = item.length
    }
});

maxStartLength = maxLength + 4;
wordStar +=   "*".repeat(maxStartLength);
wordStar += "\n";
let space = '';

 for(let index=0; index < wordArray.length; index++)
{
    let spaceNumber = maxStartLength - wordArray[index].length - 3 ;
    space = ' '.repeat(spaceNumber)

    wordStar +=  "* " + wordArray[index] + space + "* \n";
}

wordStar = wordStar + "*".repeat(maxStartLength);

 console.log(wordStar);