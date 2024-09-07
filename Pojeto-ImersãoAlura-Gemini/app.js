/*No código HTML, temos no botão uma função chamada pesquisar, que quando clicar
ela vai ser chamada, e abaixo criamos a função com mesmo nome, quando clicar no botão essa
função vai executar oque esta abaixo */
function pesquisar() {
  // Seleciona o elemento HTML com a classe 'resultados-pesquisa' e armazena na variável 'section'.
  const section = document.querySelector('.resultados-pesquisa');

  // Obtém o valor do campo de pesquisa (input) e remove espaços extras no início e no fim com o método trim().
  let campoPesquisa = document.getElementById('campo-pesquisa').value.trim();

  // Limpa o conteúdo da seção de resultados para garantir que os resultados antigos não apareçam.
  section.innerHTML = '';

  // Inicializa a variável 'encontrado' como false, que será usada para verificar se algum resultado foi encontrado.
  let encontrado = false;

  // Verifica se o campo de pesquisa está vazio.
  if (campoPesquisa === '') {
      // Se o campo estiver vazio, exibe a mensagem pedindo para o usuário inserir dados no campo de pesquisa.
      return section.innerHTML = 'Por favor, insira dados no campo de pesquisa!';
  }
  // Verifica se o valor do campo de pesquisa é uma string (o que sempre será, pois é retornado como string).
  else if (typeof campoPesquisa === 'string') {
      // Percorre cada item na lista de dados (presumidamente uma coleção de objetos).
      for (let dado of dados) {
          // Verifica se o título ou a descrição do item contém o termo de pesquisa.
          if (dado.titulo.toLowerCase().includes(campoPesquisa.toLowerCase()) ||
              dado.descricao.toLowerCase().includes(campoPesquisa.toLowerCase())) {

              // Adiciona o resultado à seção HTML com a estrutura de um item de resultado.
              section.innerHTML += `
              <div class="item-resultado">
                  <h2>${dado.titulo}</h2>
                  <p class="descricao-meta">${dado.descricao}</p>
                  <a href="${dado.link}" target="_blank">Mais informações</a>
              </div>
              `;
              
              // Define 'encontrado' como true, indicando que pelo menos um resultado foi encontrado.
              encontrado = true;
          }
      }
  }

  // Após o loop, verifica se nenhum resultado foi encontrado.
  if (!encontrado) {
      // Se 'encontrado' ainda é false, exibe a mensagem de "Busca não encontrada".
      return section.innerHTML = 'Busca não encontrada';
  };
};




/*
Forma usada a partir de cursos posterior!

for(let i = 0; i < dados.length; i+=1){
    const div = document.createElement('div');
    div.className = 'item-resultado';

    const h2 = document.createElement('h2');
    h2.textContent = dados[i].titulo;
    div.appendChild(h2);

    const p = document.createElement('p');
    p.className = 'descricao-meta';
    p.textContent = dados[i].descricao
    div.appendChild(p);

    const a = document.createElement('a');
    a.target = "_blank";
    a.href = dados[i].link;
    a.textContent = "Mais informações"
    div.appendChild(a);

    section.appendChild(div);

};*/


