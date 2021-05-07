(function(){
    let carrousel = document.querySelectorAll('.slider')
    let ctrlCarrousel = document.querySelectorAll('.ctrl-carrousel')
    let noCtrlCarrousel = 0
    for (const elmCarrou of carrousel)
    {

        let bout  = ctrlCarrousel[noCtrlCarrousel++].querySelectorAll('input');
        console.log(bout.length)
        let slide__conteneur = elmCarrou.querySelector('.slide__conteneur')
        let largeur = slide__conteneur.classList[1].slice(8)


        let noBouton = 0;
        bout[0].checked = true;
        for (const bt of bout){
            bt.value = noBouton++;
            console.log(bt.value)
            bt.addEventListener('mousedown', function(){
                elmCarrou.style.transform = "translateX(" + (-this.value*100) + "vw)"
                console.log(elmCarrou.style.transform)
            })
        }

    } // fin du for of
}())