  //replace all 0,1,5 with 'O', 'I', 'S', repspectively
    
    correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

    const correct = string => {
      return string.split('').map(char => {
        if (char.match(/5/g)){
          return char.replace(/5/g, 'S');
        } else if (char.match(/0/g)){
          return char.replace(/0/g, 'O');
        } else if (char.match(/1/g)){
          return char.replace(/1/g, 'I');
        } else {
          return char;
        }
      }).join('');
    };
