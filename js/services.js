import { handleErrors, MonsterNaoEncontradoException } from "./exception.js";
import jsonData from './monster.json';

var URL = 'http://localhost:3000/monstros'

export const getAllMonsters = async () => {
    try{
        const response = await fetch(URL);
        handleErrors(response);
        return await response.json();
    }
    catch (erro){
        console.log('Error >>>', error);
    }
}

export const filtrarMonstrosPequenos = () => {
  return jsonData.monstros.filter(monstro => monstro.type === "pequeno");
}
export const filtrarMonstrosGrandes = () => {
  return jsonData.monstros.filter(monstro => monstro.type === "grande");
}

export const filtrarMonstrosPequenosAncient = () => {
  return jsonData.montros.filter(monstro => monstro.local === "Ancient Forest")
}
export const filtrarMonstrosPequenosWilspire = () => {
  return jsonData.montros.filter(monstro => monstro.local === "Wildspire Waste")
}
export const filtrarMonstrosPequenosWilspire = () => {
  return jsonData.montros.filter(monstro => monstro.local === "Wildspire Waste")
}


export const adicionarMonstroGrande = async (id, nome) => {
    const novoMonstroGrande = {
        "tipo": "grande",
        "monstros":[
            {
                "id": 1,
                "name":"Ancient Leshen",
                "type": "grande",
                "especie": "relict",
                "descricao":"Um velho Leshen que chegou através de um portal para assumir o controle da Ancient Forest. Às vezes reverenciado como uma divindade indígena.",
                "elemento": "nenhum",
                "aflicoes": [
                  {
                    "id":1,
                    "aflicao":"sangramento"
                  }
                ],
                "locais":[
                  {
                    "id":1,
                    "nome":"Ancient Forest"
                  }
                ],
                "caracteristicas": [
                  {
                    "id":1,
                    "zona-de-dano": [
                      {
                        "id":1,
                        "parte": "corpo",
                        "tipo": [
                          {
                            "id":1,
                            "tipo": "fisico",
                            "eficiencia": [
                              {
                                "id":1,
                                "maneira":"corte",
                                "valor": 45
                              },
                              {
                                "id":2,
                                "maneira":"impacto",
                                "valor": 45
                              },
                              {
                                "id":3,
                                "maneira":"munição",
                                "valor": 25
                              }
                            ]                  
                          },
                          {
                            "id":2,
                            "tipo":"elemental",
                            "eficiencia":[
                              {
                                "id":1,
                                "maneira":"fogo",
                                "valor": 20
                              },
                              {
                                "id":2,
                                "maneira":"agua",
                                "valor": 0
                              },
                              {
                                "id":3,
                                "maneira":"trovão",
                                "valor": 10 
                              },
                              {
                                "id":4,
                                "maneira":"gelo",
                                "valor": 5
                              },
                              {
                                "id":5,
                                "maneira":"dragão",
                                "valor": 10
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id":2,
                        "parte": "cabeça",
                        "tipo": [
                          {
                            "id":1,
                            "tipo": "fisico",
                            "eficiencia": [
                              {
                                "id":1,
                                "maneira":"corte",
                                "valor": 65
                              },
                              {
                                "id":2,
                                "maneira":"impacto",
                                "valor": 65
                              },
                              {
                                "id":3,
                                "maneira":"munição",
                                "valor": 50
                              }
                            ]                  
                          },
                          {
                            "id":2,
                            "tipo":"elemental",
                            "eficiencia":[
                              {
                                "id":1,
                                "maneira":"fogo",
                                "valor": 25
                              },
                              {
                                "id":2,
                                "maneira":"agua",
                                "valor": 0
                              },
                              {
                                "id":3,
                                "maneira":"trovão",
                                "valor": 15
                              },
                              {
                                "id":4,
                                "maneira":"gelo",
                                "valor": 10
                              },
                              {
                                "id":5,
                                "maneira":"dragão",
                                "valor": 15
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id":3,
                        "parte": "braços",
                        "tipo": [
                          {
                            "id":1,
                            "tipo": "fisico",
                            "eficiencia": [
                              {
                                "id":1,
                                "maneira":"corte",
                                "valor": 45
                              },
                              {
                                "id":2,
                                "maneira":"impacto",
                                "valor": 45
                              },
                              {
                                "id":3,
                                "maneira":"munição",
                                "valor": 30
                              }
                            ]                  
                          },
                          {
                            "id":2,
                            "tipo":"elemental",
                            "eficiencia":[
                              {
                                "id":1,
                                "maneira":"fogo",
                                "valor": 20
                              },
                              {
                                "id":2,
                                "maneira":"agua",
                                "valor": 0
                              },
                              {
                                "id":3,
                                "maneira":"trovão",
                                "valor": 10 
                              },
                              {
                                "id":4,
                                "maneira":"gelo",
                                "valor": 5
                              },
                              {
                                "id":5,
                                "maneira":"dragão",
                                "valor": 10
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id":4,
                        "parte": "pernas",
                        "tipo": [
                          {
                            "id":1,
                            "tipo": "fisico",
                            "eficiencia": [
                              {
                                "id":1,
                                "maneira":"corte",
                                "valor": 45
                              },
                              {
                                "id":2,
                                "maneira":"impacto",
                                "valor": 45
                              },
                              {
                                "id":3,
                                "maneira":"munição",
                                "valor": 30
                              }
                            ]                  
                          },
                          {
                            "id":2,
                            "tipo":"elemental",
                            "eficiencia":[
                              {
                                "id":1,
                                "maneira":"fogo",
                                "valor": 20
                              },
                              {
                                "id":2,
                                "maneira":"agua",
                                "valor": 0
                              },
                              {
                                "id":3,
                                "maneira":"trovão",
                                "valor": 10 
                              },
                              {
                                "id":4,
                                "maneira":"gelo",
                                "valor": 5
                              },
                              {
                                "id":5,
                                "maneira":"dragão",
                                "valor": 10
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id":5,
                        "parte": "coroa",
                        "tipo": [
                          {
                            "id":1,
                            "tipo": "fisico",
                            "eficiencia": [
                              {
                                "id":1,
                                "maneira":"corte",
                                "valor": 0
                              },
                              {
                                "id":2,
                                "maneira":"impacto",
                                "valor": 0
                              },
                              {
                                "id":3,
                                "maneira":"munição",
                                "valor": 0
                              }
                            ]                  
                          },
                          {
                            "id":2,
                            "tipo":"elemental",
                            "eficiencia":[
                              {
                                "id":1,
                                "maneira":"fogo",
                                "valor": 0
                              },
                              {
                                "id":2,
                                "maneira":"agua",
                                "valor": 0
                              },
                              {
                                "id":3,
                                "maneira":"trovão",
                                "valor": 0
                              },
                              {
                                "id":4,
                                "maneira":"gelo",
                                "valor": 0
                              },
                              {
                                "id":5,
                                "maneira":"dragão",
                                "valor": 0
                              }
                            ]
                          }
                        ]
                      }                
                    ]
                  },
                  {
                    "id":2,
                    "resistencia-aflicoes": [
                      {
                        "id":1,
                        "aflicao":"veneno",
                        "resistencia-inicial":550,
                        "reducao-natural":"-5 a cada 10 sec",
                        "duracao": "20 sec",
                        "dano-total": 320
                      },
                      {
                        "id":2,
                        "aflicao":"paralisia",
                        "resistencia-inicial":700,
                        "reducao-natural":"-5 a cada 10 sec",
                        "duracao": "7 sec",
                        "dano-total": 0
                      },
                      {
                        "id":3,
                        "aflicao":"sono",
                        "resistencia-inicial":"imune",
                        "reducao-natural":"nenhum",
                        "duracao": "nenhum",
                        "dano-total": 0
                      },
                      {
                        "id":4,
                        "aflicao":"explosão",
                        "resistencia-inicial":1920,
                        "reducao-natural":"nenhum",
                        "duracao": "instantânea",
                        "dano-total": 100
                      },
                      {
                        "id":5,
                        "aflicao":"nocaute",
                        "resistencia-inicial":5000,
                        "reducao-natural":"-5 a cada 10 sec",
                        "duracao": "7 sec",
                        "dano-total": 0
                      },
                      {
                        "id":6,
                        "aflicao":"montaria",
                        "resistencia-inicial":1200,
                        "reducao-natural":"nenhum",
                        "duracao": "até derrubar ou ser derrubado",
                        "dano-total": 0
                      }
                    ]
                  }
                ],      
                "recompensas": [
                  {
                    "id":1,
                    "low-rank":"nenhum"
                  },
                  {
                    "id":2, 
                    "high-rank":[           
                      {
                        "id":1, 
                        "item":"Ancient Leshen Claw",
                        "chance":"40%",
                        "origem":"Corpo do monstro"
                      },
                      {
                        "id":2, 
                        "item":"Ancient Cursed Bone",
                        "chance":"30%",
                        "origem":"Corpo do monstro"
                      },
                      {
                        "id":3,
                        "item":"Leshen Resin",
                        "chance":["25%","93%"],
                        "origem":["Corpo do monstro","Recompensa por quebrar o corpo, ao final da missão"]
                      },
                      {
                        "id":4,
                        "item":"Mutagen",
                        "chance":["5%", "7%", "7%"],
                        "origem":["Corpo do monstro","Recompensa por quebrar o corpo, ao final da missão", "Recompensa por quebrar os chifres, ao final da missão"]
                      },
                      {
                        "id":5,
                        "item":"Ancient Leshen Antlers",
                        "cahnce":"93%",
                        "origem":"Recompensa por quebrar os chifres, ao final da missão"
                      },
                      {
                        "id":5,
                        "item":"Monster Bone L",
                        "cahnce":"100%",
                        "origem":"Recompensa por completar a missão"
                      }
                    ]
                  }
                ],
                "partes-quebraveis": [
                  {
                    "id":1,
                    "parte": "cabeça"
                  },
                  {
                    "id":2,
                    "parte": "corpo"
                  },
                  {
                    "id":3,
                    "parte": "braços"
                  },
                  {
                    "id":4,
                    "parte": "pernas"
                  }
          
                ],
                "icone": "assets/icones/ancient_leshen_icon.png",
                "img": "assets/imagens/ancient_leshen.jpg"
              }
        ]
    };
}
then(response => response.json())
    .then(data => {
      // Manipula os dados aqui
      console.log(data);

      // Exemplo: Itera sobre os monstros e exibe seus nomes
      data.forEach(monster => {
        console.log(monster.name);
      });
    })