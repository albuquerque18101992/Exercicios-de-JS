function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade >= 11 && idade <= 20) {
                //Adolescente
                img.setAttribute('src', 'adolescente-m.png')
            } else if (idade >= 21 && idade <= 35) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade >= 36 && idade <= 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else if (idade >= 51 && idade <= 90) {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            } else {
                //Morto
                img.setAttribute('src', 'caixao.png')
            }
        } else if
            (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade >= 11 && idade <= 20) {
                //Adolescente
                img.setAttribute('src', 'adolescente-f.png')
            } else if (idade >= 21 && idade <= 35) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade >= 36 && idade <= 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else if (idade >= 51 && idade <= 90) {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            } else {
                //Morto
                img.setAttribute('src', 'caixao.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}