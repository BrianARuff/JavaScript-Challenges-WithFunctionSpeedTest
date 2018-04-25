Below are two good answer for getting the solution to the sum of the two smallest numbers in an array. The first one being vastly superior in terms of time complexity.

    function functionOne(numbers) {  
          var smallestNumber = 0,
              secondSmallest = 0;

          smallestNumber = Math.min(numbers[0], numbers[1]);
          secondSmallest = Math.max(numbers[0], numbers[1]);

          for (var index = 2; index < numbers.length; index++) {
            if (numbers[index] < smallestNumber) {
              secondSmallest = smallestNumber;
              smallestNumber = numbers[index];
            } else if (numbers[index] < secondSmallest) {
              secondSmallest = numbers[index];
            }
          }

          return (smallestNumber + secondSmallest);
        };

        function functionTwo(numbers){  
          numbers = numbers.sort(function(a, b){return a - b; });
          return numbers[0] + numbers[1];
        }

        var iterations = 1000000;
        console.time('Function #1');
        for(var i = 0; i < iterations; i++ ){
            functionOne([19,2,5,11,12,13]);
        }
        console.timeEnd('Function #1');

        console.time('Function #2');
        for(var i = 0; i < iterations; i++ ){
            functionTwo([19,2,5,11,12,13]);
        }
        console.timeEnd('Function #2');
