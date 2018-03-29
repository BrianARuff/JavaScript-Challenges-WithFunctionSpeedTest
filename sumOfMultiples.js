//sum of multiples

    const sumMul = (n,m) => {
      if (n > m) { return 'INVALID' };
      let sum = 0;
      let ctr = n;
      while (ctr < m) {
        sum += ctr;
        ctr += n;
      }
      return sum
    }
