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

let titulo = {
    attr1: 0,//Efeito de força
    attr2: 0,//tipo de dano
    attr3: 0,//reação
    attr4: 0,//simbologia
    attr5: 0,//inf de itens
    attr6: 0,//Dano de Queda
    attr7: 0,
    attr8: 0,
};

let infitems = {
    attr1: 0,//Potencial
    attr2: 0,//Ocultabilidade
    attr3: 0,
    attr4: 0,
    attr5: 0,
    attr6: 0,
    attr7: 0,
    attr8: 0,
};

function createTituloComEstado(actionName, buttons, titulo) {
    const groupId = `group_${actionName.replace(/\s+/g, '_')}_${Math.random().toString(36).substr(2, 5)}`;

    const buttonHtml = buttons.map(({ label, attr, texto }, i) => {
        const id = `${groupId}_details_${i}`;
        const isActive = titulo[attr] === 1;
        return `
            <button
                onclick="
                    titulo.${attr} = titulo.${attr} === 1 ? 0 : 1;
                    const detailDiv = document.getElementById('${id}');
                    const isActive = titulo.${attr} === 1;
                    detailDiv.style.display = isActive ? 'block' : 'none';
                    detailDiv.innerText = isActive ? '${texto}' : '';
                    if (typeof updateSkills === 'function') updateSkills();
                "
                style="font-weight: bold; font-size: 18px; padding: 5px 10px;"
            >
                ${label}
            </button>
            <div id="${id}" data-group="${groupId}" data-attr="${attr}" data-texto="${texto}" style="display:${isActive ? 'block' : 'none'}; margin-top:5px; font-size: 16px;">
                ${isActive ? texto : ''}
            </div>
        `;
    });

    const buttonsOnly = buttonHtml.map(b => b.split('</button>')[0] + '</button>').join('');
    const detailsOnly = buttonHtml.map(b => b.split('</button>')[1]).join('');

    return `
    <div style="margin-bottom:10px;">
        <div style="display: flex; align-items: center; gap: 5px; flex-wrap: wrap;">
            <span style="font-size: 30px;"><b>${actionName}</b></span>
            ${buttonsOnly}
        </div>
        <div style="margin-left:20px;">
            ${detailsOnly}
        </div>
    </div>
    `;
}


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


function createMultipleActionButtonsComContador(buttons, infitems) {
    const groupId = `group_${Math.random().toString(36).substr(2, 5)}`;

    const buttonHtml = buttons.map(({ label, attr }, i) => {
        const idCounter = `${groupId}_counter_${i}`;

        return `
            <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 5px;">
                <span><b>${label}</b></span>
                <button
                    onclick="
                        if (infitems['${attr}'] > 0) infitems['${attr}']--;
                        document.getElementById('${idCounter}').innerText = infitems['${attr}'];
                        if (typeof updateSkills === 'function') updateSkills();
                    "
                    style="padding: 1px 4px; font-size: 16px; cursor: pointer; border: none; border-radius: 4px; background-color: #007bff; color: white; width: 20px; height: 20px;">
                    -
                </button>
                <span id="${idCounter}" style="width: auto; text-align: center; font-size: 16px; font-weight: bold; margin: 0 10px;">${infitems[attr]}</span>
                <button
                    onclick="
                        infitems['${attr}']++;
                        document.getElementById('${idCounter}').innerText = infitems['${attr}'];
                        if (typeof updateSkills === 'function') updateSkills();
                    "
                    style="padding: 1px 4px; font-size: 16px; cursor: pointer; border: none; border-radius: 4px; background-color: #007bff; color: white; width: 20px; height: 20px;">
                    +
                </button>
            </div>
        `;
    });

    return `
        <div style="display: flex; flex-direction: column; gap: 5px;">
            ${buttonHtml.join('')}
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
        indice++;
        valorereal = Math.floor((indice - 1) / 10);

        dado = (valorereal * 10 - indice + 1) + 10;

        if (indice >= 1) {
            return `Min ${dado}d`;
        } else {

            return `Min 10d`;
        }
    }
    function mostrarValorED(indice) {
        indice++;
        valorereal = Math.floor((indice - 1) / 10);

        dado = (valorereal * 10 - indice + 1) + 10;

        if (indice >= 1) {
            return `Dano:  ${valorereal} | Min ${dado}d`;
        } else {

            return `Dano:  0 | Min 10d`;
        }
    }

    function mostrarValorEDDefesa(indice2) {
        if (attributes.attr3 > 0) {
            return ` ${-indice2 + 10}d >= Bloqueia o dano `;
        } else {
            return ` ${-indice2 + 10}d >= Dano dobrado`;
        }
    }

    function mostrarValorEDperc(indice2) {
        if (indice2 > 0) {
            return ` ${-indice2 + 10}d >= Bloqueia o dano `;
        } else {
            return ` ${indice2 + 10}d >= Dano dobrado`;
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

    function mostrarValorEDocultar(indice3) {
        if (indice3 >= 0) {
            return `${indice3}d de Vantagem`; // numero aqui representa quanto pode descer o valor do dado
        } else {
            return `${-indice3}d de Desvantagem`; // valor do dado sempre sobe
        }

    }

    function gerarTextoGolpeFiltrado(tipodano, spaces) {
        let texto = "";

        if (tipodano.attr1 === 1) {
            if (spaces == attributes.attr3) {
                texto += `🔷`;
            } else {
                texto += `🔶`;
            }
            texto += `Impacto: (${spaces + 3}) ${mostrarValorED(spaces + 3)}<br>`;
        } else {
            if (attributes.attr3 <= 2) {
                if (spaces >= 0) {
                    texto += `🔷Impacto: (${3}) ${mostrarValorED(3)}<br>`;
                } else {
                    texto += `🔶Impacto: (${1}) ${mostrarValorED(1)}<br>`;
                }
            } else {
                if (spaces >= 3) {
                    texto += `🔷Impacto: (${3}) ${mostrarValorED(3)}<br>`;
                } else {
                    texto += `🔶Impacto: (${1}) ${mostrarValorED(1)}<br>`;
                }

            }

        }

        if (tipodano.attr4 === 1) {
            if (spaces == attributes.attr3) {
                texto += `🔷`;
            } else {
                texto += `🔶`;
            }
            if (spaces >= 0) {
                texto += `Tóxico: (${(spaces * 3) + 3}) ${mostrarValorED((spaces * 3) + 3)}<br>`;
            } else {
                texto += `Tóxico: (${1}) ${mostrarValorED(1)}<br>`;
            }

        }

        if (tipodano.attr2 === 1) {
            if (spaces == attributes.attr3) {
                texto += `🔷`;
            } else {
                texto += `🔶`;
            }
            if (spaces >= 0) {
                texto += `Perfurante: (${(spaces ) + 3}) ${mostrarValorED((spaces) + 3)}<br>`;
            } else {
                texto += `Perfurante: (${1}) ${mostrarValorED(1)}<br>`;
            }
            texto += `Sangramento/t: MAX 5 POR EVENTO <br>`;
        }
        if (tipodano.attr3 === 1) {
            if (spaces == attributes.attr3) {
                texto += `🔷`;
            } else {
                texto += `🔶`;
            }
            if (spaces >= 0) {
                texto += `Corrosivo: (${(spaces) + 3}) ${mostrarValorED((spaces) + 3)}<br>`;
            } else {
                texto += `Corrosivo: (${1}) ${mostrarValorED(1)}<br>`;
            }
            texto += `Lesão sempre inclusa e permanente <br>`;
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

    defpercepcaoValeu = attributes.attr4 * 2 - 1;




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



        skillTextParts.push(`Defesa: ${mostrarValorEDDefesa(defenseValue + desbiopassivoValue+1)}<br> 
        `);
        skillTextParts.push(`Fortitude: (+${fortitudeValue}) ${mostrarValorEDDefesa(defensedefortitudeValue + desbiopassivoValue+1)}  <br>    
        `);



    } if (attributes.attr3 < 0 && attributes.attr1 < 0) {



        skillTextParts.push(`Defesa: ${mostrarValorEDDefesa(defenseValue + desbiopassivoValue)}<br> 
        `);
        skillTextParts.push(`Fortitude:(${-fortitudeValue})  ${mostrarValorEDDefesa(defensedefortitudeValue + desbiopassivoValue)}  <br>    
        `);



    }
    spaces2 = attributes.attr3 <= 0 ? attributes.attr3 - 2 : attributes.attr3 - 3;
    skillTextParts.push(`${gerarTextoGolpeFiltrado(tipodano, attributes.attr3)}<br>  
    `);
    skillTextParts.push(`${gerarTextoGolpeFiltrado(tipodano, spaces2)}
    `);


    if (vontadeValue >= 1 && attributes.attr1 >= 1 && attributes.attr2 >= 1) {
        skillTextParts.push(`Vontade : +${vontadeValue}<br>`);
        skillTextParts.push(`Resiliência: ${mostrarValorEDresiliencia(resilienceValue)}<br>`);

    } if (attributes.attr1 < 0 && attributes.attr2 < 0) {
        skillTextParts.push(`Vontade : ${-vontadeValue}<br>`);
        skillTextParts.push(`Resiliência: ${mostrarValorEDresiliencia(resilienceValue)}<br>`);
    }


    if (attributes.attr4 >= 1) {
        skillTextParts.push(`Percepção: (+${percepcaoValue + 4}) ${mostrarValorEDperc(defpercepcaoValeu)}<br>
    `);
    } if (attributes.attr4 < 0) {
        skillTextParts.push(`Percepção: (${-percepcaoValue - 4}) ${mostrarValorEDperc(defpercepcaoValeu)}<br>
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
        skillTextParts.push(`••Pontos de Habilidades: +${attributes.attr7 + 1}<br>
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
            skillTextParts.push(`Ocultar: (+${ocultarValue + ocultarbonusValue}) ${mostrarValorEDocultar(Math.floor((ocultarValue + ocultarbonusValue) / 2))} <br>
                `);
        } else {

            skillTextParts.push(`Ocultar: (${ocultarValue + ocultarbonusValue}) ${mostrarValorEDocultar(Math.floor((ocultarValue + ocultarbonusValue) / 2))} <br>
                `);
        }
        ocultrarsalvaValue = ocultarValue + ocultarbonusValue;
    } else if ((attributes.attr2 < 0)) {
        skillTextParts.push(`Ocultar:(${-ocultarValue + ocultarbonusValue}) ${mostrarValorEDocultar(Math.floor((-ocultarValue + ocultarbonusValue) / 2))} <br>
    `);
        ocultrarsalvaValue = -ocultarValue + ocultarbonusValue;
    } else if (-1 + ocultarValue + ocultarbonusValue != 0) {
        skillTextParts.push(`Ocultar: (${-1 + ocultarValue + ocultarbonusValue}) ${mostrarValorEDocultar(Math.floor((-1 + ocultarValue + ocultarbonusValue) / 2))} <br>
            `);
        ocultrarsalvaValue = -1 + ocultarValue + ocultarbonusValue;
    }


    if (tipodano.attr1 == 1) {
        if ((attributes.attr3 >= 0)) {

            skillTextParts.push(`🔶🔷Empunhadura: ${(forcaValue + 3)} (${2 ** (forcaValue + 3)}Kg)<br>
    `); skillTextParts.push(`Efeito de Força: ${mostrarValorEDFor(attributes.attr3 + 3)}<br>
    
    `); skillTextParts.push(`🔶Empunhadura: ${(forcaValue)} (${2 ** (forcaValue)}Kg)<br>
    `);

        } if ((attributes.attr3 < 0)) {

            skillTextParts.push(`🔶🔷Empunhadura: ${(-forcaValue + 3)} (${2 ** (-forcaValue + 3)}Kg)<br>
    `); skillTextParts.push(`Efeito de Força: ${mostrarValorEDFor(attributes.attr3 + 3)}<br>
    `);
        }
    } else {
        skillTextParts.push(`🔶🔷Empunhadura: ${(+ 3)} (${2 ** (+ 3)}Kg)<br>
    `); skillTextParts.push(`Efeito de Força: ${mostrarValorEDFor(+ 3)}<br>
    `); skillTextParts.push(`🔶Empunhadura: ${(forcaValue)} (${2 ** (forcaValue)}Kg)<br>
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




    }

    if (true) {
        skillText += `<b>`;

        let skillTextParts2 = [];

        if (attributes.attr3 - ocultarbonusValue >= 0) {
            skillTextParts2.push(`Inventário: ${inventarioValue} (10max para item>=0)<br>`);
            skillTextParts2.push(`Peso: ${pesoValue - ocultarValuePeso} Espaços (${2 ** (pesoValue - ocultarValuePeso)}Kg) <br>`);
            skillTextParts2.push(`Alcance Fizico: ${pesoValue - 5 - ocultarValuePeso}d<br> `);
            skillTextParts2.push(`Visibilidade: ${-ocultrarsalvaValue}<br><br> `);
            skillTextParts2.push(`•Efeito em Area seram aplicados em alvos menores igual que o Peso ${pesoValue - ocultarValuePeso - 1} (${2 ** (pesoValue - ocultarValuePeso - 1)}Kg) <br> `);

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

        skillTextParts2 = [];



        skillTextParts2.push(createTituloComEstado('Inf de Items', [
            { label: '', attr: 'attr5', texto: '' }
        ], titulo));

        skillText += skillTextParts2.join("");
        skillTextParts2 = [];

        if (titulo.attr5 == 1) {

            skillTextParts2.push(
                createMultipleActionButtonsComContador([
                    { label: 'Potencial', attr: 'attr1' },
                    { label: 'Ocultatibilidade', attr: 'attr2' }
                ], infitems)
            );
            skillTextParts2.push(`<hr>`);
            pontecialValue = (infitems.attr1 < 4 ? (+Math.floor((infitems.attr1) / 3)) : infitems.attr1 + 4 * (-1 + Math.floor((infitems.attr1 - 1) / 3)));
            pontecialValuedef = pontecialValue;

            pontecialValuepeso = pontecialValue - infitems.attr2 > 0 ? pontecialValue - infitems.attr2 : 0;


            skillTextParts2.push(`Potencial: ${infitems.attr1}<br>`);
            skillTextParts2.push(`Ocultar: ${-pontecialValue + infitems.attr2}<br>`);
            skillTextParts2.push(`Peso|Espaços: ${(pontecialValuepeso)} (${(2 ** pontecialValuepeso)})Kg<br>`);
            skillTextParts2.push(`Visibilidade: ${pontecialValue - infitems.attr2}<br><br>`);

            skillTextParts2.push(`•Defesa: ${(mostrarValorEDdesvio(pontecialValuedef + 1))}<br>`);
            skillTextParts2.push(`•DefFortitude: ${mostrarValorEDdesvio(9)}<br>`);
            skillTextParts2.push(`•DefCorrosivo : ${(pontecialValuedef) > 3 ? mostrarValorEDdesvio(pontecialValuedef - 3) : mostrarValorEDdesvio(1)}<br>`);





        }


        skillText += skillTextParts2.join("");


        skillTextParts2 = [];



        skillText += `<hr>`;


        skillTextParts2 = [];

        skillTextParts2.push(createTituloComEstado('Inf de Dano', [
            { label: '', attr: 'attr2', texto: '' }
        ], titulo));

        if (titulo.attr2 == 1) {
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
        }



        skillText += skillTextParts2.join("");

        skillTextParts2 = [];

        skillTextParts2.push(createTituloComEstado('Dano de Queda', [
            { label: '', attr: 'attr6', texto: '' }
        ], titulo));

        skillText += `<hr>`;

        if (titulo.attr6 == 1) {

            skillTextParts2.push('•Dano Queda', `
        n( ${mostrarValorED(2)})<br> 
        <br>

        •Dano max: Espaços +10 <= altura. <br>Em alvos<br><br>

        •Lesão aleatoria vinda desse dano.<br><br>

        •Dano a Inventario: (o mesmo de Efeito em area) Para Obj e alvos afetados.<br><br>
        
        •Defesa e Desvio nesse caso só bloqueará até dois dados no maximo.<br><br>
        Acima de 10 em dados, os dados param de aumentar e o dano aumenta para min 8 7 ...
        `);




        }


        skillText += skillTextParts2.join("");


        skillText += `</b>`;


        skillText += `<hr><b>`;


        skillTextParts2 = [];

        skillTextParts2.push(createTituloComEstado('Reações', [
            { label: '', attr: 'attr3', texto: '' }
        ], titulo));

        if (titulo.attr3 == 1) {

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



        }


        skillText += skillTextParts2.join("");




        skillText += `<hr><b>`;
        skillTextParts2 = [];


        skillTextParts2.push(createTituloComEstado('Simbologia', [
            { label: '', attr: 'attr4', texto: '' }
        ], titulo));

        skillText += skillTextParts2.join("");

        skillTextParts2 = [];

        if (titulo.attr4 == 1) {

            skillText += `<h2>Ações Simples 🔶</h2>`;
            skillText += `<h2>Ações 🔷</h2>`;

        }

        skillText += skillTextParts2.join("");

        skillText += `<hr><b>`;
        skillTextParts2 = [];

        function efeitodeforça() {

            // Função para criar botão e conteúdo oculto

            // Criar os botões

            if (tipodano.attr1 == 1) {
                forcaimp = attributes.attr3;
            } else {
                forcaimp = 0;
            }


            function gerarTextoDerrubar(spaces) {
                return `
                •Peso|Espaço Alvo máx: ${spaces} (${2 ** spaces}Kg)<br><br>
                `;
            }
            if (forcaimp < 2) {
                skillTextParts2.push(createMultipleActionButtons('Derrubar Trombar', [
                    {
                        label: '🔶',
                        details: gerarTextoDerrubar(forcaimp)
                    },
                    {
                        label: '🔷',
                        details: gerarTextoDerrubar(forcaimp + 3)
                    },
                    {
                        label: '🔶🔷',
                        details: gerarTextoDerrubar(forcaimp + 8)
                    }
                ]));

            } else {
                skillTextParts2.push(createMultipleActionButtons('Derrubar Trombar', [
                    {
                        label: 'L',
                        details: gerarTextoDerrubar(forcaimp - 2)
                    },
                    {
                        label: '🔶',
                        details: gerarTextoDerrubar(forcaimp)
                    },
                    {
                        label: '🔷',
                        details: gerarTextoDerrubar(forcaimp + 3)
                    },
                    {
                        label: '🔶🔷',
                        details: gerarTextoDerrubar(forcaimp + 6)
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



            skillTextParts2.push(createActionButton('••Informação', `•Dano Efeito de Força: Segue como Dano de Queda numericamente igual a 
                altura MAx (se n houver, distancia horizontal Max) 
                do deslocamento tanto para obj quanto para alvos afetados (execeto puxar nesse paenas para alvos.).<br>
                <br>

                Dano min Efeito de Força: Considere Dano de queda 1d.<br><br>

                •Acerto: Se passar em um dos dois dados o Efeito pega <br><br>
                •Efeito caido sempre irá acontecer caso os Alvos sofram um acerto de: Derrubar Trombar, Empurrar, Puxar e Arremessar (nesse caso o obj arremesado).<br><br>
            

                •Efeitos de Força prolongados por eventos causam no seu usuario -1 de Saude. Se forem maiores que uma ação simples.<br><br>

                •Somar 3d por cada 1 Espaço Max superado. O inverso numerico também pode.<br><br>


            `));

            if (forcaimp <= 2) {
                skillTextParts2.push(createMultipleActionButtons('Arremessar', [
                    {
                        label: '🔶🔷',
                        details: gerarTextoArremesso(forcaimp)
                    }
                ]));
            } else {
                skillTextParts2.push(createMultipleActionButtons('Arremessar', [
                    {
                        label: '🔶',
                        details: gerarTextoArremesso(forcaimp - 3)
                    },
                    {
                        label: '🔶🔷',
                        details: gerarTextoArremesso(forcaimp)
                    }
                ]));
            }
            skillTextParts2.push(createMultipleActionButtons('Carregar', [
                {
                    label: '🔷',
                    details: '+3 inventaio <br><br>'
                }
            ]));


            skillTextParts2.push(createMultipleActionButtons('Puxar', [
                {
                    label: '🔶',
                    details: gerarTextoPuxar(forcaimp + 2)
                },
                {
                    label: '🔶🔷',
                    details: gerarTextoPuxar(forcaimp + 5)
                }
            ]));


            function gerarTextoEmpurrar(spaces) {
                return `
            •Peso|Espaço Alvo máx: ${spaces} (${2 ** spaces}Kg)<br><br>
        
            •Distancia máx horizontal Obj: 1d<br><br>
            `;
            }

            skillTextParts2.push(createMultipleActionButtons('Segurar Prender', [
                {
                    label: '🔶',
                    details: gerarTextoSegurar(forcaimp)
                },
                {
                    label: '🔶🔷',
                    details: gerarTextoSegurar(forcaimp + 3)
                }
            ]));

            function gerarTextoSegurar(spaces) {
                return `
            •Peso|Espaço Alvo máx: ${spaces + 2} (${2 ** (spaces + 2)}Kg)<br>
            •Preso com: ${spaces}<br><br>
            •Sufocamento permetido se: Alvo Menor igual que ${spaces} Espaços (${2 ** (spaces)}Kg)<br><br>
           
            `;
            }

            function gerarTextoPuxar(spaces) {
                return `
            •Peso|Espaço Alvo máx: ${spaces} (${2 ** (spaces)}Kg)<br>
            •Preso com: ${spaces - 2}<br><br>
            
            •Apenas Puxar horrizontal.
            Se vertical:  ir para Empunhar.<br><br>
            
            •Dano turno|Evento: (1|13) Dano queda<br><br>
            `;
            }

            function gerarTextoEmpunhar(spaces) {
                return `
            •Peso|Espaço Alvo máx: ${spaces} (${2 ** spaces}Kg)<br><br>
        
            •Limite 2 (2 braços)<br><br>

            • (Apenas para seres) Dano turno|Evento: (2|13) Dano queda<br><br>
            `;
            }




            skillTextParts2.push(createMultipleActionButtons('Empurrar', [
                {
                    label: '🔶',
                    details: gerarTextoEmpurrar(forcaimp + 2)
                },
                {
                    label: '🔶🔷',
                    details: gerarTextoEmpurrar(forcaimp + 5)
                }
            ]));


            skillTextParts2.push(createMultipleActionButtons('Empunhar', [
                {
                    label: '🔶',
                    details: gerarTextoEmpunhar(forcaimp)
                },
                {
                    label: '🔶🔷',
                    details: gerarTextoEmpunhar(forcaimp + 3)
                }
            ]));




            // Organiza
            skillTextParts2.sort();


        }

        skillTextParts2.push(createTituloComEstado('Efeito de Força', [
            { label: '', attr: 'attr1', texto: '' }
        ], titulo));

        if (titulo.attr1 == 1) {
            efeitodeforça();
        }



        skillText += skillTextParts2.join("");

        skillText += `</b>`;



    }




    skillText += ` <hr><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>`;


    const skillsList = document.getElementById('skills-list');

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
