import { getAllMonsters }from "./services.js"

window.onload = () => {
    carregarPequenos();
    carregarGrande();
    carregarMonstros();
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
const pesquisarMonstros = async () => {
    const dataContainer = document.getElementById("resultado-busca");
    const resultadoBusca = document.getElementById("resultado-busca")
    try {
        getAllMonsters().then(resp => {
            resultadoBusca.addEventListener("input", () => {
                const termoBuscado = res.value.toLowerCase();

                const monstroBuscado = resp.filter(monstro => {
                    const nomeCaixaBaixa = monstro.name.toLowerCase();
                    return nomeCaixaBaixa.includes(termoPesquisa)                    
                });
                monstroBuscado.forEach((monstro) => {
                    const monstroElementD = document.createElement("div");
                    monstroElementD.innerHTML = 
                    `
                    //criar estrutura do monstro
                    `;
                    dataContainer.appendChild(monstroElementD);
                });
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