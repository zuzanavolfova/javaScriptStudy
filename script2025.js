// TASK separate each word with space --------------------------------------------------------------------------------
const originalAlphabet ="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"

const newAlph = originalAlphabet.replaceAll(",", ", ")
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let newAlphabet=[]

// TASK Caesar's cipher ----------------------------------------------------------------------------------------------
function caesarCipher(s, k){
    newAlphabet=[...alphabet];

    for(let i=0; i < k; i++){
     let firstLetter = newAlphabet[0]
     newAlphabet.shift();
     newAlphabet.push(firstLetter)
    }

    let result = ""
    let stringData = s;
    
    for(let i = 0; i < stringData.length; i++){
        if(stringData[i].match(/[^a-zA-Z]/)){
            result += stringData[i]
        } else {
            const isUpperCase = stringData[i] === stringData[i].toUpperCase();
            let position = alphabet.indexOf(stringData[i].toLowerCase())
            if(isUpperCase){
                result += newAlphabet[position].toUpperCase()
            } else result += newAlphabet[position]
        }
    }

    return result}

    caesarCipher("middle-Outz", 2)
    
    //TASK counter changes from pattern --------------------------------------------------------------------------------
    function counterChanges(s){
        let result = 0;
        let pattern ="SOS";
        let k = 3;
        let substringData = "";
        for(let i = 0; i < s.length; i = i+3){
            substringData= s.substring(i, k)
            if(substringData != pattern){
              for(let j = 0; j<3; j++){
                if(substringData[j] !== pattern[j]){ result ++}
              }
            }
            k = k + 3;
        }        
        return result
    }

    counterChanges("OOSDSSOSOSWEWSOSOSOSOSOSOSSSSOSOSOSS")


    //TASK Check if contains pattern -----------------------------------------------------------------------------------------
    // We say that a string contains the word pattern if a subsequence of its characters spell the word hackerrank. Remember that a subsequence maintains the order of characters selected from a sequence. 

    function checkIfContain(s){
        const pattern = "pattern";
        let dataString = s
        let result = "NO";
        for(let i=0; i < pattern.length; i++){       
            let position = dataString.indexOf(pattern[i])
            if(position === -1){
                result="NO";
                break
            } else {
            dataString = dataString.slice(position+1)
            result="YES"}
        }
        // console.log(result)
        return result
    }

    checkIfContain('ksdfhkjsdjj')
    checkIfContain('paattefdgfdrnn')

    //TASK sort data - numbers ----------------------------------------------------------------------

    let data=[1,5,68,2,15,454,874,25]
    let sortedData = data.sort(function(a,b){return a - b});

    //TASK Consider an array of numeric strings where each string is a positive number with anywhere from to digits. Sort the array's elements in non-decreasing, or ascending order of their integer values and return the sorted array.

    let dataString=["2","56","10"];
    let dataSortedString =
        dataString.sort((a,b)=>{
            if(a.length === b.length){
                return a.localeCompare(b)
            } return a.length - b.length
    })

    // TASK Insert element into sorted list -------------------------------------------------------------------
    function insertionSort1(n, arr){
        let number = arr[n-1];
        let newArray = [...arr];
        for(let i = n - 2; i>=0; i--){
            if(arr[i] > number){
                newArray[i+1] = arr[i]
                if(i === 0){
                    newArray[0]=number;
            } else {newArray[i+1] = number;
                break
            }
        }   
    }
    // insertionSort1(101, [2, 4, 8, 12, 15, 19, 21, 24, 26, 29, 30, 32, 35, 36, 41, 44, 49, 52, 57, 58, 59, 64, 65, 68, 73, 77, 80, 82, 85, 88, 93, 97, 101, 105, 108, 111, 115, 118, 122, 127, 130, 131, 132, 134, 135, 136, 138, 141, 144, 146, 151, 153, 158, 160, 165, 169, 171, 176, 179, 184, 187, 190, 194, 197, 200, 205, 210, 215, 217, 222, 225, 230, 231, 236, 239, 243, 244, 246, 248, 253, 254, 256, 258, 262, 263, 267, 272, 274, 277, 280, 284, 285, 289, 291, 295, 297, 301, 305, 310, 312, 279])
    
//TASK search position of sum ------------------------------------------------------------------------------------------------------------------
// get total summary and array of numbers. Return position of numbers which sum is equal to summary.
    function icecreamParlor(m, arr) {
        let result = [];
        let arrData = [...arr];
        for(let j=0; j < arrData.length-1; j++){
            for(let i = j+1; i <arrData.length; i++){
                if((arrData[j] + arrData[i]) === m) {
                result = [j+1, i+1]
            }
        }}
        return result
    }

    // icecreamParlor(4, [1,4,5,3,2])

// TASK Given two arrays of integers, find which elements in the second array are missing from the first array. ------------------------------------------
    const arrayA = [1, 3, 6, 10 ]
    const arrayB = [1, 5, 6, 11, 12]
    function  missingNumbers(arr, brr){
        for(let i = 0; i <arr.length; i++){
            let isInArray = brr.includes(arr[i])
            if(isInArray){
                brr.splice(brr.indexOf(arr[i]),1)
            }
        }
    let result = brr.sort(function(a,b){return a - b})
    return result
    }
    // missingNumbers(arrayA, arrayB)

//TASK print the 256th day of the year in the format dd.mm.yyyy 
// //From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia. In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:
// Divisible by 400.
// Divisible by 4 and not divisible by 100.
// Given a year, find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .
    function dayOfProgramer(year){
        if (year < 1918) {
            // Julian calendar (before 1918)
            if (year % 4 === 0) {
                return `12.09.${year}`;
            } else {
                return `13.09.${year}`;
            }
        } else if (year === 1918) {
            return `26.09.${year}`;
        } else {
            // Gregorian calendar
            if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
                return `12.09.${year}`;
            } else {
                return `13.09.${year}`;
            }
        }
    }
    dayOfProgramer(2016)


// TASK pangram - text consist of each letter of alphabet
    function isPangram(text) {
        const lowerCaseText = text.toLowerCase();
        const containLetters = [];
        
        for (let item of lowerCaseText) {
            if (item >= 'a' && item <= 'z') {
                containLetters.push(item);
            }
        }
        let result = [...new Set(containLetters)] // remove duplicities
    }

    // isPangram("We promptly judged antique ivory buckles for the next prize")

    // TASK print the values of the array ----------------------------------------------------------------------------
    const shoppingCartArray = [
        { name: 'banana', qty: 2 },
        { name: 'apple', qty: 5 },
        { name: 'cherry', qty: 0 },
      ];
      for (let i = 0; i < shoppingCartArray.length; i++) {
        // console.log(shoppingCartArray[i].name, shoppingCartArray[i].qty);
      } 
    const shoppingCartArray2 = [
        { key: 'banana', val: 2 },
        { apple: 'banana', val: 5 },
        { cherry: 'banana', val: 0 },
      ];
    
      for (let i = 0; i < shoppingCartArray.length; i++) {
        // console.log(shoppingCartArray2[i][Object.keys(shoppingCartArray2[i])[0]], shoppingCartArray2[i][Object.keys(shoppingCartArray2[i])[1]]);
      }

      // TASK count array values - use reduce method
    function bill(bill, k, b){
        let billCopy = [...bill];
        let sharedCosts = (billCopy.reduce((a,b)=> a + b,0) - billCopy[k])/2
        console.log(sharedCosts, billCopy[k])
        if((sharedCosts ) === b){
            console.log("Bon Appetit")
        } else console.log(b - (sharedCosts))
    }

    //TASK find how meny duplicates are in the array

    function socks(n, ar) {
        let array = [...ar];
        let result = 0;
        for(let i=0; i < array.length; i++){
            for(let j = i+1; j < array.length; j++){
                if(array[i]===array[j]){
                    array.splice(j,1)
                    result ++
                    break
                }
            }
        }
        return result
    }