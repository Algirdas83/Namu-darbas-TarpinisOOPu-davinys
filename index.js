
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  } 



  let grauztukai = new Map()

  console.log(grauztukai);


class Vaisius {

    constructor(){
        this.dydis = getRandomIntInclusive(5, 25)
        this.id = getRandomIntInclusive(1000000, 9999999)
        this.prakastas = false
}

prakasti () {
  this.prakastas = true
  grauztukai.set(this.id, this)
}

    }

    
const vaisius = new Vaisius()

 

///////// clases Krepsys pradzia
class Krepsys   {

    static vaisiai = []

    
    static pripildyti(){


        while(Krepsys.vaisiai.length  <= 20){

                Krepsys.vaisiai.push(new Vaisius())
            }
        

        Krepsys.vaisiai.sort((a,b) => {
            if(a.dydis < b.dydis){
                return 1
            }else{
                return -1
            }
        })
        
    
    }

    static isimti(){

       
        const x = Krepsys.vaisiai.shift()
    
        
         

    return console.log(x)
    }
}




Krepsys.pripildyti()
console.log(Krepsys.vaisiai);
console.log('vaisiai startas');


   
   Krepsys.isimti()
   Krepsys.isimti()
   

   Krepsys.pripildyti()
   console.log(`Istrinti vaisiai`);
   console.log(Krepsys.vaisiai);

   
   Krepsys.vaisiai[0].prakasti()

   console.log(Krepsys.vaisiai)
   console.log(grauztukai)


   

   







