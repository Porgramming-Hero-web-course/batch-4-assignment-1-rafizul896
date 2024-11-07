{
    
    const countWordOccurrences = (sentence: string, word: string): number => {
        const wordArr = sentence.toLowerCase().split(' ');
        const targetWord = word.toLowerCase();

        const total = wordArr.filter(w => w === targetWord).length;
        return total;
    }

}