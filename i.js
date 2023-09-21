const prompt = require("prompt-sync")();

let rein = true
let peso 
let altura
let result

while(rein){
    console.log("CALCULADORA DE IMC\n")

    console.log("Forneça um valor para peso:")
    peso =  parseFloat(prompt())
    console.log("Forneça um valor para altura: ")
    altura = parseFloat(prompt())
    
    result = (peso/(altura*altura)).toFixed(1)

    if(result > 18.6 && result < 24.9){
        console.clear()
        console.log("O valor do seu IMC é:",result, "\n\nÍNDICE DE MASSA CORPORAL IDEAL (PARABÉNS!)\n")
    }
    if(result < 18.5){
        console.clear()
        console.log("O valor do seu IMC é:",result, "\n\nATENÇÃO!\nÍNDICE DE MASSA CORPORAL ABAIXO DO PESO IDEAL\n")
       }
  
      if(result > 24.9){
        console.clear()
        console.log("O valor do seu IMC é:",result, "\n\nATENÇÃO!\nÍNDICE DE MASSA CORPORAL ÁCIMA DO PESO IDEAL (OBESIDADE - 1° GRAU)\n")
      }

    reinicio()
}



function reinicio(){   
    console.log("Deseja efetuar outra operação? Digite 'y' para sim ou 'n' para finalizar.")
    
    let verifyReinicio = prompt();

    if(verifyReinicio === "y" ){
        console.clear()
        rein = true
    } else {
        rein = false

    }
}