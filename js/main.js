import {getAllMonsters, filtrarMonstrosPequenos}from "./services.js"

window.onload = () => {
    loadAllSmallMonsters();
}

const loadAllSmallMonsters = () => {
    const monstrosPequenosContainer = document.getElementById("monstrosPequenos");

    getAllMonsters().then((resp) => {
        const monstrosPequenos = filtrarMonstrosPequenos(resp);
        
        monstrosPequenos.forEach(monstro => {
            const monstrosPequenosDiv = document.createElement('div');
            monstrosPequenosDiv.innerHTML = `
                <div onclick="procurarMonstroNome()">
                    <img src="${monstro.icone}" alt="${monstro.nome}">
                    <h4>${monstro.nome}</h4>
                </div>
            `;
            monstrosPequenosContainer.appendChild(monstrosPequenosDiv);
        });
    });
};

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