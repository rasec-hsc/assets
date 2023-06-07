function valorPrimeiroBotao() {
    alert(document.querySelector
        ('input[type=button]').value);
}

const listaTeclas = document.querySelectorAll
    ('input[type=button]');
const display = document.querySelector('input[type=tel]');

function valorBotaoUmJanela() {
    alert(listaTeclas[0].value);
}

function valorBotaoUm() {
    display.value += listaTeclas[0].value;
}

function valorBotao(valor) {
    if (display.value.length < 8 && listaTeclas[valor].value !== '#') {
        display.value += listaTeclas[valor].value;
    } else {
        alert('Fora do limite permitido ou função não liberada.')
    }

}

/* let i = 0;
while(i < listaTeclas.length){
    const tecla = listaTeclas[i];
    const indice = i;
    tecla.onclick = function(){
        valorBotao(indice);
    }
    i = i + 1;
}  */

for (let index = 0; index < listaTeclas.length; index++) {
    const tecla = listaTeclas[index];
    tecla.onclick = () => {
        valorBotao(index);
    }
}

function limpar() {
    display.value = '';
}