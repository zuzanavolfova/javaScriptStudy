// TODO separate each word with space --------------------------------------------------------------------------------
const originalAlphabet ="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"

const newAlph = originalAlphabet.replaceAll(",", ", ")
// console.log(newAlph)
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let newAlphabet=[]

// TODO Caesar's cipher ----------------------------------------------------------------------------------------------
function pokus(s, k){
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

pokus("middle-Outz", 2)