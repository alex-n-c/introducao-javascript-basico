var nome = "Alex";
var idade = 34;
var idade2 = 20;
var frase = "França possui melhor time do mundo";
/* *********************************** */
//   EXEMPLOS DE ALERT
/* *********************************** */
//alert("Seja bem vindo "+ nome +" possui idade: "+idade);
//alert(idade+idade2);//Soma o valor
                      //se a idade estivesse atribuida entre aspas "34" e "20", entederia que era string e iria concatenar as informações


/* *********************************** */
//Exibindo informações no consolde do navegador
/* *********************************** */

/*console.log(nome);
console.log(idade+idade2);
console.log(frase);
console.log(frase.replace("França","Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());*/

/* *********************************** */
//Exemplos de lista
/* *********************************** */

/*var lista = ["maça", "pêra", "laranja"];
console.log(lista);
lista.push("banana");
console.log(lista);
lista.pop("banana");
console.log(lista);
console.log(lista.length);
console.log(lista[1]);
console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join(" | "));*/

/* *********************************** */
//Array de listas
/* *********************************** */

/*var fruta = {nome:"Maça", cor:"Vermelha"};
console.log(fruta);
console.log(fruta.nome+" - "+fruta.cor);

var frutas = [{nome:"Maça", cor:"Vermelha"},
              {nome:"Uva", cor:"Roxa"}
            ];
console.log(frutas);            
console.log(frutas[0].nome);*/


/* *********************************** */
//COMANDOS CONDICIONAIS
/* *********************************** */
/*//var idade = 18;
var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}*/

/* *********************************** */
//COMANDOS DE REPETICAO
/* *********************************** */
/*var count = 0;
while (count <= 10){
    console.log(count);
    //count = count + 1;
    count++;
}*/
/*
var count;
for(count=0; count <= 5; count++){
    console.log(count);
}*/

/* *********************************** */
//Data
/* *********************************** */
//var d = new Date();
//console.log(d);
//console.log(d.getMonth()+1);//tem que somar 1
//console.log(d.getHours());
//console.log(d.getMinutes()); 


/* *********************************** */
//FUNCOES
/* *********************************** */
/*
function soma(n1, n2){
    return n1 + n2;
}
console.log(soma(10,10)); 

function setReplace(frase, oldText, newText){
    return frase.replace(oldText, newText);
}
console.log(setReplace("Vai Japão","Japão","Brasil")); 

function validaIdade(idade){
    if(idade >= 18){
        return  true
    }else{
        return false;
    }
}
var idade = prompt("Informe a idade");
console.log(validaIdade(idade)); 
*/


function clicou(){
    alert("Obrigado por clicar.");
}

function clicou2(){
    console.log(document.getElementById("agradecimento"));
    document.getElementById("agradecimento").innerHTML = "Obrigado por <b>clicar</b>";
    document.getElementById("agradecimento2").innerHTML = "Obrigado por <b>clicar</b>";
}

function redirecionar(){
    //console.log(document.getElementById("redirecionar"));
    //Abre em nova aba
    window.open("https://www.google.com.br/");
    //Abre na mesma aba
    //window.location.href = "https://www.google.com.br/";
}

function trocar(){
    //alert("Passou o mouse");    
    document.getElementById("mousemove").innerHTML = "Passou o mouse";
}

function voltar(){
    //alert("Passou o mouse");    
    document.getElementById("mousemove").innerHTML = "Passe o mouse";
}

function trocar2(elemento){
    //alert("Passou o mouse");    
    elemento.innerHTML = "<b>Passou o mouse</b>";
}

function voltar2(elemento){
    //alert("Passou o mouse");    
    elemento.innerHTML = "Passe o mouse";
}

function load(){
    console.log("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value); 
}
