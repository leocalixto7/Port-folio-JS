const num = []

let dezenas = 0

// Laço de repetição para a geração dos numeros aleatorios
while (dezenas < 6 ){

    let aleatorio = Math.floor(Math.random() * 60)
    num.push(aleatorio)
    num.sort()    
    
    dezenas++
}

console.log(num)
