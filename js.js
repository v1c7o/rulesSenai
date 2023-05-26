var i = 0;
var leis = [
  "1.Usuarios e equipe do Laboratorio devem preservar o silencio na sala para que esta se configure como um ambiente de estudo",
  "2.E proibido o consumo de qualquer tipo de alimento ou bebida nos Laboratorios",
  "3.O ambiente deve preservar o estado de limpeza e organizacao de que foi encontrado. Lixo deve ser depositado na lixeira, organizar cadeiras e demais recursos utilizados durante a aula",
  "4.Ao termino do uso do laboratorio, certifique-se de desligar o PC com a respectiva tela, fechando todos os programas e finalizando o sistema operacional",
  "5.E proibido acessar paginas da Internet que possam ser consideradas ilegais ou ofensivas a moral pessoal ou coletiva. Por exemplo, paginas de relacionamentos, pornograficas, de carater racista, discriminatórias ou que incitem a violencia",
  "6.Nao e permitido usar indevidamente os recursos disponiveis na Internet, como utilizar a internet para acessar site de compras, jogos, redes sociais ou quaisquer outros assuntos nao pertinentes a aula. No caso de jogos so serao permitidos aqueles que foram designados pelo instrutor com o objetivo didatico-pedagogico",
  "7.Nao e permitido utilizar recursos de comunicacao instantanea (MSN, salas de bate-papo, googletalk, whatsapp, telegram, entre outros similares) que nao estejam previstos em atividades didatico-pedagogicas",
  "8.E proibido perturbar o ambiente com brincadeiras, algazarras e/ou qualquer outra atividade alheia as atividades didatico-pedagogicas como tambem exercer atividades nao relacionadas com o uso especifico deste Laboratorio",
  "9.Nao e permitido trocar cabos ou equipamentos perifericos e/ou acessorios (teclados, mouses, etc.) Caso algum equipamento apresente defeito ou nao ligue, informar o instrutor para que esse comunique a area de TI responsavel por manutencoes",
  "10.E proibida a instalacao de qualquer tipo de programa (mesmo que freeware ou de uso livre) sem a expressa autorizacao da Supervisao Tecnica da Unidade",
  "11.Os arquivos criados devem ser copiados para seu Google Drive (no caso de alunos que possuem a conta SENAI aluno) e/ou enviados para o seu e-mail pessoal.",
  "12.Observando-se que os arquivos deixados no computador podem ser alterados e apagados por qualquer usuario. Portanto, evite deixar arquivos importantes. ",
  "13.Nao e permitido utilizar pendrive e outros dispositivos similares",
  "14.Proibido desenvolver e/ou disseminar virus nos equipamentos dos Laboratorios de Informatica",
  "15.E proibida a alteracao de qualquer componente instalado nos equipamentos (hardware ou software)",
  "16.Desmontar qualquer equipamento ou acessorio dos Laboratorios de Informatica, sob qualquer pretexto, assim como remover equipamentos do local a eles destinados (mesmo dentro do recinto), desde que nao esteja previsto em atividades didatico-pedagogicas"
    // Restante das leis...
];

function frente() {
    var imprime = document.getElementById("regras");
    imprime.innerHTML = leis[i];
    i++;
}

function atras() {
    var imprime = document.getElementById("regras");
    i--;
    imprime.innerHTML = leis[i];
}

document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox');
    const checkboxError = document.getElementById('checkboxError');
    const avancar = document.getElementById('avancar');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            checkboxError.textContent = '';
            avancar.disabled = false;
        } else {
            checkboxError.textContent = 'Você precisa aceitar os termos e condições.';
            avancar.disabled = true;
        }
    });
});
