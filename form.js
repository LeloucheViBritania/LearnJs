
var nom = document.getElementById('name')

var envoye = document.getElementById('envoye').addEventListener('submit' , function(sub){
    sub.preventDefault()


    var error = ""
    var nom = document.getElementById('name')
    var email = document.getElementById('email')
    var tel = document.getElementById('tel')
    var passWord = document.getElementById('passWord')
    var confirmPasword = document.getElementById('confirmPasword')
    var error = document.getElementById('error')


    


    if (!confirmPasword.value){
        error = "Veuillez confirmez le mdp svp"
    }else{
        console.log("Rendre le champ texte en rouge")
    }
    if (!passWord.value){
        error = "Veuillez entre un un mot de passe svp"
    }else{
        console.log("Rendre le champ texte en rouge")
    }
    if (passWord.value = confirmPasword.value)
    {
        console.log("les elements sont conformes")
    }
    else{
        error = "Les mots de passe ne sont pas identiques "
    }
    if (!tel.value){
        error = "Veuillez entre un numero de telephone svp"
    }else{
        console.log("Rendre le champ texte en rouge")
    }
    if (!email.value){
        error = "Veuillez entre un email svp"
    }else{
        console.log("Rendre le champ texte en rouge")
    }
    if (!nom.value){
        error = "Veuillez entre un nom svp"
    }else{
        console.log("Rendre le champ texte en rouge")
    }
    
    
    
    


    if (error){
        sub.preventDefault()
        document.getElementById('error').innerHTML = error
    }else{
        sub.preventDefault()
        alert("Le formulaire a ete envoye")
        console.log("Le but ici est d'afficher une image de Bravo genre un checkpoint ")
    }
})







