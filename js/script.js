function somar() {
    var tn1 = window.document.getElementById('textn1')
    var tn2 = window.document.getElementById('textn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var soma = n1 + n2
    var resultado = window.document.getElementById('resultado')
    resultado.innerText = `A soma entre ${n1} e ${n2} é ${soma}` 
}