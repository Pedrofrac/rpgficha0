// Atributos iniciais
let attributes = {
    attr1: 0,
    attr2: 0,
    attr3: 0,
    attr4: 0,
    attr5: 0,
    attr6: 0,
    attr7: 0,
    attr8: 0,
};


// Função para ajustar atributos
function adjustAttribute(attributeId, change) {
    attributes[attributeId] += change;
    if (attributes[attributeId] < 0) {
        //attributes[attributeId] = 0;
    }
    document.getElementById(attributeId).textContent = attributes[attributeId];

    // Atualiza as perícias
    updateSkills();
}
function toggleAttributesPosition() {
    const attributesContainer = document.querySelector('.attributes');
    const skillsContainer = document.querySelector('.skills');

    if (attributesContainer.style.position === 'static') {
        // Se a posição atual não for fixed, muda para fixed
        attributesContainer.style.position = 'fixed';
        // Adiciona a classe que indica position: fixed;
        attributesContainer.classList.add('attributes-fixed');
        // Altera a margin-top para 3px
        skillsContainer.style.marginTop = '284px';

    } else {

        // Se a posição atual for fixed, muda para static
        attributesContainer.style.position = 'static';
        // Remove a classe que indica position: fixed;
        attributesContainer.classList.remove('attributes-fixed');
        // Altera a margin-top para 330px
        skillsContainer.style.marginTop = '0px';

    }
}

function conta(num, vet) {
    return (((vet[num + 9] * 1.5) + vet[num + 9]) / 2 + vet[num + 8] + vet[num + 7] + vet[num + 6] + vet[num + 5] + vet[num + 4] + vet[num + 3] + vet[num + 2] + vet[num + 1]) / 10
}

function updateSkills() {
    // Define manualmente os valores das perícias com quebras de linha




    let numeros = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 1, 1, 1,
        2, 2, 2, 2, 2,
        3, 3, 3, 3,
        4, 4, 4,
        5, 5,
        6, 6,
        7, 7,
        8, 8,
        9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
    ];

    let negativosAntigos = {};

    for (let key in attributes) {
        if (attributes[key] < 0) {
            negativosAntigos[key] = attributes[key]; // salva o valor original
            attributes[key] = Math.abs(attributes[key]); // transforma em positivo
        }
    }
    mostrarValorED_Cust_ou_Infor_mes

    function mostrarValorED_Cust_ou_Infor_mes(indice10) {
        return Math.round((indice10 / 5) * 100) / 100;
    }


    function mostrarValorED(indice) {
        valorereal = Math.floor((indice - 1) / 10);

        dado = (valorereal * 10 - indice + 1) + 10;

        if (attributes.attr3 >= -2) {
            return `Dano:  ${valorereal * 2} | Min: ${dado}d`;
        } else {

            return `Dano:  ${valorereal * 2} | Min: ${dado}d`;
        }
    }

    function mostrarValorEDDefesa(indice2) {
        if (attributes.attr3 > 0) {
            return ` ${-indice2 + 10}d >= Bloqueia o dano `;
        } else {
            return ` ${-indice2 + 10}d >= Dano dobrado`;
        }
    }

    function mostrarValorEDdesvio(indice5) {
        if (indice5 > 0 && indice5 < 10) {
            return `${-indice5 + 10}d >= Bloqueia o dano `;
        } else if (indice5 >= 10) {
            return `0d >= Bloqueia o dano `;
        } else {
            return `9d >= Bloqueia o dano `;
        }

    }

    function mostrarValorEDresiliencia(indice4) {
        if (attributes.attr1 >= 0 && attributes.attr2 >= 0) {
            return ` ${-indice4 + 10}d >= Bloqueia o dano `;
        } else if (attributes.attr1 <= 0 || attributes.attr2 <= 0) {
            if (attributes.attr1 < 0) {
                return ` ${attributes.attr1 + 10}d >= Dano dobrado `;
            } else {
                return ` ${attributes.attr2 + 10}d >= Dano dobrado `;
            }
        } else {
            return ` ${-indice4 + 10}d >= Dano dobrado `;
        }

    }



    function mostrarValorEDvelocidadedeataque(indice3) {
        if (attributes.attr3 >= 0) {
            return `${indice3}d de Vantagem`;
        } else {
            return `${indice3}d de Desvantagem`;
        }

    }

    // Verifica a condição de Defesa e adiciona à skillText se a condição for atendida
    defenseValue = attributes.attr3;
    defensedefortitudeValue = attributes.attr1;
    fortitudeValue = attributes.attr1 >= 3 ? (((attributes.attr1 - 1)) * 3) : +1 + ((-1 + attributes.attr1) * 2);
    resilienceValue = (attributes.attr2 * attributes.attr1 >= 0 ? attributes.attr1 > attributes.attr2 ? attributes.attr2 : attributes.attr1 : 0);
    resilienceValue = resilienceValue + (attributes.attr2 * attributes.attr1 >= 4 ? 1 : 0);
    // espada e paus
    vontadeValue = attributes.attr1 > 1 && attributes.attr2 > 1 ? (attributes.attr1 * attributes.attr2) + 3 : (attributes.attr1 + attributes.attr2);
    sensopercepcaoValue = attributes.attr1 * attributes.attr5 >= 4 ? attributes.attr1 * attributes.attr5 : attributes.attr5 >= 1 ? attributes.attr1 : 0;
    forcaValue = attributes.attr3 > attributes.attr7 ? attributes.attr3 : attributes.attr7;
    percepcaoValue = (attributes.attr4 >= 3 ? ((attributes.attr4 - 1) * 2 + 1) : attributes.attr4 == 1 ? - 2 : attributes.attr4);
    sensiValue = (attributes.attr1 >= 3 ? ((attributes.attr1) * 3 - 3) : attributes.attr1 == 1 ? 0 : attributes.attr1 + 1);
    alcanceValue = (attributes.attr1 + attributes.attr4) * 3;
    atletismoValue = ((attributes.attr3 * attributes.attr7) >= 1 ? (attributes.attr3) * attributes.attr7 + 3 : attributes.attr3 == 0 ? 0 : attributes.attr3 * 2);


    controleValue = (attributes.attr2 * attributes.attr3 >= 1) ? (attributes.attr2 * attributes.attr3) : (attributes.attr2 >= attributes.attr3 ? attributes.attr2 != 0 ? attributes.attr2 : 1 : attributes.attr3 != 0 ? attributes.attr3 : 1);
    conhecimentoValue = (attributes.attr4 * attributes.attr8 >= 1 ? attributes.attr4 * attributes.attr8 : 1);

    desvioValue = attributes.attr4 >= 2 && attributes.attr1 >= 2 ? attributes.attr1 + attributes.attr4 + 1 : attributes.attr4 * attributes.attr1 >= 1 ? attributes.attr4 > attributes.attr1 ? attributes.attr4 + 1 : attributes.attr1 + 1 : 0;
    desbiopassivoValue = attributes.attr4 > attributes.attr1 ? attributes.attr1 : attributes.attr4;

    velocidadeValue = attributes.attr3 * attributes.attr4 >= 1 ? attributes.attr3 * attributes.attr4 : attributes.attr4 > attributes.attr3 ? attributes.attr4 : attributes.attr3;
    velocidadebonusValue = attributes.attr3 >= 2 && attributes.attr4 >= 2 ? attributes.attr3 + attributes.attr4 + 1 : attributes.attr3 > attributes.attr4 ? attributes.attr3 + 1 : attributes.attr4 + 1;

    convencerValue = (attributes.attr4 > 1 && attributes.attr2 > 1 ? attributes.attr4 > attributes.attr2 ? 1 + (attributes.attr2 * 2) : attributes.attr4 == attributes.attr2 ? attributes.attr2 * 2 : 1 + (attributes.attr4 * 2) : attributes.attr4 == attributes.attr2 ? 1 : 2);


    if (attributes.attr4 == 2 && attributes.attr2 == 2) {
        convencerValue = 3;

    }
    sorteValue = (attributes.attr2 * attributes.attr6 >= 1 ? attributes.attr2 * attributes.attr6 : 1);

    edacasoValue = (attributes.attr6 > 1 ?
        attributes.attr6 > attributes.attr2 ?
            (attributes.attr2 * 2) : attributes.attr6 == attributes.attr2 ?
                -1 + attributes.attr6 * 2 : (attributes.attr6 * 2) :
        attributes.attr6 == attributes.attr2 ? 1 : 2);

    ocultarValue = (attributes.attr2 >= 3 ? ((attributes.attr2) * 2 - 1) : attributes.attr2 == 1 ? 1 : attributes.attr2 + 1);
    const calcularVelocidadeConjuracao = ({ attr1, attr2, attr3, attr4, attr5, attr6 }) => (Math.max(attr1, attr2, attr3, attr4) > attr2 * attr6 && Math.max(attr1, attr2, attr3, attr4) > attr1 * attr5) ? (attr1 + attr2 + attr3 + attr4 >= 1 ? `+${Math.max(attr1, attr2, attr3, attr4)}` : "") : (attr2 * attr6 > attr1 * attr5 ? (attr2 * attr6 >= 1 ? `+${attr2 * attr6} (${mostrarValorEDvelocidadedeataque(attr6)})` : "") : (attr1 * attr5 >= 1 ? `+${attr1 * attr5} (${mostrarValorEDvelocidadedeataque(attr5)})` : ""));
    ocultrarsalvaValue = 0;

    //skillText += `<span class="aumenta-letra">Resistência = ${resistValue}</span><br>`;

    for (let key in negativosAntigos) {
        attributes[key] = negativosAntigos[key];
    }
    ocultarValue = ocultarValue + (attributes.attr3 > 2 ? -attributes.attr3 + 2 : 0);
    velocidadeValue = (attributes.attr1 + attributes.attr3 + attributes.attr4) * 2;


    pesoValue = (attributes.attr3 < 0 ? attributes.attr3 + 6 : forcaValue == 0 ? 6 : Math.floor((((forcaValue - 1) / 3) + 6)));
    inventarioValue = (attributes.attr3 == 0 ? 3 : attributes.attr3 == 1 ? 5 : attributes.attr3 >= 2 ? 10 + (5 * (attributes.attr3 - 2)) : 1);



    visibilidadeValue = (attributes.attr3 >= 0 ? pesoValue - 6 : attributes.attr3);



    if (visibilidadeValue >= 0 && attributes.attr2 >= 0) {
        ocultarbonusValue = -(+4 + (visibilidadeValue >= 3 ? ((visibilidadeValue - 1) * 2 + 1) : visibilidadeValue == 1 ? - 2 : visibilidadeValue));


    } else {
        visibilidadeValue = visibilidadeValue * -1;
        ocultarbonusValue = (4 + (visibilidadeValue >= 3 ? ((visibilidadeValue - 1) * 2 + 1) : visibilidadeValue == 1 ? - 2 : visibilidadeValue));
        visibilidadeValue = visibilidadeValue * -1;
    }
    if (visibilidadeValue == 0) {
        ocultarbonusValue = 0
    }



    let skillTextParts = ["<b>"];  // Array para armazenar as partes de skillText

    if (attributes.attr3 >= 1 && attributes.attr1 >= 1) {



        skillTextParts.push(`Defesa: ${mostrarValorEDDefesa(defenseValue + desbiopassivoValue)}<br> 
        `);
        skillTextParts.push(`Fortitude: (+${fortitudeValue}) ${mostrarValorEDDefesa(defensedefortitudeValue + desbiopassivoValue)}  <br>    
        `);



    } if (attributes.attr3 < 0 && attributes.attr1 < 0) {



        skillTextParts.push(`Defesa: ${mostrarValorEDDefesa(defenseValue + desbiopassivoValue)}<br> 
        `);
        skillTextParts.push(`Fortitude:(${-fortitudeValue})  ${mostrarValorEDDefesa(defensedefortitudeValue + desbiopassivoValue)}  <br>    
        `);



    }


    if (vontadeValue >= 1 && attributes.attr1 >= 1 && attributes.attr2 >= 1) {
        skillTextParts.push(`Vontade : +${vontadeValue}<br>`);
        skillTextParts.push(`Resiliência: ${mostrarValorEDresiliencia(resilienceValue)}<br>`);

    } if (attributes.attr1 < 0 && attributes.attr2 < 0) {
        skillTextParts.push(`Vontade : ${-vontadeValue}<br>`);
        skillTextParts.push(`Resiliência: ${mostrarValorEDresiliencia(resilienceValue)}<br>`);
    }


    if (attributes.attr4 >= 1) {
        skillTextParts.push(`Percepção: +${percepcaoValue + 4}<br>
    `);
    } if (attributes.attr4 < 0) {
        skillTextParts.push(`Percepção: ${-percepcaoValue - 4}<br>
    `);
    }



    if (attributes.attr1 >= 1) {
        skillTextParts.push(`Sensibilidade Corporal: +${sensiValue + 1}<br>
    `);
    } if (attributes.attr1 < 0) {
        skillTextParts.push(`Sensibilidade Corporal: ${-sensiValue - 1}<br>
    `);
    }

    if (atletismoValue >= 1 && attributes.attr3 >= 1) {
        skillTextParts.push(`Atletismo: +${atletismoValue}<br>`);
    } if (attributes.attr3 < 0) {
        skillTextParts.push(`Atletismo: ${-atletismoValue}<br>`);
    }

    if (atletismoValue >= 1 && attributes.attr7 >= 1) {
        skillTextParts.push(`••Fator de Experiencia: ${mostrarValorED(attributes.attr7+1)}<br>`);
    }

    if (true) {
        skillTextParts.push(`••Pontos de Habilidades: +${attributes.attr7 + 1}<br>
    `);
    }
    if (desvioValue + visibilidadeValue > 0) {
        if (((attributes.attr1 >= 1 || attributes.attr4 >= 1) && (attributes.attr4 >= 0 && attributes.attr1 >= 0))) {
            skillTextParts.push(`Desviar: (${attributes.attr4 * attributes.attr1}) ${mostrarValorEDdesvio(+desvioValue - visibilidadeValue + attributes.attr3)}<br>
                `);
        } else if ((attributes.attr4 >= 0 || attributes.attr1 >= 0)) {
            skillTextParts.push(`Desviar: (${(-desvioValue - visibilidadeValue)}) ${mostrarValorEDdesvio(-desvioValue - visibilidadeValue)}<br>
        `);
        }
    } else if ((attributes.attr4 >= 0 && attributes.attr1 >= 0)) {
        skillTextParts.push(`Desviar: (${(desvioValue - visibilidadeValue)}) ${mostrarValorEDdesvio(desvioValue - visibilidadeValue)}<br>
        `);
    } else if ((attributes.attr4 >= 0 || attributes.attr1 >= 0)) {
        skillTextParts.push(`Desviar: (${(-desvioValue - visibilidadeValue)}) ${mostrarValorEDdesvio(-desvioValue - visibilidadeValue)}<br>
        `);
    }


    if ((attributes.attr3 > 0 && attributes.attr4 > 0)) {
        if (velocidadebonusValue <= 0 && velocidadeValue != 0) {
            skillTextParts.push(`Velocidade de Ataque: +${velocidadeValue}
                <br>`);
        } else if (velocidadeValue != 0) {
            skillTextParts.push(`V de Ataque: +${velocidadeValue} (${mostrarValorEDvelocidadedeataque(velocidadebonusValue)})
                <br>`);

        }

    } else if ((attributes.attr3 >= 0 || attributes.attr4 >= 0) && velocidadeValue < 0) {

        skillTextParts.push(`Velocidade de Ataque: ${velocidadeValue}
                <br>`);
    } else if (velocidadeValue != 0) {
        skillTextParts.push(`Velocidade de Ataque: ${velocidadeValue}
                <br>`);
    }


    if (attributes.attr3 > 1 || attributes.attr4 > 1 || attributes.attr1 > 1 || attributes.attr2 > 1 && (attributes.attr1 >= 0 && attributes.attr2 >= 0 && attributes.attr3 >= 0 && attributes.attr4 >= 0)) {
        skillTextParts.push(`V Conjuração: ${calcularVelocidadeConjuracao(attributes)} <br>`);
    }

    if (sensopercepcaoValue >= 1) {
        skillTextParts.push(`Sensopercepção: +${sensopercepcaoValue}<br>`);
    }

    if (attributes.attr1 * attributes.attr5 >= 1) {
        skillTextParts.push(`Consolar: ${attributes.attr1 * attributes.attr5}<br>`);
    }

    if (attributes.attr1 * attributes.attr5 >= 1) {
        skillTextParts.push(`••Ensinar: +${mostrarValorEDvelocidadedeataque(attributes.attr5)}<br>`);
    }

    if (attributes.attr1 * attributes.attr5 >= 1) {
        skillTextParts.push(`Transmitir Vontade: ${attributes.attr1 * attributes.attr5 >= 1 ? `+${attributes.attr5} ( ${attributes.attr1 * attributes.attr5} )` : ""}<br>`);
    }
    if (attributes.attr5 >= 1) {
        for (let i = attributes.attr5 + 1; i > 1; i--) {
            skillTextParts.push(`Salvar: ${`+${(-i + attributes.attr5 + 2)} (-${(-i + attributes.attr5 + 3) * 5} Saúde) (-${(-i + attributes.attr5 + 3) * 8} Conforto)`}<br>`);
        }

    }


    if ((attributes.attr3 >= 1 && attributes.attr2 >= 1)) {
        skillTextParts.push(`Controle: +${(controleValue)}  <br>
    `);
    }
    if ((attributes.attr3 < 0 && attributes.attr2 < 0)) {
        skillTextParts.push(`Controle: ${(-controleValue)}  <br>
    `);
    }



    if ((attributes.attr4 >= 1)) {
        skillTextParts.push(`Conhecimento: +${(conhecimentoValue)} <br>
    `);
    }
    if (attributes.attr3 >= 1 && attributes.attr2 >= 1) {
        skillTextParts.push(`••Costume: ${mostrarValorED_Cust_ou_Infor_mes(controleValue)} | ${mostrarValorED_Cust_ou_Infor_mes(controleValue) * 130}  <br>
    `);
    }

    if (attributes.attr4 >= 1) {
        skillTextParts.push(`••Informações: ${Math.round(mostrarValorED_Cust_ou_Infor_mes(conhecimentoValue) * (attributes.attr8 > 0 ? attributes.attr8 : 1) * 100) / 100} | ${mostrarValorED_Cust_ou_Infor_mes(conhecimentoValue) * 130 * (attributes.attr8 > 0 ? attributes.attr8 : 1)} Limite: ${(attributes.attr8 > 0 ? attributes.attr8 : 1)} <br>
    `);
    }


    if ((attributes.attr2 >= 1 && attributes.attr4 >= 1)) {
        skillTextParts.push(`Convencer: +${convencerValue} Des/Conforto <br>
    `);
    } else if (convencerValue != 0 && (attributes.attr2 <= -1 || attributes.attr4 <= -1)) {
        if (attributes.attr2 <= -1 && attributes.attr4 <= -1) {
            skillTextParts.push(`Convencer: ${-convencerValue - 1} Des/Conforto <br>
                `)

        } else {
            skillTextParts.push(`Convencer: ${-convencerValue + 1} Des/Conforto <br>
                `);

        }


    }


    if ((attributes.attr2 >= 1)) {
        if (ocultarValue + ocultarbonusValue > 0) {
            skillTextParts.push(`Ocultar: +${ocultarValue + ocultarbonusValue} <br>
                `);
        } else {

            skillTextParts.push(`Ocultar: ${ocultarValue + ocultarbonusValue} <br>
                `);
        }
        ocultrarsalvaValue = ocultarValue + ocultarbonusValue;
    } else if ((attributes.attr2 < 0)) {
        skillTextParts.push(`Ocultar: ${-ocultarValue + ocultarbonusValue} <br>
    `);
        ocultrarsalvaValue = -ocultarValue + ocultarbonusValue;
    } else if (-1 + ocultarValue + ocultarbonusValue != 0) {
        skillTextParts.push(`Ocultar: ${-1 + ocultarValue + ocultarbonusValue} <br>
            `);
        ocultrarsalvaValue = -1 + ocultarValue + ocultarbonusValue;
    }

    if ((attributes.attr3 >= 0)) {
        skillTextParts.push(`Impacto:(${(attributes.attr3 + 3)}) ${mostrarValorED(attributes.attr3 + 3)}<br>`);
        skillTextParts.push(`Força: ${(forcaValue + 3)} (${2 ** (forcaValue + 3)}Kg)<br>
    `);

    } if ((attributes.attr3 < 0)) {
        skillTextParts.push(`Impacto:(${(attributes.attr3 + 3)}) ${mostrarValorED(attributes.attr3 + 3)}<br>`);
        skillTextParts.push(`Força: ${(-forcaValue + 3)} (${2 ** (-forcaValue + 3)}Kg)<br>
        `);
    }

    if ((attributes.attr6 >= 1)) {
        skillTextParts.push(`Sorte: +${sorteValue}<br>
    `);
    }

    if ((attributes.attr6 >= 1)) {
        skillTextParts.push(`Acaso: (+${sorteValue + attributes.attr6})${(mostrarValorEDvelocidadedeataque(edacasoValue))}-5 Conforto<br>
    `);
    }


    // Ordenar o array skillTextParts de forma alfabética

    skillTextParts.sort();
    skillTextParts.push(`</b>`);
    skillText = skillTextParts.join("");









    // Combinar as partes ordenadas em uma string final
    const attributesContainer = document.querySelector('.attributes');

    if (attributesContainer.style.position === 'static') {
        skillText += `<hr>`;

        let skillTextParts2 = [];
        if (attributes.attr3 >= 0) {
            skillTextParts2.push(`Impacto:(${(attributes.attr3 + 3)}) ${mostrarValorED(attributes.attr3 + 3)}<br>`);
            skillTextParts2.push(`Tóxico:(${((attributes.attr3 * 3) + 3)}) ${mostrarValorED((attributes.attr3 * 3) + 3)} <br>`);
            skillTextParts2.push(`Cortante:(${((attributes.attr3 * 4) + 3)}) ${mostrarValorED((attributes.attr3 * 4) + 3)} <br>`);
            skillTextParts2.push(`Corrosivo:(${((attributes.attr3 * 2) + 3)}) ${mostrarValorED((attributes.attr3 * 2) + 3)} <br>`);
        } else {
            skillTextParts2.push(`${mostrarValorED(attributes.attr3 + 3)}<br>`);
        }

        if ((attributes.attr4 >= 1)) {
            skillTextParts2.push(`•Fé: +${attributes.attr4} <br>
        `);
        }
        if ((attributes.attr8 >= 1)) {
            skillTextParts2.push(`•Felicidade: +${attributes.attr8} <br>
        `);
        }
        if ((attributes.attr1 >= 1)) {
            skillTextParts2.push(`•Destino: +${attributes.attr1} <br>
        `);
        }
        if ((attributes.attr3 >= 1)) {
            skillTextParts2.push(`•Paz: +${attributes.attr3} <br>
        `);
        }
        if ((attributes.attr2 >= 1)) {
            skillTextParts2.push(`•Evolução: +${attributes.attr2} <br>
        `);
        }
        if ((attributes.attr6 >= 1 && attributes.attr2 >= 1)) {
            skillTextParts2.push(`•Sonho: +${attributes.attr6} <br>
        `);
        }
        if ((attributes.attr1 >= 1 && attributes.attr5 >= 1)) {
            skillTextParts2.push(`•Amor: +${attributes.attr5} <br>
        `);
        }

        skillTextParts2.sort();
        skillText += skillTextParts2.join("");



    }

    if (true) {
        skillText += `<hr><b>`;

        let skillTextParts2 = [];

        if (attributes.attr3 >= 0) {
            skillTextParts2.push(`Inventário: ${inventarioValue} (10max para item>=0)<br>`);
            skillTextParts2.push(`Peso: ${pesoValue}ED ${2 ** (pesoValue)}Kg <br>`);
            skillTextParts2.push(`Alcance Fizico: ${pesoValue - 5}d<br> `);
            if (attributes.attr1 >= 1) {
                skillTextParts2.push(`Alcance Disparos|Arremesos: ${sensiValue + 1}<br>`);
            }
        } else {

            skillTextParts2.push(`Inventário: ${1} (10max para item>=0)<br>`);
            skillTextParts2.push(`Peso: ${pesoValue}ED ${2 ** (pesoValue)}Kg <br>`);
            skillTextParts2.push(`Alcance Fizico: ${attributes.attr3 == -1 ? 1 : 0}d<br> `);
            if (attributes.attr1 >= 1) {
                skillTextParts2.push(`Alcance Disparos|Arremesos: ${sensiValue + 1}<br>`);
            }
        }
        if ((attributes.attr3 < 0 && attributes.attr4 < 0)) {
            skillTextParts2.push(`<hr>••Dbuff Dano: ${mostrarValorEDvelocidadedeataque(-velocidadebonusValue)}
                    <br><hr>`);
        }




        skillTextParts2.sort();
        skillText += skillTextParts2.join("");
        skillText += `<hr>`;
        skillText += `<h1>Inf de Items</h1>`;


        skillTextParts2 = [];

        if (attributes.attr3 >= 0) {


            if (attributes.attr2 == 0 && ocultarValue == 1 && ocultarbonusValue == 0) {
                skillTextParts2.push(`Ocultar: 0<br><br> `);
                skillTextParts2.push(`Min de ♠ Para Empunhar ou Vestir: 0<br>`);

            } else {
                if (attributes.attr3 > 2 && attributes.attr2 == 0) {
                    skillTextParts2.push(`Ocultar: ${ocultrarsalvaValue}<br><br> `);
                    skillTextParts2.push(`Min de ♠ Para Empunhar ou Vestir: ${(-ocultrarsalvaValue)}<br>`);
                } else {
                    skillTextParts2.push(`Ocultar: ${ocultrarsalvaValue}<br><br> `);
                    skillTextParts2.push(`Min de ♠ Para Empunhar ou Vestir: ${(-ocultrarsalvaValue)}<br>`);
                }
            }
        } else {

            if (attributes.attr3 > 2 && attributes.attr2 == 0) {
                skillTextParts2.push(`♠Ocultar: ${ocultrarsalvaValue}<br><br>`);
                skillTextParts2.push(`Min de ♠ Para Empunhar ou Vestir: ${(ocultrarsalvaValue)}<br>`);

            } else {
                skillTextParts2.push(`Ocultar: ${ocultrarsalvaValue}<br><br> `);
                skillTextParts2.push(`Min de ♠ Para Empunhar ou Vestir: ${(-ocultrarsalvaValue)}<br>`);
            }

        }

        skillTextParts2.push(`••Defesa: ${(mostrarValorEDdesvio(-ocultrarsalvaValue+1))}<br>`);
        skillTextParts2.push(`••FortDefesa: ${mostrarValorEDdesvio(9)}<br><br>`);
        skillTextParts2.push(`••DefCorrosivo : ${(-ocultrarsalvaValue) > 3 ? mostrarValorEDdesvio(-ocultrarsalvaValue- 3)  : mostrarValorEDdesvio(1)}<br>`);
        skillTextParts2.push(`Espaços: (${-ocultrarsalvaValue}) Figurativo: (${2 ** -ocultrarsalvaValue}Kg) <br> `);



        skillTextParts2.sort();
        skillText += skillTextParts2.join("");
        skillText += `</b>`;


        skillText += `<hr><b>`;
        skillText += `<h1>Reações</h1>`;

        skillTextParts2 = [];
        skillTextParts2.push(`Desprender: ${attributes.attr3 + 2} (${2 ** (attributes.attr3 + 2)}Kg)<br>`);

        skillTextParts2.sort();
        skillText += skillTextParts2.join("");
        skillText += `<hr><b>`;
        skillText += `<h1>Ações Simples</h1>`;

        skillTextParts2 = [];

        // Função para criar botão e conteúdo oculto
        function createActionButton(actionName, details) {
            const id = `details_${actionName.replace(/\s+/g, '_')}_${Math.random().toString(36).substr(2, 5)}`;
            return `
        <div style="margin-bottom:10px;">
            <span style="margin-right:10px;">${actionName}</span>
            <button onclick="document.getElementById('${id}').style.display = 
            document.getElementById('${id}').style.display === 'none' ? 'block' : 'none';">
            </button>
            <div id="${id}" style="display:none; margin-left:20px; margin-top:5px;">
                ${details}
            </div>
        </div>
         `;
        }

        // Criar os botões
        skillTextParts2.push(createActionButton('Empurrar', `
            EfeitoemArea|Ocultar>${ocultrarsalvaValue}<br>
            ${attributes.attr3} ED (${2 ** (attributes.attr3)}Kg) (0|1|2|3)d<br>
            Dano por d(${0 * 3 + 5}|${1 * 3 + 5}|${2 * 3 + 5}|${3 * 3 + 5})ED<br>
            (${attributes.attr3}ED - Peso Alvo )d
        `));

        if (attributes.attr1 >= 1) {
            skillTextParts2.push(createActionButton('Disparo', `
                ${attributes.attr3 - 3} ED a ${sensiValue + 1}d<br>Outra Versão: Diparo Nulo
            `));
        } else if (attributes.attr1 < 0) {
            skillTextParts2.push(createActionButton('Disparo', `
                ${attributes.attr3 - 3} ED a ${-sensiValue - 1}d<br>Outra Versão: Diparo Nulo
            `));
        } else {
            skillTextParts2.push(createActionButton('Disparo', `
                ${attributes.attr3 - 3} ED a 0d <br>
                Outra Versão: Diparo Nulo
            `));
        }

        skillTextParts2.push(createActionButton('Golpe', `${attributes.attr3} ED`));
        skillTextParts2.push(createActionButton('Toque', `Toque`));
        skillTextParts2.push(createActionButton('Derrubar', `
            Peso Alvo max ${attributes.attr3 + 2}ED (${2 ** (attributes.attr3 + 2)}Kg)<br>
            Dano 5 ED<br>
            Alvo caído
        `));
        skillTextParts2.push(createActionButton('Segurar', `
            ${attributes.attr3}ED (${2 ** (attributes.attr3)}Kg)<br>
            Força Alvo max ${attributes.attr3 + 2}ED (${2 ** (attributes.attr3 + 2)}Kg)
        `));
        skillTextParts2.push(createActionButton('Puxar', `
            Apenas Horizontal<br>
            ${attributes.attr3 + 2} ED (${2 ** (attributes.attr3 + 2)}Kg)<br>
            Evento -5 Saude ou impacto<br>
            Combate -1/t Saude ou impacto<br>
            - Saúde|imp para alvo apenas
        `));
        skillTextParts2.push(createActionButton('Levantar|Empunhar', `
            ${attributes.attr3} ED (${2 ** (attributes.attr3)}Kg)<br>
            Limite 2 Braços
        `));
        skillTextParts2.push(createActionButton('Arremessar', `
                ${attributes.attr3 - 3} ED (${2 ** (attributes.attr3 - 3)}Kg)<br>
                Altura max (${attributes.attr3 - 3}ED - Peso Alvo)d<br>
                Parcial max 2*(${attributes.attr3 - 3}ED - Peso Al)d<br>
                Horiz max 3*(${attributes.attr3 - 3}ED - Peso Al)d<br>
                ••Obj Arremessado recebe=dED<br>
                ••Obj Dano min 5 ED<br>
                •Dano no Alvo ${attributes.attr3 - 3} ED<br>
                •Dano min Alvo 0 ED
                    `));

        // Organiza
        skillTextParts2.sort();
        skillText += skillTextParts2.join("");
        skillText += `</b>`;



    }




    skillText += ` <hr><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>`;









    const skillsList = document.getElementById('skills-list');

    if (attributes.attr3 != 1 && attributes.attr7 != 1) {

        skillText += `<br><br>
                            Principais dados: <br><br>
                            
                            
                            Golpe: 
                            Força comun max: ${forcaValue + 3} (${2 ** (forcaValue + 3)}Kg)<br>
                            Força comun min: ${forcaValue} (${2 ** (forcaValue)}Kg)<br>
                            Habilidade uso de força extra: (+${Math.floor((forcaValue + 3) / 2)} ED)<br><br>
                            Exemplos de ações:  Golpes, Empurrar,<br> Derrubar, Segurar, Prender,<br> Desprender, Empunhar <br>
                            <hr><br>
                            <hr><br><br>

                            Dados Secundários: <br><br>
                            Carregar livre: ${forcaValue} (${2 ** (forcaValue)}Kg)<br>
                            Carregar ação simples:  ${forcaValue + 2} (${2 ** (forcaValue + 2)}Kg)<br>
                            <br>
                            Puxar ação simples:  ${forcaValue + 2} (${2 ** (forcaValue + 2)}Kg)<br>
                            Puxar ação :  ${forcaValue + 5} (${2 ** (forcaValue + 5)}Kg)<br>
                           
                            Arremesar ação simples:  ${forcaValue - 3} (${2 ** (forcaValue - 3)}Kg)<br>
                            Arremesar ação :  ${forcaValue} (${2 ** (forcaValue)}Kg)<br><br>
                            
                            Em Costumes e informação segue
                            Idade 20 | 1
                            
                            
                            `;

    }

    let isValid = true;

    for (let i = 1; i <= 4; i++) {
        const attr = attributes[`attr${i}`];
        const linearAttr = attributes[`attr${i + 4}`]; // linear é o atributo 5, 6, 7, ou 8

        // Se o atributo baixo (attr5 a attr8) for negativo, falha a validação
        if (attributes[`attr${i + 4}`] < 0) {
            isValid = false;
            break; // Não é necessário continuar verificando
        }

        if (attr >= 0) {
            // Se o atributo de 1 a 4 for maior ou igual a 0
            if (attr < linearAttr) {
                isValid = false; // O atributo menor deve ser maior ou igual ao linear
                break; // Não é necessário continuar verificando
            }
        } else {
            // Se o atributo de 1 a 4 for menor que 0
            if (linearAttr !== 0) {
                isValid = false; // O atributo linear correspondente deve ser 0
                break; // Não é necessário continuar verificando
            }
        }
    }

    if (isValid) {

        skillsList.innerHTML = skillText.trim(); // Usando innerHTML para interpretar quebras de linha como HTML
    }

    else {
        skillsList.innerHTML = "Baixas devem ser sempre menores que seus pares iguais ou Baixas não existe negativo";
    }







}

// Atualiza as perícias ao carregar a página
updateSkills();

