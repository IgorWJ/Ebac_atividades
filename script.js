document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const mensagem = document.getElementById('mensagem');

    if (campoB > campoA) {
        mensagem.innerHTML = 'Formulário válido! <strong>Campo B</strong> é maior que <strong>Campo A</strong>.';
        mensagem.style.color = 'green';
    } else {
        mensagem.innerHTML = 'Formulário inválido! <strong>Campo B</strong> deve ser maior que <strong>Campo A</strong>.';
        mensagem.style.color = 'red';
    }
});