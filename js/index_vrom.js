import Dados from "../arquivos/vrom.js"


const entrada = document.getElementById('ent')
const botao = document.getElementById("botao")
const alerta = document.getElementById("alerta")

const valor = []
const valor2 = []
let i = 0

botao.addEventListener('click', condiçao)
entrada.addEventListener('input', ()=>{
  
    valor[0] = entrada.value
    valor2[0] = parseInt(valor[0], 2)


}) 

function condiçao(){
  const filtrar = Dados.filter(a=>{
        return  a.__EMPTY === valor2[0]
  })
 
try{
  alerta.innerHTML = `<div class="alert alert-success" role="alert" style= "border-color: black;" >
  <h4 class="alert-heading" "text-center">Binario ${valor[0]} - Decimal ${valor2[0]}</h4>
  <p>${filtrar[0].__EMPTY_1}</p>
  <hr>
  <p class="mb-0">${filtrar[0].__EMPTY_2}</p>
 </div>`

}catch(err){
  alerta.innerHTML = `<div class="alert alert-success" role="alert" style=" background-color: #ee3338"  >
  <h4 class="alert-heading" "text-center" style= "color: black;" >ERRO NA BUSCA.</h4>
  <hr>
  <p class="mb-0" style= "color: black;" >Nenhum erro encontrado com esse nome.</p>
 </div>`
 


}
}