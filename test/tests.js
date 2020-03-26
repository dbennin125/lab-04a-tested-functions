const test = QUnit.test;

function subtract(x, y) {
    return (x - y);
}

/* 
    In: 5, 3
    Out: 2
*/    

test('Subtract Function', function(assert) {
    //Arrange Think and plan
    // Set up your parameters and expectations
    const x = 5;
    const y = 3;
    const expected = 2;
    //Act 
    // Call the function you're testing and set the result to a const
    const differnce = subtract(x, y);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(differnce, expected);
});

// Test for multiple

const test1 = QUnit.test;

function multiply(w, p) {
   return w * p;
}

/* 
    In: 2, 2
    Out: 4
*/    

test1('multiply function', function(assert) {
        //Arrange Think and plan
        //Set up your parameters and expectations
    const w = 2;
    const p = 2;
    const expected = 4;
        //Act 
        // Call the function you're testing and set the result to a const
        const mult = multiply(w, p);
        //Assert
        // Make assertions about what is expected valid result
    assert.equal(mult, expected);
});

const test2 = QUnit.test;
 
// Test for divide

function divde(firstnumber, secondnumber) {
   return (firstnumber / secondnumber);
   
  
}

/* 
    In: (6 / 2) (37 / 0)
    Out: 3 , 0|Infinity
*/    

test2('divde function', function(assert) {
        //Arrange 
    const firstnumber = (6, 37);
    const secondnumber = (2, 0);
    const expectedfirst = (3, Infinity); 
    
        //Act 
        const divi = divde(firstnumber, secondnumber);

        //Assert
    assert.equal(divi, expectedfirst);
});



//test for "isEven" portion

const test3 = QUnit.test;

//the function for testing "isEven"

function isEven(x) {
    if (x % 1 === 0) {
        return true;
    }
    else {
       return false;
   }
    
}
// In: 6 Expected 7/false

test3('isEven', function(assert)
   {
    //arrange
    const totally = 6
    const expectedvalue =  true;
    //Act
    const evenOrOdd = isEven(totally);
    //assert...getting a bit lost.
    assert.equal(evenOrOdd, expectedvalue);
});

const test4 = QUnit.test;

 function getEvenNumbers(evenSteven) {
     const evenNumberArray = [];
     for(let i = 0; i <evenSteven; i++){
         const itIsEven = i % 2 === 0;
         const itIsZero = i !== 0;
         if(itIsEven) {
         evenNumberArray.push(i);
     }
     return [evenNumberArray];
    }
 }

 test4('getEvenNumbers', function(assert) {
     const somenumber = [2, 4, 6, 8];
     const result = getEvenNumbers(9);
     assert.deepEqual(somenumber, result)

    
});


// I got really lost at this point... 
//function for getNumbers() {
    //return [2, 4, 6, 8];
//}
//function getNumbers(upperLimit) {
    //const array = [];
    //for (let i =2 ; i < upperLimit; i++) {
        //if (let i)
    //}
//}