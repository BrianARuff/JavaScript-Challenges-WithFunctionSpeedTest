
    // my initial solution, not very concise, but the performance is superior compared to the other methods.
    function replace(s){
      var str = s.split('');
      var vowels = /^[aeiou]$/i;
      let newStr = str.map(letter => {
        if (letter.match(vowels)){
          letter = '!';
          return letter;
        }
        return letter;
      });
      return newStr.join('');
    }
    
    // more concise
    const replace = str => (str
      .split('')
      .map(letter => letter
      .replace(/[aeiou]/ig, '!'))
      .join('')
    )

    //most concise answer
    const replace = str => str.replace(/[aeiou]/ig, '!')
