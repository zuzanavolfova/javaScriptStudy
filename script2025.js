// TODO separate each word with space --------------------------------------------------------------------------------
const originalAlphabet ="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"

const newAlph = originalAlphabet.replaceAll(",", ", ")
// console.log(newAlph)
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let newAlphabet=[]

// TODO Caesar's cipher ----------------------------------------------------------------------------------------------
function caesarCipher(s, k){
    newAlphabet=[...alphabet];
    // 1.1 find first letter
    // 1.2 remove first letter
    // 1.3 add first letter do the end
    for(let i=0; i < k; i++){
     let firstLetter = newAlphabet[0]
     newAlphabet.shift();
     newAlphabet.push(firstLetter)
    }

    let result = ""
    let stringData = s;
    
    for(let i = 0; i < stringData.length; i++){
        // 2.1 check if contain special letter
        if(stringData[i].match(/[^a-zA-Z]/)){
            result += stringData[i]
        } else {
            //2.2  check if uppercase
            const isUpperCase = stringData[i] === stringData[i].toUpperCase();
            //2.3. find positin in original alphabet
            let position = alphabet.indexOf(stringData[i].toLowerCase())
            //2.4 add letter from the coresponding position in new alphabet and deal with uppercase
            if(isUpperCase){
                result += newAlphabet[position].toUpperCase()
            } else result += newAlphabet[position]
        }
    }
    // console.log(result)
    return result}

    caesarCipher("middle-Outz", 2)
    
    //TODO counter changes from pattern --------------------------------------------------------------------------------
    function counterChanges(s){
        let result = 0;
        let pattern ="SOS";
        let k = 3;
        let substringData = "";
        for(let i = 0; i < s.length; i = i+3){
            substringData= s.substring(i, k)
            //1. check if 3 letters are SOS
            //2. if not add +1 to result (for each letter) 
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


    //TODO Check if contains pattern -----------------------------------------------------------------------------------------
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

    //TODO sort data - numbers ----------------------------------------------------------------------

    let data=[1,5,68,2,15,454,874,25]
    let sortedData = data.sort(function(a,b){return a - b});

    //TODO Consider an array of numeric strings where each string is a positive number with anywhere from to digits. Sort the array's elements in non-decreasing, or ascending order of their integer values and return the sorted array.

    let dataString=["2","56","10"];
    let dataSortedString =
        dataString.sort((a,b)=>{
            if(a.length === b.length){
                return a.localeCompare(b)
            } return a.length - b.length
    })
    // console.log(dataSortedString)

    // TODO Insert element into sorted list -------------------------------------------------------------------
    function insertionSort1(n, arr){
      
        let number = arr[n-1];
        let newArray = [...arr];
        for(let i = n - 2; i>=0; i--){
            if(arr[i] > number){
                newArray[i+1] = arr[i]
                // console.log(newArray.join(' '))
                if(i === 0){
                    newArray[0]=number;
                    // console.log(newArray.join(' '))
                }
                
            } else {newArray[i+1] = number;
                // console.log(newArray.join(' '));
                break
            }
        }   
    
    }
  
    insertionSort1(101, [2, 4, 8, 12, 15, 19, 21, 24, 26, 29, 30, 32, 35, 36, 41, 44, 49, 52, 57, 58, 59, 64, 65, 68, 73, 77, 80, 82, 85, 88, 93, 97, 101, 105, 108, 111, 115, 118, 122, 127, 130, 131, 132, 134, 135, 136, 138, 141, 144, 146, 151, 153, 158, 160, 165, 169, 171, 176, 179, 184, 187, 190, 194, 197, 200, 205, 210, 215, 217, 222, 225, 230, 231, 236, 239, 243, 244, 246, 248, 253, 254, 256, 258, 262, 263, 267, 272, 274, 277, 280, 284, 285, 289, 291, 295, 297, 301, 305, 310, 312, 279])
    