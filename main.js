const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebração"';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepção"';
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a média necessária para aprovação:"))
var linhas = '';
var nomesAtividades = [];
var notasAtividades = [];



form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMedia();
});

function adicionaLinha() {

    const nomeAtividade = document.getElementById('nome-atividade');
    const notaAtividade = document.getElementById('nota-atividade');

    nomesAtividades.includes(nomeAtividade.value) ? alert(`A atividade ${nomeAtividade.value} já foi registrada:`) :

    nomesAtividades.push(nomeAtividade.value);
    notasAtividades.push(parseFloat(notaAtividade.value));

    var linha = '<tr>';
    linha += `<td>${nomeAtividade.value}</td>`;
    linha += `<td>${notaAtividade.value}</td>`;
    linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';


    linhas += linha;

    nomeAtividade.value = '';
    notaAtividade.value = '';

}

function atualizaTabela() {

    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function atualizaMedia() {
    const media = calculaMedia();
    const mediaAtualizada = document.getElementById('media');
    mediaAtualizada.innerHTML = media;

    const resultado = document.getElementById('resultado-final');
    media >= notaMinima ? resultado.innerHTML = spanAprovado : resultado.innerHTML = spanReprovado;

}

function calculaMedia() {
    var soma = 0;
    for (i = 0; i < notasAtividades.length; i++) {
        soma += notasAtividades[i];
    }
    return soma / notasAtividades.length;
}
