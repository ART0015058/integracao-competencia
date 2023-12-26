import { getAllMonsters }from "./services.js"

window.onload = () => {
    carregarPequenos();
    carregarGrande();
    carregarMonstros();
    document.addEventListener("DOMContentLoaded", () => {
        const btnBusca = document.getElementById("btn-busca");
        btnBusca.addEventListener("click", pesquisarMonstros());
      });
}


//Carrega todos os monstro mas gera apenas os nomes
const carregarMonstros = async () => {
    const dataContainer = document.getElementById("todos-monstros");
    try {
        getAllMonsters().then(resp => {
            resp.forEach((monstro) => {
                const monstroElement = document.createElement("div") 
                monstroElement.innerHTML = `
                <div>
                    <p>${monstro.name}</p>
                    <p>${monstro.caracteristicas.zonadedano}</p>
                </div>
                `;
                dataContainer.appendChild(monstroElement);
            });
        });
        
    } catch (error) {
        console.log('Error >>>', error);
    }
};

//carrega todos os monstros e filtra pelo type retornando apenas os pequenos
const carregarPequenos = async () => {
    const dataContainerB = document.getElementById("monstrosPequenos");
    try {
        getAllMonsters().then(resp =>{
            const monstrosPequenos = resp.filter(monstro => monstro.type === "pequeno");
            monstrosPequenos.forEach((monstro) => {
                const monstroElementB = document.createElement("div")
                monstroElementB.innerHTML = `
                    <div class="cartao">
                        <img class="cartao-img" src="${monstro.icone}" alt="${monstro.name}">
                        <div class="cartao-conteudo">
                             <h5 class="cartao-nome">${monstro.name}</h5>
                        </div>
                    </div>
                `;
                dataContainerB.appendChild(monstroElementB);
            }); 
        });
        
    } catch (error) {
        console.log("Error >>>", error);
    }
};

//carrega todos os monstros e filtra pelo type retornando apenas os grandes
const carregarGrande = async () => {
    const dataContainerC = document.getElementById("monstrosGrandes");
    try {
        getAllMonsters().then(resp =>{
            const monstrosGrandes = resp.filter(monstro => monstro.type === "grande");
            monstrosGrandes.forEach((monstro) => {
                const monstroElementC = document.createElement("div")
                monstroElementC.innerHTML = `
                    <div class="cartao">
                        <img class="cartao-img" src="${monstro.icone}" alt="${monstro.name}">
                        <div class="cartao-conteudo">
                             <h5 class="cartao-nome">${monstro.name}</h5>
                        </div>
                    </div>
                `;
                dataContainerC.appendChild(monstroElementC);
            }); 
        });
        
    } catch (error) {
        console.log("Error >>>", error);
    }
};

//segunda função de carregar monstros só que com o id para facilitar a edição
const carregarMonstrosComId = async () => {
    const dataContainer = document.getElementById("todos-monstros-id");
    try {
        getAllMonsters().then(resp => {
            resp.forEach((monstro) => {
                const monstroElement = document.createElement("div") 
                monstroElement.innerHTML = `
                <div>
                    <h5>${monstro.id}</h5>
                    <p>${monstro.name}</p>
                </div>
                `;
                dataContainer.appendChild(monstroElement);
            });
        });
        
    } catch (error) {
        console.log('Error >>>', error);
    }
};

//Recebe os dados de pesquisa e retorna o monstro pedido
const pesquisarMonstro = async () => {
    const dataContainerBusca = document.getElementById("resultado-busca");
    const monstroBuscado = document.getElementById("termo-busca").value;
    try {
        getAllMonsters().then(resp => {
            const monstrosExibir = resp.filter(monstro => monstro.name === monstroBuscado);
            monstrosExibir.forEach((monstro) => {
                const monstroElementExibir = document.createElement("div")
                monstroElementExibir.innerHTML = `
                <div class="monstro-buscado">
                <div>
                <h2>${monstro.name}</h2>
                <div>
                    <div>
                        <img src="${monstro.img}" alt="${monstro.name}">
                        <legend>${monstro.name}, ${monstro.especie}, ${monstro.type}</legend>
                    </div>
                    <div>
                        <div>
                            <img src="${monstro.icone}" alt="${monstro.name}">
                        </div>
                        <div>
                            <p>Tipo: ${monstro.type}</p>
                            <p>Espécie: ${monstro.especie}</p>
                            <p>Habitat: ${monstro.local.map(local => local.nome).join(', ')}</p>
                        </div>
                        <div>
                            <div>
                                <h4>Descrição</h4>
                                <p>${monstro.descricao}</p>
                            </div>
                            <div>
                                <h4>Partes Quebráveis</h4>
                                <ul>
                                    <li>
                                        ${monstro.partesquebraveis.map(partesquebraveis => partesquebraveis.parte).join(', ')}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Elemento</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        ${monstro.elementos.map(elementos => elementos.elemento).join(', ')}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Aflições</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        ${monstro.aflicoes.map(aflicoes => aflicoes.aflicao).join(', ')}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <table>
                        <caption>Fisiologia</caption>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table>
                        <caption>Resistências a Aflições</caption>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table>
                        <caption>Recompensas</caption>
                        <thead>
                            <tr>
                                <th>Low Rank</th>
                                <th>High Rank</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${monstro.recompensas.map(recompensas => recompensas.lowrank).join(', ')}</td>
                                <td>${monstro.recompensas.map(recompensas => recompensas.highrank).join(', ')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
                </div>
                `;
                dataContainerBusca.appendChild(monstroElementC);
            });
        });
           
        
    } catch (error) {
        console.log('Error >>>', error);
    }
};



/*const carregarPequenos = async () => {
    const dataContainer = document.getElementById("monstrosPequenos");
    try {
        getAllMonsters().then(resp => {
            resp.forEach((monstro) => {
                const monstrosPequenoElement = document.createElement('div')
                monstrosPequenoElement.innerHTML = `
                <div>
                    <img class="icones" src="${monstro.icnoe}" alt="${monstro.nome}">
                    <p class= "monstro-nome">${monstro.nome}</p>
                </div>
                `;
                dataContainer.appendChild(monstrosPequenoElement);
            });
        });
        
    } catch (error) {
        console.log('Error >>>', error);
    }
};*/

/*const carregarGrandes = async () => {
    const dataContainer = document.getElementById("monstrosGrandes");
    try {
        getAllLargeMonsters().then(resp => {
            resp.forEach((monstro) => {
                const monstrosElement,innerHTML = `
                <div>
                    <img class="icones" src="${monstro.icnoe}" alt="${monstro.nome}">
                    <p class= "monstro-nome">${monstro.nome}</p>
                </div>
                `;
                dataContainer.appendChild(monstrosElement);
            });
        });
        
    } catch (error) {
        console.log('Error >>>', error);
    }
};

const

const getMonsterByName = async () =>{
    const dataContainer = document.getElementById("resultado-busca");
    try {
        
    } catch (error) {
        
    }
}*/


/*const loadAllLargeMonsters =()=>{
    const monstrosGrandes = document.getElementById("monstrosGrandes");
    filtrarMonstrosGrandes().then((resp) =>{
        resp.forEach(monstro => {
            const monstrosGrandesDiv = document.createElement('div');
            monstrosGrandesDiv.innerHTML = ``;
            monstrosGrandes.appendChild()
        });
    });
};

const loadAllMonsters = () => {
    const monstros = document.getElementById("monstros");
    getAllMonsters().then((resp) => {
        resp.forEach(monstro)
    })

}*/