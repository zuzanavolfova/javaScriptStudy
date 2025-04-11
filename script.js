const value1 = 10;
const value2 = 20;

const numbers = [5, 4, 0, 5, 1, 1, 1];

const candles_arr = [3, 2, 1, 3];
const duplicateNumbers = [1, 10, 0, 7, 9, 11, 5];

/*let numbersConst = document.querySelector(".numbers__const");
let numbersUI = document.querySelector(".numbers__field");
numbersConst.textContent=numbers;
/*
Napis funkci, ktera bude prebirat na vstupu pole. Bude vracet true, pokud obsahuje duplikatni cislo, false v opacnem pripade.
*/

function checkDuplicate (duplicateNumbers){
/* zkontroluju jestli je pole naplnene.*/
    if (!duplicateNumbers.length){
        alert("nejsou zadané hodnoty")
        return 0
    } 
/*1. vezmu posledni hodnotu a porovnam ji se vsema predchozima.*/
    let vysledek;
    for (let last = duplicateNumbers.length-1; last>0; last--){
        /*vezmu druhou hodnotu a porovnam ji.*/
        let a = last - 1;
        while (a >= 0){
            if (duplicateNumbers[last]===duplicateNumbers[a]){
                // console.log('hura je to tam');
                return true;
            } else {
                // console.log(duplicateNumbers[last]+ " " + duplicateNumbers[a] + " " + 'nic')
                a--;
            }
        }
    }
    return false
}

// console.log("checkDuplicate" + " " + checkDuplicate(duplicateNumbers));
// console.log("checkDuplicate" + " " + checkDuplicate(numbers));

/* 
Serad cisla v poli vzestupne a vrat vysledek
*/

function sortToMax(el1, el2) {
    if (el1 > el2)
    {return 1;
    }else {
        return -1;
    }
}
// console.log(numbers);
function sortToMin(el1, el2) {
    if (el1 < el2)
    {return 1;
    }else {
        return -1;
    }
}
// console.log(numbers);
/*
Modifikuj predchozi funkci tak, aby slo rozhodnot, zda se radi 
vzestupne nebo sestupne
*/
 
// TODO napis si svoji vlastni funkci, ktera bude prebirat pole ktere chces seradit a funkci ci parametr, ktery bude rikat zda sestupne nebo vzestupne.
// bude vracet nove serazene pole
// inspirace quicksort, bubble sort

function split (array, end){
    let pivotValue = array[array.length-1];
   
    let bigger = [];
    let smaller = [];
    let pivotIndex = end;
    for (let i = 0 ; i < array.length; i++){
        if (pivotValue >= array[i]){
            smaller.push(array[i])
        } else {
            bigger.push(array[i])
        }
    }
    // console.log(smaller);
    // console.log(bigger)
    // presun pivota mezi pole
    array = smaller.concat(bigger)
    pivotIndex = smaller[smaller.length-1];
    // console.log(array)
    // console.log(pivotIndex)

    return pivotIndex;
}

// split (numbers, 0, numbers.length-1)

function sortUI (){
    let option = document.querySelector("select[id=sort]").value;
    // console.log(option);
    if (option==0){
        numbers.sort(sortToMax);
        // console.log(numbers)
    } else {
        numbers.sort(sortToMin);
        // console.log(numbers)
    }
    numbersUI.innerHTML=numbers;
}

function compare (value1, value2){
    // if (value1>value2){
    // return true
    // } else {
    //     return false
    // }
    return value1>value2;
}

// console.log(compare(value1, value2));

function findMax (numbers){    
    let max = 0;
    for (let i = 0; i < numbers.length; i++){
        if (compare(numbers[i], max)) {
            max=numbers[i]
        } 
        // console.log(numbers[i], numbers[i+1]);
        // console.log(max)
    }
    return max
}
findMax(numbers);
// console.log(findMax(numbers));

function findMin (numbers){
    if (!numbers.length) {
        return 0;
    }
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        if (!compare(numbers[i], min)) {
            min=numbers[i]
        }
    }
    return min
}

// console.log(findMin(numbers));

/* fizz buzz */
/*Fizz buzz is a group word game for children to teach them about division.[1] Players take turns to count incrementally, replacing any number divisible by three with the word "fizz", and any number divisible by five with the word "buzz". */

/*
1. Udelat UI
-vstup uzivatele*/

// TODO vypsat vysledek do konzole a vypsat vsechny moznosti od 1 po maximumNumber
function fizzBuzz(){
// 2.najit hodnotu vstupu uzivatele
    let inputFizzBuzz =document.querySelector("input[id=fizzBuzz]").value;
    let fizzBuzzUI = document.querySelector('.fizzBuzz__item')
// 3.zjisttit zda je hosnota cislo
// 4. pokud neni cislo vrati eror
    // function checkType (){
    // }
    /* 5. pokud je cislo zjistti zda je delitelne 3 a zaroven 5*/
    if (inputFizzBuzz % 3 === 0 && inputFizzBuzz % 5 === 0) {
        //pokud plati napsat Fizz Buzz
        fizzBuzzUI.innerHTML = 'Fizz Buzz';
    } else if (inputFizzBuzz % 3 === 0) {
        //pokud neplati zjistit zda je delitelne 3
            //pokud plati napsat fizz
        fizzBuzzUI.innerHTML = 'Fizz'
    } else if (inputFizzBuzz % 5 === 0){
    //pokud neplati zjistti zda je delitelne 5
        // pokud plati napsat buzz
        fizzBuzzUI.innerHTML = 'Buzz'
    } else {
    //pokud neplati napsat cislo
    fizzBuzzUI.innerHTML = inputFizzBuzz;}
// X. vypsat vysledek do UI
}

function fizzBuzz(maximumNumber){
    let fieldFizzBuzz = [];
    for (let number = 1; number <= maximumNumber; number++) {;
    //vzit jednicku a zkontrolovat pravidla
    //opakovat dokud nedosahnu maxima
    //na konci pricist 1
    if (number % 3 === 0 && number % 5 === 0) {
        //pokud plati napsat Fizz Buzz
        fieldFizzBuzz.push('FizzBuzz');
    } else if (number % 3 === 0) {
        //pokud neplati zjistit zda je delitelne 3
            //pokud plati napsat fizz
            fieldFizzBuzz.push('Fizz');
    } else if (number % 5 === 0){
    //pokud neplati zjistti zda je delitelne 5
        // pokud plati napsat buzz
        fieldFizzBuzz.push('Buzz');
    } else{
    //pokud neplati napsat cislo
        fieldFizzBuzz.push(number);}
    }
    return fieldFizzBuzz
}
//console.log(fizzBuzz(35));


/* Napis funkci, ktera prebira 2 argumenty - pole cisel, hledane cislo. Funkce vrati true, pokud v poli exsituje alespon jeden vyskyt hledaneho cisla.
   False v opacnem pripade. Najdi nejoptimalnejsi reseni.
*/
function findNumber(field, number){
    for (let index = 0; index < field.length; index++){
        if (field[index] === number){
            return true
        }
    }
    return false
}
//const numbers = [0, 10, 1, 7, 2, 9, 11];

function findNumber2(field, number){
    let index = 0;
    for (index; index < field.length; index++){
        if (field[index] === number){
            break
        } else if (index === field.length-1)
         { return false
        }
    } return true
}
// console.log("find duplicate 2" + " " + findNumber2(numbers,155))

// let inputString = "balaklava";
// console.log('----------')
/* Napis funkci, ktera prebira 1 argument - retezec. Funkce vraci soucet vsech znaku minus vsechny vyskyty symbolu 'a'. 
   Vymysli reseni za pouziti continue.

*/
// console.log('Funkce vraci soucet vsech znaku minus vsechny vyskyty symbolu a')

function countStringWithoutA(inputString){
    //vezmi retezec a spocitej znaky
    let numberOfLetters = inputString.length;
    // console.log(numberOfLetters);
    let numberOfA = 0;
    //najdi vsechny A aspocitej je\
    let otherSymbols = 0;
   for (let i = 0; i < inputString.length; i++ ){
        if (inputString.charAt(i) !== "a"){    
            otherSymbols++;
            continue
        }
        numberOfA++;
    }
    //vypocitej cislo
    return numberOfLetters - numberOfA 
}
// console.log(countStringWithoutA('balaklava'))

let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,12],
]
function diagonalDifference(arr) {
    // rite your code here
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    for (let i = 0; i<arr.length; i++) {
        firstDiagonal = firstDiagonal + arr[i][i];
    }
    console.log("FirstDiagonal" + " " + firstDiagonal);
    // console.log(arr.length);
    let x = 0;
    for (let j = arr.length-1; j>=0; j--) {
        secondDiagonal = secondDiagonal + arr[j][x];
        // console.log(arr[j][x]);
        x++
    }
    console.log("secondDiagonal" + " " + secondDiagonal);

    let vysledek = Math.abs(firstDiagonal - secondDiagonal)
    return vysledek
}

console.log('Napis algoritmus funkce swap, ktera vymeni hodnoty 2 elementu v poli na zadanych indexech. Funkce prebira jako parametry pole, prvniIndex, durhyIndex.')

// TODO napis algoritmus funkce swap, ktera vymeni hodnoty 2 elementu v poli na zadanych indexech. Funkce prebira jako parametry pole, prvniIndex, durhyIndex.

//najdi prvek v poli
//najdi druhý prvek v poli
//vymen je
console.log("Puvodni pole"+ " " + numbers);
function swap(array, firstIndex, secondIndex){
    // let firstNew = array[secondIndex];
    // let secondNew = array[firstIndex];
    // array[firstIndex] = firstNew;
    // array[secondIndex] = secondNew;
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
    [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
    console.log("swap" + " " + array);
}

console.log('----------')

console.log('bulesort');

//vezmi prvni prvek v poli a porovnej ho s druhym
    //pokud je prvni prvek vetsi prohod je
    //pokud je mensi neprohazuj je a vezmi dalsi prvek

    console.log("Puvodni pole"+ " " + numbers);

function bublesort(arr){
    for (let a = 1; a < arr.length; a++  ){
        for (let i = 0; i < arr.length-a; i++) {
            if (arr[i]>arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            }
        }
    }
    console.log(numbers)
}
console.log('----------')

function staircase(n) {
    // Write your code here

let stair = "";
let whitespace = " ";
    for (let i = 0; i < n-1; i++){
        whitespace =  whitespace + " "
        // console.log(whitespace);
    };
    let final;
    for (let i = 0; i < n ; i++){
        let whitespaceStair = whitespace.substring(0,whitespace.length-i-1);
        stair = stair + "#";
        final = whitespaceStair + stair;
        console.log(final) 
    }
}

let pokus = "123456";
let vysledek = pokus.substring(0,pokus.length-1);

// console.log('---- Birthday cake ------')

function birthdayCakeCandles(candles) {
    // Write your code here
   let maxCandle = findMax(candles);
   let result = 0;
   for (let i = 0; i < candles.length; i++){
    if (maxCandle === candles[i]){
        result ++;
    }
   }
   console.log(result);
   return result
}
console.log('---- Time ------')

//vytahnout posledni 2 pismena a ulozit do promenne (substring)
//porovnat promennou
    //pokud se jedna o AM vypsat cislo bez AM
    //pokud se nejedna o AM:
        //vytahnout prvni 2 symboly
        //ulozit je do ppromenne a pricist 12
    //vypsat novou hodnotu bez poslednich dvou znaku
function time(s){
let result = "";
let partDay = s.substring(8,10);
let hour = Number(s.substring(0,2));
let minute = s.substring(2,8)
    if (partDay === "AM"){
        console.log(hour)
            if (hour < 12 ){        
                result = s.substring(0,8);
                console.log(result);
                return result
            } else {
                result = "00"+ minute;
                console.log(result);
                return result
            }
    } else {
        if (hour < 12){
            hour = (hour + 12),toString;
            result =  hour+minute;
            console.log(result);
            return result
        } else {
            result =  hour + minute;
            console.log(result);
            return result
        }
    }
}
// console.log('---- MaxMin ------')

let maxMinA = [1,3,5,7,9]
function maxMin (arr){
    let max = findMax(arr);
    let min = findMin(arr);
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    let sumMax = sum - min;
    let sumMin = sum - max;
    console.log(sumMin + " " + sumMax)
}

// console.log('---- Students Graduate ------')
const grades = [44,67,38,33,44]
function graduate (grades){
    let result = [];
    //vezmi cislo a zjisti zda je <= nez 40
        //pokud ano vrat cislo
        //pokud ne zjisti zbytek po deleni 5
            //pokud je zbytek < 3 vypis cislo
            //polkud je zbytek 3 pricti 2
            //pokud je zbytek 4 pricti 1
    for (let i = 0; i < grades.length; i++)
        if (grades[i] < 38){
            result.push(grades[i])
        } else {
            let gradesZbytek = grades[i] % 5
            if (gradesZbytek < 3){
                result.push(grades[i]);
            } else if (gradesZbytek === 3 ){
                grades[i] = grades[i]+2
                result.push(grades[i]);
            } else if (gradesZbytek === 4){
                grades[i]= grades[i]+1;
                result.push(grades[i])}
        }
            console.log(result)
            return result
}

// graduate(grades)
console.log('---- Apples and Oranges ------')

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
// projdi jablka a umisti je na misto dopadu
    let newApple = [];
    let newOrange = [];
    let resultApple = 0;
    let resultOrrange = 0;
    for (let i = 0; i < apples.length; i++){
        let tempApple = apples[i] + a;
        newApple.push(tempApple);
    }

    for (let i = 0; i <oranges.length; i++){
        let tempOrange = oranges[i]+b;
        newOrange.push(tempOrange)
    }
   
    for (let i = 0; i < newApple.length; i++){
        if (newApple[i] >= s && newApple[i] <= t){
            resultApple++
        }
    }

     for (let i = 0; i < newOrange.length; i++){
        if (newOrange[i] >= s && newOrange[i] <= t){
            resultOrrange++
        }
    }
    console.log(resultApple);
    console.log(resultOrrange)
}
let apples = [2,3,-4];
let oranges = [3,-2,-4];

countApplesAndOranges(7,10,4,12,apples,oranges)

// switch = if - elseif - else

function swithcExample(inputstring) {
    let aCount = 0, bCount = 0, cCount = 0, others = 0;
    
    for (let i = 0; i < inputstring.length; i++) {
        if (inputstring[i] === 'a') {
            aCount++;
        }
        else if (inputstring[i] === 'b') {
            bCount++;
        }
        else if (inputstring[i] === 'c') {
            cCount++
        }
        else {
            others++;
        }
    }
    console.log(`aCount = ${aCount}, bCount = ${bCount}, cCount = ${cCount}, others = ${others}`);

    // input string acbd
    for (let i = 0; i < inputstring.length; i++) {
        switch(inputstring[i]){
            case 'a':
                aCount++;
            break;
            case 'b':
                bCount++;
            break;
            case 'c':
                cCount++;
            break;
            default: 
                others++;
        }
    }

    for (let i = 0; i < inputstring.length; i++) {
        switch(inputstring[i]){
            case 'a':
            case 'e':
            case 'i':
            case 'o': 
            case 'u':
            case 'y':
                silables++;
            break;        
            case 'b':
                bCount++;
            break;
            case 'c':
                cCount++;
            break;
            default: 
                others++;
        }
    }
}

//TODO spocitej vsechny vyskyty pismene ch v nasleujicim slove 'chrchhchchchchhccchsdfch' napis 2 reseni - if else a switch
let word = "chrchhchchchchhccchsdfch";
function findCH1 (word){
    let result = 0;
    for (let n = 0; n < word.length; n++){
        if (word.charAt(n) === "c" && word.charAt(n+1) === "h"){
                result++
        }
    }
    console.log(result)
}

function findCH(word){
    let result = 0
    let cCharFound = false;
    for (let n = 0; n < word.length; n++){
        switch(word[n]){
            case 'c':
                cCharFound = true;
            break;
            case 'h':
                if (cCharFound) {
                    result++;
                }
            default:
                cCharFound = false;
        }
    }
    console.log(result)
}
console.log("--CH--");
findCH1(word)
findCH(word)


