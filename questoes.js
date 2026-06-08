// ============================================
// BANCO DE DADOS DE QUESTÕES - SIMULADO
// Total de questões: 111
// ============================================

const BANCO_QUESTOES = [
    // ==================== METODOLOGIA RAD (questões 1-10) ====================
    {
        id: 1,
        disciplina: "Metodologia RAD",
        enunciado: "Uma startup decide adotar a metodologia RAD para o desenvolvimento de seu novo aplicativo móvel. A equipe é pequena e a comunicação interna é ágil, facilitando a implementação de mudanças rápidas conforme solicitado pelos stakeholders. Qual aspecto da equipe contribui significativamente para o sucesso da aplicação da metodologia RAD neste caso?",
        alternativas: {
            A: "Grande número de desenvolvedores.",
            B: "Comunicação ágil e eficiente.",
            C: "Uso extensivo de documentação.",
            D: "Longo prazo de desenvolvimento.",
            E: "Alta complexidade do projeto."
        },
        resposta_correta: "B",
        justificativa: "Uma das chaves para o sucesso da metodologia RAD é a comunicação ágil e eficiente dentro da equipe. Em uma startup com equipe pequena, isso se torna ainda mais crucial, pois facilita a implementação rápida de mudanças e a adaptação às necessidades dos stakeholders."
    },
    {
        id: 2,
        disciplina: "Metodologia RAD",
        enunciado: "A metodologia do RAD possui diversas vantagens e desvantagens em relação às metodologias de desenvolvimento tradicionais. Nesse sentido, selecione a opção correta sobre as características da metodologia RAD:",
        alternativas: {
            A: "Diferente de métodos tradicionais de desenvolvimento, a RAD demanda por intensa colaboração entre desenvolvedores e usuários;",
            B: "Apesar das diferenças dos métodos tradicionais, se assemelham no sentido de que os sistemas-alvo devem ser modularizados;",
            C: "No sentido de atingir a meta da rapidez do desenvolvimento, a metodologia RAD possui poucas reuniões;",
            D: "Os requisitos funcionais são determinados no início do projeto e não podem ser alterados ao longo do projeto de modo a atingir a rapidez do desenvolvimento;",
            E: "Uma das vantagens mais importantes da metodologia RAD é sua adequação para projetos complexos de grande escala."
        },
        resposta_correta: "A",
        justificativa: "A metodologia RAD (Rapid Application Development) é uma abordagem de desenvolvimento de software que enfatiza a colaboração intensiva entre desenvolvedores e usuários. Diferentemente de métodos tradicionais de desenvolvimento, a RAD busca acelerar o processo de desenvolvimento através de uma interação constante e direta com os usuários."
    },
    {
        id: 3,
        disciplina: "Metodologia RAD",
        enunciado: "Para fazer a escolha de um framework e bibliotecas para desenvolver projetos RAD, é necessário observar diversos critérios. Nesse sentido, selecione a opção CORRETA que justifique a escolha de um determinado framework:",
        alternativas: {
            A: "Deve considerar se o framework suporta a linguagem Python por ser enxuta e possuir mais pacotes do que as demais linguagens de programação;",
            B: "A principal característica a ser considerada refere-se ao tipo de licença do framework;",
            C: "Deve ser feita para frameworks que deem suporte ao desenvolvimento de aplicações WEB e geração de gráficos;",
            D: "Deve levar em consideração a qualidade dos componentes visuais, de modo a manter a motivação das partes interessadas no projeto;",
            E: "Deve estar alinhada com os princípios da RAD, ou seja, suportar o desenvolvimento rápido."
        },
        resposta_correta: "E",
        justificativa: "A escolha de um framework para desenvolver projetos RAD (Rapid Application Development) deve estar alinhada com os princípios desta metodologia, que é o desenvolvimento rápido. Embora as outras alternativas apresentem critérios válidos para a escolha de um framework, a alternativa E é a única que se refere diretamente ao conceito de RAD."
    },
    {
        id: 4,
        disciplina: "Metodologia RAD",
        enunciado: "Em uma empresa de software, um novo projeto é iniciado usando a metodologia RAD. O objetivo é desenvolver rapidamente um aplicativo web customizado para um cliente, permitindo a modificação contínua do protótipo durante o desenvolvimento. Qual é um dos principais benefícios do uso da metodologia RAD neste cenário?",
        alternativas: {
            A: "Menor custo de desenvolvimento.",
            B: "Independência de feedback do cliente.",
            C: "Maior segurança no código.",
            D: "Rápida adaptação a mudanças.",
            E: "Menos necessidade de testes."
        },
        resposta_correta: "D",
        justificativa: "A metodologia RAD é altamente eficaz para projetos que exigem desenvolvimento rápido e capacidade de adaptação a mudanças. Isso é particularmente útil em projetos que envolvem a criação de protótipos e a colaboração contínua com o cliente, permitindo ajustes frequentes conforme o projeto evolui."
    },
    {
        id: 5,
        disciplina: "Metodologia RAD",
        enunciado: "Um dos princípios do RAD é 'a adequação para fins comerciais é o critério essencial para aceitação de resultados'. Nesse sentido, selecione a opção CORRETA:",
        alternativas: {
            A: "Este principio garante que o produto terá menos erros e, consequentemente, terá menos vulnerabilidades;",
            B: "O foco deve ser voltado para cumprir os prazos pré-estabelecidos;",
            C: "O foco é fazer o desenvolvimento para atender aos requisitos funcionais;",
            D: "Significa que as melhores práticas para desenvolver um software seguro devem ser aplicadas;",
            E: "Permite que os desenvolvedores tomem a decisão sobre a aplicação das melhores soluções para o projeto."
        },
        resposta_correta: "C",
        justificativa: "O princípio do RAD mencionado no enunciado enfatiza a importância da adequação do produto final para fins comerciais como critério essencial para a aceitação dos resultados. Isso significa que o desenvolvimento deve ser focado em atender aos requisitos funcionais do produto, garantindo que ele seja útil e adequado para o propósito comercial pretendido."
    },
    {
        id: 6,
        disciplina: "Metodologia RAD",
        enunciado: "As fases da metodologia RAD estão interrelacionadas entre si no sentido que apenas quando uma fase estiver concluída, a próxima pode iniciar. Em relação às fases da metodologia de desenvolvimento RAD, selecione a opção CORRETA:",
        alternativas: {
            A: "A flexibilidade da metodologia RAD permite que o sequenciamento das fases de desenvolvimento seja ignorado, desde que em algum momento elas sejam executadas;",
            B: "A coleta de dados é feita na fase de modelagem de negócios e serão agrupados em estruturas de negócio na fase de prototipação;",
            C: "O agrupamento dos dados em objetos de negócio é feito na fase de modelagem de dados;",
            D: "A fase de teste da metodologia RAD deve ser aplicada apenas para a funcionalidade que foi incluída no ciclo iterativo;",
            E: "Em cada uma das fases da metodologia RAD, o usuário pode incluir um novo requisito."
        },
        resposta_correta: "C",
        justificativa: "Na metodologia RAD (Rapid Application Development), o agrupamento dos dados em objetos de negócio é realizado na fase de modelagem de dados. Esta fase é crucial para a estruturação e organização dos dados que serão utilizados no sistema."
    },
    {
        id: 7,
        disciplina: "Metodologia RAD",
        enunciado: "Durante um curso de ciência da computação, um professor decide utilizar a metodologia RAD para ensinar desenvolvimento de software. Ele enfatiza a importância do desenvolvimento iterativo e da colaboração constante com os usuários finais do software. Qual é o foco principal da metodologia RAD destacado pelo professor neste contexto educacional?",
        alternativas: {
            A: "Programação em baixo nível.",
            B: "Desenvolvimento iterativo.",
            C: "Uso de linguagens de programação antigas.",
            D: "Enfoque em algoritmos complexos.",
            E: "Criação de documentação extensiva."
        },
        resposta_correta: "B",
        justificativa: "No contexto educacional, o professor enfatiza o desenvolvimento iterativo como um aspecto central da metodologia RAD. Isso envolve criar versões do software em ciclos curtos, permitindo ajustes frequentes e colaboração com os usuários, aspectos essenciais para entender a aplicação prática da metodologia RAD."
    },
    {
        id: 8,
        disciplina: "Metodologia RAD",
        enunciado: "Um dos princípios do RAD é 'Todas as mudanças durante o desenvolvimento são reversíveis'. Nesse sentido, selecione a opção CORRETA:",
        alternativas: {
            A: "A versão atual do protótipo pode não corresponder à expectativa do cliente, portanto é adequado retornar a versão anterior que já está aprovada pelo cliente;",
            B: "A não flexibilidade da metodologia RAD pode não facilitar o desenvolvimento de protótipos, portanto o desenvolvedor nem sempre pode criar uma versão;",
            C: "Nas iterações com os usuários, os desenvolvedores podem detectar uma funcionalidade que não atende a um requisito não-funcional. Portanto é necessário voltar a versão anterior;",
            D: "Dada a flexibilidade da metodologia RAD, a utilização de ferramentas de controle de versões de software é desnecessária, pois os protótipos sempre podem ser recuperados;",
            E: "As novas versões devem ter o incremento de apenas uma nova funcionalidade, pois, caso não seja validada pelo usuário, é mais simples retornar a versão anterior que já foi validada."
        },
        resposta_correta: "A",
        justificativa: "O princípio do RAD (Rapid Application Development) mencionado no enunciado se refere à capacidade de reverter as mudanças feitas durante o desenvolvimento. Isso significa que, se a versão atual do protótipo não atender às expectativas do cliente, é possível e adequado retornar à versão anterior que já foi aprovada pelo cliente."
    },
    {
        id: 9,
        disciplina: "Metodologia RAD",
        enunciado: "Uma organização governamental adota a metodologia RAD para desenvolver um novo sistema de gestão. O projeto requer colaboração constante com várias partes interessadas, incluindo funcionários e cidadãos, para garantir que o sistema atenda a todas as necessidades identificadas. Qual elemento é crucial para o sucesso do projeto RAD em um ambiente governamental com múltiplos stakeholders?",
        alternativas: {
            A: "Estrutura hierárquica rígida.",
            B: "Colaboração constante com stakeholders.",
            C: "Foco em tecnologias emergentes.",
            D: "Evitar feedback frequente.",
            E: "Priorizar o desenvolvimento autônomo."
        },
        resposta_correta: "B",
        justificativa: "Em um projeto governamental com múltiplas partes interessadas, a colaboração constante é fundamental. A metodologia RAD se destaca por sua abordagem iterativa e inclusiva, o que permite o envolvimento ativo dos stakeholders, garantindo que o sistema desenvolvido atenda às suas necessidades e expectativas de maneira eficaz."
    },
    {
        id: 10,
        disciplina: "Metodologia RAD",
        enunciado: "A necessidade de imprimir eficiência no desenvolvimento de sistemas levou à criação da metodologia rápida de desenvolvimento de software, mais conhecida pela sigla em inglês: RAD (Rapid Application Development). Um dos princípios do RAD é a entrega contínua de produtos dentro do prazo. Nesse sentido, selecione a opção CORRETA:",
        alternativas: {
            A: "Isso permite que a equipe do projeto defina rapidamente a abordagem ideal para entregar o produto no tempo disponível;",
            B: "Isso permite reduzir custos, desde que, pelo menos, uma parte do sistema esteja funcionando corretamente;",
            C: "Este princípio garante que o produto terá menos erros;",
            D: "O prazo sempre deve ser respeitado, mesmo que não seja possível entregar o produto conforme programado;",
            E: "O desenvolvimento rápido sempre vai reduzir os custos do projeto."
        },
        resposta_correta: "A",
        justificativa: "A metodologia RAD (Rapid Application Development) é fundamentada em alguns princípios básicos, dentre os quais se destaca a autonomia das equipes pequenas e a capacidade de tomada de decisões. Essa autonomia permite que a equipe do projeto defina de maneira ágil a melhor estratégia para entregar o produto dentro do prazo estipulado."
    },

    // ==================== MÉTODOS ÁGEIS - GERAL (questões 11-13) ====================
    {
        id: 11,
        disciplina: "Métodos Ágeis - Geral",
        enunciado: "Qual das opções a seguir é o maior obstáculo na adoção dos métodos ágeis segundo a 15ª edição da pesquisa State of Agile?",
        alternativas: {
            A: "Processos e práticas inconsistentes entre as equipes.",
            B: "Treinamento e educação insuficientes.",
            C: "Profissionais não certificados como Scrum master.",
            D: "Cultura organizacional em conflito com valores ágeis.",
            E: "Resistência geral da organização à mudança."
        },
        resposta_correta: "A",
        justificativa: "De acordo com a 15ª edição da pesquisa State of Agile, o maior obstáculo na adoção dos métodos ágeis é a presença de processos e práticas inconsistentes entre as equipes, com uma representatividade de 46%. Os outros obstáculos foram classificados na seguinte ordem: cultura organizacional em conflito com valores ágeis (43%), resistência geral da organização à mudança (42%) e treinamento e educação insuficientes (35%)."
    },
    {
        id: 12,
        disciplina: "Métodos Ágeis - Geral",
        enunciado: "XP e Kanban são práticas de gerenciamento de projetos de software populares entre praticantes do desenvolvimento ágil. Um aspecto de divergência entre as duas práticas é:",
        alternativas: {
            A: "Processo incremental.",
            B: "Processo iterativo.",
            C: "Uso de quadro de tarefas.",
            D: "Representação do estágio de desenvolvimento de uma tarefa.",
            E: "Valorização de feedback."
        },
        resposta_correta: "B",
        justificativa: "As práticas XP e Kanban compartilham muitos aspectos em comum, como a entrega de pequenos pacotes de trabalho de forma incremental, a representação do estágio de desenvolvimento de uma tarefa em um quadro de tarefas e a valorização do feedback. No entanto, uma diferença significativa entre as duas é a abordagem ao processo de desenvolvimento. Enquanto o XP utiliza um processo iterativo, com ciclos de desenvolvimento definidos, o Kanban segue um fluxo contínuo, sem a necessidade de iterações fixas."
    },
    {
        id: 13,
        disciplina: "Métodos Ágeis - Geral",
        enunciado: "Em uma análise exploratória inicial, podemos dizer que entregar valor mais cedo é:",
        alternativas: {
            A: "Sobrecarregar a linha de produção.",
            B: "Nunca deixar os recursos inativos.",
            C: "Evitar grandes lotes para entregar de forma mais contínua.",
            D: "Pular etapas.",
            E: "Colocar mais pessoas no time."
        },
        resposta_correta: "C",
        justificativa: "A entrega de valor mais cedo é uma prática que visa gerenciar o fluxo de trabalho de maneira que se possa manter um ritmo sustentável de entregas contínuas. Isso é feito através da divisão do trabalho em pequenos lotes, que são entregues com frequência e qualidade, ao invés de acumular grandes volumes de trabalho para serem entregues de uma só vez."
    },

    // ==================== SCRUM (questões 14-22) ====================
    {
        id: 14,
        disciplina: "Scrum",
        enunciado: "Qual evento do Scrum permitirá que processos, ferramentas e métricas sejam adaptados de modo a atender às necessidades da organização?",
        alternativas: {
            A: "Sprint",
            B: "Sprint Planning",
            C: "Daily Scrum",
            D: "Sprint Review",
            E: "Sprint Retrospective"
        },
        resposta_correta: "E",
        justificativa: "A Sprint Retrospective é o evento do Scrum onde a equipe tem a oportunidade de refletir sobre o que funcionou bem e o que precisa ser melhorado. É neste momento que os processos, as ferramentas e as métricas são avaliados e adaptados para melhor atender às necessidades da organização."
    },
    {
        id: 15,
        disciplina: "Scrum",
        enunciado: "Os três pilares do Scrum são:",
        alternativas: {
            A: "Respeito pelas Pessoas, Kaizen e Eliminação de Resíduos.",
            B: "Planejamento, Demonstração e Retrospectiva.",
            C: "Inspeção, Transparência e Adaptação.",
            D: "Planejamento, Inspeção e Adaptação.",
            E: "Transparência, Eliminação de Desperdícios e Kaizen."
        },
        resposta_correta: "C",
        justificativa: "O Scrum é fundamentado em três pilares essenciais: inspeção, transparência e adaptação. A inspeção se refere à constante verificação do progresso e da qualidade do trabalho. A transparência é a clareza e a visibilidade de todos os aspectos do trabalho. A adaptação é a capacidade de ajustar o processo com base nas inspeções realizadas."
    },
    {
        id: 16,
        disciplina: "Scrum",
        enunciado: "O principal objetivo da Sprint Retrospective é:",
        alternativas: {
            A: "Identificar as oportunidades de melhoria de desempenho e qualidade.",
            B: "Fazer uma retrospectiva da sprint.",
            C: "Gerar um documento de lições aprendidas.",
            D: "Celebrar as conquistas da sprint.",
            E: "Aumentar as interações entre o Scrum Team."
        },
        resposta_correta: "A",
        justificativa: "O principal objetivo da sprint retrospectiva é identificar oportunidades de melhoria de desempenho e qualidade. Embora a retrospectiva da sprint seja uma parte importante do processo, ela não é o objetivo principal. No Scrum, não existe um documento específico de lições aprendidas."
    },
    {
        id: 17,
        disciplina: "Scrum",
        enunciado: "O Scrum é baseado em:",
        alternativas: {
            A: "Lean Six Sigma.",
            B: "Empirismo.",
            C: "Racionalismo.",
            D: "Idealismo.",
            E: "Agilismo."
        },
        resposta_correta: "B",
        justificativa: "O Scrum é fundamentado no empirismo e no lean thinking. O empirismo é uma abordagem que se baseia na experiência e na observação para adquirir conhecimento. Já o lean thinking é uma filosofia de gestão focada na redução de desperdícios, ou seja, tudo aquilo que não agrega valor ao produto final."
    },
    {
        id: 18,
        disciplina: "Scrum",
        enunciado: "Qual das alternativas a seguir sobre o Scrum poker é FALSA?",
        alternativas: {
            A: "Somente os developers participam do processo de estimativa do Scrum Poker.",
            B: "Quem executa deve ser o mesmo que estima.",
            C: "É uma técnica para estimar por meio de um jogo de cartas baseado em consenso.",
            D: "Todos os developers selecionam uma carta para cada item do Sprint Backlog.",
            E: "Também é conhecido como Planning Poker."
        },
        resposta_correta: "A",
        justificativa: "A alternativa A é falsa porque, no Scrum poker, não apenas os developers participam do processo de estimativa. O product owner também tem um papel crucial, pois é responsável por descrever o item a ser estimado e esclarecer as dúvidas dos developers."
    },
    {
        id: 19,
        disciplina: "Scrum",
        enunciado: "Qual evento do Scrum busca priorizar pontos de melhoria a serem implementados na próxima sprint?",
        alternativas: {
            A: "Sprint",
            B: "Sprint Planning",
            C: "Daily Scrum",
            D: "Sprint Review",
            E: "Sprint Retrospective"
        },
        resposta_correta: "E",
        justificativa: "O evento do Scrum que busca priorizar pontos de melhoria a serem implementados na próxima sprint é a Sprint Retrospective. Nesse evento, a equipe reflete sobre o que aconteceu na sprint que acabou e identifica estratégias para melhorar e aumentar a eficiência na próxima sprint."
    },
    {
        id: 20,
        disciplina: "Scrum",
        enunciado: "Os valores do Scrum devem ser incorporados pelo Scrum Team e são essenciais para o sucesso dos projetos. Qual das opções abaixo não constitui um valor do Scrum?",
        alternativas: {
            A: "Compromisso",
            B: "Foco",
            C: "Empatia",
            D: "Respeito",
            E: "Coragem"
        },
        resposta_correta: "C",
        justificativa: "Os valores fundamentais do Scrum são compromisso, foco, abertura, respeito e coragem. Estes são os princípios que norteiam a atuação do Scrum Team e são essenciais para o sucesso dos projetos. A opção 'Empatia', apesar de ser uma qualidade importante, não é listada como um valor oficial do Scrum."
    },
    {
        id: 21,
        disciplina: "Scrum",
        enunciado: "Acerca das características do Scrum, qual das alternativas contém somente artefatos do Scrum?",
        alternativas: {
            A: "Backlog e Incremento.",
            B: "Backlog e Sprint Backlog.",
            C: "Sprint Retrospective e Sprint Backlog.",
            D: "Sprint e Sprint Backlog.",
            E: "Product Backlog, Sprint Backlog e Incremento."
        },
        resposta_correta: "E",
        justificativa: "Na metodologia Scrum, os artefatos são elementos que fornecem informações cruciais sobre o projeto e seu progresso. Os três principais artefatos do Scrum são: Product Backlog, Sprint Backlog e Incremento."
    },
    {
        id: 22,
        disciplina: "Scrum",
        enunciado: "Qual das opções abaixo NÃO é uma prática do Kanban essencial para o Scrum?",
        alternativas: {
            A: "Visualização do fluxo de trabalho.",
            B: "Limitação do trabalho em progresso.",
            C: "Gestão ativa de itens de trabalho em andamento.",
            D: "Inspeção e adaptação da definição do 'fluxo de trabalho'.",
            E: "Monitoramento do trabalho em progresso por meio do cronograma."
        },
        resposta_correta: "E",
        justificativa: "As práticas essenciais do Kanban para o Scrum incluem a visualização do fluxo de trabalho, a limitação do trabalho em progresso, a gestão ativa de itens de trabalho em andamento e a inspeção e adaptação da definição do 'fluxo de trabalho'. No entanto, o monitoramento do trabalho em progresso por meio do cronograma não é uma prática do Kanban. O Kanban se concentra mais no fluxo contínuo de trabalho e na limitação do WIP."
    },

    // ==================== KANBAN (questões 23-25) ====================
    {
        id: 23,
        disciplina: "Kanban",
        enunciado: "Qual das alternativas NÃO é uma métrica usada no Kanban?",
        alternativas: {
            A: "WIP (Work in Progress)",
            B: "Cycle Time",
            C: "Work Item Age",
            D: "Throughput",
            E: "Earned Value"
        },
        resposta_correta: "E",
        justificativa: "O Kanban utiliza diversas métricas para monitorar e melhorar a eficiência do fluxo de trabalho, entre elas estão o WIP (work in progress), o cycle time, o work item age e o throughput. No entanto, o earned value (valor agregado) não é uma métrica utilizada no Kanban. Esta é uma técnica de gerenciamento de valor agregado, utilizada para medir o desempenho e o progresso de um projeto em termos de custo e tempo."
    },
    {
        id: 24,
        disciplina: "Kanban",
        enunciado: "______ é organizado por colunas que representam um fluxo trabalho pelo qual passam itens ou tarefas desenvolvidas. É visual e as atividades ficarão explícitas à todos os membros de um time.",
        alternativas: {
            A: "Quadro kanban",
            B: "Método Kanban",
            C: "Customer Kanban",
            D: "Kanban",
            E: "Kaizen"
        },
        resposta_correta: "A",
        justificativa: "O método Kanban tem como base tornar o trabalho visível, para impulsionar a melhoria contínua e entrega de valor. O que torna o trabalho visível é o uso do quadro kanban, seja no formato virtual ou físico. O quadro kanban é organizado por colunas que representam o fluxo de trabalho."
    },
    {
        id: 25,
        disciplina: "Kanban",
        enunciado: "Qual das alternativas NÃO é uma prática do Kanban essencial para o Scrum?",
        alternativas: {
            A: "Visualização do fluxo de trabalho.",
            B: "Limitação do trabalho em progresso.",
            C: "Gestão ativa de itens de trabalho em andamento.",
            D: "Inspeção e adaptação da definição do 'fluxo de trabalho'.",
            E: "Monitoramento do trabalho em progresso por meio do cronograma."
        },
        resposta_correta: "E",
        justificativa: "As práticas essenciais do Kanban para o Scrum incluem a visualização do fluxo de trabalho, a limitação do trabalho em progresso, a gestão ativa de itens de trabalho em andamento e a inspeção e adaptação da definição do 'fluxo de trabalho'. No entanto, o monitoramento do trabalho em progresso por meio do cronograma não é uma prática do Kanban."
    },

    // ==================== XP (EXTREME PROGRAMMING) (questões 26-31) ====================
    {
        id: 26,
        disciplina: "XP",
        enunciado: "XP é o mais específico dos frameworks ágeis de desenvolvimento de software. Apresenta como ideia precípua produzir software de elevada qualidade, ao mesmo tempo em que promove qualidade de vida para a equipe de desenvolvimento. Nesse sentido, Diversidade, Melhoria e Responsabilidade Aceita são alguns dos ______ definidos na XP.",
        alternativas: {
            A: "Conceitos",
            B: "Práticas",
            C: "Princípios",
            D: "Atributos da Equipe",
            E: "Valores"
        },
        resposta_correta: "C",
        justificativa: "Toda a tomada de decisão deve revisitar os princípios para saber se tem relação direta com algum deles, como por exemplo diversidade, melhoria e responsabilidade aceita."
    },
    {
        id: 27,
        disciplina: "XP",
        enunciado: "Qual dos seguintes aspectos NÃO é uma prática de Programação Extrema?",
        alternativas: {
            A: "Desenvolvimento orientado a testes.",
            B: "Pequenos lançamentos.",
            C: "Posse coletiva.",
            D: "Capacitar clientes.",
            E: "Programação em pares."
        },
        resposta_correta: "D",
        justificativa: "A Programação Extrema (XP) é uma metodologia de desenvolvimento de software que enfatiza a qualidade do software e a capacidade de responder a mudanças. Entre suas práticas, estão o desenvolvimento orientado a testes, pequenos lançamentos, posse coletiva e programação em pares. No entanto, a capacitação de clientes não é uma prática da Programação Extrema."
    },
    {
        id: 28,
        disciplina: "XP",
        enunciado: "Preciso testar se sou capaz de acessar dados de uma API. Que tipo de teste eu vou escrever?",
        alternativas: {
            A: "Teste unitário.",
            B: "Teste 'Mocked'.",
            C: "Teste de integração.",
            D: "Teste funcional.",
            E: "Teste de regressão."
        },
        resposta_correta: "C",
        justificativa: "O teste de integração é usado para validar a comunicação entre dois componentes de software, como, por exemplo, a chamada de uma API. O teste unitário verifica um pedaço específico de código isoladamente. O teste funcional verifica se a funcionalidade especificada está operando corretamente."
    },
    {
        id: 29,
        disciplina: "XP",
        enunciado: "O processo de desenvolvimento de software especificado pela Programação Extrema (eXtreme Programming - XP) começa com uma fase de planejamento, na qual são levantados e descritos requisitos para o software na forma de ______________. O projeto e desenvolvimento dos requisitos busca focar nas necessidades imediatas. Necessidades de melhoria no projeto são realizadas através de processos de ______________. Além disso, se recomenda que a atividade de codificação ocorra em ______________ e seja guiada por ______________.",
        alternativas: {
            A: "histórias de usuários - refatoração - quartetos - testes",
            B: "histórias de usuários - testes - pares - casos de uso",
            C: "histórias de usuários - refatoração - pares - testes",
            D: "modelos de domínio - refatoração - pares - testes",
            E: "modelos de domínio - testes - quartetos - casos de uso"
        },
        resposta_correta: "C",
        justificativa: "O processo de desenvolvimento de software especificado pela XP começa com histórias de usuários. Necessidades de melhoria no projeto são realizadas através de processos de refatoração. A atividade de codificação deve ocorrer em pares e ser guiada por testes (TDD)."
    },
    {
        id: 30,
        disciplina: "XP",
        enunciado: "Independentemente da área de atuação profissional, qualidade e capricho são características valorizadas no fluxo de trabalho. Com esses aspectos em mente, quando devemos levar em conta a qualidade?",
        alternativas: {
            A: "Nas fases de testes.",
            B: "Em cada ciclo, desde a primeira etapa.",
            C: "Nos pontos de garantia de qualidade.",
            D: "Na entrega do produto.",
            E: "Na etapa de concepção."
        },
        resposta_correta: "B",
        justificativa: "A qualidade é um aspecto que deve ser considerado em todas as fases de um projeto ou processo de trabalho, desde a primeira etapa. Isso significa que a qualidade não deve ser uma preocupação apenas nas fases de testes, na entrega do produto ou nos pontos de garantia de qualidade. Ao invés disso, a qualidade deve ser uma responsabilidade compartilhada por todos os envolvidos."
    },
    {
        id: 31,
        disciplina: "XP",
        enunciado: "A metodologia ágil Extreme Programming (XP) baseia-se em 14 práticas, algumas das quais são adotadas há muitos anos na indústria de software. A prática na qual se focaliza o aperfeiçoamento do projeto de software e que está presente em todo o desenvolvimento é chamada de:",
        alternativas: {
            A: "Metáfora.",
            B: "Refatoração.",
            C: "Integração contínua.",
            D: "Projeto simples.",
            E: "Programação em pares."
        },
        resposta_correta: "B",
        justificativa: "A refatoração é uma prática da metodologia ágil Extreme Programming (XP) que se concentra no aperfeiçoamento contínuo do projeto de software. Ela envolve a modificação de um sistema de software de tal maneira que, embora o comportamento externo do código permaneça o mesmo, sua estrutura interna é aprimorada."
    },

    // ==================== PMBOK (questões 32-38) ====================
    {
        id: 32,
        disciplina: "PMBOK",
        enunciado: "Qual alternativa contém somente tópicos tratados na seção 'Um sistema de entrega de valor' do padrão de gerenciamento de projetos do Guia PMBOK?",
        alternativas: {
            A: "Gerenciamento das Partes Interessadas, Entrega de Valor.",
            B: "Gerenciamento das Entregas, Valor.",
            C: "Governança, Gerenciamento das Entregas.",
            D: "Governança, Funções Associadas a Projetos, Ambiente do Projeto e Gerenciamento de Produto.",
            E: "Ambiente do Projeto, Gerenciamento das Entregas."
        },
        resposta_correta: "D",
        justificativa: "A seção 'Um Sistema de Entrega de Valor' do Guia PMBOK aborda os seguintes tópicos: Criação de valor, Sistemas de governança organizacional, Funções associadas a projetos, O ambiente do projeto e Considerações sobre o gerenciamento de produto."
    },
    {
        id: 33,
        disciplina: "PMBOK",
        enunciado: "Qual é a melhor descrição da definição de pronto (DoD) segundo o Guia PMBOK?",
        alternativas: {
            A: "Aquilo que deve ser feito.",
            B: "Critérios de Aceitação.",
            C: "Checklist do que precisa ser feito.",
            D: "Inspeção do que precisa ser feito.",
            E: "Uma lista de verificação de todos os critérios que devem ser atendidos para que uma entrega possa ser considerada pronta para uso do cliente."
        },
        resposta_correta: "E",
        justificativa: "A definição de pronto (DoD), conforme o Guia PMBOK, é melhor descrita como uma lista de verificação de todos os critérios que devem ser atendidos para que uma entrega possa ser considerada pronta para uso do cliente."
    },
    {
        id: 34,
        disciplina: "PMBOK",
        enunciado: "Independentemente do método ágil adotado por uma organização, imprevistos podem acontecer e será necessário lidar com as eventuais mudanças. Acerca do Guia PMBOK, qual é o princípio da Mudança?",
        alternativas: {
            A: "Navegue na Complexidade",
            B: "Faça a adaptação de acordo com o contexto.",
            C: "Reconheça, avalie e reaja às interações do sistema.",
            D: "Enfoque no valor.",
            E: "Aceite a mudança para alcançar o futuro estado previsto."
        },
        resposta_correta: "E",
        justificativa: "O princípio da mudança, de acordo com o Guia PMBOK, é 'Aceite a mudança para alcançar o futuro estado previsto'. Isso significa que, em qualquer projeto, é importante estar preparado para possíveis alterações e adaptar-se a elas, visando alcançar o resultado final desejado."
    },
    {
        id: 35,
        disciplina: "PMBOK",
        enunciado: "Quais das opções abaixo contêm somente estilos de liderança situacional desenvolvida por Paul Hersey e Ken Blanchard?",
        alternativas: {
            A: "Negociador, Servidor, Autoritário.",
            B: "Controlador, Orientador, Delegador.",
            C: "Controlador, Servidor e Delegador.",
            D: "Orientador, Servidor e Delegador.",
            E: "Delegador, Servidor e Apoiador."
        },
        resposta_correta: "B",
        justificativa: "Paul Hersey e Ken Blanchard desenvolveram um modelo de liderança situacional que se baseia em quatro estilos principais: Controlador, Orientador, Apoiador e Delegador. A alternativa B é a única que apresenta somente estilos de liderança situacional propostos por esses autores."
    },
    {
        id: 36,
        disciplina: "PMBOK",
        enunciado: "Uma das formas mais eficientes para estabelecer a missão da equipe é pelo sistema OKR, amplamente utilizado por empresas como Google, LinkedIn e Spotify. Qual alternativa melhor descreve o que deve conter em um objetivo segundo o OKR?",
        alternativas: {
            A: "O objetivo deve ser curto, inspirador e envolvente, além de motivar e desafiar a equipe.",
            B: "O objetivo deve ter as características SMART.",
            C: "O objetivo deve ser desafiador e com prazos longos.",
            D: "O objetivo deve conter uma meta.",
            E: "O objetivo deve ser realístico, específico e ter um prazo."
        },
        resposta_correta: "A",
        justificativa: "O OKR (Objectives and Key Results) é uma metodologia de definição de metas que busca alinhar os objetivos da equipe com os da empresa. Segundo essa metodologia, um objetivo eficaz deve ser curto, inspirador e envolvente, de modo a motivar e desafiar a equipe."
    },
    {
        id: 37,
        disciplina: "PMBOK",
        enunciado: "Em relação aos requisitos, qual é a principal diferença entre uma abordagem preditiva e uma ágil?",
        alternativas: {
            A: "Na abordagem preditiva, os requisitos são definidos previamente, antes do início do desenvolvimento; na abordagem ágil, os requisitos são elaborados com frequência durante a entrega.",
            B: "Não existem diferenças, requisitos são sempre requisitos.",
            C: "Na abordagem preditiva, os requisitos são preditivos; na abordagem ágil, os requisitos são ágeis.",
            D: "Na abordagem preditiva, os requisitos são elaborados durante a entrega; na abordagem ágil, os requisitos são definidos nas Sprints.",
            E: "Na abordagem preditiva, os requisitos são definidos no Sprint Planning; na abordagem ágil, os requisitos são elaborados durante a entrega."
        },
        resposta_correta: "A",
        justificativa: "Na abordagem preditiva, os requisitos são definidos previamente, antes do início do desenvolvimento. Isso é comum em projetos de engenharia, como pontes, prédios e estradas, onde os custos de uma mudança no meio do projeto são elevados. Na abordagem ágil, os requisitos são elaborados com frequência durante a entrega."
    },
    {
        id: 38,
        disciplina: "PMBOK",
        enunciado: "Os processos que abrangem as aquisições e contratos envolvem uma sequência de atividades que nem sempre são triviais. Qual das alternativas descreve melhor um contrato?",
        alternativas: {
            A: "Documento entre comprador e fornecedor.",
            B: "Acordo sem compensação financeira.",
            C: "Acordo entre comprador e vendedor.",
            D: "Acordo com termos e condições objetivos, claros e detalhados sem gerar dupla interpretação.",
            E: "Documento legal entre comprador e fornecedor que descreve um acordo mútuo gerando obrigações entre fornecedor a entregar produtos, serviços ou resultados descritos e comprador a fornecer uma contraprestação monetária ou de outro tipo."
        },
        resposta_correta: "E",
        justificativa: "O contrato é um elemento fundamental nos processos de aquisições. Ele é um documento legal que estabelece um acordo entre o comprador e o fornecedor. Este acordo gera obrigações para ambas as partes: o fornecedor se compromete a entregar produtos, serviços ou resultados conforme descrito no contrato, enquanto o comprador se compromete a fornecer uma contraprestação, que pode ser monetária ou de outro tipo."
    },

    // ==================== PYTHON (questões 39-43) ====================
    {
        id: 39,
        disciplina: "Python - Manipulação de Arquivos",
        enunciado: "Em um projeto de análise de dados, um desenvolvedor Python precisa abrir um arquivo chamado 'dados.csv' localizado no mesmo diretório do script. Este arquivo será utilizado para leitura e análise de dados. Ele precisa garantir que o arquivo seja aberto corretamente. Qual comando o desenvolvedor deve utilizar para abrir o arquivo 'dados.csv' para leitura?",
        alternativas: {
            A: "open('dados.csv', 'w')",
            B: "open('dados.csv', 'a')",
            C: "open('dados.csv', 'r')",
            D: "open('dados.csv', 'rb')",
            E: "open('dados.csv', 'x')"
        },
        resposta_correta: "C",
        justificativa: "A alternativa correta é open('dados.csv', 'r'), pois 'r' é o modo de leitura, que é o necessário para ler e analisar dados de um arquivo. As outras opções representam modos diferentes: 'w' para escrita (apagando o conteúdo existente), 'a' para anexar, 'rb' para leitura em modo binário, e 'x' para criação de um novo arquivo."
    },
    {
        id: 40,
        disciplina: "Python - Manipulação de Arquivos",
        enunciado: "A linguagem de programação Python oferece diversas ferramentas para a ______ e ______ de dados em arquivos e diretórios. Para garantir o correto funcionamento do programa ao manipular arquivos e strings, é essencial adotar ______ e realizar o tratamento de exceções. Qual das opções abaixo melhor completa as lacunas acima?",
        alternativas: {
            A: "compilação, interpretação, padrões de codificação",
            B: "leitura, gravação, boas práticas",
            C: "análise, codificação, estilos de programação",
            D: "execução, teste, diretrizes de codificação",
            E: "configuração, instalação, normas de segurança"
        },
        resposta_correta: "B",
        justificativa: "A linguagem Python fornece mecanismos para a leitura e gravação de dados em arquivos e diretórios. Além disso, para garantir a eficiência e correção dos programas, é crucial seguir boas práticas de programação e realizar o tratamento adequado de exceções."
    },
    {
        id: 41,
        disciplina: "Python - Strings",
        enunciado: "Uma equipe de desenvolvimento está criando um script Python para processar textos armazenados em arquivos. Uma das tarefas envolve a remoção de espaços em branco e caracteres de nova linha do início e do final de cada linha lida do arquivo. Qual método de string em Python deve ser utilizado para remover espaços e caracteres de nova linha de uma string?",
        alternativas: {
            A: "split()",
            B: "replace()",
            C: "strip()",
            D: "join()",
            E: "count()"
        },
        resposta_correta: "C",
        justificativa: "A resposta correta é strip(), pois este método é utilizado para remover espaços em branco e caracteres de nova linha do início e do final das strings. split() quebra a string em uma lista, replace() substitui partes da string, join() une elementos de uma lista em uma string, e count() conta ocorrências de uma substring."
    },
    {
        id: 42,
        disciplina: "Python - Manipulação de Arquivos",
        enunciado: "Durante a escrita de um script Python, um programador se depara com a necessidade de reabrir um arquivo de texto para leitura após já tê-lo processado uma vez. O arquivo precisa ser lido novamente desde o início. Qual método deve ser utilizado para posicionar o cursor no início do arquivo antes da segunda leitura?",
        alternativas: {
            A: "open()",
            B: "close()",
            C: "read()",
            D: "seek(0)",
            E: "readline()"
        },
        resposta_correta: "D",
        justificativa: "A resposta correta é seek(0), pois este método reposiciona o cursor no início do arquivo. O método seek() permite mover o cursor para uma posição específica no arquivo, e seek(0) move para o início."
    },
    {
        id: 43,
        disciplina: "Python - Listas",
        enunciado: "A manipulação de listas em Python permite a realização de diversas operações, desde a criação até a manipulação de seus elementos. Ao criar uma lista, como minha_lista, é possível processá-la de diferentes maneiras. Em uma situação, o método _____ é utilizado com o conector vírgula (', ') para combinar seus elementos. O resultado desse processo é então _____ em uma variável, como texto1. Em uma abordagem alternativa, os elementos da mesma lista podem ser unidos usando outro conector, e o resultado é _____ em um arquivo distinto. Assinale a alternativa que contém a sequência correta para preencher as lacunas acima.",
        alternativas: {
            A: "split, atribuído, lido",
            B: "append, guardado, mostrado",
            C: "join, armazenado, gravado",
            D: "remove, retirado, editado",
            E: "find, pesquisado, excluído"
        },
        resposta_correta: "C",
        justificativa: "O método join em Python é usado para combinar ou juntar elementos de uma lista usando um conector específico. Após essa combinação, o resultado é 'armazenado' ou 'atribuído' a uma variável. Posteriormente, esse resultado pode ser 'gravado' em um arquivo para fins de armazenamento ou análise."
    },

    // ==================== SQL (questões 44-50) ====================
    {
        id: 44,
        disciplina: "SQL - Comandos Básicos",
        enunciado: "Você está construindo um sistema de gerenciamento de inventário em Python e decide usar MySQL. O sistema precisa de funcionalidades para remover itens descontinuados do banco de dados periodicamente. Qual é o comando SQL adequado para remover um item específico do banco de dados MySQL em Python?",
        alternativas: {
            A: "INSERT INTO",
            B: "SELECT",
            C: "UPDATE",
            D: "DELETE FROM",
            E: "ALTER TABLE"
        },
        resposta_correta: "D",
        justificativa: "O comando 'DELETE FROM' é utilizado no SQL para remover registros específicos de uma tabela em um banco de dados. Em um sistema de gerenciamento de inventário desenvolvido em Python e utilizando MySQL, esse comando é apropriado para excluir itens descontinuados do banco de dados."
    },
    {
        id: 45,
        disciplina: "SQL - Restrições",
        enunciado: "Em um projeto de banco de dados com Python, um desenvolvedor quer garantir que o nome de cada pessoa na tabela Pessoa seja único. Para isso, ele precisa definir uma restrição na tabela. Qual restrição deve ser adicionada à tabela Pessoa para garantir que o nome de cada pessoa seja único?",
        alternativas: {
            A: "PRIMARY KEY (nome)",
            B: "FOREIGN KEY (nome)",
            C: "UNIQUE (nome)",
            D: "CHECK (nome)",
            E: "INDEX (nome)"
        },
        resposta_correta: "C",
        justificativa: "Para garantir que os valores em uma coluna sejam únicos em toda a tabela, utiliza-se a restrição UNIQUE. Ao adicionar UNIQUE (nome) à definição da tabela Pessoa, o banco de dados garantirá que não haja dois registros com o mesmo nome."
    },
    {
        id: 46,
        disciplina: "SQL - UPDATE",
        enunciado: "Uma academia está atualizando seu sistema de gerenciamento de membros e precisa atualizar os dados de contato dos membros no banco de dados. O sistema é baseado em Python e SQLite. Qual é o comando SQL correto para atualizar o endereço de email de um membro específico no banco de dados?",
        alternativas: {
            A: "SELECT email FROM membros WHERE id = 123",
            B: "DELETE FROM membros WHERE email = 'novo@email.com'",
            C: "INSERT INTO membros (email) VALUES ('novo@email.com') WHERE id = 123",
            D: "UPDATE membros SET email = 'novo@email.com' WHERE id = 123",
            E: "CREATE TABLE membros_new AS SELECT * FROM membros"
        },
        resposta_correta: "D",
        justificativa: "A alternativa correta é o comando UPDATE membros SET email = 'novo@email.com' WHERE id = 123. Este comando atualiza o endereço de email do membro com o ID específico, utilizando o comando UPDATE que é empregado para alterar registros existentes em um banco de dados."
    },
    {
        id: 47,
        disciplina: "SQL - DROP TABLE",
        enunciado: "Um sistema de gerenciamento de eventos está sendo desenvolvido em Python com SQLite. O desenvolvedor precisa excluir a tabela de fornecedores antigos, que não será mais utilizada. Qual comando SQL é empregado para remover uma tabela inteira em um banco de dados SQLite?",
        alternativas: {
            A: "DROP TABLE",
            B: "DELETE TABLE",
            C: "REMOVE TABLE",
            D: "ERASE TABLE",
            E: "CLEAR TABLE"
        },
        resposta_correta: "A",
        justificativa: "O comando SQL apropriado para remover uma tabela inteira em SQLite é DROP TABLE, seguido pelo nome da tabela. Este comando exclui tanto a tabela quanto todos os dados nela contidos."
    },
    {
        id: 48,
        disciplina: "SQL - JOIN",
        enunciado: "Em um sistema de rastreamento de veículos, você precisa relacionar informações de veículos com seus proprietários usando Python e um banco de dados. Este sistema exige consultas avançadas para associar dados entre diferentes tabelas. Qual comando SQL é essencial para realizar uma consulta que combina informações de duas tabelas distintas no Python?",
        alternativas: {
            A: "CREATE TABLE",
            B: "DROP TABLE",
            C: "INSERT INTO",
            D: "JOIN",
            E: "UPDATE"
        },
        resposta_correta: "D",
        justificativa: "O comando SQL 'JOIN' é crucial para realizar consultas que combinam informações de duas ou mais tabelas em um banco de dados. Especificamente em Python, quando se trabalha com bancos de dados para sistemas como o de rastreamento de veículos, o JOIN permite associar dados correlacionados entre diferentes tabelas."
    },
    {
        id: 49,
        disciplina: "SQL - Consultas",
        enunciado: "Considere a tabela Produto com os seguintes dados: codigo 10 - Faca, 20 - Garfo, 30 - Prato. Qual o resultado impresso pelo trecho do script a seguir? cursor.execute('SELECT nome FROM Produto;') print(cursor.fetchall())",
        alternativas: {
            A: "['Faca', 'Garfo', 'Prato']",
            B: "[('Faca', 'Garfo', 'Prato')]",
            C: "[('Faca'), ('Garfo'), ('Prato')]",
            D: "[('Faca',), ('Garfo',), ('Prato',)]",
            E: "[('Faca'), ('Garfo'), ('Prato')]"
        },
        resposta_correta: "D",
        justificativa: "A resposta correta é: [('Faca',), ('Garfo',), ('Prato',)]. O método fetchall() retorna uma lista de tuplas, onde cada tupla corresponde a um registro. Mesmo com uma única coluna, cada resultado é uma tupla de um elemento."
    },
    {
        id: 50,
        disciplina: "SQL - CREATE TABLE",
        enunciado: "Uma empresa de logística deseja implementar um sistema para gerenciar sua frota de veículos. O desenvolvedor opta por utilizar Python e SQLite, planejando tabelas para veículos, motoristas e manutenções. Ele começa criando a tabela de veículos. No contexto do SQLite em Python, qual comando SQL é usado para criar uma nova tabela?",
        alternativas: {
            A: "CREATE TABLE",
            B: "NEW TABLE",
            C: "INIT TABLE",
            D: "MAKE TABLE",
            E: "SETUP TABLE"
        },
        resposta_correta: "A",
        justificativa: "O comando SQL para criar uma nova tabela em um banco de dados SQLite é CREATE TABLE. Este comando permite especificar o nome da tabela e definir as colunas com seus respectivos tipos de dados e restrições."
    },

    // ==================== IA (questões 51-56) ====================
    {
        id: 51,
        disciplina: "IA - Definições",
        enunciado: "Em relação às definições sobre Inteligência Artificial, pode-se afirmar que: I - A arte de criar máquinas que executem funções que exijam inteligência quando executada por pessoas. II - O estudo de como fazer computadores realizarem coisas nas quais, no momento, as pessoas são melhores. III - O ramo da ciência da computação que está interessada em automatizar comportamento inteligente. IV - O estudo e desenvolvimento específico para criação de máquinas para substituir os soldados nos confrontos proporcionados pela guerra. Escolha a alternativa correta.",
        alternativas: {
            A: "Apenas os itens I e II estão corretos.",
            B: "Apenas os itens II e IV estão corretos.",
            C: "Apenas o item III está correto.",
            D: "Apenas o item I está correto.",
            E: "Os itens I, II e III estão corretos."
        },
        resposta_correta: "E",
        justificativa: "A Inteligência Artificial (IA) é um campo vasto e complexo, com várias definições possíveis. As três primeiras afirmativas apresentam definições válidas para a IA. A quarta afirmativa, por outro lado, é muito específica e não abrange a totalidade do que é a IA."
    },
    {
        id: 52,
        disciplina: "IA - Paradigmas",
        enunciado: "O paradigma conexionista, também conhecido por redes neurais artificiais, forma um paradigma de IA que tem inspiração no comportamento do cérebro, além de outras características. Assinale a alternativa que representa uma característica desse paradigma: I - Processam a informação de forma paralela e distribuída. II - Generalizam conhecimento aprendido. III - Lidam com conhecimento não simbolicamente representado. IV - São algoritmos de otimização. V - O conhecimento é aprendido por meio do estímulo e resposta.",
        alternativas: {
            A: "Apenas as afirmativas I, II e III estão corretas.",
            B: "Apenas as afirmativas I e V estão corretas.",
            C: "Apenas as afirmativas II e III estão corretas.",
            D: "Apenas as afirmativas I, II, III e V estão corretas.",
            E: "Apenas as afirmativas I, II e V estão corretas."
        },
        resposta_correta: "D",
        justificativa: "O paradigma conexionista é baseado em modelos matemáticos simples de neurônios, formando uma rede neural capaz de simular a memória associativa humana. Os algoritmos de redes neurais são parte integrante do paradigma conexionista. No entanto, os algoritmos de otimização não são uma característica desse paradigma, pois pertencem ao paradigma evolutivo."
    },
    {
        id: 53,
        disciplina: "IA - Histórico",
        enunciado: "Nos primeiros anos de seu surgimento, a ciência conhecida como Inteligência Artificial causou controvérsia nos mais diversos campos, essencialmente pelo nome adotado para defini-la e por sua multidisciplinaridade característica. Com relação aos primeiros anos da Inteligência Artificial, assinale a alternativa correta:",
        alternativas: {
            A: "O Teste de Turing consistia em uma série de problemas que eram resolvidos pela máquina de Turing por meio de técnicas de Inteligência Artificial.",
            B: "Os primeiros anos da Inteligência Artificial foram repletos de insucessos, principalmente pela dificuldade de resolver operações aritméticas complexas.",
            C: "Na década de 1980, os sistemas especialistas passaram a ser considerados viáveis para utilização no mercado empresarial.",
            D: "Nos últimos anos, a Inteligência Artificial vem buscando teorias e técnicas completamente novas, de forma a abandonar as descobertas feitas no passado.",
            E: "A deep learning é a mais nova tecnologia de Inteligência Artificial, porém, apenas no meio acadêmico é aplicada, nos negócios não tem aplicabilidade."
        },
        resposta_correta: "C",
        justificativa: "A resposta correta é a que afirma que na década de 1980, os sistemas especialistas passaram a ser considerados viáveis para utilização no mercado empresarial. O Teste de Turing, na realidade era uma forma de avaliar se a máquina conseguia se passar por um humano. Sobre os últimos anos, a IA vem buscando teorias e técnicas novas, mas não estamos abandonando as descobertas feitas no passado."
    },
    {
        id: 54,
        disciplina: "IA - Aplicações",
        enunciado: "Em relação à aplicação adequada das técnicas de Inteligência Artificial, avalie as afirmações a seguir. I - Indução em árvore de decisão é utilizada para identificação de fraudes em cartões de crédito. II - Redes neurais artificiais são utilizadas no desenvolvimento de sistemas de análise de risco em aplicações financeiras. III - Sistemas especialistas, baseados em regras, são utilizados na substituição do profissional especialista em diagnóstico de falhas em hardware. É correto o que se afirma em:",
        alternativas: {
            A: "Apenas o item I está correto.",
            B: "Apenas o item III está correto.",
            C: "Os itens I e II estão corretos.",
            D: "Os itens II e III estão corretos.",
            E: "Os itens I, II e III estão corretos."
        },
        resposta_correta: "C",
        justificativa: "As afirmações I e II estão corretas. A indução em árvore de decisão pode ser utilizada para identificar fraudes em cartões de crédito. As redes neurais artificiais são utilizadas no desenvolvimento de sistemas de análise de risco. No entanto, a afirmação III não está correta, pois os sistemas especialistas não substituem completamente o profissional."
    },
    {
        id: 55,
        disciplina: "IA - Assistentes Virtuais",
        enunciado: "Em relação aos assistentes pessoais virtuais, pode-se afirmar que: I - A criação de assistentes pessoais virtuais é uma das aplicações de IA mais utilizadas. II - Os assistentes pessoais virtuais auxiliam nas tarefas básicas como definir alarmes, lembrar compromissos, ligar para outros números, informar a previsão do tempo, entre outras funcionalidades. III - Em 1962, a IBM apresentou Shoebox, o aparelho era do tamanho de uma caixa de sapatos, e além de reconhecer algumas palavras, também conseguia executar funções matemáticas. IV - Os assistentes pessoais estão cada vez mais em desuso, devido à evolução da tecnologia de robôs domésticos. Assinale a opção correta:",
        alternativas: {
            A: "Apenas o item IV está correto.",
            B: "Apenas o item II está correto",
            C: "Apenas os itens I e II estão corretos.",
            D: "Apenas os itens I, II e III estão corretos.",
            E: "Apenas os itens I, II e IV estão corretos."
        },
        resposta_correta: "D",
        justificativa: "O assistente pessoal inteligente é um agente de software que pode realizar tarefas ou serviços para um indivíduo. Ultimamente, tem se popularizado e hoje é uma das aplicações de IA mais utilizadas. O primeiro assistente surgiu em 1962, criado pela IBM. A alternativa IV está incorreta, pois os assistentes pessoais virtuais não estão em desuso, mas sim cada vez mais populares."
    },
    {
        id: 56,
        disciplina: "IA - Algoritmos Genéticos",
        enunciado: "Um dos principais métodos do paradigma evolutivo é o algoritmo genético, que possui como principal atrativo a utilização de ferramenta de busca e otimização para a solução dos mais diferentes tipos de problemas. Assim, pode-se afirmar que os algoritmos genéticos:",
        alternativas: {
            A: "lidam com conhecimento não simbolicamente representado e processam a informação de forma paralela e distribuída.",
            B: "são inspirados no comportamento do cérebro humano e modelam os modos imprecisos do raciocínio aproximado.",
            C: "lidam com conhecimento explícito, representado simbolicamente e generalizam o conhecimento aprendido.",
            D: "empregam uma estratégia de busca paralela e estruturada, baseadas nos mecanismos da seleção natural.",
            E: "são inspirados nos fenômenos emergentes da natureza."
        },
        resposta_correta: "D",
        justificativa: "Os algoritmos genéticos são inspirados no princípio Darwiniano da evolução das espécies e na genética. São algoritmos probabilísticos que fornecem um mecanismo de busca paralela e adaptativa baseado no princípio de sobrevivência dos mais aptos e na reprodução."
    },

    // ==================== MACHINE LEARNING (questões 57-63) ====================
    {
        id: 57,
        disciplina: "Machine Learning",
        enunciado: "Com o objetivo de obter informações por meio do aprendizado de máquina, verificou-se que o processo que estava sendo realizado consistia em examinar as características de determinado objeto e prever um determinado valor numérico baseado em dados conhecidos; verificou-se também o uso de algoritmos de aprendizado supervisionados. Identifique que ação está sendo realizada:",
        alternativas: {
            A: "Regressão",
            B: "Classificação",
            C: "Clustering",
            D: "Estimativa de densidade",
            E: "Redução dimensional"
        },
        resposta_correta: "A",
        justificativa: "A regressão é um tipo de aprendizado de máquina supervisionado que é usado para prever um valor numérico baseado em dados conhecidos. O processo de regressão envolve a construção de um modelo matemático que descreve a relação entre as variáveis de entrada e a variável de saída."
    },
    {
        id: 58,
        disciplina: "Machine Learning",
        enunciado: "Em um problema de aprendizado de máquina, o algoritmo é treinado com exemplos em que cada dado de entrada já está associado à sua respectiva saída correta. Durante o treinamento, o modelo compara sua previsão com o resultado esperado e ajusta seus parâmetros para reduzir os erros. Esse tipo de aprendizado é denominado:",
        alternativas: {
            A: "Aprendizado supervisionado",
            B: "Aprendizado não supervisionado",
            C: "Aprendizado por reforço",
            D: "Estimativa de densidade",
            E: "Redução dimensional"
        },
        resposta_correta: "A",
        justificativa: "A questão descreve um processo em que o algoritmo aprende a partir de exemplos rotulados, isto é, com entradas e saídas conhecidas. Essa é a característica fundamental do aprendizado supervisionado."
    },
    {
        id: 59,
        disciplina: "Machine Learning",
        enunciado: "Com o objetivo de extrair informações por meio do aprendizado de máquina, verificou-se que o processo em análise utiliza algoritmos não supervisionados para agrupar objetos com base na proximidade e na presença de regiões densas de dados, identificando conjuntos de elementos semelhantes em vizinhanças mais densas. Nesse caso, a ação que está sendo realizada é:",
        alternativas: {
            A: "Regressão",
            B: "Classificação",
            C: "Clustering",
            D: "Estimativa de densidade",
            E: "Redução dimensional"
        },
        resposta_correta: "C",
        justificativa: "O enunciado descreve o agrupamento de objetos em regiões densas, característica típica de métodos de clustering baseados em densidade, como o DBSCAN. Embora a densidade seja usada como critério, a tarefa principal é o agrupamento, e não a estimativa de densidade."
    },
    {
        id: 60,
        disciplina: "Machine Learning",
        enunciado: "Acerca dos conceitos de aprendizado de máquina, julgue os itens seguintes: I. Em aprendizado de máquina, as árvores de decisão podem ser usadas com sistemas de classificação, para atribuir informação de tipo. II. As aglomerações, tipos de informação obtidos por meio do aprendizado de máquina, caracterizam-se por se ligarem a um único e específico evento. III. Para a realização de prognósticos por meio de técnicas de aprendizado de máquina, parte-se de uma série de valores existentes obtidos de dados históricos. Assinale a alternativa correta:",
        alternativas: {
            A: "Apenas I está correta.",
            B: "Apenas II está correta.",
            C: "Apenas III está correta.",
            D: "I e II estão corretas.",
            E: "I e III estão corretas."
        },
        resposta_correta: "E",
        justificativa: "Resposta correta: I e III estão corretas. As árvores de decisão são um tipo de algoritmo de aprendizado de máquina que pode ser usado para classificar dados. Os prognósticos são um tipo de algoritmo que pode ser usado para prever valores futuros a partir de dados históricos."
    },
    {
        id: 61,
        disciplina: "Machine Learning",
        enunciado: "Considere que um sistema de aprendizado de máquina percebe que todas as pessoas com índice de massa corporal regular tomam café com açúcar, enquanto todas as pessoas com índice elevado tomam a bebida com adoçante. Sendo assim, a inteligência artificial poderá inferir que:",
        alternativas: {
            A: "O adoçante é o responsável pela obesidade dos usuários - e nós sabemos, pela nossa inteligência humana, que não é bem assim.",
            B: "O adoçante não é responsável pela obesidade dos usuários - afinal, a inteligência artificial tem bom senso, assim como a inteligência humana.",
            C: "O café não deve ser tomado nem com açúcar nem com adoçante - a inteligência artificial é binária, 0 e 1, ou Sim e Não.",
            D: "O café deve ser tomado sem adoçante e sem açúcar - a inteligência artificial tem padrões rígidos ao tomar uma decisão.",
            E: "O café é uma bebida prejudicial e não deve ser tomado."
        },
        resposta_correta: "A",
        justificativa: "A alternativa correta é a A, que sugere que a inteligência artificial pode inferir que o adoçante é o responsável pela obesidade dos usuários. Isso ocorre porque a IA, ao analisar os dados, percebeu uma correlação entre o consumo de adoçante e um índice de massa corporal elevado. No entanto, correlação não implica causalidade."
    },
    {
        id: 62,
        disciplina: "Machine Learning",
        enunciado: "O aprendizado de máquina comporta vários métodos de aprendizagem de acordo com o sinal. Identifique a opção que exemplifica esses métodos:",
        alternativas: {
            A: "Método de aprendizado inteligente e não inteligente",
            B: "Método de aprendizado estruturado e não estruturado",
            C: "Método de aprendizado supervisionado e não supervisionado",
            D: "Método de aprendizado por classificação e regressão",
            E: "Método de aprendizado por associação e memorização"
        },
        resposta_correta: "C",
        justificativa: "O aprendizado de máquina comporta vários métodos de aprendizagem de acordo com o sinal. O método de aprendizado supervisionado e não supervisionado é um exemplo desses métodos."
    },
    {
        id: 63,
        disciplina: "Machine Learning",
        enunciado: "A respeito dos modelos de aprendizado de máquina, assinale a opção correta:",
        alternativas: {
            A: "O agrupamento (ou clustering) realiza identificação de grupos de dados que apresentam co-ocorrência.",
            B: "A classificação realiza o aprendizado de uma função que pode ser usada para mapear os valores associados aos dados em um ou mais valores reais.",
            C: "A regressão ou predição promove o aprendizado de uma função que pode ser usada para mapear dados em uma de várias classes discretas definidas previamente.",
            D: "As regras de associação identificam grupos de dados, em que estes têm características semelhantes.",
            E: "Os métodos de classificação supervisionada podem ser embasados em separabilidade (entropia), utilizando árvores de decisão e variantes, e em particionamento, utilizando SVM (support vector machines)."
        },
        resposta_correta: "E",
        justificativa: "A alternativa correta é a letra E. Ela afirma que os métodos de classificação supervisionada podem ser baseados em separabilidade (entropia), utilizando árvores de decisão e variantes, e em particionamento, utilizando SVM (support vector machines). Isso é verdadeiro, pois a classificação supervisionada é um tipo de aprendizado de máquina que utiliza um conjunto de treinamento para aprender a classificar novos exemplos."
    },

    // ==================== REDES NEURAIS (questões 64-70) ====================
    {
        id: 64,
        disciplina: "Redes Neurais",
        enunciado: "As Redes Neurais Artificiais têm sido amplamente usadas, por exemplo, em tarefas de reconhecimento de imagem, diagnóstico na medicina, processamento de linguagem natural, previsão de séries temporais. Entendendo que as redes neurais artificiais possuem vantagens e desvantagens, analise as afirmativas a seguir: I. Requer muitos dados de treinamento limpos. II. Arquitetura facilmente adaptável a vários domínios de problemas. III. Dificuldade na interpretação dos resultados. IV. A rede neural aprende com os dados analisados e não requer reprogramação. V. Requer alto poder computacional. Assinale a seguir a alternativa que apresenta apenas as afirmativas relacionadas às vantagens das redes neurais artificiais:",
        alternativas: {
            A: "I, II, III e IV, apenas.",
            B: "II, III e IV, apenas.",
            C: "I e V, apenas.",
            D: "II e IV, apenas.",
            E: "II, apenas."
        },
        resposta_correta: "D",
        justificativa: "As redes neurais artificiais são ferramentas poderosas que têm uma ampla gama de aplicações. No entanto, como qualquer ferramenta, elas têm suas vantagens e desvantagens. As vantagens incluem: arquitetura facilmente adaptável a vários domínios (II) e a capacidade de aprender com os dados sem reprogramação (IV). I, III e V são desvantagens."
    },
    {
        id: 65,
        disciplina: "Redes Neurais - Função de Ativação",
        enunciado: "Em uma rede neural artificial, a função de ativação é uma mudança não linear nos valores antes de enviar os valores de resultado. É uma função que mapeia corretamente a camada anterior para as restrições (geralmente 0/1) da próxima camada. Qual das opções abaixo é uma função de ativação?",
        alternativas: {
            A: "Backpropagation",
            B: "Bias",
            C: "Feed Forward",
            D: "Feed Backward Network",
            E: "Sigmoid"
        },
        resposta_correta: "E",
        justificativa: "A função de ativação é uma ferramenta matemática aplicada à entrada de cada neurônio em uma rede neural artificial. Existem várias funções de ativação, como a função sigmóide e a ReLU (Rectified Linear Unit). Dentre as opções apresentadas, a única que representa uma função de ativação é a Sigmoid."
    },
    {
        id: 66,
        disciplina: "Redes Neurais",
        enunciado: "Esse componente de uma rede neural artificial mapeia corretamente a camada anterior para as restrições da próxima (geralmente 0/1). Esse componente é definido como uma mudança não linear nos valores antes de enviar os valores de resultado. Essa definição é relativa a qual componente de uma rede neural artificial (RNA)?",
        alternativas: {
            A: "Viés (Bias)",
            B: "Camada de pesos (Weight layer)",
            C: "Activation function (Função de ativação)",
            D: "Camada de saída (Output layer)",
            E: "Camada oculta (Hidden layer)"
        },
        resposta_correta: "C",
        justificativa: "A definição apresentada no enunciado se refere ao componente conhecido como função de ativação (Activation function) em uma rede neural artificial. Este componente tem a função de mapear os dados da camada anterior para as restrições da próxima camada através de uma transformação não linear."
    },
    {
        id: 67,
        disciplina: "Redes Neurais - Arquiteturas",
        enunciado: "Nesse tipo de rede neural artificial, os neurônios são combinados em uma estrutura em camadas, cada uma com um número diferente de neurônios. O vetor de valores de entrada x passa pela camada inicial e são combinadas com os pesos iniciais em uma soma ponderada e submetidas à função de ativação, cujos valores de saída são ligados às entradas da camada seguinte, percorrendo todas as camadas ocultas, até a rede fornecer como resultado os valores de saída da última camada. Qual tipo de rede neural artificial corresponde a esta definição?",
        alternativas: {
            A: "Redes Neurais Recorrentes (Recurrent Neural Network)",
            B: "LSTM (Long Short Term Memory)",
            C: "Rede de Jordan",
            D: "Rede de Kohonen",
            E: "Redes Perceptron de Multicamadas (Redes Multilayer Perceptron)"
        },
        resposta_correta: "E",
        justificativa: "A descrição apresentada no enunciado corresponde à definição de uma Rede Perceptron de Multicamadas (MLP). Esta rede neural é caracterizada por sua estrutura em camadas, onde cada camada contém um número específico de neurônios, e o processamento ocorre da camada de entrada para a camada de saída."
    },
    {
        id: 68,
        disciplina: "Redes Neurais",
        enunciado: "Nessa arquitetura de rede neural artificial, uma sequência de entradas entra em uma camada e é multiplicada por pesos e, em seguida, cada valor é somado para obter uma soma de valores de entrada ponderados. Caso a soma dos valores esteja acima de um determinado limite, normalmente definido como zero, o valor resultante será normalmente 1 e, caso a soma esteja abaixo do limite, o valor de saída será -1. Essa arquitetura de rede neural artificial geralmente aparece em sua forma mais simples como um perceptron de camada única. Assinale a alternativa que corresponde, corretamente, a essa definição?",
        alternativas: {
            A: "Rede competitiva",
            B: "Rede concorrente",
            C: "Rede ativa",
            D: "Rede Neural Feed Forward",
            E: "Feed Backward Network (Rede Recorrente)"
        },
        resposta_correta: "D",
        justificativa: "A definição apresentada no enunciado descreve a arquitetura de uma Rede Neural Feed Forward. Nesse tipo de rede, os dados de entrada são processados em uma única direção, da camada de entrada para a camada de saída. A menção ao perceptron de camada única também é uma pista, pois este é um exemplo simples de uma Rede Neural Feed Forward."
    },
    {
        id: 69,
        disciplina: "Redes Neurais - Tipos de Aprendizado",
        enunciado: "Nesse tipo de aprendizado, os modelos resultantes envolvem atividades como: o agrupamento de exemplos semelhantes (clustering), redução de dimensionalidade e estimativa de densidade. Qual o tipo de aprendizado estamos nos referindo?",
        alternativas: {
            A: "Aprendizado inicial",
            B: "Aprendizado supervisionado",
            C: "Aprendizado não supervisionado",
            D: "Backpropagation (retropropagation)",
            E: "Aprendizado oculto"
        },
        resposta_correta: "C",
        justificativa: "O tipo de aprendizado ao qual a questão se refere é o aprendizado não supervisionado. Este tipo de aprendizado é caracterizado por modelos que realizam atividades como clustering, redução de dimensionalidade e estimativa de densidade, onde o modelo aprende padrões nos dados sem rótulos."
    },
    {
        id: 70,
        disciplina: "Redes Neurais",
        enunciado: "Normalmente, a rede neural artificial é configurada em camadas. As camadas são compostas de vários 'nós' interconectados, cada um com uma 'função de ativação'. Como é chamada a camada onde ocorre o resultado final do processamento de uma rede neural artificial?",
        alternativas: {
            A: "Camada oculta (Hidden layer)",
            B: "Camada de entrada (Input layer)",
            C: "Camada de pesos (Weight layer)",
            D: "Camada de retropropagação",
            E: "Camada de saída (Output layer)"
        },
        resposta_correta: "E",
        justificativa: "A camada onde ocorre o resultado final do processamento de uma rede neural artificial é denominada 'Camada de saída' ou 'Output layer'. Esta camada é essencial em qualquer tipo de rede neural, pois é nela que os resultados do processamento da rede são apresentados."
    },

    // ==================== DEEP LEARNING (questões 71-78) ====================
    {
        id: 71,
        disciplina: "Deep Learning",
        enunciado: "Essa técnica emprega redes neurais artificiais de várias camadas para obter alta precisão em tarefas como detecção de objetos, reconhecimento de fala, tradução de idiomas e outros avanços tecnológicos noticiados com frequência pela mídia. Qual das opções abaixo atende a essa definição?",
        alternativas: {
            A: "Inteligência de negócios (Business intelligence).",
            B: "Aprendizagem de máquina (Machine learning).",
            C: "Deep Learning.",
            D: "Inteligência artificial.",
            E: "Perceptron de múltiplas camadas."
        },
        resposta_correta: "C",
        justificativa: "A técnica descrita no enunciado é o Deep Learning. Esta é uma subcategoria da aprendizagem de máquina que cria redes neurais com várias camadas, permitindo um alto nível de precisão em tarefas complexas como detecção de objetos, reconhecimento de fala e tradução de idiomas."
    },
    {
        id: 72,
        disciplina: "Deep Learning - Frameworks",
        enunciado: "Essa biblioteca de Deep Learning é baseada em Python e oferece suporte à criação de Redes Neurais Convolucionais (CNN) e Redes Neurais Recorrentes (RNN) para execução no TensorFlow. Para sua utilização é necessária a criação de códigos similares aos aplicados na linguagem Python e, por ser de código aberto para qualquer pessoa, pode ser utilizado gratuitamente. Foi desenvolvido com base no TensorFlow, sendo considerado de fácil utilização. Dentre os frameworks ou biblioteca abaixo, qual deles possui essa característica?",
        alternativas: {
            A: "Pytorch.",
            B: "Caffe.",
            C: "Theano.",
            D: "Microsoft CNTK (Cognitive Toolkit).",
            E: "Keras."
        },
        resposta_correta: "E",
        justificativa: "O Keras é a biblioteca que se encaixa na descrição do enunciado. Ele é baseado em Python, oferece suporte à criação de CNNs e RNNs para execução no TensorFlow, é de código aberto e foi desenvolvido com base no TensorFlow, o que o torna uma ferramenta de fácil utilização."
    },
    {
        id: 73,
        disciplina: "Deep Learning",
        enunciado: "Grande parte da extração de recursos do processo é automatizada (features), o que reduz a necessidade de intervenção humana manual e ele também tira proveito de conjuntos de dados massivos, uma vez que 80 a 90% dos dados em uma organização são considerados não estruturados (imagens, vídeos e textos). Essas características e capacidades se tornam uma grande vantagem. As características descritas se referem a?",
        alternativas: {
            A: "Perceptron de múltiplas camadas.",
            B: "Aprendizagem de máquina (Machine learning).",
            C: "Ciência de dados.",
            D: "Inteligência artificial.",
            E: "Deep Learning."
        },
        resposta_correta: "E",
        justificativa: "O Deep Learning é um subcampo da aprendizagem de máquina que se concentra na utilização de redes neurais com três ou mais camadas. A extração automatizada de recursos e a capacidade de lidar com grandes conjuntos de dados não estruturados são características típicas do Deep Learning."
    },
    {
        id: 74,
        disciplina: "Deep Learning",
        enunciado: "As redes _____________ usam aprendizado não supervisionado para treinar dois modelos em paralelo, colocando, desta forma, uma contra a outra, dando origem ao termo 'adversária'. Essas redes são utilizadas para sintetizar novas imagens com base em outras imagens de treinamento. Qual opção preenche corretamente a lacuna?",
        alternativas: {
            A: "Redes Multilayer Perceptron.",
            B: "Recurrent Neural Networks (RNN).",
            C: "Generative Adversarial Network (GANs).",
            D: "Autoencoders.",
            E: "Deep learning."
        },
        resposta_correta: "C",
        justificativa: "Essas características descrevem as redes GANs (Generative Adversarial Networks), que usam dois modelos em competição (gerador e discriminador) para criar novos dados sintéticos."
    },
    {
        id: 75,
        disciplina: "Deep Learning - Frameworks",
        enunciado: "Esse framework permite que o usuário codifique em uma variedade de linguagens de programação (Python, C++, R, Julia e outros). Isso significa que você pode treinar seus modelos de deep learning com uma linguagem de programação com a qual se sinta confortável. Dentre os frameworks abaixo, qual deles possui essa característica?",
        alternativas: {
            A: "TensorFlow.",
            B: "Keras.",
            C: "Microsoft CNTK (Cognitive Toolkit).",
            D: "Caffe.",
            E: "MxNet."
        },
        resposta_correta: "E",
        justificativa: "O MXNet é o framework que se destaca por permitir que o usuário codifique em uma variedade de linguagens de programação, como Python, C++, R, Julia, entre outros. Isso proporciona a flexibilidade de treinar modelos de deep learning na linguagem de programação com a qual o usuário se sinta mais confortável."
    },
    {
        id: 76,
        disciplina: "Deep Learning - RNN",
        enunciado: "Nessa rede de deep learning, a saída de um neurônio é aplicada como entrada no próprio neurônio e/ou em outros neurônios de camadas anteriores, ou seja, há ocorrência de realimentação. Essas redes são identificadas por seus loops de feedback. Qual rede de deep learning tem essas características?",
        alternativas: {
            A: "Convolutional Neural Network (CNN).",
            B: "Autoencoders.",
            C: "Adversarial Generative Networks (GANs).",
            D: "Multilayer Perceptron.",
            E: "Recurrent Neural Network (RNN)."
        },
        resposta_correta: "E",
        justificativa: "A característica descrita no enunciado é típica das Redes Neurais Recorrentes (RNN). Essas redes possuem a capacidade de usar sua memória interna para processar sequências de entradas através de loops de feedback, onde a informação circula em um ciclo."
    },
    {
        id: 77,
        disciplina: "Deep Learning",
        enunciado: "Um grande banco de investimento alemão está construindo um sistema de previsão de preços de ações usando seu histórico de dados de séries temporais. Qual algoritmo de deep learning eles estão utilizando?",
        alternativas: {
            A: "Convolutional Neural Network (CNN).",
            B: "Recurrent Neural Network (RNN).",
            C: "Adversarial Generative Networks (GANs).",
            D: "Autoencoders.",
            E: "Redes Perceptron."
        },
        resposta_correta: "B",
        justificativa: "O algoritmo de deep learning mais adequado para lidar com dados de séries temporais, como é o caso da previsão de preços de ações, é a Recurrent Neural Network (RNN). Este tipo de rede neural é especialmente eficaz em problemas que envolvem sequências temporais, pois tem a capacidade de 'lembrar' informações anteriores."
    },
    {
        id: 78,
        disciplina: "Deep Learning - GANs",
        enunciado: "Um famoso DJ brasileiro criou uma playlist de músicas experimentais usando um algoritmo de deep learning a partir de músicas de seu repertório, ou seja, sintetizou novas músicas com base em outras músicas. Qual algoritmo de deep learning ele utilizou?",
        alternativas: {
            A: "Recurrent Neural Network (RNN).",
            B: "Convolutional Neural Network (CNN).",
            C: "Multilayer Perceptron.",
            D: "Adversarial Generative Networks (GANs).",
            E: "Autoencoders."
        },
        resposta_correta: "D",
        justificativa: "O DJ utilizou as redes Adversarial Generative Networks (GANs). Este tipo de algoritmo é reconhecido por seus excelentes resultados na síntese de som com base em outros sons de treinamento. As GANs são amplamente utilizadas para gerar novos conteúdos (imagens, músicas, vídeos) a partir de dados de treinamento."
    },

    // ==================== VISÃO COMPUTACIONAL (questões 79-85) ====================
    {
        id: 79,
        disciplina: "Visão Computacional",
        enunciado: "Atualmente, estamos vivendo uma pandemia de crimes. Entre esses diversos tipos de crime estão as fraudes de documentos e obras de artes. Nesse sentido, selecione a opção correta que apresente uma aplicação de visão computacional que evita fraudes.",
        alternativas: {
            A: "Eliminar completamente as chances de aceitar um documento falso",
            B: "Recuperar documentos antigos",
            C: "Aumentar a qualidade da imagem de uma obra de arte",
            D: "Detectar se uma obra de arte é legítima",
            E: "Reduzir os danos causados pelo tempo em uma obra de arte"
        },
        resposta_correta: "D",
        justificativa: "A visão computacional é uma tecnologia que permite aos computadores interpretar e entender o mundo visual. Uma das suas aplicações é a detecção de fraudes em obras de arte e documentos, através do treinamento de modelos computacionais para identificar características específicas que determinam a autenticidade."
    },
    {
        id: 80,
        disciplina: "Visão Computacional",
        enunciado: "Logo nos primórdios dos estudos sobre visão computacional, os pesquisadores fizeram uma descoberta fundamental para a evolução da área. Nesse sentido, selecione a opção correta sobre essa descoberta.",
        alternativas: {
            A: "O único processo de visão que pode ser reproduzido é o do ser humano",
            B: "O processo de visão é hierárquico",
            C: "A visão é um sistema simples",
            D: "É impossível reproduzir as etapas que envolvem a visão computacional",
            E: "A visão computacional é baseada exclusivamente em operações matemáticas"
        },
        resposta_correta: "B",
        justificativa: "A descoberta fundamental nos primórdios dos estudos sobre visão computacional é que o processo de visão é hierárquico. Isso significa que a visão computacional é organizada em níveis, onde cada nível realiza uma tarefa específica e passa as informações para o próximo nível."
    },
    {
        id: 81,
        disciplina: "Visão Computacional",
        enunciado: "A visão computacional apresenta várias aplicações práticas. Selecione a opção correta que justifique o uso de visão computacional na medicina diagnóstica.",
        alternativas: {
            A: "Substituir os profissionais de saúde",
            B: "Dar suporte aos profissionais na detecção de situações anômalas",
            C: "Aumentar o lucro das empresas de plano de saúde",
            D: "Oferecer garantia total do diagnóstico dos pacientes",
            E: "Propor tratamentos para os pacientes"
        },
        resposta_correta: "B",
        justificativa: "O diagnóstico de um paciente é uma tarefa complexa que requer anos de estudo e experiência. Nesse contexto, a visão computacional tem o papel de auxiliar o profissional de saúde na detecção de anomalias, não substituindo o profissional, mas sim fornecendo uma ferramenta adicional para melhorar a precisão do diagnóstico."
    },
    {
        id: 82,
        disciplina: "Visão Computacional",
        enunciado: "Uma das aplicações da visão computacional é na manutenção preditiva. Neste sentido, selecione a opção correta que justifique esse tipo de aplicação.",
        alternativas: {
            A: "Detectar a possibilidade de anomalias antes que elas se tornem em problemas mais sérios",
            B: "Utilizar de tecnologia avançada para monitorar os equipamentos",
            C: "Substituir profissionais de manutenção",
            D: "Atender normas técnicas estabelecidas pelos órgãos de segurança do trabalho",
            E: "Reduzir os custos com equipamentos de manutenção"
        },
        resposta_correta: "A",
        justificativa: "A manutenção preditiva é uma estratégia que visa identificar possíveis falhas em equipamentos antes que elas se tornem problemas mais graves. Nesse contexto, a visão computacional pode ser uma ferramenta valiosa, pois permite o monitoramento contínuo de componentes de equipamentos."
    },
    {
        id: 83,
        disciplina: "Visão Computacional",
        enunciado: "É bastante comum que haja diversos objetos em uma imagem. Alguns desses elementos podem revelar informações importantes sobre algumas coisas, como a identificação de uma mancha que possa revelar uma predisposição a uma doença. Nesse sentido, selecione a opção correta que justifique a necessidade de distinguir objetos em uma imagem com o uso de algoritmos de visão computacional.",
        alternativas: {
            A: "Exibir todos os detalhes de uma imagem",
            B: "Atribuir mais valor para uma imagem",
            C: "Realizar testes aleatórios até obter a imagem de ótima qualidade",
            D: "Usar a quantidade mínima de elementos da imagem que, ainda assim, ajudem a entendê-la",
            E: "Destacar elementos importantes que dificilmente seriam percebidos pelo olho humano"
        },
        resposta_correta: "E",
        justificativa: "A visão computacional, por meio de algoritmos, tem a capacidade de destacar e identificar elementos em uma imagem que seriam difíceis de serem percebidos pelo olho humano. Isso é extremamente útil em diversas áreas, como na medicina, onde pode auxiliar na identificação de manchas que possam indicar uma predisposição a uma doença."
    },
    {
        id: 84,
        disciplina: "Visão Computacional",
        enunciado: "O termo aprendizado de máquina é bastante utilizado no contexto de visão computacional. Mas, afinal de contas, como o aprendizado é formado?",
        alternativas: {
            A: "A partir da definição de regras pré-estabelecidas por especialistas",
            B: "Através de um processo de treinamento e de testes",
            C: "A partir das regras já utilizadas por outros programas",
            D: "Na verdade, é apenas uma expressão genérica",
            E: "É bem conhecido que as máquinas são incapazes de aprender."
        },
        resposta_correta: "B",
        justificativa: "O aprendizado de máquina é formado através de um processo de treinamento e de testes. Nesse processo, os algoritmos de aprendizado de máquina utilizam dados como referência para determinar o que seria a resposta correta. A partir desses dados, os algoritmos extraem características e as generalizam para aplicar em situações semelhantes."
    },
    {
        id: 85,
        disciplina: "Visão Computacional",
        enunciado: "Existem diversas técnicas que são usadas para o reconhecimento de imagens. Uma das que mais se destaca é a de segmentação de imagens. Nesse sentido, selecione a opção correta a respeito do objetivo da técnica de segmentação de imagens.",
        alternativas: {
            A: "Destacar cores",
            B: "Agrupar os elementos da imagem por semelhanças",
            C: "Descrever formas dos objetos",
            D: "Dar nomenclatura para os itens da imagem",
            E: "Suavizar os tons de cores da imagem"
        },
        resposta_correta: "B",
        justificativa: "A técnica de segmentação de imagens tem como principal objetivo agrupar os elementos da imagem por semelhanças. Isso significa que, através dessa técnica, é possível identificar e agrupar partes da imagem que possuem características semelhantes, facilitando assim o reconhecimento e a análise da imagem como um todo."
    },

    // ==================== PLN (questões 86-94) ====================
    {
        id: 86,
        disciplina: "PLN",
        enunciado: "Quando fazemos processamento da linguagem natural, devemos descartar palavras que se repetem muito e que são tidas como auxiliares, adicionando pouca informação ao modelo. A esse conjunto de palavras damos o nome de:",
        alternativas: {
            A: "Clearwords",
            B: "Stopwords",
            C: "Tokens",
            D: "Sentenças",
            E: "Verbos"
        },
        resposta_correta: "B",
        justificativa: "As palavras que são frequentemente descartadas durante o processamento da linguagem natural são chamadas de 'Stopwords'. Essas palavras são geralmente as mais comuns em uma língua (como 'é', 'o', 'a', 'em', etc.) e não contribuem significativamente para o significado de uma frase."
    },
    {
        id: 87,
        disciplina: "PLN - TF-IDF",
        enunciado: "Quando nos referimos à tarefa de juntar documentos semelhantes em subconjuntos de forma automática, baseado em similaridades em suas palavras, escrita ou tema, estamos nos referindo à clusterização ou agrupamento. Qual destes algoritmos poderia nos ajudar na determinação do cálculo da relevância de uma palavra em uma série ou corpus para um texto?",
        alternativas: {
            A: "TF-IDF",
            B: "KNN",
            C: "K-Means",
            D: "Gaussian Naive Bayes",
            E: "LSTM"
        },
        resposta_correta: "A",
        justificativa: "O TF-IDF é um cálculo estatístico que tem sido amplamente adotado em algoritmos de busca para determinar a relevância de um termo para um documento em um corpus. Ele faz isso ao analisar a frequência com que um termo aparece em um documento específico em comparação com sua frequência em todo o corpus."
    },
    {
        id: 88,
        disciplina: "PLN - Classificação",
        enunciado: "Quando nós temos um conjunto de textos aos quais queremos associar rótulos baseados em outros textos já rotulados em categorias específicas, temos um problema de aprendizado de máquina chamado de:",
        alternativas: {
            A: "Agrupamento",
            B: "Semi-Supervisionado",
            C: "Regressão",
            D: "Classificação",
            E: "Rotação"
        },
        resposta_correta: "D",
        justificativa: "Temos aqui um problema de classificação, uma vez que precisamos aprender uma associação entre as features do conjunto e a rotulação já existente para podermos categorizar novos documentos."
    },
    {
        id: 89,
        disciplina: "PLN",
        enunciado: "Dado que estamos falando de linguagem, estamos falando também de cultura, de expressões idiomáticas e regionalismos. Sendo assim, cada modelo de NLP terá cobertura de acerto para a linguagem dos conjuntos sobre os quais aprendeu. Nesse caso, o que devemos variar ou unir (por concatenação de conjunto de dados)?",
        alternativas: {
            A: "Sentenças",
            B: "Tokens",
            C: "Corpus",
            D: "Vocabulário",
            E: "Dicionário"
        },
        resposta_correta: "C",
        justificativa: "Em processamento de linguagem natural (NLP), o corpus é um conjunto de textos escritos ou falados que servem como base para o aprendizado do modelo. Quanto mais variado for esse conjunto, mais o modelo estará apto a compreender diferentes contextos, expressões idiomáticas e regionalismos."
    },
    {
        id: 90,
        disciplina: "PLN - Análise Sintática/Semântica/Pragmática",
        enunciado: "Dentro do processamento de linguagem natural temos uma subdivisão de áreas de especialização, ou tarefas que procuram entender: a estrutura do texto, sentido passado nas mensagens, e referências e co-referências. São assim chamadas então respectivamente de:",
        alternativas: {
            A: "Análise Sintática, Análise Semântica, e Análise Pragmática",
            B: "Análise Sintática, Análise Pragmática, e Análise Semântica",
            C: "Análise Sintática, Análise Clínica, e Análise Pragmática",
            D: "Análise Univariável, Análise Semântica, e Análise Pragmática",
            E: "Análise Sintática, Análise Semântica, e Análise de Predicados"
        },
        resposta_correta: "A",
        justificativa: "A alternativa correta é a 'Análise Sintática, Análise Semântica, e Análise Pragmática'. A Análise Sintática identifica a classe gramatical de cada token. A Análise Semântica busca entender o sentido do uso das palavras. A Análise Pragmática se ocupa de relacionar e construir sentenças e referências."
    },
    {
        id: 91,
        disciplina: "PLN - Bibliotecas",
        enunciado: "Quando nos referimos à classificação de textos, pensamos no NLTK para fazer a parte de NLP, mas, que biblioteca podemos usar para facilitar nossa tarefa de classificação de textos?",
        alternativas: {
            A: "NUMPY",
            B: "POLARS",
            C: "PANDAS",
            D: "SKLEARN",
            E: "DATETIME"
        },
        resposta_correta: "D",
        justificativa: "A biblioteca SKLEARN é a mais adequada para facilitar a tarefa de classificação de textos. Essa biblioteca é amplamente utilizada em aprendizado de máquina e fornece ferramentas simples e eficientes para análise de dados, permitindo a implementação de diversos algoritmos de classificação."
    },
    {
        id: 92,
        disciplina: "PLN",
        enunciado: "Um conjunto de treinamento de PLN é relativamente incomum quando olhamos para a gama de projetos de IA, uma vez que estamos falando de textos, ou comentários, ou qualquer dado em forma textual. O nome do conjunto de documentos passados ao processo de mineração de texto se chama:",
        alternativas: {
            A: "Radical",
            B: "Lema",
            C: "Símbolo",
            D: "Corpus",
            E: "Token"
        },
        resposta_correta: "D",
        justificativa: "O conjunto de documentos passados ao processo de mineração de texto é chamado de Corpus. É o termo técnico para designar uma coleção de textos utilizada para treinamento e análise em NLP."
    },
    {
        id: 93,
        disciplina: "PLN - Vetorização",
        enunciado: "Quando estamos lidando com PLN é preciso transformar o dado textual em algo compreensível às máquinas para que elas possam operar sobre aquele conjunto. Qual destas é uma opção de transformação para este cenário?",
        alternativas: {
            A: "Regressão",
            B: "Vetorização",
            C: "Classificação",
            D: "Pivot Table",
            E: "Redução de Dimensionalidade"
        },
        resposta_correta: "B",
        justificativa: "Na área de Processamento de Linguagem Natural (PLN), a vetorização é uma técnica comum para transformar dados textuais em um formato que as máquinas possam entender e operar. Isso é feito transformando cada token em um vetor ou tensor através de técnicas como TF-IDF, Word2Vec ou Doc2vec."
    },
    {
        id: 94,
        disciplina: "PLN - POS-Tags",
        enunciado: "Ao inspecionarmos as classes gramaticais de um conjunto de palavras, estamos passando para nosso algoritmo a noção de estrutura, de regras e composição linguística. Tal técnica pertence à área de análise sintática, permitindo a extração de:",
        alternativas: {
            A: "POS-Tags",
            B: "Tokens",
            C: "Segmentos",
            D: "Lemas",
            E: "SOP-Tags"
        },
        resposta_correta: "A",
        justificativa: "A técnica mencionada no enunciado refere-se à extração de POS-Tags (Part of Speech Tags). É um processo de rotulação supervisionada ou semi-supervisionada de tokens em um texto, onde cada palavra é associada a um rótulo de classe gramatical."
    },

    // ==================== IA GENERATIVA (questões 95-98) ====================
    {
        id: 95,
        disciplina: "IA Generativa",
        enunciado: "A IA Generativa pode ser utilizada para criar um formulário de cadastro do zero, recebendo instruções básicas sobre os campos desejados. Ao solicitar que uma IA gere um formulário de cadastro, qual tipo de informação é mais importante fornecer para que o resultado seja o mais preciso possível?",
        alternativas: {
            A: "A cor do fundo e o estilo da fonte do formulário",
            B: "O número de linhas de código que o formulário deve ter",
            C: "Os campos específicos que o formulário deve conter (ex: nome, email, CPF) e suas validações",
            D: "O nome do banco de dados onde os dados serão armazenados",
            E: "O framework de backend que será utilizado para processar o formulário"
        },
        resposta_correta: "C",
        justificativa: "Para que a IA gere um formulário preciso, é fundamental fornecer informações claras sobre os campos que o formulário deve conter e, idealmente, suas validações, pois isso define a funcionalidade e o propósito do formulário."
    },
    {
        id: 96,
        disciplina: "IA Generativa - Papel do Curador",
        enunciado: "O desenvolvedor moderno precisa atuar como um 'curador' do código gerado pela IA. Considerando o papel de 'curador' do desenvolvedor, qual a principal responsabilidade ao utilizar um código gerado por IA?",
        alternativas: {
            A: "Apenas copiar e colar o código da IA no projeto.",
            B: "Entregar o código gerado pela IA sem qualquer modificação",
            C: "Garantir que o código se alinhe às melhores práticas de engenharia de software e padrões do projeto.",
            D: "Deixar que a própria IA gerencie e corrija seus erros",
            E: "Registrar cada linha de código gerada pela IA em um documento manual."
        },
        resposta_correta: "C",
        justificativa: "O papel de 'curador' implica que o desenvolvedor é o responsável por garantir que o código gerado pela IA, mesmo que funcional, esteja alinhado com as melhores práticas de engenharia de software, os padrões de codificação do projeto e os requisitos específicos de qualidade."
    },
    {
        id: 97,
        disciplina: "IA Generativa",
        enunciado: "A IA Generativa está transformando o processo de desenvolvimento de software, mudando o foco das tarefas que consomem o tempo dos programadores. Qual das seguintes opções descreve melhor a principal mudança no foco do desenvolvedor com a ascensão da IA Generativa?",
        alternativas: {
            A: "Deixar de escrever qualquer linha de código",
            B: "Concentrar-se exclusivamente em tarefas de deploy e manutenção",
            C: "Mover o foco da escrita linha a linha para a orquestração, refinamento e validação do código.",
            D: "Dedicar-se apenas à gestão de projetos e equipes",
            E: "Ignorar a IA e continuar com os métodos tradicionais de programação"
        },
        resposta_correta: "C",
        justificativa: "Com a IA Generativa, o desenvolvedor evolui de um 'digitador' de código para um papel mais estratégico, onde o foco se move para guiar a IA, revisar, otimizar e validar o código gerado, assumindo uma posição de orquestrador do processo de desenvolvimento."
    },
    {
        id: 98,
        disciplina: "IA Generativa - Engenharia de Prompts",
        enunciado: "A 'engenharia de prompts' é uma nova habilidade crucial para desenvolvedores que utilizam IA Generativa. Qual é o objetivo principal da engenharia de prompts na interação com IAs Generativas para codificação?",
        alternativas: {
            A: "Criar prompts complexos para testar os limites da IA",
            B: "Formular instruções claras e precisas para obter o código mais otimizado da IA",
            C: "Desenvolver novas linguagens de programação para IAs",
            D: "Limitar a criatividade da IA para garantir a padronização",
            E: "Automatizar a correção de erros gramaticais em prompts"
        },
        resposta_correta: "B",
        justificativa: "O objetivo principal da engenharia de prompts é aprimorar a comunicação com a IA, formulando instruções de forma clara, precisa e contextualizada para que a IA possa gerar o código mais relevante, funcional e otimizado possível."
    },

    // ==================== MATEMÁTICA (questões 99-111) ====================
    {
        id: 99,
        disciplina: "Análise Combinatória",
        enunciado: "Uma cafeteria oferece 10 tipos diferentes de doces. Um cliente deseja escolher 3 doces distintos para montar uma caixa degustação. Não é permitido repetir o mesmo doce, e a ordem de escolha não altera a composição da caixa. Quantas caixas diferentes podem ser formadas?",
        alternativas: {
            A: "1000",
            B: "120",
            C: "720",
            D: "240",
            E: "60"
        },
        resposta_correta: "B",
        justificativa: "C(10,3) = 10! / (3! × 7!) = (10 × 9 × 8) / (3 × 2 × 1) = 720 / 6 = 120 combinações possíveis."
    },
    {
        id: 100,
        disciplina: "Conjuntos",
        enunciado: "O conjunto solução do sistema { x - 1 > 2x, |x| < 2 } pode ser representado pelo intervalo:",
        alternativas: {
            A: "] -2; 1 [",
            B: "] -1; 1 [",
            C: "] 1; 2 [",
            D: "] -1; -1 [",
            E: "] -2; -1 ["
        },
        resposta_correta: "E",
        justificativa: "Resolvendo: x - 1 > 2x → -1 > x → x < -1. |x| < 2 → -2 < x < 2. A interseção é -2 < x < -1, ou seja, ]-2, -1[."
    },
    {
        id: 101,
        disciplina: "Probabilidade",
        enunciado: "Numa caixa há 26 balas, em que cinco são de cereja, seis de chocolate, sete de abacaxi e oito de leite. Qual o menor número de balas que devo retirar da caixa, sem olhar, para garantir que eu tenha retirado pelo menos uma bala de cada tipo?",
        alternativas: {
            A: "4",
            B: "12",
            C: "19",
            D: "22",
            E: "26"
        },
        resposta_correta: "D",
        justificativa: "Para garantir que você tenha retirado pelo menos uma bala de cada tipo, é necessário considerar o pior cenário: retirar todas as 8 de leite, todas as 7 de abacaxi e todas as 6 de chocolate = 21 balas. A próxima bala será necessariamente de cereja. Portanto, 21 + 1 = 22 balas."
    },
    {
        id: 102,
        disciplina: "Análise Combinatória",
        enunciado: "No cartão da Mega Sena, uma aposta corresponde à escolha de 6 números diferentes, dos 60 disponíveis. Quantas seriam as apostas possíveis se, ao invés de 60 números, fossem escolhidos apenas números de 1 a 20?",
        alternativas: {
            A: "20",
            B: "C6,20",
            C: "C20,6",
            D: "A6,20",
            E: "P20"
        },
        resposta_correta: "C",
        justificativa: "A questão pede o número de combinações de 20 elementos tomados 6 a 6, pois a ordem dos números não importa. A representação correta é C(20,6) ou C20,6."
    },
    {
        id: 103,
        disciplina: "Conjuntos",
        enunciado: "Quantos são os subconjuntos do conjunto interseção dos conjuntos A = {1, 3, -1, 4} e B = {3, -1, 5}?",
        alternativas: {
            A: "0",
            B: "1",
            C: "2",
            D: "3",
            E: "4"
        },
        resposta_correta: "E",
        justificativa: "A interseção dos conjuntos A e B resulta no conjunto {3, -1}. Este conjunto possui 2 elementos, portanto o número de subconjuntos é 2² = 4 (subconjuntos: {}, {3}, {-1}, {3, -1})."
    },
    {
        id: 104,
        disciplina: "Análise Combinatória",
        enunciado: "Para se cadastrar em um site, uma pessoa precisa escolher uma senha composta por quatro caracteres, sendo dois algarismos e duas letras (maiúsculas ou minúsculas). As letras e os algarismos podem estar em qualquer posição. O número total de senhas possíveis é dado por:",
        alternativas: {
            A: "10² × 26³",
            B: "10² × 52²",
            C: "10² × 52² × 4!/2!",
            D: "10² × 26²",
            E: "10 × 52²"
        },
        resposta_correta: "B",
        justificativa: "Para os dois algarismos, temos 10 opções para cada (0 a 9), totalizando 10². Para as duas letras, temos 52 opções para cada (26 maiúsculas + 26 minúsculas), totalizando 52². Multiplicando, temos 10² × 52²."
    },
    {
        id: 105,
        disciplina: "Geometria Analítica",
        enunciado: "O conceito geométrico de módulo permite interpretar a equação |x - 1| + |x - 3| = 4 da seguinte forma: para quais valores de x a soma das distâncias de x a 1 e de x a 3 vale 4? Quantos elementos possui o conjunto-solução da equação dada?",
        alternativas: {
            A: "0",
            B: "1",
            C: "2",
            D: "3",
            E: "4"
        },
        resposta_correta: "C",
        justificativa: "A equação |x-1| + |x-3| = 4 tem duas soluções: x = 0 e x = 4. Quando x está entre 1 e 3, a soma das distâncias é 2 (distância entre 1 e 3). Para somar 4, x deve estar fora desse intervalo, nas extremidades."
    },
    {
        id: 106,
        disciplina: "Conjuntos",
        enunciado: "Dados os conjuntos A = {1, 3/2, 2, 3, 4} e B = {x ∈ N | x³ > 9}, podemos concluir que o número de elementos de A ∩ B é:",
        alternativas: {
            A: "1",
            B: "2",
            C: "3",
            D: "4",
            E: "5"
        },
        resposta_correta: "B",
        justificativa: "O conjunto B é formado por números naturais cujo cubo é maior que 9. Os números naturais que satisfazem essa condição são 3, 4, 5, 6, etc. Ao comparar com o conjunto A, apenas os números 3 e 4 estão presentes em ambos, portanto A ∩ B tem 2 elementos."
    },
    {
        id: 107,
        disciplina: "Análise Combinatória",
        enunciado: "Quantos são os anagramas da palavra SUCESSO?",
        alternativas: {
            A: "5040",
            B: "2520",
            C: "1680",
            D: "840",
            E: "210"
        },
        resposta_correta: "D",
        justificativa: "A palavra SUCESSO tem 7 letras, com repetições: S aparece 3 vezes, U aparece 2 vezes. O número de anagramas é 7! / (3! × 2!) = 5040 / (6 × 2) = 5040 / 12 = 840."
    },
    {
        id: 108,
        disciplina: "Análise Combinatória",
        enunciado: "Quantas soluções possui a equação x + y + z = 7, se x, y e z são números inteiros não negativos?",
        alternativas: {
            A: "72",
            B: "45",
            C: "36",
            D: "24",
            E: "18"
        },
        resposta_correta: "C",
        justificativa: "O número de soluções inteiras não negativas para x + y + z = n é dado por C(n + k - 1, k - 1), onde k é o número de variáveis. Aqui, n = 7, k = 3: C(7 + 3 - 1, 3 - 1) = C(9, 2) = 36."
    },
    {
        id: 109,
        disciplina: "Funções",
        enunciado: "Considere a função f: R → R definida por f(x) = { -x² + 1, se -1 < x < 1; x - 1, se x ≥ 1 }. O conjunto imagem de f é:",
        alternativas: {
            A: "] -∞, -1]",
            B: "] -∞, 1]",
            C: "[0, +∞[",
            D: "]1, +∞[",
            E: "]-1, 1]"
        },
        resposta_correta: "C",
        justificativa: "No intervalo -1 < x < 1, temos -x² + 1, que varia de 0 a 1. Para x ≥ 1, temos x - 1, que varia de 0 a +∞. Portanto, a imagem é [0, +∞[."
    },
    {
        id: 110,
        disciplina: "Funções",
        enunciado: "Uma empresa utiliza um modelo matemático para estimar o lucro mensal. O modelo só é válido quando o número de unidades vendidas é maior ou igual a 100 e menor que 500. Qual alternativa representa corretamente o domínio do modelo?",
        alternativas: {
            A: "Valores estritamente maiores que 100 e estritamente menores que 500.",
            B: "Qualquer número real.",
            C: "Valores entre 100 e 500, incluindo 100, mas não incluindo 500.",
            D: "Apenas números inteiros entre 100 e 500.",
            E: "Apenas valores estritamente inferiores a 100."
        },
        resposta_correta: "C",
        justificativa: "A condição 'maior ou igual a 100' inclui o 100. 'Menor que 500' exclui o 500. Portanto, o domínio é [100, 500[."
    },
    {
        id: 111,
        disciplina: "Funções",
        enunciado: "Uma parte crucial na compreensão das funções é a identificação do domínio. Considere a função f(x) = 1 / (x - 2). Qual das alternativas representa corretamente o domínio dessa função?",
        alternativas: {
            A: "R",
            B: "R \\ {2}",
            C: "[2, ∞)",
            D: "(-∞, 2)",
            E: "[-2, 2]"
        },
        resposta_correta: "B",
        justificativa: "O domínio da função f(x) consiste em todos os números reais, exceto aqueles que tornam o denominador igual a zero. Nesse caso, x - 2 não pode ser zero, então x ≠ 2. Portanto, o domínio é R \\ {2}."
    }
];

// Exportar para uso no script principal
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BANCO_QUESTOES;
}