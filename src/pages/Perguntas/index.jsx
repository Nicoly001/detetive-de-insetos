import '../../App.css'
import '../../index.css'
import './styles.css'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'


function Perguntas() {
    const location = useLocation();
    const nome = location.state

    const perguntas = [
        {
            id: 1,
            descricao: 'A cigarrinha é responsável por succionar a seiva das plantas do milho e ser vetora de vírus e molicutes que causam os enfezamentos no milho.',
            questao: 'Qual é a forma correta do nome científico desse inseto-praga?',
            a: <i>D. Maidis</i>,
            b: <><i>Dalbulus maidis - Dalbulus maidis</i> (DeLong & Wolcott) (Hemiptera: Cicadellidae)</>,
            c: <i>Dalbulus maidis maidis</i>,
            d: <><i>Dalbulus sp. - Dalbulus maidis </i> (DeLong & Wolcott) (Hymenoptera: Cicadellidae)</>,
            correta: 'b',
            respondido: false,
            imagens: {
                primeira: require('../../assets/images/cigarrinha1.jpg'),
                segunda: require('../../assets/images/cigarrinha12.jpg'),
                primeiraLegenda: 'Cigarrinha no milho - Fonte: Revista Cultivar',
                segundaLegenda: 'Danos de cigarrinha em milho - Fonte: Epagri',
            }
        },
        {
            id: 2,
            descricao: <>A <i>Diabrotica speciosa</i> (Germar, 1824), conhecida como vaquinha, é um besouro pequeno e muito marcante, de coloração verde e amarela. Também é conhecida por brasileirinho, cascudinho ou patriota, e suas larvas são conhecidas como larva-alfinete. É uma praga polífaga e a fase jovem é subterrânea.</>,
            questao: 'Qual a ordem e família deste inseto-praga?',
            a: <>Ordem Coleoptera; Família Chrysomelidae</>,
            b: <>Ordem Coleoptera; Família Lepidoptera</>,
            c: <>Ordem Diptera; Família Chrysomelidae</>,
            d: <>Ordem Lepidoptera; Família Chrysomelidae</>,
            correta: 'a',
            respondido: false,
            imagens: {
                primeira: require('../../assets/images/diabrotica21.jpg'),
                segunda: require('../../assets/images/diabrotica22.jpg'),
                primeiraLegenda: <><i>Diabrotica speciosa</i> - Fonte: Revista Cultivar</>,
                segundaLegenda: <><i>Diabrotica speciosa</i> - Fonte: Elevagro</>,
            }
        },
        {
            id: 3,
            descricao: <>O percevejo-barriga-verde <i>Diceraeus furcatus</i> (Fabricius, 1775), é um inseto sugador, que age a partir da introdução do estilete no tecido das plantas, que se tornam seu alimento e fonte para o desenvolvimento. Os danos ocorrem, principalmente, nos estádios iniciais da cultura, com ataque no colo das plântulas causando lesões nas folhas, redução de estande e perdas em produtividade.</>,
            questao: 'Qual a ordem e família do percevejo-barriga-verde?',
            a: <>Ordem Hemiptera; Família Cydnidae</>,
            b: <>Ordem Hemiptera; Família Pentatomidae</>,
            c: <>Ordem Coleoptera; Família Pentatomidae</>,
            d: <>Ordem Coleoptera; Família Cicadellidae</>,
            correta: 'b',
            respondido: false,
            imagens: {
                primeira: require('../../assets/images/percevejo31.jpg'),
                segunda: require('../../assets/images/percevejo32.webp'),
                primeiraLegenda: 'Percevejo-barriga-verde - Fonte: Syngenta',
                segundaLegenda: 'Danos do Percevejo-barriga-verde em milho - Fonte: Revista Cultivar',
            }
        },
        {
            id: 4,
            descricao: 'Ambas as espécies do percevejo barriga verde possuem a face dorsal marrom e a ventral verde. O percevejo A é ligeiramente maior, medindo cerca de 10 mm de comprimento, os prolongamentos laterais no pronoto, em forma de espinhos, da mesma cor do dorso. O percevejo B é menor (7 mm) e apresenta a extremidade dos espinhos mais escura do que o resto do dorso.',
            questao: 'O Percevejo A e B citados acima são, respectivamente:',
            a: <>A - <i>Diceraeus furcatus – Diceraeus furcatus</i> (Fabricius, 1775) (Hemiptera: Pentatomidae) B - <i>Diceraeus melacanthus – Diceraeus melacanthus</i> (Dallas, 1851) (Hemiptera: Pentatomidae)</>,
            b: <>A - <i>Diceraeus melacanthus – Diceraeus melacanthus</i> (Dallas, 1851) (Hemiptera: Pentatomidae) B - <i>Diceraeus furcatus</i> (Fabricius) (Hemiptera: Pentatomidae)</>,
            c: <>A - <i>Diceraeus melacanthus</i> (Dallas, 1851) (Hemiptera: Pentatomidae) B - <i>Dalbulus maidis</i> (DeLong & Wolcott) (Hymenoptera: Cicadellidae)</>,
            d: <>A - <i>Dalbulus maidis – Dalbulus maidis</i> (DeLong & Wolcott) (Hymenoptera: Cicadellidae) B - <i>Diceraeus melacanthus</i> (Dallas, 1851)</>,
            correta: 'a',
            respondido: false,
            imagens: {
                primeira: require('../../assets/images/percevejo4.jpg'),
                primeiraLegenda: 'Fonte: Agro Bayer Brasil',
            }
        },
        {
            id: 5,
            descricao: 'O Percevejo marrom pode atacar ramos e hastes, mas o maior prejuízo ocorre quando atacam vagens em formação, ocasionando má formação de grãos, chamados de “grãos chochos” e consequente redução de produtividade. A cultura da soja é a principal hospedeira do percevejo-marrom.',
            questao: 'Qual o nome científico do Percevejo-marrom?',
            a: <><i>Diceraeus melacanthus – Diceraeus melacanthus</i> (Dallas, 1851) (Hemiptera: Pentatomidae)</>,
            b: <i>Euschistus spp</i>,
            c: <><i>Euschistus heros - Euschistus heros</i> (Fabricius, 1798) (Hemiptera: Pentatomidae)</>,
            d: <><i>Euschistus Heros - Euschistus Heros</i> (Fabricius, 1798) (Hemiptera: Pentatomidae)</>,
            correta: 'c',
            respondido: false,
            imagens: {
                primeira: require('../../assets/images/percevejo5.jpg'),
                primeiraLegenda: 'Fonte: Agrolink',
            }
        },
        {
            id: 6,
            descricao: <>O Percevejo-castanho <i>Scaptocoris castanea</i> (Perty, 1830) tem hábito subterrâneo e ataca as raízes, inserindo o aparelho sugador no tecido da planta, no qual se alimenta da seiva. Ao atacar as raízes, esses insetos injetam toxinas que reduzem o crescimento da planta, além de provocarem enfraquecimento, amarelecimento e murcha. Essa praga ataca culturas como soja, milho, sorgo, algodão, café, dentre outras.</>,
            questao: 'Qual a ordem e família deste inseto-praga?',
            a: <>Ordem Hemiptera; Família Cicadellidae</>,
            b: <>Ordem Heteroptera; Família Lepidoptera</>,
            c: <>Ordem Coleoptera; Família Cydnidae</>,
            d: <>Ordem Hemiptera; Família Cydnidae</>,
            correta: 'd',
            respondido: false,
            imagens: {
                primeira: require('../../assets/images/percevejo61.jpg'),
                segunda: require('../../assets/images/percevejo62.jpg'),
                primeiraLegenda: 'Fonte: Agrolink',
                segundaLegenda: 'Fonte: Agrolink',
            }
        },
        {
            id: 7,
            descricao: 'Algumas espécies de lagartas pertencentes ao gênero Spodoptera possuem maior preferência pela cultura da soja, atacando as plantas principalmente na fase reprodutiva. Observe as características descritas: Imagem 1 - Listras de cor creme, uma das faixas é interrompida por uma mancha escura que não chega até a cabeça. Imagem 2 - Listras amarelas no dorso que chegam até a cabeça, pontuações brancas e triângulos pretos.',
            questao: 'As pragas citadas acima são, respectivamente:',
            a: <><i>Spodoptera cosmioides – Spodoptera cosmioides</i> (Walker, 1858) (Lepidoptera: Noctuidae) e <i>Spodoptera eridania – Spodoptera eridania</i> (Cramer, 1782) (Lepidoptera: Noctuidae)</>,
            b: <><i>Spodoptera eridania – Spodoptera eridania</i> (Cramer, 1782) (Lepidoptera: Noctuidae) e <i>Spodoptera cosmioides – Spodoptera cosmioides</i> (Walker, 1858) (Lepidoptera: Noctuidae)</>,
            c: <><i>Spodoptera frugiperda – Spodoptera frugiperda</i> (J. E. Smith, 1797) (Lepidoptera: Noctuidae) e <i>Spodoptera cosmioides – Spodoptera cosmioides</i> (Walker, 1858) (Lepidoptera: Noctuidae)</>,
            d: <><i>Spodoptera eridania – Spodoptera eridania</i> (Cramer, 1782) (Lepidoptera: Noctuidae) e <i>Spodoptera frugiperda – Spodoptera frugiperda</i> (J. E. Smith, 1797) (Lepidoptera: Noctuidae)</>,
            correta: 'b',
            respondido: false,
            imagens: {
                primeira: require('../../assets/images/imagem71.jpg'),
                segunda: require('../../assets/images/imagem72.jpg'),
                primeiraLegenda: 'Imagem 1 - Fonte: Syngenta',
                segundaLegenda: 'Imagem 2 - Fonte: Syngenta',
            }
        },
        {
            id: 8,
            descricao: 'A lagarta-do-cartucho ou lagarta-militar, é uma das principais pragas do milho. Ela se alimenta tanto de órgãos vegetativos quanto de órgãos reprodutivos das plantas. Problemas com esta praga foram se agravando devido às modificações no sistema de produção, tais como cultivos sucessivos de plantas hospedeiras da praga conhecidas como “pontes verdes”, permitindo sua sobrevivência nas áreas de produção. Esse sistema de cultivo também aumentou a frequência de pulverização de inseticidas acarretando a seleção de populações resistentes.',
            questao: 'Qual o nome científico da lagarta-do-cartucho?',
            a: <><i>Spodoptera frugiperda – Spodoptera frugiperda</i> (J. E. Smith, 1797) (Lepidoptera: Noctuidae)</>,
            b: <><i>Spodoptera frugiperda sp.</i> (J. E. Smith, 1797) (Lepidoptera: Noctuidae)</>,
            c: <><i>Spodoptera eridania – Spodoptera eridania</i> (Cramer, 1782) (Lepidoptera: Noctuidae)</>,
            d: <><i>Spodoptera e. spp</i> (Cramer)</>,
            correta: 'a',
            respondido: false,
            imagens: {
                primeira: require('../../assets/images/imagem8.jpg'),
                segunda: '',
                primeiraLegenda: 'Fonte: Mais soja',
                segundaLegenda: '',
            }
        },
        {
            id: 9,
            descricao: 'Trata-se de um lepidóptero polífago que se alimenta, principalmente, de folhas e frutos, podendo ocasionar graves danos econômicos. Esta praga ataca principalmente a cultura da soja e provoca danos como desfolha nos terços superiores da planta e as infestações ocorrem em reboleiras.',
            questao: 'Trata-se de:',
            a: <><i>Spodoptera eridania – Spodoptera eridania</i> (Cramer, 1782) (Lepidoptera: Noctuidae)</>,
            b: <><i>Spodoptera frugiperda – Spodoptera frugiperda</i> (J. E. Smith, 1797) (Lepidoptera: Noctuidae)</>,
            c: <><i>Spodoptera albula – Spodoptera albula</i> (Walker, 1857) (Lepidoptera: Noctuidae)</>,
            d: <><i>Spodoptera Albula</i> (Lepidoptera: Noctuidae)</>,
            correta: 'c',
            respondido: false,
            imagens: {
                primeira: require('../../assets/images/imagem91.jpeg'),
                segunda: require('../../assets/images/imagem92.jpg'),
                primeiraLegenda: 'Fonte: Sementes Biomatrix',
                segundaLegenda: 'Fase adulta - Fonte: insect images',
            }
        },
        {
            id: 10,
            descricao: 'As lagartas falsas-medideiras estão entre as principais pragas na cultura da soja. Normalmente a praga tem preferência por atacar a cultura nos estádios reprodutivos, mas pode também ser observada na fase final do desenvolvimento vegetativo. Dentre os principais danos, podemos destacar o consumo das folhas de soja. As lagartas consomem o parênquima foliar deixando as nervuras, conferindo aos folíolos aspecto rendilhado.',
            questao: '“A” e “B” são, respectivamente:',
            a: <><i>Spodoptera eridania – Spodoptera eridania</i> (Cramer, 1782) (Lepidoptera: Noctuidae) e <i>Spodoptera cosmioides – Spodoptera cosmioides</i> (Walker, 1858) (Lepidoptera: Noctuidae)</>,
            b: <><i>Chrysodeixis includens – Chrysodeixis includens</i> (Walker, 1858) (Lepidoptera: Noctuidae) e <i>Rachiplusia nu – Rachiplusia nu</i> (Guenée) (Lepidoptera: Noctuidae)</>,
            c: <><i>Spodoptera cosmioides – Spodoptera cosmioides</i> (Walker, 1858) (Lepidoptera: Noctuidae) e <i>Spodoptera eridania – Spodoptera eridania</i> (Cramer, 1782) (Lepidoptera: Noctuidae)</>,
            d: <><i>Rachiplusia nu – Rachiplusia nu</i> (Guenée) (Lepidoptera: Noctuidae) e <i>Chrysodeixis includens – Chrysodeixis includens</i> (Walker, 1858) (Lepidoptera: Noctuidae)</>,
            correta: 'd',
            respondido: false,
            imagens: {
                primeira: require('../../assets/images/imagem101.jpg'),
                segunda: require('../../assets/images/imagem102.jpg'),
                primeiraLegenda: 'Fase adulta - Fonte: insect images',
                segundaLegenda: '',
            }
        }
    ]

    const [respostaSelecionada, setRespostaSelecionada] = useState('')
    const [questao, setQuestao] = useState(0)
    const [pergunta, setPergunta] = useState(perguntas)
    const [acertou, setAcertou] = useState(0)

    function selecionarResposta(resposta) {
        setRespostaSelecionada(resposta)
    }

    function confirmar() {
        if (respostaSelecionada === pergunta[questao].correta && pergunta[questao].respondido === false) {
            setAcertou(acertou + 1)
        }

        const confirmarResposta = pergunta.filter((e, index) => {
            if (questao === index) {
                e.respondido = true
                return e
            }
            else return e
        })

        setPergunta(confirmarResposta)
    }

    function gabarito(resposta) {
        if (respostaSelecionada === resposta) {
            if (respostaSelecionada === pergunta[questao].correta) return 'correta'
            else return 'errada'
        }
        else {
            if (resposta === pergunta[questao].correta) return 'correta'
            else return 'respondido'
        }
    }

    const scrollToTop = () => {
        setQuestao(questao + 1)
        setRespostaSelecionada('')
       
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    }, [questao]);

    return (
        <div style={{ overflow: 'hidden' }}>
            <div className="welcome">
                <div className="centralizar">
                    <div className="centralizar">
                        {questao === 9 ? (
                            <>
                                <div>
                                    <h1>Questão {pergunta[questao].id}</h1>
                                </div>
                                <div>
                                    <div className="descricao">
                                        <h5>{pergunta[questao].descricao}</h5>
                                    </div>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <h6 style={{ color: '#fff', backgroundColor: "#554019", padding: 10, marginTop: 10, borderRadius: 50 }}>{"A)"}</h6>
                                </div>
                                <div className="fotos">
                                    <div className="formatarFotos">
                                        <img alt="imagem" className="fundoFoto" src={require('../../assets/images/imagem101.jpg')} />
                                        <div className="centralizar fonte"> Fonte: Mais Soja </div>
                                    </div>
                                    <div className="formatarFotos">
                                        <img alt="imagem" className="fundoFoto" src={require('../../assets/images/imagem103.jpg')} />
                                        <div className="centralizar fonte"> Fonte: Naturalist </div>
                                    </div>
                                </div>
                                <div className="descricao centralizar" style={{ marginTop: 10 }}>
                                    <h5>As mariposas medem 30 mm de envergadura, coloração geral acinzentada e opaca. Apresentam nas asas anteriores uma mancha prateada, em forma de “Y” e as asas posteriores de coloração amarela com o bordo externo marrom-escuro</h5>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <h6 style={{ color: '#fff', backgroundColor: "#554019", padding: 10, marginTop: 10, borderRadius: 50 }}>{"B)"}</h6>
                                </div>
                                <div className="fotos">
                                    <div className="formatarFotos">
                                        <img alt="imagem" className="fundoFoto" src={require('../../assets/images/imagem102.jpg')} />
                                        <div className="centralizar fonte"> Fonte: Mais soja </div>
                                    </div>
                                    <div className="formatarFotos">
                                        <img alt="imagem" className="fundoFoto" src={require('../../assets/images/imagem104.jpg')} />
                                        <div className="centralizar fonte"> Fonte: Bio Protection </div>
                                    </div>
                                </div>
                                <div className="descricao centralizar" style={{ marginTop: 10 }}>
                                    <h5>As mariposas medem 35 mm de envergadura e possuem coloração geral acinzentada, com reflexos dourados. Nas asas anteriores apresentam duas manchas prateadas e as asas posteriores são de coloração marrom-claro a cinza</h5>
                                </div>

                                <div className="questao">
                                    <h5>{pergunta[questao].questao}</h5>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <h1>Questão {pergunta[questao].id}</h1>
                                </div>
                                <div>
                                    <div className="descricao">
                                        <h5>{pergunta[questao].descricao}</h5>
                                    </div>
                                </div>
                                <div className="fotos">
                                    <div className="formatarFotos">
                                        <img alt="imagem" className="fundoFoto" src={pergunta[questao].imagens.primeira} />
                                        <div className="centralizar fonte"> {pergunta[questao].imagens.primeiraLegenda} </div>
                                    </div>

                                    {pergunta[questao].imagens.segunda && (
                                        <div className="formatarFotos">
                                            <img alt="imagem" className="fundoFoto" src={pergunta[questao].imagens.segunda} />
                                            <div className="centralizar fonte"> {pergunta[questao].imagens.segundaLegenda} </div>
                                        </div>
                                    )}

                                </div>
                                <div className="questao">
                                    <h5>{pergunta[questao].questao}</h5>
                                </div>
                            </>
                        )}

                        {pergunta[questao].respondido === false ? (
                            <div >
                                <div className={respostaSelecionada === 'a' ? "respostas selecionada" : "respostas"} onClick={() => selecionarResposta('a')}>
                                    <h6>a&#41; {pergunta[questao].a}</h6>
                                </div>
                                <div className={respostaSelecionada === 'b' ? "respostas selecionada" : "respostas"} onClick={() => selecionarResposta('b')}>
                                    <h6>b&#41; {pergunta[questao].b}</h6>
                                </div>
                                <div className={respostaSelecionada === 'c' ? "respostas selecionada" : "respostas"} onClick={() => selecionarResposta('c')}>
                                    <h6>c&#41; {pergunta[questao].c}</h6>
                                </div>
                                <div className={respostaSelecionada === 'd' ? "respostas selecionada" : "respostas"} onClick={() => selecionarResposta('d')}>
                                    <h6>d&#41; {pergunta[questao].d}</h6>
                                </div>
                            </div>
                        ) : (
                            <div >
                                <div className={gabarito('a')}>
                                    <h6>a&#41; {pergunta[questao].a}</h6>
                                </div>
                                <div className={gabarito('b')}>
                                    <h6>b&#41; {pergunta[questao].b}</h6>
                                </div>
                                <div className={gabarito('c')}>
                                    <h6>c&#41; {pergunta[questao].c}</h6>
                                </div>
                                <div className={gabarito('d')}>
                                    <h6>d&#41; {pergunta[questao].d}</h6>
                                </div>
                            </div>
                        )}

                    </div>
                    <div className="marginTop buttons">
                        <Button disabled={respostaSelecionada === '' ? true : false} style={{ marginRight: 20, marginTop: 10 }} variant="success" size="lg" onClick={() => confirmar()}>
                            Confirmar
                        </Button>

                        {questao < 9 ? (
                            <Button variant="primary" size="lg" disabled={pergunta[questao].respondido === false ? true : false} style={{ marginTop: 10 }}
                                onClick={scrollToTop}>
                                Próxima Pergunta
                            </Button>
                        ) : (
                            <Link to="/resultado" state={{ acertou: acertou, nome: nome && nome.nome ? nome.nome : '' }}>
                                <Button variant="primary" size="lg" disabled={pergunta[questao].respondido === false ? true : false} style={{ marginTop: 10 }}  >
                                    Ver Resultado
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perguntas;
