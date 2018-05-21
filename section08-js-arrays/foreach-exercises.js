/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    const doubled = [];
    
    arr.forEach(function(value, index) {
        doubled.push(value * 2);
    });
    
    return doubled;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    const even = [];
    
    arr.forEach(function(value) {
        if (value % 2 === 0) {
            even.push(value);
        }
    });
    
    return even;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    const fl = [];

    arr.forEach(function(value) {
        if (value.length > 2) {
            fl.push(value.substring(0,1) + value.substring(value.length - 1, value.length));
        } else {
            fl.push(value);
        }
    });

    return fl;
}

// console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy'])); // ["ct", "mt", "tm", "uy"]
// console.log(showFirstAndLast(['hi', 'goodbye', 'smile'])); // ['hi', 'ge', 'se']

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    arr.forEach(function(element) {
        element[key] = value;
    });

    return arr;
}

// console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    const vowels = ['a','e','i','o','u'];
    const result = {};

    [...str].forEach(function(letter) {
        letter = letter.toLowerCase();

        if (vowels.includes(letter)) {
            // result[letter] = result[letter] || 0;
            // result[letter] += 1;

            if(letter in result) {
                result[letter]++;
            } else {
                result[letter] = 1;
            }
        }
    });

    return result;
}

// console.log(vowelCount('Elie'));
// console.log(vowelCount('Tim'));
// console.log(vowelCount('Matt'));
// console.log(vowelCount('hmm'));
// console.log(vowelCount('I am awesome and so are you'));
