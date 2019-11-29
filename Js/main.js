
/*
#INTRODUÇÃO AO JS-04.1.3 - Funções# Function
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por cliclar!");
}

function redirecionar(){
    window.open("https://globallabs.ventures/");
    //window.location.href = "https://globallabs.ventures/";#Abri uma pagina na mesma aba.
}

function trocar(elemento){
//    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse!";
//    alert("trocar texto");

}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";

}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
*/
/*
#INTRODUÇÃO AO JS-04.1.2 - Funções# Function
function validaIdade(idade){
    var validar; #Definir há "var"variavel no topo torna mesma global/Definir em um local especifico torna a mesma local/
    if(idade >= 18){ 
        validar = true
    }else{
        validar= false
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/
/*
#INTRODUÇÃO AO JS-04.1 - Funções# Function
function soma(n1,n2){
    return n1 + n2;
}

function setReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome)
}
alert(soma(5,10));
alert(setReplace("Vai Naruto","Naruto","Sasuke"));
*/
/*
#INTRODUÇÃO AO JS-04 - Funções# Function
function soma(n1,n2){
    return n1 + n2;
}
alert(soma(5,10));
*/
/*
#INTRODUÇÃO AO JS-03 - Datas# Date
var d = new Date();
alert (d);#Dia,Mês,Ano e Horas
alert(d.getDay());#Dia
alert(d.getHours());#Horas
alert(d.getMinutes());#Minutos
*/
/*
#INTRODUÇÃO AO JS-03.2.2 - Repetições# For
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/


/*
#INTRODUÇÃO AO JS-03.2.1 - Repetições# While
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);#Contador
    count++;#Count(ele recebe ele mesmo +1)
};
*/
/*
var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1; #Count(ele recebe ele mesmo +1)
*/
/*
#INTRODUÇÃO AO JS-03.2- Repetições# While
 var count = 0;
 while (count <= 5){
     console.log(count);
     count = count + 1;#Count conta da variavel de origem +1
 };
*/
/*
#INTRODUÇÃO AO JS-03.1 - Condicionais# If-Else
 var idade = prompt("Qual sua idade?");#Prompt reliza uma pergunta
 if (idade >= 18){
    alert("maior de idade");
 }else{
     alert("menor de idade");
};
*/
/*
#INTRODUÇÃO AO JS-03.1 - Condicionais# If-Else
var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/
/*
#INTRODUÇÃO AO JS-02.3 - Lista de Dicionarios#
var frutas = [{nome:"maça", cor:"vermelho"}, {nome:"laranja", cor:"verde"}];
console.log(frutas);
alert(frutas[1].nome);
*/
/*
#INTRODUÇÃO AO JS-02.2 - Dicionarios#
var fruta = {nome:"maça", cor:"vermelho"};
console.log(fruta);
console.log(fruta.nome);#Define a variavel fruta apresentada primeiro
alert(fruta.cor);#Alerta a cor da fruta
*/
/*
#INTRODUÇÃO AO JS-02.1 - Listas#
var lista = ["maça", "abacate" , "morango"];
lista.push("uva");Inclui variavel na lista
lista.pop();Retira variavel da lista
*/
/*
console.log(lista);
console.log(lista.join("-"));#Define separação da lista:ex(".","-")
console.log(lista.toString());#Converte a lista para um String
console.log(lista.reverse());#Define os nomeem lista ao contrario
console.log(lista.length);#Verifica quantos itens há na lista
alert(lista[1]);
*/
/*
#INTRODUÇÃO AO JS-01#
var nome = "Developer Explorer";
var idade = 26;
var idade2 = 10;
var frase = "Intz é o melhor time do lol";
alert(nome + " tem " + idade + " anos ");
alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.toLocaleLowerCase());#Tudo para baixo#
console.log(frase.toLocaleUpperCase());#Tudo para cima#
alert(frase.replace("Intz","Cloud9"));#Replace inverte variavel 01 porvariavel 02#
*/