import { Component, ViewChild } from '@angular/core';
import { ExpandableComponent}  from 'src/app/shared/components/expandable/expandable.component';

@Component({
  selector: 'app-tab-faq',
  templateUrl: 'tab-faq.page.html',
  styleUrls: ['tab-faq.page.scss']
})
export class TabFaq {

  /**
 * The data structure that will be used for supplying the accordion content
 * @public
 * @property technologies
 * @type {Array}
 */
public faqs : Array<{ title: string, answer: string }> = [
  { 
     title : 'A ANPG pretende licitar blocos petrolíferos em todos os anos?', 
     answer : 'A actualmente existe um cronograma definido, em harmonia com o Decreto Presidencial n.º 52/19, de 18 de Fevereiro, que aprova a Estratégia Geral de Atribuição de Concessões para o período de 2019-2025, neste sentido, serão licitadas concessões no ano 2020, 2021, 2023 e 2025. Todavia, o referido diploma, também estabelece que poderão ser, extraordinariamente, lançadas licitações não constantes nesta estratégia desde que devidamente fundamentadas e aprovadas pelo o Departamento Ministerial responsável pelo Sector dos Petróleos.',
  },
  { 
     title : 'Com as restrições impostas por conta da pandemia da COVID-19, como ANPG vai dar seguimento ao referido processo de licitação, por exemplo, a publicação dos roadshows?', 
     answer : 'A ANPG, no âmbito da sua estratégia criou mecanismos, de modo a mitigar eventuais constrangimentos a serem causados por conta da pandemia COVID-19, neste contexto, os eventos promocionais, serão apresentados em formato virtual (Livestreaming ou Webinar), permitindo assim aos potenciais investidores, ter o acesso a toda informação disponível em tempo real de forma, o referido processo seja transparente e que ocorra de acordo com a estratégia definida pela ANPG.',
  },
  { 
     title : 'Até o ano de 2025 a ANPG vai licitar apenas blocos em onshore a semelhança do ano de 2020?', 
     answer : 'Não, a ANPG na sua estratégia de atribuição de concessões para o período de 2019-2025, está previsto também a licitação de blocos em offshore.',
  },
  { 
     title : 'Como são qualificadas as empresas que pretendam associar-se à CN?', 
     answer : 'Á luz do Decreto Presidencial n.º 86/18, de 2 de Abril, nos artigos 4.º e 5.º, estão definidos os requesitos para a associada da Concessionária Nacional(Operador e não Operador) para as empresas que pretendam associar-se à Concessionária Nacional.'+
     '<br>Existe a necessidade de qualificação por parte das empresas que já operam em Angola?'+
     'De acordo com o Decreto Presidencial n.º 86/18, de 2 de Abril, na alínea f) do n.º 9 do artigo 6.º, que obriga a lista dos requisitos para a qualificação das entidades que pretendam ser associada da Concessionária Nacional deve ter em conta os elementos apresentados nos artigos 4.º e 5.º do presente diploma.',
  },
  { 
     title : 'Qual será o critério de selecção das propostas apresentadas pelos concorrentes?', 
     answer : 'Ao abrigo do n.º 2 do artigo 9.º do diploma subjudice, são selecionadas as propostas apresentadas, com base em critérios objectivos, tomando especialmente em atenção os factores constantes no Termos de Referência, ou seja, para a licitação em questão os participantes devem apresentar as melhores propostas no que tange:'+
     'Termos Contratuais'+
     'Programa mínimo de trabalho;'+
     'Bónus de assinatura;'+
     'Bónus para projectos sociais',
  },
  { 
     title : 'Que modelo de contrato será celebrado na adjudicação dos blocos onshore a serem licitados em Angola em 2020?', 
     answer : 'De acordo a Estratégia de Licitação 2019 – 2025, a tipologia contratual a celebrar é o Contrato de Partilha de Produção (CPP), sendo a adjudicação de concessões via Concurso Público.'+
     'Partilha de Produção: Petróleo Custo (Cost Oil) e Petróleo Lucro (Profit Oil);'+
     'Partes: Concessionária Nacional, em representação do Estado, e Grupo Empreiteiro;'+
     'Regime Fiscal:'+
     'IRP: 50% (IOC) e 30% (NOC)'+
     'Amortização: 25% Ano;'+
     'Prémio de Investimento'+
     'Recuperação do Opex e Capex: Cost Oil de cada Área de Desenvolvimento.',
  },
  { 
     title : 'Para esta ronda de licitação, a ANPG antecipa a predefinição de parceiros nos blocos a serem licitados?', 
     answer : 'Não. As entidades concorrentes submetem as suas propostas nos blocos a licitar, tendo em conta os Termos de Referência de cada bloco e os requisitos para associadas da Concessionaria Nacional (Operador e não operador). Destas propostas, apura-se a melhor com base em critério pré-definidos, para atribuição da concessão como operador ou não operador em determinado bloco.',
  },
  { 
     title : 'Existe algum tratamento especial às empresas que participaram no concurso de 2014 e que participarão na ronda de licitação Onshore 2020?', 
     answer : 'A adjudicação de concessões via « Concurso Público», é o mecanismo preferencial e que assegura a transparência do processo, no qual deverá para além dos termos fixados por lei, cumprir com os requisitos no Decreto Presidencial n.º 52/19, de 18 de Fevereiro, que aprova a Estratégia Geral de Atribuição de Concessões Petrolíferas para o período 2019-2025, e os procedimentos a adoptar para o concurso público estabelecido no Decreto Presidencial n.º 86/18, de 2 de Abril.'+
     'Por outro lado, o n.º 2 do artigo 6.º do Decreto Presidencial n.º 86/18, promove no sentido de diversificar o investimento estrangeiro no Sector Petrolífero Angolano em áreas de menor risco e de nível de investimento, sendo que o concurso público pode ser limitado a entidades petrolíferas de pequenas ou média dimensão, conforme for indicado no anúncio de lançamento do concurso.',
  },
  { 
     title : 'No passado algumas empresas nacionais (conteúdo Local) beneficiaram de direitos especiais será o caso para esta ronda 2020?', 
     answer : 'O sistema petrolífero angolano, consagra um quadro regulamentar dos incentivos fiscais a conceder às empresas petrolíferas angolanas, nos termos estabelecidos pelos artigos 26.º e 31.º da Lei n.º 10/04, de 12 de Novembro, conjugado com o n.º 3 do artigo 11.º da Lei n.º 13/04, de 24 de Dezembro e o artigo 23.º da Lei n.º 14/03, de 18 de Julho.'+
     'Em aditamento, o Decreto Legislativo Presidencial n.º 3/12, estabelece os incentivos fiscais às empresas nacionais do sector petrolífero.',
  },
  { 
    title : 'Quais os benefícios/ganhos das Licitações para as populações, principalmente no onshore?', 
    answer : 'No quadro do Plano Nacional de Desenvolvimento, com a atribuição das concessões petrolíferas no onshore, ao pretenso vencedor, irá promover o fomento da criação de empregos, a formação e integração de quadros nacionais, a inclusão das PME’s, o desenvolvimento de projectos sociais, fornecimento de bens e serviço ao sector petrolífero, a disseminação do conhecimento, inovação tecnológica e boas práticas da governação local.',
  },
  { 
    title : 'Os resultados da Licitação serão divulgados publicamente?', 
    answer : 'A adjudicação do concurso deve ser comunicado oficialmente a todos os concorrentes, e ser objecto de um anúncio a ser publicado no Diário da República e/ou num dos jornais de maior divulgação em Angola, uma publicação internacional (caso se aplique) e no portal da Concessionária Nacional na internet, num prazo não superior a 20 (vinte) dias, findo o prazo da avaliação das propostas (vide n.º 4, do artigo 9.º, do do Decreto Presidencial n.º 86/18).',
  },
  { 
    title : 'Existe alguma estratégia delineada por parte da ANPG relativamente à contribuição social?', 
    answer : 'Em alinhamento com o Plano Nacional de Desenvolvimento às políticas de   contribuições sociais da ANPG, vão de encontro as necessidades dos governos locais, no que tange, a implementação do combate a pobreza, emprego e desemprego, o capital humano, as infra-estruturas económicas e sociais, a educação e ensino superior, a assitência e protecção social, a habitação, cultura, desporto e a sustentabilidade ambiental.',
  },
  { 
    title : 'Será permitida apresentar várias propostas para a participação em mais de um bloco?', 
    answer : 'O concurso público admite a apresentação de várias propostas para cada bloco, no qual deverá especificar se a(s) entidade(s) irão concorrer individualmente ou em consórcio e definir os elementos apresentados nos artigos 4.º e 5.º do Decreto Presidencial n.º 86/18.',
  },
  { 
    title : 'Qual o valor do Pacote de Dados proposto para a licitação 2020? As empresas nacionais poderão efectuar o pagamento em Kwanza ou em outra moeda?', 
    answer : 'Pacote de Dados para a Bacia Terrestre do Congo: 350.000,00 USD (Trezentos e cinquenta mil dólares dos Estados Unidos da América)'+
    'Kwanza Onshore Data package: 250.000 (Duzentos e cinquenta mil dólares dos Estados Unidos da América).'+
    'As empresas angolanas, poderão efectuar o pagamento equivalente em moeda nacional.',
  },
  { 
    title : 'Que valor deverá ser pago para a quota de entrada no processo de licitação 2020? Esta quota é de carácter obrigatório para as empresas nacionais e estrangeiras? As empresas angolanas poderão fazer o pagamento em kwanzas?', 
    answer : 'A entidade pública licitante, no programa do concurso público, estabelece aos concorrentes à apresentação de uma quota de entrada (entry fee), a ser paga para participação no processo de licitação, no valor de USD 1.000.000,00 (Um milhão de dólares dos Estados Unidos da América).'+
    'O investidor ao efectuar este pagamento, terá acesso ao pacote de dados. Caso seja efectuada a compra prévia do pacote de dados, valor do mesmo será deduzido no valor da quota de entrada.'+
    'A quota deverá ser paga por todas a empresas que pretendam participar no referido processo. As empresas angolanas poderão efectuar o pagamento na moeda nacional.',
  },
  { 
    title : 'O valor da quota de entrada, deverá ser pago pelo grupo empreiteiro apôs a sua constituição ou pelas empresas de forma individual?', 
    answer : 'No acto da submissão das propostas (individualmente ou em consórcio), os concorrentes deverão efectuar o pagamento do valor da quota de entrada, sem exclusão de qualquer participante no processo de licitação, aquando da submissão das suas propostas.',
  },
  { 
    title : 'O valor da candidatura inclui todos os Dados disponíveis das bacias em licitação?', 
    answer : 'Os encargos inerentes ao pacote de dados está intrinsicamente relacionado à candidatura que o concorrente submeteu a proposta seja ela para os blocos da Bacia do Kwanza ou para os blocos da Bacia do Congo, o candidato, terá acesso ao pacote de dados do Congo.',
  },
  { 
    title : 'Qual o valor da taxa a ser cobrada para a visualização dos dados? E o que a mesma inclui?', 
    answer : 'As sessões de data showroom para a partilha dos dados para os candidatos, incorrem num custo no valor equivalente a USD 500 (Quinhentos dólares dos Estados Unidos da América), sendo que, essas sessões consistem na apresentação de aspectos técnicos efectuado pelos especialistas da ANPG, e em seguida terão acesso as informações seleccionada para consulta e interpretação nas aplicações de suporte.',
  },
  { 
    title : 'Será possível uma empresa nacional participar do concurso associada a uma empresa estrangeira?', 
    answer : 'No quadro da estratégia de licitação, está tipificado a atração do investimento estrangeiro através de parcerias com empresas nacionais. Logo, não existe qualquer impedimento para o efeito, apesar que toda empresa que queira beneficiar dos incentivos previstos no Decreto Legislativo Presidencial n.º 3/12, não podem, sob pena de perder os incentivos ali previstos, ceder a totalidade ou parte do seu capital a pessoas singulares ou colectivas estrangeiras.',
  },
  { 
    title : 'Para os blocos onshore, será possivel explorar apenas o gás em detrimento do petróleo? Esta decisão fica a cargo do grupo empreiteiro?', 
    answer : 'O objecto do Contrato de Partilha de Produção, é a prospecção, pesquisa, avaliação, desenvolvimento e produção de hidrocarbonetos. Porém, no corpo do contrato, está previsto a cláusula do gás natural, na qual define que no caso em que o Grupo Empreiteiro descobrir o gás, deverá acordar novos termos e condições com a Concessionária Nacional no quadro do Decreto Legislativo Presidencial n.º 7/18, que estabelece o regime jurídico e fiscal aplicável às actividades de prospecção, pesquisa, avaliação, desenvolvimento, produção e venda de gás natural em Angola',
  },
  { 
    title : 'Qual será o impacto dos blocos onshore na produção de Angola?', 
    answer : 'Os blocos Onshore terão um impacto gradual de 4 á 10% na produção nacional assumido uma eficiencia operacioanal acima de 90% da produção de base.',
  },
  { 
    title : 'Que benefícios as comunidades locais terão com as licitações 2020?', 
    answer : 'As licitações vão resultar na concessão de blocos aos Operadores para explorar e produzir os hidrocarbonetos. As comunidades locais beneficiarão em varios sectores como:'+
    'Desenvolvimento do capital humano: As actividades de exploração no início e de produção a posterior vão gerir empregos para as comunidades. As comunidades vão beneficiar de formação direcionada.'+
    'Desenvolvimento regionais: As actividades de exploração são executadas por várias empresas prestadoras de serviço que contribuem de uma forma directa a melhoria de economia local:  pagamento de imposto, crescimento do sector imobiliaria, desenvolvimento da cadeia logística e transporte, parceria para financiamento das iniciativas locais, etc.',
  },
  { 
    title : 'Para Blocos CON-1 e CON-6 poderá exportar-se o petróleo via de terminal de Somoil/Sonangol 3-05? Ou construir-se um novo terminal na área de Soyo?', 
    answer : 'Ambas alternativas são viáveis, no entanto a Somoil é uma empresa privada, esta via requer uma negociação directa com a mesma. Todavia o melhor conceito de desenvimento resultará de uma análise detalhada do grupo empreito bem como um alinhamento com ANPG.',
  },
  { 
    title : 'O que é que se está a pensar em termos de infraestruturas partilhadas para processamento do petróleo e dos outros resíduos?', 
    answer : 'O sucesso da exploração definirá o conceito mais apropriado para o desenvolvido dos blocos Onshore. O estudo realizado no passado mostrou que pela localização geográfica dos blocos a serem licitados bem como as particularidades da região sul, é viável a construção de um terminal petrolífero que colectará os hidrocarbonetos produzidos nos diferentes blocos e escoará os mesmos atraves do mar. Outra alternativa é de ter uma unidade de processamento comun que receberá o hidrocarboneto dos diferentes blocos.',
  },
  { 
    title : 'Que trabalhos estão a ser efectuados por parte da ANPG, em relação aos desafios ambientais para este processo de licitação?', 
    answer : 'A ANPG tem vindo a interagir de forma proactiva com os órgãos do estado responsáveis pelas questões ligadas ao ambiente, nomeadamente o Ministerio da Cultura, Turismo e Ambiente e suas Agências e Institutos por forma a esclarecer, sensibilizar para obtenção de um alinhamento que permitirá ultrapassar de forma conjunta os eventuais desafios ambientais.',
  },
  { 
    title : 'Como a ANPG pretende lidar com o projecto ambiental que consiste na preservação de algumas espécies existente nas áreas do onshore a serem licitadas?', 
    answer : 'Sendo um dos valores da Concessionária Nacional o “foco em saúde, segurança e ambiente”, a ANPG irá assegurar a preservação dos projectos ambientais existentes e incentivar os futuros operadores em áreas de onshore a criarem novos projectos ambientais.'+
    'A ANPG deverá garantir o cumprimento da legislação em vigor sobre a matéria, como por exemplo o Decreto Presidencial nº 26/20 de 6 de Fevereiro sobre a Estratégia Nacional e o Plano de Acção da Biodiversidade 2019-2025, a Lei nº 8/20 de 16 de Abril sobre Áreas de Conservacao Ambiental e outras',
  }
];

  constructor() {
  }

  /**
   * Captures and console logs the value emitted from the user depressing the accordion component's <ion-button> element 
   * @public
   * @method captureName
   * @param {any}		event 				The captured event
   * @returns {none}
   */
/*   public captureName(event: any) : void
  {
     console.log(`Captured name by event value: ${event}`);
  }
 */

}
