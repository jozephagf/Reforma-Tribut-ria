function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value 

    // Se campoPesquisa for uma string sem nada
    if(!campoPesquisa) {
        section.innerHTML = "<p>Sem retorno. Pesquise por Reforma Tributária.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Exibe a seção no console para fins de depuração (opcional)
    console.log(section);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // Se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
        console.log(dado.titulo.includes(campoPesquisa))
    }

    if(!resultados){
        resultados = "Ainda não dispomos desse conteúdo. Deseja nos indicar uma fonte confiável? Por favor, acesse o link no rodapé e envie-nos sua sugestão."
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}





