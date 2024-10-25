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
        attributes[attributeId] = 0;
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




function updateSkills() {
    // Define manualmente os valores das perícias com quebras de linha



    let skillText = `    
    `;

    // Verifica a condição de Defesa e adiciona à skillText se a condição for atendida
    const defenseValue = attributes.attr1 >= 2 && attributes.attr3 >= 2 ? attributes.attr1 > attributes.attr3 ? attributes.attr1 : attributes.attr3 : '';
    const fortitudeValue = attributes.attr1 * attributes.attr3;
    const resistValue = attributes.attr1 * attributes.attr3 >= 4 ? attributes.attr1 * attributes.attr3 : attributes.attr1 > attributes.attr3 ? attributes.attr1 : attributes.attr3
    skillText += `<span class="aumenta-letra">Resistência = ${resistValue}</span><br>`;



    if (defenseValue > 0) {

        skillText += `<br>
                        Escolher uma dessas:<br><br>
                        1.Defesa: +${defenseValue*2} <br>
                        2.Defesa: +${Math.floor(defenseValue / 2)+defenseValue} e Fortitude: +${Math.floor(fortitudeValue / 2)} (+${Math.floor(defenseValue / 2)})<br>
                        3.Defesa: +${defenseValue} e Fortitude: +${fortitudeValue} (+${defenseValue})<br>
                        4.Defesa: +${Math.floor(defenseValue / 2)} e Fortitude: +${Math.floor(fortitudeValue / 2)+fortitudeValue} (+${Math.floor(defenseValue / 2)+defenseValue})<br>
                        5.Fortitude: +${fortitudeValue*2} (+${defenseValue*2}) <br>
                        <hr><br>
                        `;

    }
    else {
        skillText += '<br><br><br><br><br><br><br><br><hr><br>'; // Adiciona uma quebra de linha se defenseValue for <= 0
    }
    const vontadeValue = attributes.attr1 > attributes.attr2 ? (attributes.attr1 * attributes.attr2) +attributes.attr2 :(attributes.attr1 * attributes.attr2) +attributes.attr1  ;

    if (vontadeValue >= 4 && attributes.attr1 >=2 && attributes.attr2 >=2 ) {

        skillText += ` 
                        Vontade e Resiliência: +${vontadeValue +1}<br>
                        <hr><br>
                        `;

    }
    else {
        skillText += '<hr><br><br>'; // Adiciona uma quebra de linha se defenseValue for <= 0
    }

    const sensopercepcaoValue = attributes.attr1 * attributes.attr5 >= 4 ? attributes.attr1 * attributes.attr5 : '';


    forcaValue = attributes.attr3 > attributes.attr7 ? attributes.attr3 : attributes.attr7;

    skillText += `<span class="aumenta-letra">Força = ${forcaValue*3 }</span><br>`;


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
                            `;

    }
    else {
        for (let i = 1; i <= 10; i++) {
            skillText += '<br>'; // Imprime o valor atual de i
        }
        skillText += `<hr><br><hr><br><br><br>`;
        for (let i = 1; i <= 10; i++) {
            skillText += '<br>'; // Imprime o valor atual de i
        }

    }
    skillText += ` <hr><br><br>`;
    alcanceValue = (attributes.attr1 + attributes.attr4) * 3

    skillText += `<span class="aumenta-letra">Alcance = ${alcanceValue}</span><br>`;

    if (attributes.attr1 != 1 && attributes.attr4 != 1) {

        skillText += ` <br><br>
                         Percepção: +${attributes.attr4 + 5}<br>
                         Sensibilidade Corporal: +${attributes.attr1 + 3}<br>
                        <br>
                        `;

    }
    else {
        for (let i = 1; i <= 5; i++) {
            skillText += '<br>'; // Imprime o valor atual de i
        }
    }
    skillText += `<hr><br><br>`;
    atletismoValue = ((attributes.attr3 * attributes.attr7)>=4 ? attributes.attr3 * attributes.attr7 : attributes.attr3);
    skillText += `<span class="aumenta-letra">Atletismo = ${atletismoValue}</span><br>`;
    skillText += `<br> Lembrar de gastar os pontos!!!<br>`;

    if (atletismoValue >= 4) {

        skillText += `<br><br>
                        Atletismo: +${atletismoValue}<br>
                        Pontos para Habilidades: +${Math.floor((atletismoValue) / 3) + 1}<br>
                       <br>
                        `;

    }
    else {
        skillText += ` <br><br>
        <br><br>
        Pontos para Habilidades: +${Math.floor((atletismoValue) / 3) + 1}<br>
        
        `;
    }
    skillText += ` <hr><br><br>`;

    velocidadeValue = (attributes.attr1 + attributes.attr3 + attributes.attr4) * 2
    skillText += `<span class="aumenta-letra">Velocidade = ${velocidadeValue}</span><br><br>`;


    if ((attributes.attr1 > 1 || attributes.attr4 > 1) && (attributes.attr1 != 1 && attributes.attr4 != 1)) {

        skillText += `
                        Desviar: ${attributes.attr4 * attributes.attr1 >= 1 ? `+${attributes.attr1 * attributes.attr4}` : attributes.attr4 + attributes.attr1 !== 0 ? attributes.attr4 > attributes.attr1 ? `+${attributes.attr4}` : `+${attributes.attr1}` : ''}<br>
                        `;

    }
    else {
        skillText += '<br>';
    }
    
    if ((attributes.attr1 > 1 || attributes.attr4 > 1) && (attributes.attr1 != 1 && attributes.attr4 != 1)) {

        skillText += `
                        ${ attributes.attr4 * attributes.attr1>=4 ? `Desvio Passivo: +${ attributes.attr4 > attributes.attr1 ? attributes.attr1 :attributes.attr4}` : ``}<br>
                        `;

    }
    else {
        skillText += '<br>';
    }




    if ((attributes.attr3 > 1 || attributes.attr4 > 1) && (attributes.attr3 != 1 && attributes.attr4 != 1)) {

        skillText += `
                        Velocidade de Ataque: ${attributes.attr3 * attributes.attr4 >= 1 ? `+${attributes.attr4 * attributes.attr3}` : attributes.attr4 + attributes.attr3 !== 0 ? attributes.attr4 > attributes.attr3 ? `+${attributes.attr4}${attributes.attr3 >= 1 ? "ED" : ""}` : `+${attributes.attr3}${attributes.attr4 >= 1 ? "ED" : ""}` : ""}<br>
                        `;

    }
    else {
        skillText += '<br>';
    

    
    }

    if ((attributes.attr3 > 1 || attributes.attr4 > 1) && (attributes.attr3 != 1 && attributes.attr4 != 1)) {

        skillText += `
                        ${ attributes.attr4 * attributes.attr3>=4 ? `Bônus de Ataque: +${ attributes.attr4 > attributes.attr3 ? attributes.attr3 :attributes.attr4}` : ``}<br>
                        `;

    }
    else {
        skillText += '<br>';
    }
    if (attributes.attr3 > 1 || attributes.attr4 > 1 || attributes.attr1 > 1 || attributes.attr2 > 1) {


        const calcularVelocidadeConjuracao = ({ attr1, attr2, attr3, attr4, attr5, attr6 }) => (Math.max(attr1, attr2, attr3, attr4) > attr2 * attr6 && Math.max(attr1, attr2, attr3, attr4) > attr1 * attr5) ? (attr1 + attr2 + attr3 + attr4 >= 1 ? `+${Math.max(attr1, attr2, attr3, attr4)}` : "") : (attr2 * attr6 > attr1 * attr5 ? (attr2 * attr6 >= 1 ? `+${attr2 * attr6} (+${attr6} ED)` : "") : (attr1 * attr5 >= 1 ? `+${attr1 * attr5} (+${attr5} ED)` : ""));


        skillText +=
            `Velocidade Conjuração: ${calcularVelocidadeConjuracao(attributes)} <br>`


    }
    else {
        skillText += '<br>';
    }




    skillText += ` <hr><br><br>`;

    protegerValue = (attributes.attr1 * attributes.attr5 >=4 ?attributes.attr1 * attributes.attr5:attributes.attr1 );
    skillText += `<span class="aumenta-letra">Proteger = ${protegerValue}</span><br><br>`;

    if (sensopercepcaoValue > 1) {

        skillText += ` 
                        Sensopercepção: +${sensopercepcaoValue}<br>
                        `;

    }
    else {
        skillText += '<br>';
    }
    

    if (attributes.attr1 * attributes.attr5 >= 4 && attributes.attr1 != 1 && attributes.attr5 != 1) {

        skillText += `Ensinar: +${attributes.attr5}<br>`;
        skillText += `Consolar: ${attributes.attr1 * attributes.attr5}<br> `;
        skillText += `Transmitir Vontade: ${attributes.attr1 * attributes.attr5 >= 1 ? `+${attributes.attr5} ( ${attributes.attr1 * attributes.attr5} )` : ""}<br> `;


        for (let i = (attributes.attr5); i > 1; i--) {
            skillText += `Salvar: ${`+${(-i + attributes.attr5 + 2)} ( ${(-i + attributes.attr5 + 2) * 5} EDPt) (${(-i + attributes.attr5 + 2) * 8} EDPm)`}<br> `;
            // Imprime o valor atual de i
        }

    }
    else {
        for (let i = 1; i <= 4; i++) {
            skillText += '<br>'; // Imprime o valor atual de i
        }
    }

    skillText += ` <hr><br><br>`;

    controleValue = (attributes.attr2 * attributes.attr3 >= 1) ? (attributes.attr2 * attributes.attr3) : (attributes.attr2 > attributes.attr3 ? attributes.attr2 : attributes.attr3)

    skillText += `<span class="aumenta-letra">Controle = ${controleValue}</span><br>`;



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

    function conta(num, vet) {
        return (((vet[num + 9] * 1.5) + vet[num + 9]) / 2 + vet[num + 8] + vet[num + 7] + vet[num + 6] + vet[num + 5] + vet[num + 4] + vet[num + 3] + vet[num + 2] + vet[num + 1]) / 10
    }

    if ((attributes.attr3 > 1 || attributes.attr2 > 1) && attributes.attr3 != 1 && attributes.attr2 != 1) {

        skillText += `<br> Lembrar Costume por mês !!!<br><br>`;

        skillText += `
                        Controle: ${(controleValue)} <br><br> Idade 20: Costume ${Math.round((conta(controleValue, numeros) * 100))} <br> 1 ano = Costume ${(conta(controleValue, numeros) * 10)}  <br>
                        `;

    }
    else {
        skillText += '<br><br><br><br><br><br><br>';
    }

    skillText += ` <hr><br><br>`;


    conhecimentoValue = (attributes.attr4 * attributes.attr8 >=4 ? attributes.attr4 * attributes.attr8:attributes.attr4 );

    skillText += `<span class="aumenta-letra">Conhecimento= ${(conhecimentoValue)}</span><br>`;


    if ((attributes.attr4 > 1 && attributes.attr8 > 1)) {

        skillText += `<br> Limite de ${(attributes.attr8)}  Informações por mês !!!<br><br>`;

        skillText += `
                        Conhecimento: ${(conhecimentoValue)} <br><br> Idade 20: Informação ${Math.round((conta(conhecimentoValue, numeros) * 100 * attributes.attr8))} <br> 1 ano = Informação ${(conta(conhecimentoValue, numeros) * 10 * attributes.attr8)}  <br>
                        `;

    }
    else {
        skillText += '<br><br><br><br><br><br><br>';
    }


    skillText += ` <hr><br><br>`;

    convencerValue = (attributes.attr4 * attributes.attr2 >=4 ? attributes.attr4 * attributes.attr2:attributes.attr4 );
    
    skillText += `<span class="aumenta-letra">Convencer= ${(convencerValue)}</span><br>`;
    
    skillText += '<br>';


    if ((attributes.attr2 > 1 && attributes.attr4 > 1)) {


        skillText += `
                        Convencer: +${Math.floor((convencerValue) / 3)}`
    }
    else {
        skillText += '<br>';
    }


    skillText += ` <hr><br><br>`;

    ocultarValue = (attributes.attr2);
    
    skillText += `<span class="aumenta-letra">Ocultar= ${(convencerValue)}</span><br>`;
    
    skillText += '<br>';


    if (attributes.attr2 > 1 ) {


        skillText += `
                        Ocultar: +${(ocultarValue)}`
    }
    else {
        skillText += '<br>';
    }
    
    skillText += ` <hr><br><br>`;

    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = skillText.trim(); // Usando innerHTML para interpretar quebras de linha como HTML
}

// Atualiza as perícias ao carregar a página
updateSkills();


