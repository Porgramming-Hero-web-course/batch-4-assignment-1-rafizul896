"use strict";
{
    const countWordOccurrences = (sentence, word) => {
        const wordArr = sentence.toLowerCase().split(/\W+/);
        const targetWord = word.toLowerCase();
        const total = wordArr.filter(w => w === targetWord).length;
        return total;
    };
}
