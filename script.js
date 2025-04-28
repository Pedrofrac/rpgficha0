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




    // Verifica a condição de Defesa e adiciona à skillText se a condição for atendida
    defenseValue = attributes.attr3 >= 3 ? attributes.attr3 + 2 : attributes.attr3;
    defensedefortitudeValue = attributes.attr1 >= 3 ? attributes.attr1 + 2 : attributes.attr1;
    fortitudeValue = attributes.attr1 >= 3 ? (((attributes.attr1 - 1)) * 3) : +1 + ((-1 + attributes.attr1) * 2);
    // espada e paus
    vontadeValue = attributes.attr1 > 1 && attributes.attr2 > 1 ? (attributes.attr1 * attributes.attr2) + 3 : (attributes.attr1 + attributes.attr2);
    sensopercepcaoValue = attributes.attr1 * attributes.attr5 >= 4 ? attributes.attr1 * attributes.attr5 : attributes.attr5 >= 1 ? attributes.attr1 : 0;
    forcaValue = attributes.attr3 > attributes.attr7 ? attributes.attr3 : attributes.attr7;
    percepcaoValue = (attributes.attr4 >= 3 ? ((attributes.attr4 - 1) * 2 + 1) : attributes.attr4 == 1 ? - 2 : attributes.attr4);
    sensiValue = (attributes.attr1 >= 3 ? ((attributes.attr1) * 3 - 3) : attributes.attr1 == 1 ? 0 : attributes.attr1 + 1);
    alcanceValue = (attributes.attr1 + attributes.attr4) * 3;
    atletismoValue = ((attributes.attr3 * attributes.attr7) >= 1 ? (attributes.attr3) * attributes.attr7 + 3 : attributes.attr3 == 0 ? 0 : attributes.attr3 * 2);
    velocidadeValue = (attributes.attr1 + attributes.attr3 + attributes.attr4) * 2
    protegerValue = (attributes.attr1 * attributes.attr5 >= 4 ? attributes.attr1 * attributes.attr5 : attributes.attr1);
    controleValue = (attributes.attr2 * attributes.attr3 >= 1) ? (attributes.attr2 * attributes.attr3) : (attributes.attr2 >= attributes.attr3 ? attributes.attr2 != 0 ? attributes.attr2 : 1 : attributes.attr3 != 0 ? attributes.attr3 : 1)
    conhecimentoValue = (attributes.attr4 * attributes.attr8 >= 1 ? attributes.attr4 * attributes.attr8 : 1);

    desvioValue = attributes.attr4 * attributes.attr1 >= 1 ? attributes.attr1 * attributes.attr4 : attributes.attr4 + attributes.attr1 !== 0 ? attributes.attr4 > attributes.attr1 ? attributes.attr4 : attributes.attr1 : 0;
    desbiopassivoValue = attributes.attr4 > attributes.attr1 ? attributes.attr1 : attributes.attr4;

    velocidadeValue = attributes.attr3 * attributes.attr4 >= 1 ? attributes.attr3 * attributes.attr4 : attributes.attr4 > attributes.attr3 ? attributes.attr4 : attributes.attr3;
    velocidadebonusValue = attributes.attr3 * attributes.attr4 >= 1 ? attributes.attr3 > attributes.attr4 ? attributes.attr4 : attributes.attr3 : 0;

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

    ocultarValue = (attributes.attr2 >= 3 ? ((attributes.attr2) * 2 - 1) : attributes.attr2 == 1 ? 1 : attributes.attr2 +1);
    const calcularVelocidadeConjuracao = ({ attr1, attr2, attr3, attr4, attr5, attr6 }) => (Math.max(attr1, attr2, attr3, attr4) > attr2 * attr6 && Math.max(attr1, attr2, attr3, attr4) > attr1 * attr5) ? (attr1 + attr2 + attr3 + attr4 >= 1 ? `+${Math.max(attr1, attr2, attr3, attr4)}` : "") : (attr2 * attr6 > attr1 * attr5 ? (attr2 * attr6 >= 1 ? `+${attr2 * attr6} (+${attr6} ED)` : "") : (attr1 * attr5 >= 1 ? `+${attr1 * attr5} (+${attr5} ED)` : ""));





    //skillText += `<span class="aumenta-letra">Resistência = ${resistValue}</span><br>`;

    for (let key in negativosAntigos) {
        attributes[key] = negativosAntigos[key];
    }
    pesoValue = (attributes.attr3 < 0 ? attributes.attr3 + 6 : forcaValue == 0 ? 6 : Math.floor((((forcaValue - 1) / 3) + 6)));
    inventarioValue = (attributes.attr3 == 0 ? 3 : attributes.attr3 == 1 ? 5 : attributes.attr3 >= 2 ? 10 + (5 * (attributes.attr3 - 2)) : 1);

    visibilidadeValue = (attributes.attr3 >= 0 ? pesoValue - 6 : attributes.attr3);



    if (visibilidadeValue >= 0) {
        ocultarbonusValue = -(+4+ ( visibilidadeValue>= 3 ? (( visibilidadeValue - 1) * 2 + 1) :  visibilidadeValue == 1 ? - 2 :  visibilidadeValue));
    } else {
        visibilidadeValue = visibilidadeValue * -1;
        ocultarbonusValue =(4+ ( visibilidadeValue>= 3 ? (( visibilidadeValue - 1) * 2 + 1) :  visibilidadeValue == 1 ? - 2 :  visibilidadeValue));
        visibilidadeValue = visibilidadeValue * -1;
    }
    if (visibilidadeValue == 0) {
        ocultarbonusValue = 0
    }


    let skillTextParts = ["<b>"];  // Array para armazenar as partes de skillText

    if (attributes.attr3 >= 1 && attributes.attr1 >= 1) {



        skillTextParts.push(`Defesa: +${defenseValue} ED<br> 
        `);
        skillTextParts.push(`Fortitude: +${fortitudeValue}  (+${defensedefortitudeValue} ED)  <br>    
        `);



    } if (attributes.attr3 < 0 && attributes.attr1 < 0) {



        skillTextParts.push(`Defesa: ${-defenseValue} ED<br> 
        `);
        skillTextParts.push(`Fortitude:${-fortitudeValue}  (${-defensedefortitudeValue} ED)  <br>    
        `);



    }


    if (vontadeValue >= 1 && attributes.attr1 >= 1 && attributes.attr2 >= 1) {
        skillTextParts.push(`Vontade e Resiliência: +${vontadeValue} (+${vontadeValue} ED)<br>`);
    } if (attributes.attr1 < 0 && attributes.attr2 < 0) {
        skillTextParts.push(`Vontade e Resiliência: ${-vontadeValue} (${-vontadeValue} ED)<br>`);
    }


    if (attributes.attr4 >= 1) {
        skillTextParts.push(`Percepção: +${percepcaoValue + 4}<br>
    `);
    } if (attributes.attr4 < 0) {
        skillTextParts.push(`Percepção: ${-percepcaoValue - 4}<br>
    `);
    }



    if (attributes.attr1 >= 1) {
        skillTextParts.push(`Sensibilidade Corporal: +${sensiValue + 1}(d)<br>
    `);
    } if (attributes.attr1 < 0) {
        skillTextParts.push(`Sensibilidade Corporal: ${-sensiValue - 1}(d)<br>
    `);
    }

    if (atletismoValue >= 1 && attributes.attr3 >= 1) {
        skillTextParts.push(`Atletismo: +${atletismoValue}<br>`);
    } if (attributes.attr3 < 0) {
        skillTextParts.push(`Atletismo: ${-atletismoValue}<br>`);
    }

    if (atletismoValue >= 1 && attributes.attr7 >= 1) {
        skillTextParts.push(`••Fator de Experiencia: +${attributes.attr7} ED<br>`);
    }

    if (true) {
        skillTextParts.push(`••Pontos de Habilidades: +${attributes.attr7 + 1}<br>
    `);
    }

    if (((attributes.attr1 >= 1 || attributes.attr4 >= 1) && (attributes.attr4 >= 0 && attributes.attr1 >= 0) )) {
        skillTextParts.push(`Desviar: +${desvioValue}<br>
    `);
    }else if (desvioValue !=0) {
        skillTextParts.push(`Desviar: ${-desvioValue}<br>
    `);
    }

    if ((attributes.attr1 * attributes.attr4 >= 1 && attributes.attr4 > 0 && attributes.attr1 > 0)) {
        skillTextParts.push(`Desvio Passivo: +${desbiopassivoValue} ED<br>
    `);
    }

    if (!(attributes.attr3 < 0 || attributes.attr4 < 0 && velocidadeValue !=0)) {
        if (velocidadebonusValue <= 0 && velocidadeValue !=0) {
            skillTextParts.push(`Velocidade de Ataque: +${velocidadeValue}
                <br>`);
        } else if (velocidadeValue !=0) {
            skillTextParts.push(`Velocidade de Ataque: +${velocidadeValue} ( +${velocidadebonusValue} ED)
                <br>`);

        }

    }else if(velocidadeValue !=0) {
        
        if (velocidadebonusValue <= 0) {
            skillTextParts.push(`Velocidade de Ataque: ${-velocidadeValue}
                <br>`);
        } else {
            skillTextParts.push(`Velocidade de Ataque: ${-velocidadeValue} ( ${-velocidadebonusValue} ED)
                <br>`);

        }

    }

    if (attributes.attr3 > 1 || attributes.attr4 > 1 || attributes.attr1 > 1 || attributes.attr2 > 1 && (attributes.attr1 >= 0 && attributes.attr2 >= 0 && attributes.attr3 >= 0 && attributes.attr4 >= 0)) {
        skillTextParts.push(`Velocidade Conjuração: ${calcularVelocidadeConjuracao(attributes)} <br>`);
    }

    if (sensopercepcaoValue >= 1) {
        skillTextParts.push(`Sensopercepção: +${sensopercepcaoValue}<br>`);
    }

    if (attributes.attr1 * attributes.attr5 >= 1) {
        skillTextParts.push(`Consolar: ${attributes.attr1 * attributes.attr5}<br>`);
    }

    if (attributes.attr1 * attributes.attr5 >= 1) {
        skillTextParts.push(`••Ensinar: +${attributes.attr5} ED<br>`);
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

    if (attributes.attr3 >= 1 && attributes.attr2 >= 1) {
        skillTextParts.push(`••Costume: ${Math.round((conta(controleValue, numeros) * 100))} | ${(conta(controleValue, numeros) * 10)}  <br>
    `);
    }

    if ((attributes.attr4 >= 1)) {
        skillTextParts.push(`Conhecimento: +${(conhecimentoValue)} <br>
    `);
    }

    if (attributes.attr4 >= 1) {
        skillTextParts.push(`••Informações: ${Math.round((conta(conhecimentoValue, numeros) * 100 * (attributes.attr8 != 0 ? attributes.attr8 : 1)))} | ${(conta(conhecimentoValue, numeros) * 10 * (attributes.attr8 != 0 ? attributes.attr8 : 1))} Limite: ${(attributes.attr8 != 0 ? attributes.attr8 : 1)} <br>
    `);
    }

    if ((attributes.attr2 >= 1 && attributes.attr4 >= 1)) {
        skillTextParts.push(`Convencer: +${convencerValue} Des/Conforto <br>
    `);
    }


    if ((attributes.attr2 >= 1 )) {
        skillTextParts.push(`Ocultar: +${ocultarValue+ocultarbonusValue} <br>
    `);
    }else if ((attributes.attr2 < 0)) {
        skillTextParts.push(`Ocultar: ${-ocultarValue+ocultarbonusValue} <br>
    `);
    }else if (-1+ocultarValue+ocultarbonusValue != 0){
        skillTextParts.push(`Ocultar: ${-1+ocultarValue+ocultarbonusValue} <br>
            `);
    }

    if ((attributes.attr3 >= 0)) {
        skillTextParts.push(`Força: +${forcaValue + 3} ED (${2 ** (forcaValue + 3)}Kg)<br>
    `);
    } if ((attributes.attr3 < 0)) {
        skillTextParts.push(`Força: ${-forcaValue + 3} ED (${2 ** (-forcaValue + 3)}Kg)<br>
    `);
    }

    if ((attributes.attr6 >= 1)) {
        skillTextParts.push(`Sorte: +${sorteValue}<br>
    `);
    }

    if ((attributes.attr6 >= 1)) {
        skillTextParts.push(`Acaso: +${sorteValue + attributes.attr6} ( +${(edacasoValue)}ED ) -5 Conforto<br>
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
            skillTextParts2.push(`Dano Impacto: ${attributes.attr3 + 3} (${2 ** (attributes.attr3 + 3)}Kg)<br>`);
            skillTextParts2.push(`Dano Tóxico: ${(attributes.attr3 * 3) + 3} <br>`);
            skillTextParts2.push(`Dano Cortante: ${(attributes.attr3 * 4) + 3} <br>`);
            skillTextParts2.push(`Dano Corrosivo: ${(attributes.attr3 * 2) + 3} <br>`);
        } else if (attributes.attr3 >= -2) {
            skillTextParts2.push(`Dano Impacto: ${attributes.attr3 + 3} (${2 ** (attributes.attr3 + 3)}Kg)<br>`);
            skillTextParts2.push(`Dano Tóxico: ${attributes.attr3 + 3} <br>`);
            skillTextParts2.push(`Dano Cortante: ${attributes.attr3 + 3} <br>`);
            skillTextParts2.push(`Dano Corrosivo: ${attributes.attr3 + 3} <br>`);
        } else {
            skillTextParts2.push(`Dano Impacto: ${1} (${2 ** (1)}Kg)<br>`);
            skillTextParts2.push(`Dano Tóxico: ${1} <br>`);
            skillTextParts2.push(`Dano Cortante: ${1} <br>`);
            skillTextParts2.push(`Dano Corrosivo: ${1} <br>`);

        }

        if ((attributes.attr4 >= 1)) {
            skillTextParts2.push(`Fé: +${attributes.attr4} <br>
        `);
        }
        if ((attributes.attr8 >= 1)) {
            skillTextParts2.push(`Felicidade: +${attributes.attr8} <br>
        `);
        }
        if ((attributes.attr1 >= 1)) {
            skillTextParts2.push(`Destino: +${attributes.attr1} <br>
        `);
        }
        if ((attributes.attr3 >= 1)) {
            skillTextParts2.push(`Paz: +${attributes.attr3} <br>
        `);
        }
        if ((attributes.attr2 >= 1)) {
            skillTextParts2.push(`Evolução: +${attributes.attr2} <br>
        `);
        }
        if ((attributes.attr6 >= 1 && attributes.attr2 >= 1)) {
            skillTextParts2.push(`Sonho: +${attributes.attr6} <br>
        `);
        }
        if ((attributes.attr1 >= 1 && attributes.attr5 >= 1)) {
            skillTextParts2.push(`Amor: +${attributes.attr5} <br>
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
            //skillTextParts2.push(`Visibilidade Para Outros: +${visibilidadeValue} (+${ocultarbonusValue} <br> `);
            if (attributes.attr1 >= 1) {
                skillTextParts2.push(`Alcance Disparos|Arremesos: ${sensiValue + 1}d<br>`);
            }
        } else {

            skillTextParts2.push(`Inventário: ${1} (10max para item>=0)<br>`);
            skillTextParts2.push(`Peso: ${pesoValue}ED ${2 ** (pesoValue)}Kg <br>`);
            skillTextParts2.push(`Alcance Fizico: ${attributes.attr3 == -1 ? 1 : 0}d<br> `);
           // skillTextParts2.push(`Visibilidade Para Outros: ${visibilidadeValue}(+${ocultarbonusValue}<br> `);
            if (attributes.attr1 >= 1) {
                skillTextParts2.push(`Alcance Disparos|Arremesos: ${sensiValue + 1}d<br>`);
            }
        }


        skillTextParts2.sort();
        skillText += skillTextParts2.join("");
        skillText += `</b>`;


    }




    skillText += ` <hr><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>`;









    const skillsList = document.getElementById('skills-list');

    if (attributes.attr3 != 1 && attributes.attr7 != 1) {

        skillText += `<br><br>
                            Principais dados: <br><br>
                            
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

