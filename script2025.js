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


    //TODO Check if contains pattern ----------------------------
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