function somar() {
    const tn1 = window.document.getElementById('textn1')
    const tn2 = window.document.getElementById('textn2')
    const n1 = Number(tn1.value)
    const n2 = Number(tn2.value)
    const soma = n1 + n2
    const resultado = window.document.getElementById('resultado')
    resultado.innerText = `A soma entre ${n1} e ${n2} é ${soma}` 
}