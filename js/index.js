import Dados from './arquivo.js'

console.log(Dados)

const entrada = document.getElementById('ent')
const botao = document.getElementById("botao")
const alerta = document.getElementById("alerta")

const valor = []

botao.addEventListener('click', condiçao)

entrada.addEventListener('input', ()=>{
    valor[0] = entrada.value.toUpperCase()
}) 

function condiçao(){
  const filtrar = Dados.filter(a=>{
        return  a.NCDM === valor[0]
  })
 
try{
  alerta.innerHTML = `<div class="alert alert-success" role="alert" >
  <h4 class="alert-heading" "text-center">ERRO ${valor[0]}</h4>
  <p>${filtrar[0].__EMPTY_1}</p>
  <hr>
  <p class="mb-0">${filtrar[0].__EMPTY_2}</p>
 </div>`

}catch(err){
  alerta.innerHTML = `<div class="alert alert-success" role="alert" style= "background-color: rgb(223, 31, 31);  >
  <h4 class="alert-heading" style = "color: black;">Erro na busca</h4>
  <p style = "color: black;">Não foi encontrado nenhum erro com essa nomenclatura</p>`
}
}
    
