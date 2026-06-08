// ============================================
// SCRIPT PRINCIPAL DO SIMULADO
// ============================================

let questoesDisponiveis = [];
let questoesUtilizadas = [];
let simuladosRealizados = 0;
let questoesRespondidas = [];

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    carregarEstatisticas();
    atualizarContadores();
});

function carregarEstatisticas() {
    // Carregar do localStorage
    const savedUtilizadas = localStorage.getItem('questoesUtilizadas');
    const savedRespondidas = localStorage.getItem('questoesRespondidas');
    const savedSimulados = localStorage.getItem('simuladosRealizados');
    
    if (savedUtilizadas) {
        questoesUtilizadas = JSON.parse(savedUtilizadas);
    }
    if (savedRespondidas) {
        questoesRespondidas = JSON.parse(savedRespondidas);
    }
    if (savedSimulados) {
        simuladosRealizados = parseInt(savedSimulados);
    }
    
    // Inicializar questoesDisponiveis
    const todasQuestoesIds = BANCO_QUESTOES.map(q => q.id);
    questoesDisponiveis = todasQuestoesIds.filter(id => !questoesUtilizadas.includes(id));
    
    // Se não há questões disponíveis, resetar
    if (questoesDisponiveis.length === 0 && questoesUtilizadas.length > 0) {
        resetarSistema();
    }
    
    atualizarContadores();
}

function atualizarContadores() {
    document.getElementById('total-questoes').textContent = BANCO_QUESTOES.length;
    document.getElementById('respondidas').textContent = questoesRespondidas.length;
    const restantes = BANCO_QUESTOES.length - questoesRespondidas.length;
    document.getElementById('restantes').textContent = restantes;
}

function resetarSistema() {
    if (confirm('Todas as questões já foram respondidas! Deseja reiniciar o ciclo?')) {
        questoesUtilizadas = [];
        questoesRespondidas = [];
        simuladosRealizados = 0;
        localStorage.removeItem('questoesUtilizadas');
        localStorage.removeItem('questoesRespondidas');
        localStorage.removeItem('simuladosRealizados');
        carregarEstatisticas();
        alert('Sistema reiniciado! Todas as questões estão disponíveis novamente.');
    }
}

function iniciarSimulado() {
    // Verificar se há questões disponíveis
    const todasQuestoesIds = BANCO_QUESTOES.map(q => q.id);
    questoesDisponiveis = todasQuestoesIds.filter(id => !questoesUtilizadas.includes(id));
    
    if (questoesDisponiveis.length === 0) {
        resetarSistema();
        questoesDisponiveis = todasQuestoesIds.filter(id => !questoesUtilizadas.includes(id));
    }
    
    // Sortear 5 questões (ou menos se não houver 5)
    const numQuestoes = Math.min(5, questoesDisponiveis.length);
    const idsSorteados = [];
    const disponiveisCopy = [...questoesDisponiveis];
    
    for (let i = 0; i < numQuestoes; i++) {
        const indiceAleatorio = Math.floor(Math.random() * disponiveisCopy.length);
        const idSorteado = disponiveisCopy[indiceAleatorio];
        idsSorteados.push(idSorteado);
        disponiveisCopy.splice(indiceAleatorio, 1);
    }
    
    // Marcar como utilizadas
    idsSorteados.forEach(id => {
        if (!questoesUtilizadas.includes(id)) {
            questoesUtilizadas.push(id);
        }
    });
    localStorage.setItem('questoesUtilizadas', JSON.stringify(questoesUtilizadas));
    
    // Buscar as questões completas
    const questoesSimulado = idsSorteados.map(id => BANCO_QUESTOES.find(q => q.id === id));
    
    renderizarSimulado(questoesSimulado);
}

function renderizarSimulado(questoes) {
    const container = document.getElementById('simulado-container');
    
    let html = `
        <div class="simulado-header">
            <h2>📝 Simulado #${simuladosRealizados + 1}</h2>
            <p>Responda as 5 questões abaixo:</p>
        </div>
        <div id="questoes-list"></div>
        <div class="actions">
            <button class="btn-submit" onclick="corrigirSimulado()">✅ Corrigir Simulado</button>
            <button class="btn-secondary" onclick="voltarInicio()">🔙 Voltar</button>
        </div>
    `;
    
    container.innerHTML = html;
    
    const questoesList = document.getElementById('questoes-list');
    questoes.forEach((q, idx) => {
        const letras = ['A', 'B', 'C', 'D', 'E'];
        const alternativasHtml = Object.entries(q.alternativas).map(([letra, texto]) => `
            <div class="alternativa" onclick="selecionarAlternativa(${idx}, '${letra}')">
                <input type="radio" name="q${idx}" id="q${idx}_${letra}" value="${letra}">
                <label for="q${idx}_${letra}"><strong>${letra}</strong>. ${texto}</label>
            </div>
        `).join('');
        
        questoesList.innerHTML += `
            <div class="questao-card" id="questao-${idx}">
                <div class="questao-header">
                    <span class="questao-num">Questão ${idx + 1}</span>
                    <span class="questao-disciplina">${q.disciplina}</span>
                </div>
                <div class="questao-texto">${q.enunciado}</div>
                <div class="alternativas">
                    ${alternativasHtml}
                </div>
                <div class="feedback" id="feedback-${idx}" style="display:none;"></div>
            </div>
        `;
    });
    
    // Salvar as questões atuais no sessionStorage
    sessionStorage.setItem('simuladoAtual', JSON.stringify(questoes));
}

function selecionarAlternativa(questaoIdx, letra) {
    const radio = document.getElementById(`q${questaoIdx}_${letra}`);
    if (radio) {
        radio.checked = true;
    }
}

function corrigirSimulado() {
    const questoes = JSON.parse(sessionStorage.getItem('simuladoAtual'));
    if (!questoes) {
        alert('Erro: Nenhum simulado ativo.');
        return;
    }
    
    let acertos = 0;
    const resultados = [];
    
    for (let i = 0; i < questoes.length; i++) {
        const q = questoes[i];
        const selecionado = document.querySelector(`input[name="q${i}"]:checked`);
        const respostaUsuario = selecionado ? selecionado.value : null;
        const isCorreta = (respostaUsuario === q.resposta_correta);
        
        if (isCorreta) {
            acertos++;
            if (!questoesRespondidas.includes(q.id)) {
                questoesRespondidas.push(q.id);
            }
        }
        
        resultados.push({
            questao: q,
            respostaUsuario: respostaUsuario,
            isCorreta: isCorreta
        });
        
        // Marcar a alternativa como correta/incorreta visualmente
        const alternativasDiv = document.querySelector(`#questao-${i} .alternativas`);
        const alternativas = alternativasDiv.querySelectorAll('.alternativa');
        
        alternativas.forEach(alt => {
            const input = alt.querySelector('input');
            const letra = input.value;
            const label = alt.querySelector('label');
            
            if (letra === q.resposta_correta) {
                alt.classList.add('correta');
                if (label) label.innerHTML = `<strong>${letra}</strong> ✅ ${q.alternativas[letra]}`;
            }
            if (letra === respostaUsuario && letra !== q.resposta_correta) {
                alt.classList.add('incorreta');
                if (label) label.innerHTML = `<strong>${letra}</strong> ❌ ${q.alternativas[letra]}`;
            }
            
            input.disabled = true;
        });
        
        // Mostrar feedback
        const feedbackDiv = document.getElementById(`feedback-${i}`);
        feedbackDiv.style.display = 'block';
        const statusIcon = isCorreta ? '✅' : '❌';
        const statusText = isCorreta ? 'Correta!' : `Incorreta. Resposta correta: ${q.resposta_correta}`;
        feedbackDiv.innerHTML = `
            <div style="margin-top: 15px; padding: 10px; background: ${isCorreta ? '#d4edda' : '#f8d7da'}; border-radius: 8px;">
                <strong>${statusIcon} ${statusText}</strong><br>
                <small><strong>Justificativa:</strong> ${q.justificativa}</small>
            </div>
        `;
    }
    
    // Salvar progresso
    localStorage.setItem('questoesRespondidas', JSON.stringify(questoesRespondidas));
    localStorage.setItem('questoesUtilizadas', JSON.stringify(questoesUtilizadas));
    simuladosRealizados++;
    localStorage.setItem('simuladosRealizados', simuladosRealizados);
    
    // Mostrar resultado final
    const container = document.getElementById('simulado-container');
    const resultadoHtml = `
        <div class="resultado-card">
            <h3>📊 Resultado do Simulado</h3>
            <div class="resultado-acertos">${acertos} / ${questoes.length}</div>
            <p>${acertos === questoes.length ? '🎉 Parabéns! Você acertou todas as questões! 🎉' : '📚 Continue praticando!'}</p>
            <div class="actions">
                <button class="btn-primary" onclick="iniciarSimulado()">🎯 Novo Simulado</button>
                <button class="btn-reset" onclick="resetarCompleto()">🔄 Resetar Progresso</button>
            </div>
        </div>
    `;
    
    container.innerHTML += resultadoHtml;
    
    // Esconder botões de ação antigos
    const oldActions = document.querySelector('.simulado-header + .actions');
    if (oldActions) oldActions.style.display = 'none';
    
    atualizarContadores();
}

function voltarInicio() {
    const container = document.getElementById('simulado-container');
    container.innerHTML = `
        <div class="info-card">
            <h2>Bem-vindo ao Simulado!</h2>
            <p>Clique no botão abaixo para iniciar um novo simulado com 5 questões.</p>
            <p>Cada questão será sorteada aleatoriamente, e o sistema controla quais questões já foram usadas para que todas tenham a mesma chance ao longo do tempo.</p>
            <button id="iniciar-simulado" class="btn-primary">🎯 Iniciar Simulado</button>
        </div>
    `;
    document.getElementById('iniciar-simulado').addEventListener('click', iniciarSimulado);
    atualizarContadores();
}

function resetarCompleto() {
    if (confirm('Tem certeza que deseja resetar todo o progresso? Todas as questões voltarão a estar disponíveis.')) {
        questoesUtilizadas = [];
        questoesRespondidas = [];
        simuladosRealizados = 0;
        localStorage.removeItem('questoesUtilizadas');
        localStorage.removeItem('questoesRespondidas');
        localStorage.removeItem('simuladosRealizados');
        sessionStorage.removeItem('simuladoAtual');
        carregarEstatisticas();
        voltarInicio();
        alert('Progresso resetado com sucesso!');
    }
}

// Adicionar event listener ao botão de início
document.addEventListener('click', (e) => {
    if (e.target.id === 'iniciar-simulado') {
        iniciarSimulado();
    }
});