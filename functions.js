function mostrarLembrete(){
    console.log('Water the plants.')
}
function saudacaoEmEspanhol(){
    console.log('Buenas tardes.')
}
function agradecerCliente(nome){
    console.log('Thank you for your purchase ' + nome +'! We appreciate your business.');
}

for (let i = 0; i < 3; i++) {
    agradecerCliente("Cole");
}



function criarListaDeCompras(item1 = "Leite", item2 = "Pão", item3 = "Ovos"){
    console.log('Suas compras são: ' + item1 +' , ' + item2 + ', ' + item3 + '.')
}


criarListaDeCompras()


function contarMonitores(linhas, colunas){
    const total = linhas * colunas
    return total
}

function custo(linhas, colunas) {
    const custo = contarMonitores(linhas, colunas) * 200
    return custo
}


const numb = contarMonitores(5, 4)
const price = custo(5, 4)

console.log(`Total de monitores: ${numb} o preço total é: ${price}`);


const plantaPrecisaDeAgua = (dia) => {
    if (dia === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};
 
const teste = 'Wednesday';
console.log(plantaPrecisaDeAgua(teste)); 


