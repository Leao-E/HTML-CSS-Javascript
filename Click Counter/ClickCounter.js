window.onload = function(){
    var count = 0
    var a = window.document.getElementById("div")
    a.addEventListener('click', clique)
    a.addEventListener('mouseenter', entrou)
    a.addEventListener('mouseout', saiu)
    function clique(){
        count++
        a.innerText = count
    }
    function entrou(){
        a.style.borderColor = 'yellow'
        a.innerText = count
    }
    function saiu(){
        a.style.borderColor = 'transparent'
        a.innerText=''
    }
}
