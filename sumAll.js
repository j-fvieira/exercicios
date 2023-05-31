const sumAll = function(numStart, numEnd) {
    
    let inicio
    let fim
    let numerosInteiros = []
    
        if (Number.isInteger(numStart)) {
            inicio = numStart;
        } else {
            console.log("Número inicial inválido. Por favor, insira um número inteiro.");
            };

    
        if (Number.isInteger(numEnd)) {
            fim = numEnd;
        } else {
            console.log("Número final inválido. Por favor, insira um número inteiro.");
        };

        
          
            // Verifica se o início é menor que o fim
        if (inicio > fim) {
           console.log ('o número final deve ser maior que o número inicial')
        };   
                      
        for (let i = inicio; i <= fim; i++) {
            numerosInteiros.push(i);
        };
          
            
        return numerosInteiros.reduce((acumulador, elemento) => acumulador + elemento, 0);
          
    }

//console.log (sumAll(8, 9))

// Do not edit below this line
//module.exports = sumAll;
