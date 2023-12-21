import {getAllMonsters, filtrarMonstrosGrandes, filtrarMonstrosPequenos}from "./services.js"

window.onload = () =>{
    loadAllSmallMonsters(),
    loadAllLargeMonsters()
    loadAllMonsters()
};

const loadAllSmallMonsters =()=>{
    const monstrosPequenos = document.getElementById("monstrosPequenos");
    filtrarMonstrosPequenos().then((resp) =>{
        resp.forEach(monstro => {
            const monstrosPequenosDiv = document.createElement('div');
            monstrosPequenosDiv.innerHTML = ``;
            monstrosPequenos.appendChild()
        });
    });
};

const loadAllLargeMonsters =()=>{
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

}