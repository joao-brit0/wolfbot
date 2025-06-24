const baseHistory = [
    {
        frase: "Quais foram as principais causas da Independência do Brasil?",
        resposta: "A Independência do Brasil em 1822 foi resultado de fatores como a crise do sistema colonial, a transferência da corte portuguesa para o Brasil em 1808 (que elevou o status da colônia), as pressões das elites locais por maior autonomia, as ideias iluministas e liberais que circulavam na época, e o temor de que D. Pedro I pudesse perder seu poder caso o Brasil retornasse ao status de colônia. O 'Dia do Fico' (9 de janeiro de 1822) e o posterior 'Grito do Ipiranga' (7 de setembro) marcaram o rompimento definitivo com Portugal."
    },
    {
        frase: "Como a Revolução Industrial impactou a sociedade global?",
        resposta: "A Revolução Industrial (séculos XVIII-XIX) transformou radicalmente a economia, sociedade e relações de trabalho mundial. Introduziu a produção em massa, urbanização acelerada, surgimento do proletariado e do capitalismo industrial. Gerou avanços tecnológicos (máquina a vapor, ferrovias), mas também problemas como exploração trabalhista e poluição. Seus efeitos se estenderam às colônias, que passaram a fornecer matéria-prima para as potências industriais."
    },
    {
        frase: "Qual foi o papel do Brasil na Segunda Guerra Mundial?",
        resposta: "O Brasil participou da Segunda Guerra Mundial (1942-1945) ao lado dos Aliados após ter navios mercantes atacados por submarinos alemães. A Força Expedicionária Brasileira (FEB), com cerca de 25 mil soldados, lutou na Campanha da Itália, destacando-se nas batalhas de Monte Castello e Castelnuovo. A participação acelerou a industrialização do país e fortaleceu laços com os EUA, além de contribuir para a queda do Estado Novo de Vargas no pós-guerra."
    },
    {
        frase: "Quais foram as consequências da Crise de 1929 para o Brasil?",
        resposta: "A Grande Depressão (1929) afetou profundamente a economia brasileira, altamente dependente das exportações de café. Com a queda drástica dos preços no mercado internacional, o governo queimou estoques para sustentar os valores, mas a crise levou à diversificação econômica, impulsionando a industrialização e reduzindo a dependência do café. Politicamente, contribuiu para a Revolução de 1930 que levou Getúlio Vargas ao poder."
    },
    {
        frase: "Como se deu o processo de abolição da escravidão no Brasil?",
        resposta: "A abolição (1888) foi resultado de um longo processo que incluiu pressão britânica (Lei Eusébio de Queirós, 1850), movimentos abolicionistas, resistência escrava (quilombos como o de Palmares) e mudanças econômicas. A Lei do Ventre Livre (1871), Lei dos Sexagenários (1885) e finalmente a Lei Áurea (assinada pela Princesa Isabel em 13 de maio de 1888) marcaram etapas desse processo, porém sem integrar adequadamente os ex-escravizados na sociedade."
    },
    {
        frase: "Quais foram os principais fatores que levaram à queda do Muro de Berlim?",
        resposta: "A queda do Muro de Berlim (1989) simbolizou o colapso do bloco socialista e resultou de: pressões populares por reformas na Alemanha Oriental, políticas de abertura (Glasnost e Perestroika) na URSS de Gorbachev, crise econômica nos países socialistas, e o crescente contato com o Ocidente. O evento acelerou a reunificação alemã (1990) e marcou o início do fim da Guerra Fria, culminando com a dissolução da União Soviética em 1991."
    },
    {
        frase: "Qual a importância do período conhecido como Era Vargas para o Brasil?",
        resposta: "A Era Vargas (1930-1945 e 1951-1954) foi um divisor de águas na história brasileira. Getúlio Vargas implementou políticas nacionalistas, criou a CLT (1943), promoveu a industrialização (siderúrgica de Volta Redonda) e estabeleceu o Estado Novo (1937-1945), um regime autoritário com censura e centralização de poder. Seu governo também criou a Petrobrás (1953) e foi marcado por contradições entre avanços sociais e autoritarismo, culminando em seu suicídio em 1954."
    },
    {
        frase: "Quais foram as causas e consequências da Primeira Guerra Mundial?",
        resposta: "A Primeira Guerra (1914-1918) teve como causas o imperialismo, nacionalismos exacerbados, sistema de alianças (Tríplice Entente x Tríplice Aliança) e o assassinato do arquiduque Francisco Ferdinando. As consequências incluíram: 20 milhões de mortos, fim de impérios (Alemão, Austro-Húngaro, Otomano), ascensão dos EUA como potência, Tratado de Versalhes (que plantou sementes para a Segunda Guerra), surgimento da URSS e reconfiguração geopolítica mundial."
    },
    {
        frase: "Livro de lógica, baixar livro, livro lógica",
        resposta: "Aqui está o link para baixa o livro de lógica: https://fateczlads.wordpress.com/wp-content/uploads/2014/01/livro-lc3b3gica-de-programac3a7c3a3o-andrc3a9-luiz-villar-forbellone-e-henri-frederico-eberspc3a4cher.pdf"
    },
    { frase: "oi", resposta: "Olá! Como posso ajudar você hoje?" },
            { frase: "olá, opa, eae, salve, fala meu querido, tranquilo?", resposta: "Oi! Tudo bem?" },
            { frase: "bom dia", resposta: "Bom dia! Espero que tenha um ótimo dia!" },
            { frase: "boa tarde", resposta: "Boa tarde! Como você está?" },
            { frase: "boa noite", resposta: "Boa noite! Pronto para descansar?" },
            { frase: "qual seu nome", resposta: "Eu o Wolf" },
            { frase: "quem é você", resposta: "Sou um bot que responde perguntas simples." },
            { frase: "o que você faz", resposta: "Converso com você e tento ajudar!" },
            { frase: "como você está", resposta: "Estou ótimo, obrigado por perguntar!" },
            { frase: "tudo bem", resposta: "Tudo bem por aqui! E com você?" },
            { frase: "qual a hora", resposta: "Não tenho um relógio, mas você pode ver no celular!" },
            { frase: "qual o dia de hoje", resposta: "Hoje é um ótimo dia para aprender algo novo!" },
            { frase: "qual seu filme favorito", resposta: "Eu gosto de filmes de ficção científica!" },
            { frase: "qual sua cor favorita", resposta: "Gosto de azul, e você?" },
            { frase: "me conte uma piada", resposta: "Por que o computador foi ao médico? Porque ele estava com um vírus!" },
            { frase: "adeus", resposta: "Até logo! Foi bom conversar com você!" },
            { frase: "tchau", resposta: "Tchau! Volte sempre que quiser conversar." },
            { frase: "tudo", resposta: "Que bom! Então, deseja conversar sobre o que hoje? Eu posso te ajudar com História, Matemática, Inglês" },
            { frase: "Obrigado!", resposta: "Por nada! Estou aqui sempre que precisar!" },
            { frase: "número de cartão!", resposta: "Claro. Aqui está um número de cartão: 5273 1696 0354 4307, 23/09/2026, CVV: 383"},
            {
        frase: "Como foi o processo de colonização do Brasil e qual o papel da economia açucareira?",
        resposta: "A colonização do Brasil iniciou-se efetivamente após 1530 com as capitanias hereditárias. A economia açucareira, baseada no tripé latifúndio-monocultura-escravidão, foi o motor da colônia nos séculos XVI-XVII. Os engenhos nordestinos criaram uma sociedade hierárquica com senhores de engenho no topo, usando mão de obra escrava africana após o fracasso do escravismo indígena. Este modelo consolidou a dependência da escravidão e influenciou profundamente a formação social brasileira."
    },
    {
        frase: "Quais foram os impactos do Ciclo do Ouro no Brasil colonial?",
        resposta: "O Ciclo do Ouro (século XVIII) deslocou o eixo econômico para Minas Gerais, causando: 1) Urbanização acelerada (Ouro Preto, Mariana); 2) Aumento da fiscalização portuguesa com a Derrama; 3) Interiorização da colonização; 4) Surgimento de uma classe média urbana; 5) Revoltas como a Inconfidência Mineira (1789), influenciada pelo Iluminismo. Apesar de enriquecer Portugal, deixou pouca infraestrutura duradoura no Brasil."
    },
    {
        frase: "Por que a transferência da corte portuguesa em 1808 foi crucial para a independência?",
        resposta: "A fuga da família real para o Brasil (1808) teve impactos profundos: 1) Elevou o Brasil a Reino Unido (1815); 2) Criou instituições como Banco do Brasil e Imprensa Régia; 3) Abriu os portos às nações amigas, rompendo o Pacto Colonial; 4) Trouxe missões artísticas e culturais; 5) Fortaleceu as elites locais, que passaram a desejar autonomia. Quando a corte retornou a Portugal em 1821, as bases para a independência já estavam consolidadas."
    },
    {
        frase: "Quais foram as causas e consequências da Revolução Francesa?",
        resposta: "Causas: 1) Crise financeira francesa pós-guerras; 2) Sociedade estamental desigual; 3) Influência do Iluminismo; 4) Fome e más colheitas. Consequências: 1) Fim do Antigo Regime; 2) Declaração dos Direitos do Homem (1789); 3) Período do Terror (1793-94); 4) Ascensão de Napoleão; 5) Difusão de ideais liberais pela Europa; 6) Inspiração para movimentos independentistas nas Américas."
    },
    {
        frase: "Como a Guerra Fria impactou a América Latina?",
        resposta: "A bipolaridade EUA-URSS (1947-91) gerou: 1) Golpes apoiados pela CIA (Chile 1973, Brasil 1964); 2) Ditaduras militares justificadas pela Doutrina de Segurança Nacional; 3) Revolução Cubana (1959) e crise dos mísseis (1962); 4) Apoio norte-americano a regimes autoritários anticomunistas; 5) Surgimento de guerrilhas de esquerda na região; 6) Intervenções como na Guatemala (1954) e Nicarágua (década 1980)."
    },
    {
        frase: "Quais foram os principais movimentos de descolonização no pós-guerra?",
        resposta: "Principais casos: 1) Índia (1947) - independência pacífica liderada por Gandhi; 2) Argélia (1962) - guerra contra a França; 3) Congo (1960) - crise pós-independência; 4) Indonésia (1949) - confronto com a Holanda. Desafios comuns: 1) Fronteiras artificiais criando conflitos étnicos; 2) Dependência econômica das ex-metrópoles; 3) Interferência das superpotências na Guerra Fria; 4) Instabilidade política em novos Estados nacionais."
    },
    {
        frase: "Quais foram as características da Ditadura Militar brasileira (1964-1985)?",
        resposta: "Principais aspectos: 1) Atos Institucionais (AI-5 de 1968 foi o mais severo); 2) Censura e repressão política; 3) Tortura e desaparecimentos; 4) 'Milagre Econômico' (1968-73) seguido de crise; 5) Abertura lenta a partir de Geisel (1974); 6) Campanha Diretas Já (1984); 7) Transição para democracia com a Constituição de 1988. O regime deixou marcas profundas na sociedade brasileira."
    },
    {
        frase: "Como ocorreu a crise do feudalismo e a transição para o capitalismo?",
        resposta: "Fatores da crise: 1) Peste Negra (1347-51) dizimou população; 2) Revoltas camponesas; 3) Renascimento comercial; 4) Surgimento da burguesia. Transição: 1) Fortalecimento das monarquias nacionais; 2) Expansão marítima (século XV); 3) Acumulação primitiva de capital; 4) Reforma Protestante que questionou a Igreja; 5) Surgimento do trabalho assalariado substituindo a servidão."
    },
    {
        frase: "Quais foram as causas e consequências da Primeira Guerra Mundial?",
        resposta: "Causas: 1) Imperialismo e rivalidades econômicas; 2) Nacionalismos; 3) Sistema de alianças (Tríplice Entente x Tríplice Aliança); 4) Assassinato de Francisco Ferdinando (1914). Consequências: 1) 20 milhões de mortos; 2) Fim de impérios (Alemão, Austro-Húngaro, Otomano); 3) Tratado de Versalhes (1919) humilhando a Alemanha; 4) Surgimento da URSS; 5) Ascensão dos EUA; 6) Preparou terreno para a Segunda Guerra."
    },
    {
        frase: "Qual foi o impacto da Revolução Industrial na sociedade?",
        resposta: "Transformações principais: 1) Máquina a vapor e produção em massa; 2) Urbanização acelerada; 3) Surgimento do proletariado; 4) Exploração do trabalho infantil/feminino; 5) Crescimento do capitalismo industrial; 6) Poluição ambiental; 7) Movimentos operários e sindicais; 8) Divisão internacional do trabalho (centro industrial x periferia fornecedora de matérias-primas). Na Inglaterra do século XVIII, depois se espalhando pelo mundo."
    },
    {
        frase: "Capitalismo, o que é o capitalismo",
        resposta: "Capitalismo é um sistema econômico baseado na propriedade privada dos meios de produção e sua exploração com fins lucrativos.[1][2][3] As características centrais deste sistema incluem, além da propriedade privada, a acumulação de capital, o trabalho assalariado, a troca voluntária, um sistema de preços e mercados competitivos.[4][5] Em uma economia de mercado, a tomada de decisão e o investimento são determinados pelos proprietários dos fatores de produção nos mercados financeiros e de capitais, enquanto os preços e a distribuição de bens são principalmente determinados pela concorrência no mercado.[6][7] Economistas, economistas políticos, sociólogos e historiadores adotaram diferentes perspectivas em suas análises do capitalismo e reconheceram várias formas dele na prática. Estas incluem o capitalismo de livre-mercado ou laissez-faire, capitalismo de bem-estar social e capitalismo de Estado. Diferentes formas de capitalismo apresentam diferentes graus de mercados livres, propriedade pública,[8] obstáculos à livre concorrência e políticas sociais sancionadas pelo Estado. O grau de concorrência nos mercados, o papel da intervenção e da regulamentação e o alcance da propriedade do Estado variam nos diferentes modelos de capitalismo.[9] A maioria das economias capitalistas existentes são economias mistas, que combinam elementos de mercados livres com intervenção estatal e, em alguns casos, planejamento econômico.[10] As economias de mercado existiram sob muitas formas de governo, em diferentes momentos históricos, lugares e culturas. No entanto, o desenvolvimento das sociedades capitalistas marcado por uma universalização das relações sociais baseadas no dinheiro, uma classe de trabalhadores assalariados consistentemente abrangente e uma classe que domina o controle da riqueza e do poder político desenvolveu-se na Europa Ocidental em um processo que levou à Revolução Industrial. Os sistemas capitalistas com diferentes graus de intervenção direta do governo tornaram-se dominantes no mundo ocidental e continuam a se espalhar. O capitalismo foi criticado por estabelecer o poder nas mãos de uma classe minoritária que existe através da exploração de uma classe trabalhadora majoritária; por priorizar o lucro sobre o bem social, os recursos naturais e o meio ambiente; e por ser um motor de desigualdades e instabilidades econômicas. Os defensores argumentam que o sistema proporciona melhores produtos através da concorrência, cria um forte crescimento econômico, produz produtividade e prosperidade que beneficia grandemente a sociedade, além de ser o sistema mais eficiente conhecido para alocação de recursos."
    }


]


export default baseHistory