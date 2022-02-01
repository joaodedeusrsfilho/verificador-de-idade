function verificar(){
    //variavel para receber objeto Date()
    var data = new Date()
    var anoAtual=data.getFullYear()
    var inputAno=document.getElementById("inputAno").value
    var resultado=document.getElementById("div-resultado")
//vamos verificar o ano agora
    if(inputAno.lenght == 0 || inputAno > anoAtual){
        alert('[ERRO] verifique os dados e tente novamente!')
    }else{
        var idade = anoAtual - Number(inputAno)
        var genero = ''
        var generoSexo = document.getElementsByName("radioSexo")
        //criando elemento img dinamicamente para o html 
        var tagImg = document.createElement('img')
        tagImg.setAttribute('id','foto')

        if(generoSexo[0].checked){
            genero='masculino'
            if(idade >= 0 && idade < 10){
                //é criança
                tagImg.setAttribute('src','homem-criança.jpg')
            }else if(idade < 21){
                //é jovem
                tagImg.setAttribute('src','homem-jovem.jpg')
            }else if(idade < 50){
                //é adulto
               tagImg.setAttribute('src','homem-adulto.jpg')
            }else{
                //é idoso
                tagImg.setAttribute('src','homem-idoso.jpg')
            }
        }else if(generoSexo[1].checked){
            genero='feminino'
            if(idade >= 0 && idade < 10){
                //é criança
                tagImg.setAttribute('src','mulher-criança.jpg')
            }else if(idade < 21){
                //é jovem
                tagImg.setAttribute('src','mulher-jovem.jpg')
            }else if(idade < 50){
                //é adulto
                tagImg.setAttribute('src','mulher-adulta.jpg')
            }else{
                //é idosa
                tagImg.setAttribute('src','mulher-idosa.jpg')
            }
        }
        resultado.innerHTML=`Detectamos gênero ${genero} com ${idade} anos`
        resultado.appendChild(tagImg)
    }
}