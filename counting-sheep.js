//these image links show that using the === check is makes the function (at large scale) run much faster, even compared to the
// newer .filter() syntax.
// https://ibb.co/b0YX27 - plain check
// https://ibb.co/ejNEFS - loose check
// https://ibb.co/d56kN7 - strict check

    function functionOne(arrayOfSheep) {
      return arrayOfSheep.filter(sheep => sheep === true).length;
    }

    function functionTwo(arrayOfSheep) {
      var num = 0;

      for(var i = 0; i < arrayOfSheep.length; i++)
        if(arrayOfSheep[i] === true)
          num++;
      return num;
    }



    // functions to test speed of functions above, also 
    var iterations = 1000000;
    console.time('Function #1');
    for(var i = 0; i < iterations; i++ ){
        functionOne(([true,  true,  true,  false,
                  true,  true,  true,  true ,
                  true,  false, true,  false,
                  true,  false, false, true ,
                  true,  true,  true,  true ,
                  false, false, true,  true ]));
    }

console.timeEnd('Function #1');

console.time('Function #2');
for(var i = 0; i < iterations; i++ ){
    functionTwo(([true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ]));
}

console.timeEnd('Function #2');




