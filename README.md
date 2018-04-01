# JavaScript-Challenges-WithTest

As of April 1st, 2014, I will try to post only the fastest method of solving said challenge that is I come by. I acheive this by 
running the following bit of code below.

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
    
This allows me to compare my answers to others (at large scales) and determine the true best answer. Furthermore, I am no longer
doing freecode camp challenges, but am doing strictly code wars challenges.
