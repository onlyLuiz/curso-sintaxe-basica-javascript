/*// criando uma calculadora

// definindo as operações e pegando valor de entrada do usuário
//"\n" é para fazer uma quebra de linha
function calculadora(){
    const operacao = prompt('escolha uma operação:\n 1 - Soma(+) \n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão real(/)\n 5 - Divisão inteira(%) \n 6 - Potenciação(**)\n ');

    // verificando se a operação é válida
    if(!operacao || operacao >= 7 ){
        alert('Erro - operação inválida!');
        calculadora();
    }else{
        // definindo variáveis
        // "number" é para que todas as entradas seja do tipo number
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('escolha segundo valor:'));
        let resultado;

        // verificando se as variáveis n1 e n2 são válidas
        if(!n1 || !n2 ){
            alert('Erro - parametros inválidos');
            calculadora();
        }else{
            // definindo as funções
            function soma(){
                resultado = n1 + n2;
                //usando template strings
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }function divisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }function divisaoInteira(){
                resultado = n1 % n2;
                alert(`O resultado do resto da divisão entre ${n1} e ${n2} = ${resultado}`);
                novaOperacao();
            }function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual = ${resultado}`);
                novaOperacao();
            }

             // nova operação
            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operação\n 1-sim\n 2-não');
                
                if(opcao == 1){
                    calculadora()
                }else if(opcao == 2){
                    alert('Até mais!');
                }else{
                    alert('Opção inválida');
                    novaOperacao();
                }
            }
        }*/

    //escolhendo operação usando if
   /* if(operacao == 1) {
        soma();
    }else if(operacao == 2) {
        subtracao();
    }else if(operacao == 3) {
        multiplicacao();
    }else if(operacao == 4) {
        divisaoReal();
    }else if(operacao == 5) {
        divisaoInteira();
    }else if(operacao == 6) {
        potenciacao();
    }*/

     // usando switch case para escolher operação
   /* switch(operacao){
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira;
            break;
        case 6:
            potenciacao();
            break;
        default:

    }
    }
}
calculadora();*/