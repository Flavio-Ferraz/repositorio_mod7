const form = document.getElementById('form-comparador');

form.addEventListener("submit", function(event){
    const A = parseInt(document.getElementById('number-one').value);
    const B = parseInt(document.getElementById('number-two').value);

if(B>A){
    alert("Formulário validado com sucesso!");
} else {
    alert("Formulário inválido. B precisa ser maior que A");
}
});