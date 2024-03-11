function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  //Verifica se elemento não for nulo e do tipo audio toca o som senão retorna feedback ao usuário
  if(elemento != null && elemento.localName === 'audio'){
    elemento.play();
  }else{
    alert("Elemento não encontrado ou seletor inválido");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

//Utiliziando uma rotina com while
/*let contador = 0;
while (contador < listaDeTeclas.length) {
  //Cria uma constante  tecla para armazenar a rotina da listaDeTeclas
  const tecla = listaDeTeclas[contador];

  //cria um constante instrumento, para armazena a rotina anterior acessando o método .classList que retorna uma coleção ativa dos atibutos de classe do elemento , logo, define o atributo necessário escolhido dentro do objeto [1]
  const instrumento = tecla.classList[1];

  //Cria uma constante idAudio para armazenar o valor estático (#som_) + valor dinâmico do  const instrumento ${instrumento};
  const idAudio = `#som_${instrumento}`;


  tecla.onclick = function () {
    tocaSom(idAudio);
  };
  contador++;
  console.log(contador);
}*/

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`; //template string

  // OBS**
  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  //evento pressionar tecla
  tecla.onkeydown = function (evento) {
    console.log(evento);
    if (evento.code == "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  //evento de soltar tecla
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
/**
 * OBS:
 * Devido as restrições dos browsers, não se pode executar um player (som) sem que antes o usuário
   interaja coma página, lógo na ln34, se fez necessário a utilização de uma função anônima para 
   chamarmos a função necessária, pois se envocada a função com parametro diretamente o play() ln2
   não funcionará devido a restrição dita antetiomente, visto que, ao declarar a função ela já é envocada diretamente.
 */
