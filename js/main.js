import { getAllMonsters }from "./services.js"

window.onload = () => {
    // carregarPequenos();
    // carregarGrande();
    // carregarMonstros();
    loadAllMonsters().then(monstros => {
        generateElements();
    }) 
}

const loadAllMonsters = () =>{
    return getAllMonsters().then(monstros => {
        return montros;
    })
}

const generateElements = () => {
    
    const
}

// const formularioBusca = document.getElementById("formulario-busca");
// formularioBusca.addEventListener("submit", async (event) =>{
//     event.preventDefault();
//     pesquisarMonstro();
//     createTableHabitat();
//     createTablePartesQuebraveis();
//     createTableElementos();
// })

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

//Recebe os dados de pesquisa e retorna o monstro pedido
document.addEventListener('DOMContentLoaded', function() {
    var btnBusca = document.getElementById('btn-busca');
    btnBusca.addEventListener('click', function() {
        pesquisarMonstro();
        createTableHabitat();
        createTablePartesQuebraveis();
        createTableElementos();
        createTableAflicoes();
        
        
        
    });
});

function pesquisarMonstro () {
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
                            <div>
                                <h5>Tip</h5>
                                <p>${monstro.type}</p>
                            </div>
                            <div>
                                <h5>Espécie</h5>
                                <p>${monstro.especie}</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>Descrição</h4>
                                <p>${monstro.descricao}</p>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                dataContainerBusca.appendChild(monstroElementExibir);
            });
        });
           
        
    } catch (error) {
        console.log('Error >>>', error);
    }
};

//Criar Habitat
const createTableHabitat = async () => {
    const tableContainerHabitat = document.getElementById("resultado-busca-habitat");
    const monstroBuscado = document.getElementById("termo-busca").value;
    try {
        const monstros = await getAllMonsters();
        const monstroSelecionado = monstros.find(monstro => monstro.name === monstroBuscado);

        if (monstroSelecionado) {
            const monstroTabelaHabitat = document.createElement('ul');

            monstroSelecionado.locais.forEach(local => {
                const li = document.createElement('li');
                li.textContent = local.nome;;
                monstroTabelaHabitat.appendChild(li);
            });

            tableContainerHabitat.appendChild(monstroTabelaHabitat);
        } else {
            console.log("Monstro não encontrado");
        }
    } catch (error) {
        console.log("Error >>>", error);
    }
};

//Criar Partes Quebráveis
const createTablePartesQuebraveis = async () => {
    const tableContainerPartesQuebraveis = document.getElementById("resultado-busca-partesquebraveis");
    const monstroBuscado = document.getElementById("termo-busca").value;
    try {
        const monstros = await getAllMonsters();
        const monstroSelecionado = monstros.find(monstro => monstro.name === monstroBuscado);

        if (monstroSelecionado) {
            const monstroTabelaPartesQuebraveis = document.createElement('ul');

            monstroSelecionado.partesquebraveis.forEach(partesquebravel => {
                const li = document.createElement('li');
                li.innerHTML = `<li>${partesquebravel.parteq}</li>`;
                monstroTabelaPartesQuebraveis.appendChild(li);
            });

            tableContainerPartesQuebraveis.appendChild( monstroTabelaPartesQuebraveis);
        } else {
            console.log("Monstro não encontrado");
        }
    } catch (error) {
        console.log("Error >>>", error);
    }
};

//Criar Elementos
const createTableAflicoes = async () => {
    const tableContainerAflicoes = document.getElementById("resultado-busca-aflicoes");
    const monstroBuscado = document.getElementById("termo-busca").value;
    try {
        const monstros = await getAllMonsters();
        const monstroSelecionado = monstros.find(monstro => monstro.name === monstroBuscado);

        if (monstroSelecionado) {
            const monstroTabelaAflicoes = document.createElement('ul');

            monstroSelecionado.aflicoes.forEach(aflicao => {
                const li = document.createElement('li');
                li.innerHTML = `<li>${aflicao.aflicao}</li>`;
                monstroTabelaAflicoes.appendChild(li);
            });

            tableContainerAflicoes.appendChild(monstroTabelaAflicoes);
        } else {
            console.log("Monstro não encontrado");
        }
    } catch (error) {
        console.log("Error >>>", error);
    }
};

//Criar ZonadeDano
const createTableZonaDano = async () => {
    const tableContainerZonaDano = document.getElementById("resultado-busca-zonadedano");
    const monstroBuscado = document.getElementById("termo-busca").value;
    try {
        const monstros = await getAllMonsters();
        const monstroSelecionado = monstros.find(monstro => monstro.name === monstroBuscado);

        if (monstroSelecionado) {
            const monstroTabelaDano = document.createElement('ul');

            monstroSelecionado.caracteristicas.zonadedano.forEach(zonadedano => {
                const li = document.createElement('li');
                li.innerHTML = `<li>${zonadedano.parte}</li>`;
                monstroTabelaDano.appendChild(li);
            });

            tableContainerZonaDano.appendChild(monstroTabelaDano);
        } else {
            console.log("Monstro não encontrado");
        }
    } catch (error) {
        console.log("Error >>>", error);
    }
};

// const createTableResistenciaAflicoes = async () => {
//     const tableContainerB = document.getElementById("resistenciaaflicoescorpo");
//     const monstroBuscado = document.getElementById("termo-busca").value;
//     try {
//         const monstros = await getAllMonsters();
//         const monstroSelecionado = monstros.find(monstro => monstro.name === monstroBuscado);

//         if (monstroSelecionado) {
//             const monstroTabelaResit = document.createElement('tbody');

//             monstroSelecionado.caracteristicas.resistenciaaflicoes.forEach(resistenciaaflicoes => {
//                 const tr = document.createElement('tr');
//                 tr.innerHTML = `
//                     <td>${resistenciaaflicoes.aflicao}</td>
//                     <td>${resistenciaaflicoes.resistenciainicial}</td>
//                     <td>${resistenciaaflicoes.reducaonatural}</td>
//                     <td>${resistenciaaflicoes.duracao}</td>
//                     <td>${resistenciaaflicoes.danototal}</td>
//                 `;
//                 monstroTabelaResit.appendChild(tr);
//             });

//             tableContainerB.appendChild(monstroTabelaZona);
//         } else {
//             console.log("Monstro não encontrado");
//         }
//     } catch (error) {
//         console.log("Error >>>", error);
//     }
// };



//criar e substituir na procura
// const createTableAflicoes = async () => {
//     const tableContainerB = document.getElementById("resistenciaaflicoescorpo");
//     const monstroBuscado = document.getElementById("termo-busca").value;
//     try {
//         const monstros = await getAllMonsters();
//         const monstroSelecionado = monstros.find(monstro => monstro.name === monstroBuscado);

//         if (monstroSelecionado) {
//             const monstroTabelaResit = document.createElement('tbody');

//             monstroSelecionado.caracteristicas.resistenciaaflicoes.forEach(resistenciaaflicoes => {
//                 const tr = document.createElement('tr');
//                 tr.innerHTML = `
//                     <td>${resistenciaaflicoes.aflicao}</td>
//                     <td>${resistenciaaflicoes.resistenciainicial}</td>
//                     <td>${resistenciaaflicoes.reducaonatural}</td>
//                     <td>${resistenciaaflicoes.duracao}</td>
//                     <td>${resistenciaaflicoes.danototal}</td>
//                 `;
//                 monstroTabelaResit.appendChild(tr);
//             });

//             tableContainerB.appendChild(monstroTabelaZona);
//         } else {
//             console.log("Monstro não encontrado");
//         }
//     } catch (error) {
//         console.error('Erro ao carregar monstros', error);
//     }
// };

//criar e substituir na procura
const createTableRecompensas = async () => {
    const tableContainerB = document.getElementById("resistenciaaflicoescorpo");
    const monstroBuscado = document.getElementById("termo-busca").value;
    try {
        const monstros = await getAllMonsters();
        const monstroSelecionado = monstros.find(monstro => monstro.name === monstroBuscado);

        if (monstroSelecionado) {
            const monstroTabelaResit = document.createElement('tbody');

            monstroSelecionado.caracteristicas.resistenciaaflicoes.forEach(resistenciaaflicoes => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${resistenciaaflicoes.aflicao}</td>
                    <td>${resistenciaaflicoes.resistenciainicial}</td>
                    <td>${resistenciaaflicoes.reducaonatural}</td>
                    <td>${resistenciaaflicoes.duracao}</td>
                    <td>${resistenciaaflicoes.danototal}</td>
                `;
                monstroTabelaResit.appendChild(tr);
            });

            tableContainerB.appendChild(monstroTabelaZona);
        } else {
            console.log("Monstro não encontrado");
        }
    } catch (error) {
        console.error('Erro ao carregar monstros', error);
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