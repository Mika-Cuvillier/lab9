(function(){
    // let bouton = document.getElementById('bout_nouvelles')
    let nouvelles = document.querySelector('.nouvelle section')
    let annonce = document.getElementById('annonce')

    // bouton.addEventListener('mousedown', monAjax)
    window.addEventListener('load', function(){
        monAjax(monObjJS.URLDomaine + '/wp-json/wp/v2/posts?categories=33', nouvelles)
        monAjax(monObjJS.URLDomaine + '/wp-json/wp/v2/posts?categories=34', annonce)
    })
    function monAjax(requete, elmDom)
{
   let maRequete = new XMLHttpRequest();
   console.log(maRequete)
   maRequete.open('GET', requete);

   maRequete.onload = function () {
       console.log(maRequete)
       if (maRequete.status >= 200 && maRequete.status < 400) {
           let data = JSON.parse(maRequete.responseText);
           let chaineResultat = ''
           for (const elm of data){
            chaineResultat += '<h2>' + elm.title.rendered + '</h2>'
            chaineResultat += elm.content.rendered
           }
           elmDom.innerHTML = chaineResultat;
           elmDom.innerHTML = chaineResultat;
           
        }
       else {
           console.log('La connexion est faite mais il y a une erreur')
       }
   }
   maRequete.onerror = function () {
       console.log("erreur de connexion");
   }
   maRequete.send()
}
/*  ------------------------------------------------------------------
    Traitement de l'ajout d'un article de catégortie << Nouvelle >>
-----------------------------------------------------------------------*/

bouton_ajout = document.getElementById('bout-rapid')
bouton_ajout.addEventListener('mousedown', function(){
    let monArticle = {
        "title" : document.querySelector('.admin-rapid [name="title"]').value,
        "content" : document.querySelector('.admin-rapid [name="content"]').value,
        "status" : "publish",
        "categories" : [34] 
    }

    let creerArticle = new XMLHttpRequest()
    creerArticle.open("POST", monObjJS.URLDomaine + '/wp-json/wp/v2/posts')
    creerArticle.setRequestHeader("X-WP-Nonce", monObjJS.nonce)
    creerArticle.setRequestHeader("Content-Type", "application/json;charset=UTF8-8")
    creerArticle.send(JSON.stringify(monArticle)) // Transmettre la requête au serveur
    creerArticle.onreadystatechange = function() {
        if(creerArticle.readyState == 4){
            if(creerArticle.status == 201){
                document.querySelector('.admin-rapid [name="title"]').value = ''
                document.querySelector('.admin-rapid [name="content"]').value = ''
            }
            else{
                alert ('Erreur réessayer')
            }
        }
    }
})

}())