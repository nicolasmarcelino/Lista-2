function whileImpar() {
  const imparNums = [];
  let numero = 0;
  let count = 0;
  while (count < 100) {
    if (numero % 2 !== 0)
    imparNums.push(numero)
    //let space = " ";
    //imparNums.push(space)
    numero++;
    count++;
  }
  document.getElementById("whileImpar_output").innerHTML = imparNums;
}

function whilePar() {
    const parNums = [];
    let numero = 0;
    let count = 0;
    while (count < 101) {
        if (numero % 2 === 0)
        parNums.push(numero)
        //let space = " ";
        //imparNums.push(space)
        numero++;
        count++;
    }
    document.getElementById("whilePar_output").innerHTML = parNums;
}

function pedeNumero() {

    const nums = [];
    let count = 0
    while (count < 10) {
        let num = parseInt(window.prompt("Insira um número: "))
        nums.push(num)
        count++;
    }

    document.getElementById("feedback").innerHTML = nums.reduce(function (a, b) {
        return Math.max(a, b);
    })
}

function calculaMedia(qtdAlunos){
    i = 1
    somaMedia = 0
    while(i <= qtdAlunos){
        //ENTRADA
        var mediaAluno = parseInt(document.getElementById("input_"+i).value)
        //PROCESSAMENTO
        somaMedia = somaMedia + mediaAluno;

        i++
    }

    //PROCESSAMENTO
    mediaTurma = somaMedia/qtdAlunos

    //SAIDA
    document.getElementById("mensagem").innerHTML = `A média da turma é ${mediaTurma}.`
}

function removeInput(){
    var divInput = document.getElementById('divInput')
    divInput.innerHTML = '';
}

function geraInput() {
    removeInput()

    //ENTRADAS
    var qtdAlunos = parseInt(document.getElementById("qtdAlunos").value)

    //PROCESSAMENTO
    var divInput = document.getElementById('divInput')

    var i = 0 //index
    while(i < qtdAlunos){
        var h2 = document.createElement("H2")
        var pedeNota = document.createTextNode("Digite a média do "+(i+1)+"º aluno:")
        h2.appendChild(pedeNota)
        divInput.appendChild(h2)

        var inputNota = document.createElement("input")
        inputNota.setAttribute("type", "number")
        inputNota.setAttribute("id", "input_"+(i+1))
        divInput.appendChild(inputNota)

        i++;
    }

    button_calculaMedia = document.createElement("button")
    button_calculaMedia.textContent = 'Calcula média';

    button_calculaMedia.setAttribute("onClick", `javascript: calculaMedia(${qtdAlunos});`);
    divInput.appendChild(button_calculaMedia)

}

function lerIdades() {
    const idades = [];

    let count = 0

    while (count === count) {
        let idade = parseFloat(window.prompt("Insira sua idade"));
        idades.push(idade)
        count++;
        if (idade === 0){
            break
        } else {

        }
    }
    idades.pop()
    const somaIdades = idades.reduce((a, b) => a + b, 0);
    const mediaIdades = (somaIdades / idades.length) || 0;

    document.getElementById("feedback1").innerHTML = `Número de pessoas: ${count-1}`
    document.getElementById("feedback2").innerHTML = `Idade média: ${mediaIdades}`
    //document.getElementById("feedback3").innerHTML = `Idade média: ${mediaIdades}`
    const maxIdades = idades.reduce(function (a, b) {
        return Math.max(a, b);
    })
    const minIdades = idades.reduce(function (a, b) {
        return Math.min(a, b);
    })
    document.getElementById("feedback3").innerHTML = `A maior idade foi ${maxIdades} anos e a menor ${minIdades}`
}

function contaImparCinco(imparCount) {
    let count = 0
    let i = 1;
    while (count < 5) {
        let numInput = parseInt(document.getElementById("input_35_"+i).value)
        count++;
        i++;
        if (numInput % 2 === 0){

        } else {
            numInput = imparCount;
            imparCount = imparCount + 1;
        }
    }

    document.getElementById("mensagem_35").innerHTML = `Quantidade de ímpares: ${imparCount}`
}

function removeInput_35(){
    var divInput = document.getElementById('divInput')
    divInput.innerHTML = '';
}

function geraInput_35() {
    removeInput_35()

    //ENTRADAS
    let imparCount = 0;
    //PROCESSAMENTO
    var divInput = document.getElementById('divInput')

    var i = 0 //index
    while(i < 5){
        var h2 = document.createElement("H2")
        var pedeNum = document.createTextNode("Digite o "+(i+1)+"º número:")
        h2.appendChild(pedeNum)
        divInput.appendChild(h2)

        var inputNum = document.createElement("input")
        inputNum.setAttribute("type", "number")
        inputNum.setAttribute("id", "input_35_"+(i+1))
        divInput.appendChild(inputNum)

        i++;
    }

    button_contaImparCinco = document.createElement("button")
    button_contaImparCinco.textContent = 'Apresenta ímpares';

    button_contaImparCinco.setAttribute("onClick", `javascript: contaImparCinco(${imparCount});`);
    divInput.appendChild(button_contaImparCinco)

}







function contaPar(parCount) {
    let count = 0
    i = 1;
    while (count < 10) {
        let numInput = parseInt(document.getElementById("input_36_"+i).value)
        count++;
        i++;
        if (numInput % 2 === 0){
          numInput = parCount;
          parCount = parCount + 1;
        } else {
        }
    }

    document.getElementById("mensagem_36").innerHTML = `Quantidade de pares: ${parCount}`
}

function removeInput_36(){
    var divInput_36 = document.getElementById('divInput_36')
    divInput_36.innerHTML = '';
}

function geraInput_36() {
    removeInput_36()

    //ENTRADAS
    parCount = 0;
    //PROCESSAMENTO
    var divInput_36 = document.getElementById('divInput_36')
    
    var i = 0 //index
    while(i < 10){
        var h2_36 = document.createElement("H2")
        var pedeNum_36 = document.createTextNode("Digite o "+(i+1)+"º número:")
        h2_36.appendChild(pedeNum_36)
        divInput_36.appendChild(h2_36)

        var inputNum_36 = document.createElement("input")
        inputNum_36.setAttribute("type", "number")
        inputNum_36.setAttribute("id", "input_36_"+(i+1))
        divInput_36.appendChild(inputNum_36)

        i++;
    }

    button_contaPar = document.createElement("button")
    button_contaPar.textContent = 'Apresenta pares';

    button_contaPar.setAttribute("onClick", `javascript: contaPar(${parCount});`);
    divInput_36.appendChild(button_contaPar)

}

function listaImparNums() {
    
    fim = parseInt(document.getElementById("num_37_input").value)
    var impares = [];
    x = 1
    while (x !== fim) {
        if (x % 2 !== 0)
            impares.push(x);
        x++;
    }

    //document.getElementById("impares").innerHTML = myArray


    for(var x = 0; x < impares.length ; x++){
        document.getElementById("impares").innerHTML += impares[x] + "<br>";
    }
    if (fim % 2 !== 0)
        document.getElementById("impares").innerHTML += fim

}

function listaParNums() {
   
    fim = parseInt(document.getElementById("num_37_input").value)
    var myArray = [];
    x = 1
    while (x !== fim) {
        if (x % 2 == 0)
            myArray.push(x);
        x++;
    }

    //document.getElementById("impares").innerHTML = myArray


    for(var x = 0; x < myArray.length ; x++){
        document.getElementById("pares").innerHTML += myArray[x] + "<br>";
    }
    if (fim % 2 == 0)
        document.getElementById("pares").innerHTML += fim

}

function cri222e_quadrado() {
    var count = 1

    const lado_quadrado = parseInt(document.getElementById("lado_quadrado").value)
    let asterisco = "*"
    let pula_linha = "<br>"

    while (count < lado_quadrado) {
        document.getElementById("saida_quadrado").innerHTML = asterisco
        count++
    }
    document.getElementById("saida_quadrado").innerHTML = pula_linha
    /*
    count2 = 1
    while (count2 <= lado_quadrado*(lado_quadrado-2)){
        if (count2 % lado_quadrado === 1){
            document.getElementById("saida_quadrado").innerHTML = asterisco
        } else{
            document.getElementById("saida_quadrado").innerHTML = asterisco
        }
    }
     */
}

function crie_quadrado(){
  //ENTRADAS
  var lado = parseInt(document.getElementById("lado_quadrado").value)
  var linha = ""

  //PROCESSAMENTO
  var i = 0
  while(i < lado){
    linha += "*"
    i++;
  }

  var j = 0
  var quadrado = ""
  while(j < lado){
    quadrado = quadrado + linha + "<br>"
    j++
  }

  //SAIDA
  document.getElementById("saida_quadrado").innerHTML = quadrado
}

function crie_quadrado(){

    var lado = parseInt(document.getElementById("lado_quadrado").value)
    var linha = ""

    var i = 0
    while(i < lado){
        linha += "*"
        i++;
    }

    var j = 0
    var quadrado = ""
    while(j < lado){
        quadrado = quadrado + linha + "<br>"
        j++
    }

    document.getElementById("saida_quadrado").innerHTML = quadrado
}

function crie_quadradoOco(){
    //ENTRADAS
    var lado = parseInt(document.getElementById("lado_quadrado").value)
    var full_linha = ""

    //PROCESSAMENTO
    var i = 0
    while(i < lado){
        full_linha += "*⠀"
        i++;
    }

    linhaOca = "*⠀"
    i = 0
    while(i < lado - 2){
        linhaOca += "⠀"
        i++;
    }
   
    linhaOca += "⠀⠀  *⠀"

    var j = 0
    var quadradoOco = full_linha + "<br>"
    while(j < lado - 2){
        quadradoOco += linhaOca + "<br>"
        j++
    }
    quadradoOco += full_linha

    //SAIDA
    document.getElementById("saida_quadrado").innerHTML = quadradoOco

}




function sexoAltura() {
  var i_2 = 1
  const lista_alturas = []
  var somaMedia = 0
  var somaAlturaM = 0
  var somaAlturaF = 0
  var quantM = 0
  var alturaMulherMaisAlta = Number.NEGATIVE_INFINITY
  while (i_2 <= 15) {
    //ENTRADA
    var altura = parseInt(document.getElementById("input_altura_"+i_2).value)
    var sexo = document.getElementById("input_sexo_"+i_2).value

    

    if (sexo === "M") {
      somaAlturaM = somaAlturaM + altura
      quantM++
    } else if (sexo == "F") {
      somaAlturaF += altura
    }
    if (altura > alturaMulherMaisAlta) {
      alturaMulherMaisAlta = altura
    }
    i_2++
    lista_alturas.push(altura)

  }


  //PROCESSAMENTO
  mediaAlturaHomens_js = somaAlturaM / quantM

  var max = lista_alturas.reduce(function (a, b) {
    return Math.max(a, b);
  });
  var min = lista_alturas.reduce(function (a, b) {
    return Math.min(a, b);
  });
  //SAIDA
  document.getElementById("mediaAlturaHomens").innerHTML = mediaAlturaHomens_js
  document.getElementById("maiorAltura").innerHTML = max
  document.getElementById("menorAltura").innerHTML = min
  document.getElementById("mulherMaisAlta").innerHTML = alturaMulherMaisAlta
  document.getElementById("homensQuantidade").innerHTML = quantM
}

//////espaco


function removeInput_38() {
  var divInput_38 = document.getElementById('divInput_38')
  divInput_38.innerHTML = '';
}

function geraInput_38() {
  removeInput_38()

  //PROCESSAMENTO
  var divInput_38 = document.getElementById('divInput_38')
  qtd_pessoas = 15
  var i = 0 //index
  while (i < qtd_pessoas) {
    var h2 = document.createElement("H2")
    var txt_pedeAltura = document.createTextNode("Digite a altura da " + (i + 1) + "º pessoa:")
    h2.appendChild(txt_pedeAltura)
    divInput_38.appendChild(h2)

    var in_pedeAltura = document.createElement("input")
    in_pedeAltura.setAttribute("type", "number")
    in_pedeAltura.setAttribute("id", "input_altura_" + (i + 1))
    divInput_38.appendChild(in_pedeAltura)

    var h2_2 = document.createElement("H2")
    var txt_informaSexo = document.createTextNode("Digite o sexo da " + (i + 1) + "º pessoa:")
    h2_2.appendChild(txt_informaSexo)
    divInput_38.appendChild(h2_2)

    var in_informaSexo = document.createElement("input")
    in_informaSexo.setAttribute("type", "text")
    in_informaSexo.setAttribute("id", "input_sexo_" + (i + 1))
    divInput_38.appendChild(in_informaSexo)

    i++;
  }
  
  button_sexoAltura = document.createElement("button")
  button_sexoAltura.textContent = 'Calcula!';

  button_sexoAltura.setAttribute("onClick", `javascript: sexoAltura(${qtd_pessoas});`);
  divInput_38.appendChild(button_sexoAltura)

}


function lerNums() {
    const nums = [];

    let count = 0

    while (count === count) {
        let num = parseFloat(window.prompt("Insira um número"));
        nums.push(num)
        count++;
        var checaNegativo = Math.sign(num)
        if (checaNegativo === -1){
            break
        } else {

        }
    }
    nums.pop()
    const somaNums = nums.reduce((a, b) => a + b, 0);
    const mediaNums = (somaNums / nums.length) || 0;

    document.getElementById("total").innerHTML = `Números lidos: ${count-1}`
    document.getElementById("media").innerHTML = `Média: ${mediaNums}`

    const somatorio = nums.reduce((soma, a) => soma + a,0);

    document.getElementById("somatorio").innerHTML = `Somatório: ${somatorio}`
}

function tabuada() {
    const numero = parseInt(document.getElementById("numero_in").value);
    let tabuada = "";
    let count = 1
    do {
        tabuada += "<br>"+numero+" x "+count+" = "+ (numero*count)
        count++;
    }
    while (count < 11);
    document.getElementById("tabuadaOut").innerHTML = tabuada
}

///QUESTÃO 43

function pesoIdade() {
  //de 1 a 10 anos
  var quant_1a10 = 0
  var somaMediaPeso_1a10 = 0
  //de 11 a 20 anos
  var quant_11a20 = 0
  var somaMediaPeso_11a20 = 0
  //de 21 a 30 anos
  var quant_21a30 = 0
  var somaMediaPeso_21a30 = 0
  //de 30 anos adiante
  var quant_30adiante = 0
  var somaMediaPeso_30adiante = 0
  
  var i_2 = 1
  
  while (i_2 <= 15) {
    //ENTRADA
    var peso = parseFloat(document.getElementById("input_peso_"+i_2).value)
    var idade = parseFloat(document.getElementById("input_idade_"+i_2).value)

    
    if (idade >= 1 && idade <= 10) {
      //de 1 a 10 anos
      // alguma coisa
      quant_1a10++
      somaMediaPeso_1a10 = somaMediaPeso_1a10 + peso
    } else if (idade >= 11 && idade <= 20) {
      //de 11 a 20 anos
      // alguma coisa
      quant_11a20++
      somaMediaPeso_11a20 = somaMediaPeso_11a20 + peso
    } else if (idade >= 21 && idade <= 30) {
      //de 21 a 30 anos
      // alguma coisa
      quant_21a30++
      somaMediaPeso_21a30 = somaMediaPeso_21a30 + peso
    } else if (idade >= 30 && idade <= 200) {
      //de 30 adiante
      // alguma coisa
      quant_30adiante++
      somaMediaPeso_30adiante = somaMediaPeso_30adiante + peso
    }

    i_2++

  }


  //PROCESSAMENTO
  //de 1 a 10 anos
  mediaPeso_1a10 = somaMediaPeso_1a10 / quant_1a10
  //de 1 a 20 anos
  mediaPeso_11a20 = somaMediaPeso_11a20 / quant_11a20
  //de 21 a 30
  mediaPeso_21a30 = somaMediaPeso_21a30 / quant_21a30
  //de 30 anos adiante
  mediaPeso_30adiante = somaMediaPeso_30adiante / quant_30adiante
  
  //SAIDA
  //de 1 a 10 anos
  document.getElementById("media_1a10").innerHTML = mediaPeso_1a10
  document.getElementById("quant_1a10").innerHTML = quant_1a10
  //de 11 a 20 anos
  document.getElementById("media_11a20").innerHTML = mediaPeso_11a20
  document.getElementById("quant_11a20").innerHTML = quant_11a20
  //de 21 a 30 anos
  document.getElementById("media_21a30").innerHTML = mediaPeso_21a30
  document.getElementById("quant_21a30").innerHTML = quant_21a30
  //30 anos adiante
  document.getElementById("media_30adiante").innerHTML = mediaPeso_30adiante
  document.getElementById("quant_30adiante").innerHTML = quant_30adiante
}

//////espaco


function removeInput_43() {
  var divInput_43 = document.getElementById('divInput_43')
  divInput_43.innerHTML = '';
}

function geraInput_43() {
  removeInput_43()

  //PROCESSAMENTO
  var divInput_43 = document.getElementById('divInput_43')

  qtd_pessoas = 15

  for (let i = 0; i < qtd_pessoas; i++) {
    var h2 = document.createElement("H2")
    var txt_pedeIdade = document.createTextNode("Digite a idade da " + (i + 1) + "º pessoa:")
    h2.appendChild(txt_pedeIdade)
    divInput_43.appendChild(h2)

    var in_pedeIdade = document.createElement("input")
    in_pedeIdade.setAttribute("type", "number")
    in_pedeIdade.setAttribute("id", "input_idade_" + (i + 1))
    divInput_43.appendChild(in_pedeIdade)

    var h2_2 = document.createElement("H2")
    var txt_pedePeso = document.createTextNode("Digite o peso da " + (i + 1) + "º pessoa:")
    h2_2.appendChild(txt_pedePeso)
    divInput_43.appendChild(h2_2)

    var in_pedePeso = document.createElement("input")
    in_pedePeso.setAttribute("type", "text")
    in_pedePeso.setAttribute("id", "input_peso_" + (i + 1))
    divInput_43.appendChild(in_pedePeso)

  }
  
  button_pesoIdade = document.createElement("button")
  button_pesoIdade.textContent = 'Compilar dados!';

  button_pesoIdade.setAttribute("onClick", `javascript: pesoIdade(${qtd_pessoas});`);
  divInput_43.appendChild(button_pesoIdade)

}
