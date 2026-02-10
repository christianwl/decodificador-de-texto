let texto = document.getElementById("DecodificarTexto");
let textoDescripto = document.getElementById("textoDescriptogafado");
let codigoCripto = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];

function criptografar() {
    document.getElementById("areaCopia").style.display = "none";
    let textoModificado = ModificarTexto(texto.value,0,1);
    ExibirTexto(textoModificado);
}

function descriptografar(){
    let textoModificado = ModificarTexto(texto.value,1,0);
    ExibirTextoDescrip(textoModificado);
}

function ModificarTexto(textoCript, indice1, indice2)
{
    for(let i = 0; i < codigoCripto.length; i++){
        if(textoCript.includes(codigoCripto[i][indice1])){
            textoCript = textoCript.replace(new RegExp(codigoCripto[i][indice1], 'gi'), codigoCripto[i][indice2]);
        }     
    }
    return textoCript;
}

function ExibirTexto(textoNovo) {
    textoDescripto.innerHTML += textoNovo;
}

function ExibirTextoDescrip(textoNovo){
    textoDescripto.innerHTML = textoNovo;
}

function copiar (){
    let tl_sel = document.getElementById('textoDescriptogafado').innerHTML;
    navigator.clipboard.writeText(tl_sel);
}