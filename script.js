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

let tipodano = {
    attr1: 1,
    attr2: 0,
    attr3: 0,
    attr4: 0,
};

function createMultipleActionButtons(actionName, buttons) {
    const groupId = `group_${actionName.replace(/\s+/g, '_')}_${Math.random().toString(36).substr(2, 5)}`;

    const buttonHtml = buttons.map(({ label, details }, i) => {
        const id = `${groupId}_details_${i}`;
        return `
            <button style="
                background-color: #4CAF50;
                border: none;
                color: white;
                text-align: left;
                text-decoration: none;
                display: inline-block;
                font-size: 15px;
                border-radius: 12px;
                transition: background-color 0.3s ease, transform 0.3s ease;
                cursor: pointer;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                margin-left: 5px;
                width: auto; /* Garante que o botão se ajuste ao texto */
            " 
            onmouseover="this.style.backgroundColor='#45a049'; this.style.transform='scale(1.05)';" 
            onmouseout="this.style.backgroundColor='#4CAF50'; this.style.transform='scale(1)';"
            onclick="
                const detailDiv = document.getElementById('${id}');
                const isVisible = detailDiv.style.display === 'block';
                // Esconde todas as informações
                document.querySelectorAll('[data-group=${groupId}]').forEach(el => el.style.display = 'none');
                // Mostra ou esconde o conteúdo ao clicar no botão
                detailDiv.style.display = isVisible ? 'none' : 'block';
            ">
                ${label}
            </button>
            <div id="${id}" data-group="${groupId}" style="display:none; margin-top:5px;">
                ${details}
            </div>
        `;
    });

    const buttonsOnly = buttonHtml.map(b => b.split('</button>')[0] + '</button>').join('');
    const detailsOnly = buttonHtml.map(b => b.split('</button>')[1]).join('');

    return `
    <div style="margin-bottom:5px;">
        <div style="display: flex; align-items: center; gap: 5px; flex-wrap: wrap;">
            <span><b>${actionName}</b></span>
            ${buttonsOnly}
        </div>
        <div style="margin-left:20px;">
            ${detailsOnly}
        </div>
    </div>
    `;
}

function createMultipleActionButtonsComEstado(actionName, buttons, tipodano) {
    const groupId = `group_${actionName.replace(/\s+/g, '_')}_${Math.random().toString(36).substr(2, 5)}`;

    const buttonHtml = buttons.map(({ label, attr, texto }, i) => {
        const id = `${groupId}_details_${i}`;
        const isActive = tipodano[attr] === 1;
        return `
            <button "
            onclick="
                tipodano.${attr} = tipodano.${attr} === 1 ? 0 : 1;
                const detailDiv = document.getElementById('${id}');
                const isActive = tipodano.${attr} === 1;
                detailDiv.style.display = isActive ? 'block' : 'none';
                detailDiv.innerText = isActive ? '${texto}' : '';
                if (typeof updateSkills === 'function') updateSkills();
            ">
                ${label}
            </button>
            <div id="${id}" data-group="${groupId}" data-attr="${attr}" data-texto="${texto}" style="display:${isActive ? 'block' : 'none'}; margin-top:5px;">
                ${isActive ? texto : ''}
            </div>
        `;
    });

    const buttonsOnly = buttonHtml.map(b => b.split('</button>')[0] + '</button>').join('');
    const detailsOnly = buttonHtml.map(b => b.split('</button>')[1]).join('');

    return `
    <div style="margin-bottom:5px;">
        <div style="display: flex; align-items: center; gap: 5px; flex-wrap: wrap;">
            <span><b>${actionName}</b></span>
            ${buttonsOnly}
        </div>
        <div style="margin-left:20px;">
            ${detailsOnly}
        </div>
    </div>
    `;
}





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

    function mostrarValorEDFor(indice) {
        valorereal = Math.floor((indice - 1) / 10);

        dado = (valorereal * 10 - indice + 1) + 10;

        if (indice >= 1) {
            return `Min: ${dado}d`;
        } else {

            return `Min: 10d`;
        }
    }
    function mostrarValorED(indice) {
        valorereal = Math.floor((indice - 1) / 10);

        dado = (valorereal * 10 - indice + 1) + 10;

        if (indice >= 1) {
            return `Dano:  ${valorereal} | Min: ${dado}d`;
        } else {

            return `Dano:  0 | Min: 10d`;
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
    function gerarTextoGolpeFiltrado(tipodano, spaces) {
        let texto = "";

        if (tipodano.attr1 === 1) {
            texto += `Impacto: (${spaces + 3}) ${mostrarValorED(spaces + 3)}<br>`;
        } else {
            if (attributes.attr3 <= 2) {
                if (spaces >= 0) {
                    texto += `Impacto: (${3}) ${mostrarValorED(3)}<br>`;
                } else {
                    texto += `Impacto: (${1}) ${mostrarValorED(1)}<br>`;
                }
            } else {
                if (spaces >= 3) {
                    texto += `Impacto: (${3}) ${mostrarValorED(3)}<br>`;
                } else {
                    texto += `Impacto: (${1}) ${mostrarValorED(1)}<br>`;
                }

            }

        }

        if (tipodano.attr4 === 1) {
            if (spaces >= 0) {
                texto += `Tóxico: (${(spaces * 3) + 3}) ${mostrarValorED((spaces * 3) + 3)}<br>`;
            } else {
                texto += `Tóxico: (${1}) ${mostrarValorED(1)}<br>`;
            }

        }

        if (tipodano.attr2 === 1) {
            if (spaces >= 0) {
                texto += `Perfurante: (${(spaces * 4) + 3}) ${mostrarValorED((spaces * 4) + 3)}<br>`;
            } else {
                texto += `Perfurante: (${1}) ${mostrarValorED(1)}<br>`;
            }
        }
        if (tipodano.attr3 === 1) {
            if (spaces >= 0) {
                texto += `Corrosivo: (${(spaces * 2) + 3}) ${mostrarValorED((spaces * 2) + 3)}<br>`;
            } else {
                texto += `Corrosivo: (${1}) ${mostrarValorED(1)}<br>`;
            }
        }

        return texto || "Nenhum tipo de dano selecionado.";

    }

    function adicionarGolpeOuDano(skillTextParts2, tipodano, attributes) {
        const spacesBase = attributes.attr3 <= 0 ? attributes.attr3 - 2 : attributes.attr3 - 3;

        skillTextParts2.push(createMultipleActionButtons('Golpe ou Dano', [
            {
                label: '🔶',
                details: gerarTextoGolpeFiltrado(tipodano, spacesBase)
            },
            {
                label: '🔷',
                details: gerarTextoGolpeFiltrado(tipodano, attributes.attr3)
            }
        ]));
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

    if (tipodano.attr1 == 1) {
        forcaValue = attributes.attr3 > attributes.attr7 ? attributes.attr3 : attributes.attr7;
    } else {
        forcaValue = 0;
    }

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

    velocidadeValue = (+ attributes.attr3 + attributes.attr4) * 2;

    if (tipodano.attr1 == 1) {
        pesoValue = (attributes.attr3 < 0 ? attributes.attr3 + 6 : forcaValue == 0 ? 6 : Math.floor((((forcaValue - 1) / 3) + 6)));
        visibilidadeValue = (attributes.attr3 >= 0 ? pesoValue - 6 : attributes.attr3);
        ocultarValue = ocultarValue + (attributes.attr3 > 2 ? -attributes.attr3 + 2 : 0);
        inventarioValue = (attributes.attr3 == 0 ? 3 : attributes.attr3 == 1 ? 5 : attributes.attr3 >= 2 ? 10 + (5 * (attributes.attr3 - 2)) : 1);
    } else {
        pesoValue = 6;
        visibilidadeValue = 0;
        inventarioValue = 3;
    }

    ocultarValuePeso = (attributes.attr2 >= 0 ? Math.floor(attributes.attr2 / 3) : attributes.attr2);






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
    spaces2 = attributes.attr3 <= 0 ? attributes.attr3 - 2 : attributes.attr3 - 3;
    skillTextParts.push(`🔷${gerarTextoGolpeFiltrado(tipodano, attributes.attr3)}<br>  
    `);
    skillTextParts.push(`🔶${gerarTextoGolpeFiltrado(tipodano, spaces2)}<br> 
    `);


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
        skillTextParts.push(`••Fator de Experi: ${mostrarValorED(attributes.attr7 + 1)}<br>`);
    }

    if (true) {
        skillTextParts.push(`••Pontos de Habilidades: +${attributes.attr7 + 1}<br><br>
    `);
    }
    if (desvioValue + visibilidadeValue > 0) {
        if (((attributes.attr1 >= 1 || attributes.attr4 >= 1) && (attributes.attr4 >= 0 && attributes.attr1 >= 0))) {
            skillTextParts.push(`Desviar: (${attributes.attr4 * attributes.attr1}) ${mostrarValorEDdesvio(+desvioValue - visibilidadeValue)}<br>
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
    if (tipodano.attr1 == 1) {
        if ((attributes.attr3 >= 0)) {

            skillTextParts.push(`Força: ${(forcaValue + 3)} (${2 ** (forcaValue + 3)}Kg) ${mostrarValorEDFor(attributes.attr3 + 3)}<br>
    `);

        } if ((attributes.attr3 < 0)) {
            skillTextParts.push(`Força: ${(-forcaValue + 3)} (${2 ** (-forcaValue + 3)}Kg) ${mostrarValorEDFor(attributes.attr3 + 3)}<br>
        `);
        }
    } else {
        skillTextParts.push(`Força: ${(+ 3)} (${2 ** (3)}Kg) ${mostrarValorEDFor(3)}<br>
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

    if (true) {
        skillText += `<hr>`;

        let skillTextParts2 = [];

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

        skillTextParts2.push(createActionButton('Dano Queda', `Dano de Impacto + Efeito caido<br><br>
        
        Espaço + altura = n dados.<br> 
        n( ${mostrarValorED(2)})<br> 
        <br>

        Dano max: Espaços +10 <= altura. <br>Em alvos<br><br>

        Lesão aleatoria vinda desse dano.<br><br>

        •Dano a Inventario: (o mesmo de Efeito em area) Para Obj e alvos afetados.<br><br>
        
        Defesa e Desvio nesse caso só bloqueará até dois dados no maximo.<br><br>
        Acima de 10 em dados, os dados param de aumentar e o dano aumenta para min 8 7 ...
        `));

        skillText += skillTextParts2.join("");





    }

    if (true) {
        skillText += `<hr><b>`;

        let skillTextParts2 = [];

        if (attributes.attr3 - ocultarbonusValue >= 0) {
            skillTextParts2.push(`Inventário: ${inventarioValue} (10max para item>=0)<br>`);
            skillTextParts2.push(`Peso: ${pesoValue - ocultarValuePeso} Espaços (${2 ** (pesoValue - ocultarValuePeso)}Kg) <br>`);
            skillTextParts2.push(`Alcance Fizico: ${pesoValue - 5 - ocultarValuePeso}d<br> `);
            skillTextParts2.push(`Visibilidade: ${-ocultrarsalvaValue}<br><br> `);
            skillTextParts2.push(`•Efeito em Area seram aplicados em alvos memores que o Peso ${pesoValue - ocultarValuePeso} (${2 ** (pesoValue - ocultarValuePeso)}Kg) <br> `);

        } else {
            skillTextParts2.push(`Inventário: ${1} (10max para item>=0)<br>`);
            skillTextParts2.push(`Peso: ${pesoValue} Espaços ${2 ** (pesoValue)}Kg <br>`);
            skillTextParts2.push(`Alcance Fizico: ${attributes.attr3 == -1 ? 1 : 0}d<br> `);
            skillTextParts2.push(`Visibilidade: ${-ocultrarsalvaValue}<br> `);
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
                skillTextParts2.push(`Ocultar: 0<br> `);
                skillTextParts2.push(`Visibilidade: 0<br><br> `);
                skillTextParts2.push(`Min de ♠ Para Empunhar ou Vestir: 0<br>`);

            } else {
                if (attributes.attr3 > 2 && attributes.attr2 == 0) {
                    skillTextParts2.push(`Ocultar: ${ocultrarsalvaValue}<br> `);
                    skillTextParts2.push(`Visibilidade: ${-ocultrarsalvaValue}<br><br> `);
                    skillTextParts2.push(`Min de ♠ Para Empunhar ou Vestir: ${(-ocultrarsalvaValue)}<br>`);
                } else {
                    skillTextParts2.push(`Ocultar: ${ocultrarsalvaValue}<br> `);
                    skillTextParts2.push(`Visibilidade: ${-ocultrarsalvaValue}<br><br> `);
                    skillTextParts2.push(`Min de ♠ Para Empunhar ou Vestir: ${(-ocultrarsalvaValue)}<br>`);
                }
            }
        } else {

            if (attributes.attr3 > 2 && attributes.attr2 == 0) {
                skillTextParts2.push(`Ocultar: ${ocultrarsalvaValue}<br>`);
                skillTextParts2.push(`Min de ♠ Para Empunhar ou Vestir: ${(ocultrarsalvaValue)}<br>`);
                skillTextParts2.push(`Visibilidade:: ${-ocultrarsalvaValue}<br><br>`);
            } else {
                skillTextParts2.push(`Ocultar: ${ocultrarsalvaValue}<br> `);
                skillTextParts2.push(`Min de ♠ Para Empunhar ou Vestir: ${(-ocultrarsalvaValue)}<br>`);
                skillTextParts2.push(`Visibilidade: ${-ocultrarsalvaValue}<br><br> `);
            }

        }

        skillTextParts2.push(`••Defesa: ${(mostrarValorEDdesvio(-ocultrarsalvaValue + 1))}<br>`);
        skillTextParts2.push(`••FortDefesa: ${mostrarValorEDdesvio(9)}<br><br>`);
        skillTextParts2.push(`••DefCorrosivo : ${(-ocultrarsalvaValue) > 3 ? mostrarValorEDdesvio(-ocultrarsalvaValue - 3) : mostrarValorEDdesvio(1)}<br>`);
        skillTextParts2.push(`Espaços: (${-ocultrarsalvaValue}) Figurativo: (${2 ** -ocultrarsalvaValue}Kg) <br> `);



        skillTextParts2.sort();
        skillText += skillTextParts2.join("");


        skillText += `<hr>`;
        skillText += `<h1>Inf de Dano</h1>`;


        skillTextParts2 = [];


        skillTextParts2.push(createMultipleActionButtonsComEstado('Impacto', [
            { label: '', attr: 'attr1', texto: 'Ser possui Força: Impacto' }
        ], tipodano));

        skillTextParts2.push(createMultipleActionButtonsComEstado('Perfuração', [
            { label: '', attr: 'attr2', texto: 'Ser possui Força: Perfuração' }
        ], tipodano));

        skillTextParts2.push(createMultipleActionButtonsComEstado('Corrosivo', [
            { label: '', attr: 'attr3', texto: 'Ser possui Força: Corrosão' }
        ], tipodano));

        skillTextParts2.push(createMultipleActionButtonsComEstado('Tóxico', [
            { label: '', attr: 'attr4', texto: 'Ser possui Força: Tóxico' }
        ], tipodano));



        skillTextParts2.sort();
        skillText += skillTextParts2.join("");


        skillText += `</b>`;


        skillText += `<hr><b>`;
        skillText += `<h1>Reações</h1>`;

        skillTextParts2 = [];

        if (desvioValue + visibilidadeValue > 0) {
            if (((attributes.attr1 >= 1 || attributes.attr4 >= 1) && (attributes.attr4 >= 0 && attributes.attr1 >= 0))) {
                skillTextParts2.push(`Desviar: (${attributes.attr4 * attributes.attr1}) ${mostrarValorEDdesvio(+desvioValue - visibilidadeValue + attributes.attr3)}<br>
                    `);
            } else if ((attributes.attr4 >= 0 || attributes.attr1 >= 0)) {
                skillTextParts2.push(`Desviar: (${(-desvioValue - visibilidadeValue)}) ${mostrarValorEDdesvio(-desvioValue - visibilidadeValue)}<br>
            `);
            }
        } else if ((attributes.attr4 >= 0 && attributes.attr1 >= 0)) {
            skillTextParts2.push(`Desviar: (${(desvioValue - visibilidadeValue)}) ${mostrarValorEDdesvio(desvioValue - visibilidadeValue)}<br>
            `);
        } else if ((attributes.attr4 >= 0 || attributes.attr1 >= 0)) {
            skillTextParts2.push(`Desviar: (${(-desvioValue - visibilidadeValue)}) ${mostrarValorEDdesvio(-desvioValue - visibilidadeValue)}<br>
            `);
        }
        skillTextParts2.push(`Desprender: ${attributes.attr3 + 2} (${2 ** (attributes.attr3 + 2)}Kg)<br>`);

        skillTextParts2.sort();
        skillText += skillTextParts2.join("");
        skillText += `<hr><b>`;
        skillText += `<h2>Ações Simples 🔶</h2>`;
        skillText += `<h2>Ações 🔷</h2>`;
        skillTextParts2 = [];

        // Função para criar botão e conteúdo oculto

        // Criar os botões







        skillTextParts2.push(createActionButton('Toque', `Toque`));

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


        function gerarTextoDerrubar(spaces) {
            return `
                •Peso|Espaço Alvo máx: ${spaces} (${2 ** spaces}Kg)<br><br>
                `;
        }
        if (attributes.attr3 < 2) {
            skillTextParts2.push(createMultipleActionButtons('Derrubar Trombar', [
                {
                    label: '🔶',
                    details: gerarTextoDerrubar(attributes.attr3)
                },
                {
                    label: '🔷',
                    details: gerarTextoDerrubar(attributes.attr3 + 3)
                },
                {
                    label: '🔶🔷',
                    details: gerarTextoDerrubar(attributes.attr3 + 8)
                }
            ]));

        } else {
            skillTextParts2.push(createMultipleActionButtons('Derrubar Trombar', [
                {
                    label: 'L',
                    details: gerarTextoDerrubar(attributes.attr3 - 2)
                },
                {
                    label: '🔶',
                    details: gerarTextoDerrubar(attributes.attr3)
                },
                {
                    label: '🔷',
                    details: gerarTextoDerrubar(attributes.attr3 + 3)
                },
                {
                    label: '🔶🔷',
                    details: gerarTextoDerrubar(attributes.attr3 + 6)
                }
            ]));


        }


        function gerarTextoArremesso(spaces) {
            let texttemp = '0'; // Inicializa com valor padrão

            if (attributes.attr1 >= 1) {
                texttemp = `${sensiValue + 1}`;
            } else if (attributes.attr1 < 0) {
                texttemp = `-${sensiValue + 1}`;
            }
            return `
                •Peso|Espaço Alvo máx:  ${spaces}  (${2 ** spaces}Kg)<br><br>
                
                •Altura máx Obj: 3d<br><br>

                •Distancia máx horizontal Obj: 10d<br><br>
            `;
        }





        adicionarGolpeOuDano(skillTextParts2, tipodano, attributes);



        skillTextParts2.push(createActionButton('••Efeito de Força', `•Dano Efeito de Força: Segue como Dano de Queda numericamente igual a 
                altura MAx (se n houver, distancia horizontal Max) 
                do deslocamento tanto para obj quanto para alvos afetados.<br>
                <br>

                Dano min Efeito de Força: Considere Dano de queda 1d.<br><br>

                •Acerto: Se passar em um dos dois dados o Efeito pega <br><br>
                •Efeito caido sempre irá acontecer caso os Alvos sofram um acerto de: Derrubar Trombar, Empurrar, Puxar e Arremessar (nesse caso o obj arremesado).<br><br>
            

                •Somar 3d por cada 1 Espaço Max superado. O inverso numerico também pode.<br><br>
            `));

        if (attributes.attr3 <= 2) {
            skillTextParts2.push(createMultipleActionButtons('Arremessar', [
                {
                    label: '🔶🔷',
                    details: gerarTextoArremesso(attributes.attr3)
                }
            ]));
        } else {
            skillTextParts2.push(createMultipleActionButtons('Arremessar', [
                {
                    label: '🔶',
                    details: gerarTextoArremesso(attributes.attr3 - 3)
                },
                {
                    label: '🔶🔷',
                    details: gerarTextoArremesso(attributes.attr3)
                }
            ]));
        }

        function gerarTextoEmpurrar(spaces) {
            return `
            •Peso|Espaço Alvo máx: ${spaces} (${2 ** spaces}Kg)<br><br>
        
            •Distancia máx horizontal Obj: 1d<br><br>
            `;
        }



        skillTextParts2.push(createMultipleActionButtons('Empurrar', [
            {
                label: '🔶',
                details: gerarTextoEmpurrar(attributes.attr3 + 2)
            },
            {
                label: '🔶🔷',
                details: gerarTextoEmpurrar(attributes.attr3 + 5)
            }
        ]));



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
