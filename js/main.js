import {getAllMonsters}from "./services.js"

var URL = 'http://localhost:3000/monstros';


window.onload = () => {
    carregarMonstros();
}

const carregarMonstros = async () => {
    const dataContainer = document.getElementById("monstros");
    try {
        const resp = getAllMonsters();
        resp.forEach((monstro) => {
            const monstrosElement = document.createElement("div");
            monstrosElement.innerHTML = `
                <div>            
                    <p>${monstro.nome}</p>
                </div>
            `;
            dataContainer.appendChild(monstrosElement);
        });
    } catch (error) {
        console.log('Error >>>', error);
    }
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