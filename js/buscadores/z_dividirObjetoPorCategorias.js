//Esta funcion nos ayuda a poder poner banderas en los textos del buscador para
//saber de que pais es la empresa.

// Array de objetos
var companyInfo = [{"name": "boeing-co","country": "americas","categoria": "Manufactura y Tecnología Industrial",},{"name": "chevron","country": "americas","categoria": "Energía y Recursos Naturales",},{"name": "caterpillar","country": "americas","categoria": "Manufactura y Tecnología Industrial",},{"name": "intel-corp","country": "americas","categoria": "Tecnología y Software",},{"name": "microsoft-corp","country": "americas","categoria": "Tecnología y Software",},{"name": "disney","country": "americas","categoria": "Telecomunicaciones y Medios de Comunicación",},{"name": "dow-chemical","country": "americas","categoria": "Manufactura y Tecnología Industrial",},{"name": "cisco-sys-inc","country": "americas","categoria": "Tecnología y Software",},{"name": "goldman-sachs-group","country": "americas","categoria": "Finanzas y Banca",},{"name": "jp-morgan-chase","country": "americas","categoria": "Finanzas y Banca",},{"name": "coca-cola-co","country": "americas","categoria": "Alimentos y Bebidas",},{"name": "mcdonalds","country": "americas","categoria": "Alimentos y Bebidas",},{"name": "merck---co","country": "americas","categoria": "Salud y Farmacéutica",},{"name": "3m-co","country": "americas","categoria": "Manufactura y Tecnología Industrial",},{"name": "apple-computer-inc","country": "americas","categoria": "Tecnología y Software",},{"name": "amgen-inc","country": "americas","categoria": "Salud y Farmacéutica",},{"name": "wal-mart-stores","country": "americas","categoria": "Minorista",},{"name": "home-depot","country": "americas","categoria": "Construcción e Inmobiliaria",},{"name": "ibm","country": "americas","categoria": "Tecnología y Software",},{"name": "verizon-communications","country": "americas","categoria": "Telecomunicaciones y Medios de Comunicación",},{"name": "the-travelers-co","country": "americas","categoria": "Finanzas y Banca",},{"name": "johnson-johnson","country": "americas","categoria": "Salud y Farmacéutica",},{"name": "american-express","country": "americas","categoria": "Finanzas y Banca",},{"name": "honeywell-intl","country": "americas","categoria": "Manufactura y Tecnología Industrial",},{"name": "salesforce-com","country": "americas","categoria": "Tecnología y Software",},{"name": "visa-inc","country": "americas","categoria": "Finanzas y Banca",},{"name": "walgreen-co","country": "americas","categoria": "Minorista",},{"name": "united-health-group","country": "americas","categoria": "Salud y Farmacéutica",},{"name": "nike","country": "americas","categoria": "Alimentos y Bebidas",},{"name": "procter-gamble","country": "americas","categoria": "Alimentos y Bebidas",},{"name": "oma-b","country": "mexico","categoria": "Transporte y Logística",},{"name": "grupo-aeroportuario-del-pacifico-b","country": "mexico","categoria": "Transporte y Logística",},{"name": "grupo-televisa-cp","country": "mexico","categoria": "Telecomunicaciones y Medios de Comunicación",},{"name": "asur--b","country": "mexico","categoria": "Transporte y Logística",},{"name": "coca-cola-femsa-l","country": "mexico","categoria": "Alimentos y Bebidas",},{"name": "gruma-sab-adr?cid=27018","country": "mexico","categoria": "Alimentos y Bebidas",},{"name": "cemex-cpo","country": "mexico","categoria": "Construcción e Inmobiliaria",},{"name": "alfa-a","country": "mexico","categoria": "Manufactura y Tecnología Industrial",},{"name": "alsea","country": "mexico","categoria": "Alimentos y Bebidas",},{"name": "arca-continental","country": "mexico","categoria": "Alimentos y Bebidas",},{"name": "banregio-grupo-financiero-o","country": "mexico","categoria": "Finanzas y Banca",},{"name": "bimbo-a","country": "mexico","categoria": "Alimentos y Bebidas",},{"name": "bolsa-mexicana-de-valores-a","country": "mexico","categoria": "Finanzas y Banca",},{"name": "el-puerto-de-liverpool-c","country": "mexico","categoria": "Minorista",},{"name": "elektra","country": "mexico","categoria": "Minorista",},{"name": "financiero-banorte","country": "mexico","categoria": "Finanzas y Banca",},{"name": "fomento-economico-mexicano-ubd","country": "mexico","categoria": "Energía y Recursos Naturales",},{"name": "genomma-lab-b","country": "mexico","categoria": "Salud y Farmacéutica",},{"name": "gmexico","country": "mexico","categoria": "Energía y Recursos Naturales",},{"name": "grupo-carso-a1","country": "mexico","categoria": "Construcción e Inmobiliaria",},{"name": "grupo-cementos","country": "mexico","categoria": "Construcción e Inmobiliaria",},{"name": "grupo-financiero-inbursa","country": "mexico","categoria": "Finanzas y Banca",},{"name": "kimberly-clark-de-mexico-a","country": "mexico","categoria": "Manufactura y Tecnología Industrial",},{"name": "megacable-cpo","country": "mexico","categoria": "Telecomunicaciones y Medios de Comunicación",},{"name": "mexichem","country": "mexico","categoria": "Manufactura y Tecnología Industrial",},{"name": "penoles","country": "mexico","categoria": "Energía y Recursos Naturales",},{"name": "pinfra","country": "mexico","categoria": "Construcción e Inmobiliaria",},{"name": "wal-mart-v","country": "mexico","categoria": "Minorista",},{"name": "qualitas-controladora-sab-de-cv","country": "mexico","categoria": "Seguros",},{"name": "corporacion-inmobiliaria-vesta-sab","country": "mexico","categoria": "Construcción e Inmobiliaria",},{"name": "volaris-a","country": "mexico","categoria": "Transporte y Logística",},{"name": "becle-sa?cid=996175","country": "mexico","categoria": "Alimentos y Bebidas",},{"name": "banco-del-bajio-sa","country": "mexico","categoria": "Finanzas y Banca",},{"name": "gp-fin-galicia","country": "argentina","categoria": "Finanzas y Banca",},{"name": "siderar","country": "argentina","categoria": "Manufactura y Tecnología Industrial",},{"name": "pampa-energia","country": "argentina","categoria": "Energía y Recursos Naturales",},{"name": "telecom","country": "argentina","categoria": "Telecomunicaciones y Medios de Comunicación",},{"name": "aluar","country": "argentina","categoria": "Manufactura y Tecnología Industrial",},{"name": "frances","country": "argentina","categoria": "Finanzas y Banca",},{"name": "macro","country": "argentina","categoria": "Finanzas y Banca",},{"name": "edenor","country": "argentina","categoria": "Energía y Recursos Naturales",},{"name": "transener","country": "argentina","categoria": "Energía y Recursos Naturales",},{"name": "mirgor","country": "argentina","categoria": "Manufactura y Tecnología Industrial",},{"name": "central-puerto","country": "argentina","categoria": "Energía y Recursos Naturales",},{"name": "comer-del-plat","country": "argentina","categoria": "Alimentos y Bebidas",},{"name": "cresud","country": "argentina","categoria": "Agricultura",},{"name": "juan-minetti","country": "argentina","categoria": "Manufactura y Tecnología Industrial",},{"name": "tran-gas-norte","country": "argentina","categoria": "Energía y Recursos Naturales",},{"name": "tran-gas-del-s","country": "argentina","categoria": "Energía y Recursos Naturales",},{"name": "ypf-sociedad","country": "argentina","categoria": "Energía y Recursos Naturales",},{"name": "grupo-supervielle-sa","country": "argentina","categoria": "Finanzas y Banca",},{"name": "bolsas-y-mercados-argentinos-sa","country": "argentina","categoria": "Finanzas y Banca",},{"name": "cablevision","country": "argentina","categoria": "Telecomunicaciones y Medios de Comunicación",},{"name": "grupo-financiero-valores","country": "argentina","categoria": "Finanzas y Banca",},{"name": "loma-negra-ba","country": "argentina","categoria": "Manufactura y Tecnología Industrial",},{"name": "laboratorios-richmond","country": "argentina","categoria": "Salud y Farmacéutica",},{"name": "all-amer-lat-on-nm","country": "brazil","categoria": "Tecnología y Software",},{"name": "alpargatas-pn-n1","country": "brazil","categoria": "Alimentos y Bebidas",},{"name": "aliansce-on-nm","country": "brazil","categoria": "Construcción e Inmobiliaria",},{"name": "ambev-pn","country": "brazil","categoria": "Alimentos y Bebidas",},{"name": "arezzo-co-on-ej-nm","country": "brazil","categoria": "Minorista",},{"name": "brasil-on","country": "brazil","categoria": "Tecnología y Software",},{"name": "bradesco-on-n1","country": "brazil","categoria": "Finanzas y Banca",},{"name": "bradesco-pn-n1","country": "brazil","categoria": "Finanzas y Banca",},{"name": "minerva-on-nm","country": "brazil","categoria": "Alimentos y Bebidas",},{"name": "bradespar-pn-n1","country": "brazil","categoria": "Finanzas y Banca",},{"name": "brf-foods-on-ej-nm","country": "brazil","categoria": "Alimentos y Bebidas",},{"name": "braskem-pna-n1","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "bmfbovespa-on-nm","country": "brazil","categoria": "Finanzas y Banca",},{"name": "ccr-sa-on-nm","country": "brazil","categoria": "Transporte y Logística",},{"name": "cielo-on-nm","country": "brazil","categoria": "Finanzas y Banca",},{"name": "cemig-pn-n1","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "cpfl-energia-on-nm","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "copel-pnb","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "cosan-on-nm","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "sid-nacional-on","country": "brazil","categoria": "Manufactura y Tecnología Industrial",},{"name": "cyrela-realt-on-nm","country": "brazil","categoria": "Construcción e Inmobiliaria",},{"name": "duratex-on-nm","country": "brazil","categoria": "Manufactura y Tecnología Industrial",},{"name": "eletrobras-on","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "eletrobras-pnb","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "embraer-on-nm","country": "brazil","categoria": "Manufactura y Tecnología Industrial",},{"name": "equatorial-on-nm","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "estacio-part-on-nm","country": "brazil","categoria": "Educación",},{"name": "eztec-on-nm","country": "brazil","categoria": "Construcción e Inmobiliaria",},{"name": "fleury-on-nm","country": "brazil","categoria": "Salud y Farmacéutica",},{"name": "gerdau-pn-n1","country": "brazil","categoria": "Manufactura y Tecnología Industrial",},{"name": "gerdau-met-pn","country": "brazil","categoria": "Manufactura y Tecnología Industrial",},{"name": "gol-pn-es-n2","country": "brazil","categoria": "Transporte y Logística",},{"name": "hrt-petroleo-on-nm","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "hypermarcas-sa?cid=18698","country": "brazil","categoria": "Alimentos y Bebidas",},{"name": "itausa-pn-ej-n1","country": "brazil","categoria": "Finanzas y Banca",},{"name": "itauunibanco-pn-edj-n1","country": "brazil","categoria": "Finanzas y Banca",},{"name": "jbs-on-nm","country": "brazil","categoria": "Alimentos y Bebidas",},{"name": "lojas-renner-on-nm","country": "brazil","categoria": "Minorista",},{"name": "magaz-luiza-on-nm","country": "brazil","categoria": "Minorista",},{"name": "eneva-sa","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "marfrig-on-nm","country": "brazil","categoria": "Alimentos y Bebidas",},{"name": "mrv-on-nm","country": "brazil","categoria": "Construcción e Inmobiliaria",},{"name": "multiplan-on-n2","country": "brazil","categoria": "Construcción e Inmobiliaria",},{"name": "natura-on-nm","country": "brazil","categoria": "Alimentos y Bebidas",},{"name": "petrobras-on","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "petrobras-pn","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "localiza-on-ej-nm","country": "brazil","categoria": "Transporte y Logística",},{"name": "santander-br-unt-ed-n2","country": "brazil","categoria": "Finanzas y Banca",},{"name": "sabesp-on","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "slc-agricola-on-nm","country": "brazil","categoria": "Agricultura",},{"name": "sao-martinho-on-nm","country": "brazil","categoria": "Agricultura",},{"name": "tractebel-on-nm","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "tim-part-s-a-on-nm","country": "brazil","categoria": "Telecomunicaciones y Medios de Comunicación",},{"name": "totvs-on-ej-nm","country": "brazil","categoria": "Tecnología y Software",},{"name": "taesa-unt-n2","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "ultrapar-on-nm","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "usiminas-pna","country": "brazil","categoria": "Manufactura y Tecnología Industrial",},{"name": "vale-on-n1","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "telef-brasil-on","country": "brazil","categoria": "Telecomunicaciones y Medios de Comunicación",},{"name": "weg-on-ej-nm","country": "brazil","categoria": "Manufactura y Tecnología Industrial",},{"name": "kroton-on-nm","country": "brazil","categoria": "Educación",},{"name": "raiadrogasil-on-nm","country": "brazil","categoria": "Salud y Farmacéutica",},{"name": "bbseguridad","country": "brazil","categoria": "Tecnología y Software",},{"name": "cvc-brasil-on","country": "brazil","categoria": "Turismo y Viajes",},{"name": "klabin-unt","country": "brazil","categoria": "Manufactura y Tecnología Industrial",},{"name": "energisa-sa","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "via-varejo-sa","country": "brazil","categoria": "Minorista",},{"name": "banco-btg-pactual-sa","country": "brazil","categoria": "Finanzas y Banca",},{"name": "azul-sa-pref","country": "brazil","categoria": "Transporte y Logística",},{"name": "atacadao-sa","country": "brazil","categoria": "Alimentos y Bebidas",},{"name": "irb-brasil-resseguros","country": "brazil","categoria": "Finanzas y Banca",},{"name": "suzano-papel-celulose","country": "brazil","categoria": "Manufactura y Tecnología Industrial",},{"name": "petrobras-distribuidora","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "hapvida-participacoes-investimentos","country": "brazil","categoria": "Salud y Farmacéutica",},{"name": "grupo-vamos-sa","country": "brazil","categoria": "Transporte y Logística",},{"name": "companhia-brasileira-de-distribuica","country": "brazil","categoria": "Minorista",},{"name": "locaweb-servicos-de-internet-sa","country": "brazil","categoria": "Tecnología y Software",},{"name": "grupo-de-moda-soma-sa","country": "brazil","categoria": "Moda y Vestimenta",},{"name": "pet-center-comercio-e-partcipacoes","country": "brazil","categoria": "Minorista",},{"name": "3r-petroleum-oleo-e-gas-sa","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "rede-dor-sao-luiz","country": "brazil","categoria": "Salud y Farmacéutica",},{"name": "csn-mineracao","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "sendas-distribuidora-sa","country": "brazil","categoria": "Minorista",},{"name": "petroreconcavo","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "raizen-prf","country": "brazil","categoria": "Energía y Recursos Naturales",},{"name": "iguatemi-unt","country": "brazil","categoria": "Construcción e Inmobiliaria",},{"name": "acs-cons-y-serv","country": "spain","categoria": "Construcción e Inmobiliaria",},{"name": "acerinox","country": "spain","categoria": "Manufactura y Tecnología Industrial",},{"name": "bbva","country": "spain","categoria": "Finanzas y Banca",},{"name": "bankinter","country": "spain","categoria": "Finanzas y Banca",},{"name": "acciona-sa","country": "spain","categoria": "Energía y Recursos Naturales",},{"name": "caixabank-sa","country": "spain","categoria": "Finanzas y Banca",},{"name": "enagas","country": "spain","categoria": "Energía y Recursos Naturales",},{"name": "gas-natural-sdg","country": "spain","categoria": "Energía y Recursos Naturales",},{"name": "grifols","country": "spain","categoria": "Salud y Farmacéutica",},{"name": "grupo-ferrovial","country": "spain","categoria": "Construcción e Inmobiliaria",},{"name": "red-electrica","country": "spain","categoria": "Energía y Recursos Naturales",},{"name": "inditex","country": "spain","categoria": "Minorista",},{"name": "repsol-ypf","country": "spain","categoria": "Energía y Recursos Naturales",},{"name": "iberdrola","country": "spain","categoria": "Energía y Recursos Naturales",},{"name": "indra-sistemas","country": "spain","categoria": "Tecnología y Software",},{"name": "mapfre","country": "spain","categoria": "Finanzas y Banca",},{"name": "telefonica","country": "spain","categoria": "Telecomunicaciones y Medios de Comunicación",},{"name": "sacyr-valle","country": "spain","categoria": "Construcción e Inmobiliaria",},{"name": "bco-de-sabadell","country": "spain","categoria": "Finanzas y Banca",},{"name": "banco-santander","country": "spain","categoria": "Finanzas y Banca",},{"name": "inmob-colonial","country": "spain","categoria": "Construcción e Inmobiliaria",},{"name": "intl.-cons.-air-grp?cid=13809","country": "spain","categoria": "Transporte y Logística",},{"name": "endesa","country": "spain","categoria": "Energía y Recursos Naturales",},{"name": "amadeus","country": "spain","categoria": "Tecnología y Software",},{"name": "laboratorios-farmaceuticos-rovi-sa","country": "spain","categoria": "Salud y Farmacéutica",},{"name": "solaria-energia-y-medio-ambiente","country": "spain","categoria": "Energía y Recursos Naturales",},{"name": "melia-hotels-international-sa","country": "spain","categoria": "Turismo y Viajes",},{"name": "fluidra-sa","country": "spain","categoria": "Manufactura y Tecnología Industrial",},{"name": "arcelormittal-reg?cid=32439","country": "spain","categoria": "Manufactura y Tecnología Industrial",},{"name": "merlin-properties-sa","country": "spain","categoria": "Construcción e Inmobiliaria",},{"name": "logista","country": "spain","categoria": "Transporte y Logística",},{"name": "aena-aeropuertos-sa","country": "spain","categoria": "Transporte y Logística",},{"name": "cellnex-telecom","country": "spain","categoria": "Telecomunicaciones y Medios de Comunicación",},{"name": "unicaja-banco-sa","country": "spain","categoria": "Finanzas y Banca",},{"name": "corp-acciona-energias-renovables","country": "spain","categoria": "Energía y Recursos Naturales",},{"name": "aguas-andinas","country": "chile","categoria": "Energía y Recursos Naturales",},{"name": "emb-andina-b","country": "chile","categoria": "Manufactura y Tecnología Industrial",},{"name": "aesgener","country": "chile","categoria": "Energía y Recursos Naturales",},{"name": "bci-(sn)","country": "chile","categoria": "Finanzas y Banca",},{"name": "cap","country": "chile","categoria": "Energía y Recursos Naturales",},{"name": "cmpc","country": "chile","categoria": "Manufactura y Tecnología Industrial",},{"name": "cervecerias-un","country": "chile","categoria": "Alimentos y Bebidas",},{"name": "cencosud","country": "chile","categoria": "Minorista",},{"name": "banco-de-chile-(sn)","country": "chile","categoria": "Finanzas y Banca",},{"name": "vina-concha-to","country": "chile","categoria": "Alimentos y Bebidas",},{"name": "corpbanca-(sn)","country": "chile","categoria": "Finanzas y Banca",},{"name": "colbun","country": "chile","categoria": "Energía y Recursos Naturales",},{"name": "empresas-copec","country": "chile","categoria": "Energía y Recursos Naturales",},{"name": "ecl-sa","country": "chile","categoria": "Energía y Recursos Naturales",},{"name": "enersis","country": "chile","categoria": "Energía y Recursos Naturales",},{"name": "entel","country": "chile","categoria": "Telecomunicaciones y Medios de Comunicación",},{"name": "falabella","country": "chile","categoria": "Minorista",},{"name": "iam-sa","country": "chile","categoria": "Manufactura y Tecnología Industrial",},{"name": "parq-arauco","country": "chile","categoria": "Construcción e Inmobiliaria",},{"name": "ripley-corp","country": "chile","categoria": "Minorista",},{"name": "grupo-security","country": "chile","categoria": "Finanzas y Banca",},{"name": "sonda","country": "chile","categoria": "Tecnología y Software",},{"name": "soquimich-b","country": "chile","categoria": "Manufactura y Tecnología Industrial",},{"name": "santander-chil","country": "chile","categoria": "Finanzas y Banca",},{"name": "vapores","country": "chile","categoria": "Transporte y Logística",},{"name": "enersis-chile-sa","country": "chile","categoria": "Energía y Recursos Naturales",},{"name": "smu","country": "chile","categoria": "Alimentos y Bebidas",},{"name": "plaza","country": "chile","categoria": "Construcción e Inmobiliaria",},{"name": "cencosud-shopping-sa","country": "chile","categoria": "Minorista",},{"name": "basf-ag","country": "germany","categoria": "Manufactura y Tecnología Industrial",},{"name": "bayer-ag","country": "germany","categoria": "Salud y Farmacéutica",},{"name": "allianz-ag","country": "germany","categoria": "Finanzas y Banca",},{"name": "adidas-salomon","country": "germany","categoria": "Minorista",},{"name": "siemens","country": "germany","categoria": "Manufactura y Tecnología Industrial",},{"name": "deutsche-bank","country": "germany","categoria": "Finanzas y Banca",},{"name": "continental-ag","country": "germany","categoria": "Manufactura y Tecnología Industrial",},{"name": "deutsche-post","country": "germany","categoria": "Transporte y Logística",},{"name": "daimler","country": "germany","categoria": "Manufactura y Tecnología Industrial",},{"name": "porsche","country": "germany","categoria": "Manufactura y Tecnología Industrial",},{"name": "henkel-hgaa-vz","country": "germany","categoria": "Manufactura y Tecnología Industrial",},{"name": "commerzbank-ag","country": "germany","categoria": "Finanzas y Banca",},{"name": "dt-boerse","country": "germany","categoria": "Finanzas y Banca",},{"name": "bay-mot-werke","country": "germany","categoria": "Manufactura y Tecnología Industrial",},{"name": "dt-telekom","country": "germany","categoria": "Telecomunicaciones y Medios de Comunicación",},{"name": "merck-kgaa","country": "germany","categoria": "Salud y Farmacéutica",},{"name": "infineon-tech","country": "germany","categoria": "Tecnología y Software",},{"name": "muench.-rueck","country": "germany","categoria": "Finanzas y Banca",},{"name": "sap-ag","country": "germany","categoria": "Tecnología y Software",},{"name": "rheinmetall","country": "germany","categoria": "Manufactura y Tecnología Industrial",},{"name": "beiersdorf","country": "germany","categoria": "Salud y Farmacéutica",},{"name": "fresenius-ag","country": "germany","categoria": "Salud y Farmacéutica",},{"name": "hannover-rueck","country": "germany","categoria": "Finanzas y Banca",},{"name": "rwe-st-a","country": "germany","categoria": "Energía y Recursos Naturales",},{"name": "mtu-aero-eng","country": "germany","categoria": "Manufactura y Tecnología Industrial",},{"name": "symrise-ag","country": "germany","categoria": "Alimentos y Bebidas",},{"name": "heidelbergcement-ag-exch","country": "germany","categoria": "Construcción e Inmobiliaria",},{"name": "qiagen","country": "germany","categoria": "Salud y Farmacéutica",},{"name": "e.on","country": "germany","categoria": "Energía y Recursos Naturales",},{"name": "brenntag-ag","country": "germany","categoria": "Alimentos y Bebidas",},{"name": "sartorius-ag-vz","country": "germany","categoria": "Salud y Farmacéutica",},{"name": "volkswagen-vz","country": "germany","categoria": "Manufactura y Tecnología Industrial",},{"name": "deutsche-annington-immobilien-se","country": "germany","categoria": "Construcción e Inmobiliaria",},{"name": "zalando-se","country": "germany","categoria": "Minorista",},{"name": "covestro-ag","country": "germany","categoria": "Manufactura y Tecnología Industrial",},{"name": "eads?cid=962988","country": "germany","categoria": "Transporte y Logística",},{"name": "siemens-healthineers-ag","country": "germany","categoria": "Salud y Farmacéutica",},{"name": "siemens-energy-ag","country": "germany","categoria": "Energía y Recursos Naturales",},{"name": "daimler-truck-holding","country": "germany","categoria": "Manufactura y Tecnología Industrial",},{"name": "richemont","country": "switzerland","categoria": "Minorista",},{"name": "abb-ltd","country": "switzerland","categoria": "Manufactura y Tecnología Industrial",},{"name": "holcim","country": "switzerland","categoria": "Construcción e Inmobiliaria",},{"name": "logitech","country": "switzerland","categoria": "Tecnología y Software",},{"name": "zurich-fin","country": "switzerland","categoria": "Finanzas y Banca",},{"name": "swiss-life","country": "switzerland","categoria": "Finanzas y Banca",},{"name": "novartis","country": "switzerland","categoria": "Salud y Farmacéutica",},{"name": "nestle-ag","country": "switzerland","categoria": "Alimentos y Bebidas",},{"name": "swiss-re","country": "switzerland","categoria": "Finanzas y Banca",},{"name": "roche-hldg","country": "switzerland","categoria": "Salud y Farmacéutica",},{"name": "lonza-grp","country": "switzerland","categoria": "Salud y Farmacéutica",},{"name": "swisscom","country": "switzerland","categoria": "Telecomunicaciones y Medios de Comunicación",},{"name": "geberit","country": "switzerland","categoria": "Construcción e Inmobiliaria",},{"name": "sika-i","country": "switzerland","categoria": "Manufactura y Tecnología Industrial",},{"name": "partners-group","country": "switzerland","categoria": "Finanzas y Banca",},{"name": "kuehne---nagel","country": "switzerland","categoria": "Transporte y Logística",},{"name": "sonova-h-ag","country": "switzerland","categoria": "Salud y Farmacéutica",},{"name": "ubs-group-n","country": "switzerland","categoria": "Finanzas y Banca",},{"name": "givaudan-sa-cfd","country": "switzerland","categoria": "Alimentos y Bebidas",},{"name": "alcon-ag","country": "switzerland","categoria": "Salud y Farmacéutica",},{"name": "banco-provincial-sa","country": "venezuela","categoria": "Finanzas y Banca",},{"name": "mercantil-servicios-fin-ca-a","country": "venezuela","categoria": "Finanzas y Banca",},{"name": "mercantil-servicios-fin-ca-b","country": "venezuela","categoria": "Finanzas y Banca",},{"name": "corimon-ca","country": "venezuela","categoria": "Manufactura y Tecnología Industrial",},{"name": "envases-venezolanos-sa","country": "venezuela","categoria": "Manufactura y Tecnología Industrial",},{"name": "fvi-fondo-de-valores-inmobiliarios","country": "venezuela","categoria": "Construcción e Inmobiliaria",},{"name": "manufacturas-de-papel-ca-manpa-saca","country": "venezuela","categoria": "Manufactura y Tecnología Industrial",},{"name": "siderurgica-venezolana-sivensa-sa","country": "venezuela","categoria": "Manufactura y Tecnología Industrial",},{"name": "nacional-telefonos-de-venezuela-ca","country": "venezuela","categoria": "Telecomunicaciones y Medios de Comunicación",},{"name": "volcan-cmp-min?cid=102134","country": "peru","categoria": "Energía y Recursos Naturales",},{"name": "ferreyros","country": "peru","categoria": "Manufactura y Tecnología Industrial",},{"name": "cerro-verde","country": "peru","categoria": "Energía y Recursos Naturales",},{"name": "buenaventura-mining?cid=102138","country": "peru","categoria": "Energía y Recursos Naturales",},{"name": "grana-y-monter","country": "peru","categoria": "Alimentos y Bebidas",},{"name": "minsur","country": "peru","categoria": "Energía y Recursos Naturales",},{"name": "unacem","country": "peru","categoria": "Manufactura y Tecnología Industrial",},{"name": "alicorp","country": "peru","categoria": "Alimentos y Bebidas",},{"name": "credicorp-ltd?cid=102145","country": "peru","categoria": "Finanzas y Banca",},{"name": "intercorp-financial-services-inc?cid=102146","country": "peru","categoria": "Finanzas y Banca",},{"name": "bco-continenta","country": "peru","categoria": "Finanzas y Banca",},{"name": "cem-pacasmayo","country": "peru","categoria": "Manufactura y Tecnología Industrial",},{"name": "aceros-arequip","country": "peru","categoria": "Manufactura y Tecnología Industrial",},{"name": "casa-grande","country": "peru","categoria": "Alimentos y Bebidas",},{"name": "panoro-minerals-ltd?cid=102152","country": "peru","categoria": "Energía y Recursos Naturales",},{"name": "milpo","country": "peru","categoria": "Energía y Recursos Naturales",},{"name": "edegel","country": "peru","categoria": "Energía y Recursos Naturales",},{"name": "sider","country": "peru","categoria": "Manufactura y Tecnología Industrial",},{"name": "edelnor","country": "peru","categoria": "Energía y Recursos Naturales",},{"name": "inretail-peru","country": "peru","categoria": "Minorista",},{"name": "backus-johnsto","country": "peru","categoria": "Alimentos y Bebidas",},{"name": "sociedad-minera-el-brocal-saa","country": "peru","categoria": "Energía y Recursos Naturales",},{"name": "southern-copper-corp.?cid=950569","country": "peru","categoria": "Energía y Recursos Naturales",},{"name": "enersur-sa","country": "peru","categoria": "Energía y Recursos Naturales",},{"name": "inversiones-centenario","country": "peru","categoria": "Finanzas y Banca",},{"name": "corporacion-aceros-arequipa-sa","country": "peru","categoria": "Manufactura y Tecnología Industrial",},{"name": "bolsa-de-valores-de-lima-saa","country": "peru","categoria": "Finanzas y Banca",},{"name": "rimac-seguros","country": "peru","categoria": "Finanzas y Banca",},{"name": "cemargos","country": "colombia","categoria": "Construcción e Inmobiliaria",},{"name": "celsia","country": "colombia","categoria": "Energía y Recursos Naturales",},{"name": "canacol-energy-ltd?cid=102104","country": "colombia","categoria": "Energía y Recursos Naturales",},{"name": "corficolcf","country": "colombia","categoria": "Finanzas y Banca",},{"name": "bcolombia","country": "colombia","categoria": "Finanzas y Banca",},{"name": "bvc","country": "colombia","categoria": "Finanzas y Banca",},{"name": "bogota","country": "colombia","categoria": "Construcción e Inmobiliaria",},{"name": "ecopetrol-cn","country": "colombia","categoria": "Energía y Recursos Naturales",},{"name": "eeb","country": "colombia","categoria": "Energía y Recursos Naturales",},{"name": "etb","country": "colombia","categoria": "Telecomunicaciones y Medios de Comunicación",},{"name": "grupoargos","country": "colombia","categoria": "Construcción e Inmobiliaria",},{"name": "gruposura","country": "colombia","categoria": "Finanzas y Banca",},{"name": "isa","country": "colombia","categoria": "Transporte y Logística",},{"name": "nutresa","country": "colombia","categoria": "Alimentos y Bebidas",},{"name": "pfaval","country": "colombia","categoria": "Finanzas y Banca",},{"name": "pfbcolom","country": "colombia","categoria": "Finanzas y Banca",},{"name": "pfcemargos","country": "colombia","categoria": "Construcción e Inmobiliaria",},{"name": "pfdavvnda","country": "colombia","categoria": "Finanzas y Banca",},{"name": "pfgrupoarg","country": "colombia","categoria": "Construcción e Inmobiliaria",},{"name": "pfgrupsura","country": "colombia","categoria": "Finanzas y Banca",},{"name": "promigas","country": "colombia","categoria": "Energía y Recursos Naturales",},{"name": "corporacion-financiera-colombiana","country": "colombia","categoria": "Finanzas y Banca",},{"name": "mineros-sa","country": "colombia","categoria": "Energía y Recursos Naturales",},{"name": "organizacion-terpel-sa","country": "colombia","categoria": "Energía y Recursos Naturales",},{"name": "grupo-bolivar-sa","country": "colombia","categoria": "Finanzas y Banca",},{"name": "afk-sistema_rts","country": "russia","categoria": "Tecnología y Software",},{"name": "aeroflot","country": "russia","categoria": "Transporte y Logística",},{"name": "fsk-ees_rts","country": "russia","categoria": "Energía y Recursos Naturales",},{"name": "gmk-noril-nickel_rts","country": "russia","categoria": "Energía y Recursos Naturales",},{"name": "gazprom_rts","country": "russia","categoria": "Energía y Recursos Naturales",},{"name": "lukoil_rts","country": "russia","categoria": "Energía y Recursos Naturales",},{"name": "mmk_rts","country": "russia","categoria": "Manufactura y Tecnología Industrial",},{"name": "mts_rts","country": "russia","categoria": "Telecomunicaciones y Medios de Comunicación",},{"name": "magnit_rts","country": "russia","categoria": "Minorista",},{"name": "nlmk_rts","country": "russia","categoria": "Manufactura y Tecnología Industrial",},{"name": "novatek_rts","country": "russia","categoria": "Energía y Recursos Naturales",},{"name": "polyus-zoloto_rts","country": "russia","categoria": "Energía y Recursos Naturales",},{"name": "rosneft_rts","country": "russia","categoria": "Energía y Recursos Naturales",},{"name": "sberbank_rts","country": "russia","categoria": "Finanzas y Banca",},{"name": "sberbank-p_rts","country": "russia","categoria": "Finanzas y Banca",},{"name": "severstal_rts","country": "russia","categoria": "Manufactura y Tecnología Industrial",},{"name": "surgutneftegas_rts","country": "russia","categoria": "Energía y Recursos Naturales",},{"name": "surgutneftegas-p_rts","country": "russia","categoria": "Energía y Recursos Naturales",},{"name": "tatneft_rts","country": "russia","categoria": "Energía y Recursos Naturales",},{"name": "transneft-p_rts","country": "russia","categoria": "Transporte y Logística",},{"name": "vtb_rts","country": "russia","categoria": "Finanzas y Banca",},{"name": "tatneft-p_rts","country": "russia","categoria": "Energía y Recursos Naturales",},{"name": "gidroogk-011d","country": "russia","categoria": "Energía y Recursos Naturales",},{"name": "pik_rts","country": "russia","categoria": "Construcción e Inmobiliaria",},{"name": "e.on-russia","country": "russia","categoria": "Energía y Recursos Naturales",},{"name": "phosagro","country": "russia","categoria": "Alimentos y Bebidas",},{"name": "rostelecom","country": "russia","categoria": "Telecomunicaciones y Medios de Comunicación",},{"name": "alrosa-ao","country": "russia","categoria": "Energía y Recursos Naturales",},{"name": "moskovskaya-birzha-oao","country": "russia","categoria": "Finanzas y Banca",},{"name": "yandex?cid=102063","country": "russia","categoria": "Tecnología y Software",},{"name": "united-company-rusal-plc`","country": "russia","categoria": "Manufactura y Tecnología Industrial",},{"name": "moskovskiy-kreditnyi-bank-oao","country": "russia","categoria": "Finanzas y Banca",},{"name": "ros-agro-plc","country": "russia","categoria": "Alimentos y Bebidas",},{"name": "x5-retail-grp?cid=1061926","country": "russia","categoria": "Minorista",},{"name": "tcs-group-holding-plc?cid=1153662","country": "russia","categoria": "Tecnología y Software",},{"name": "mail.ru-grp-wi?cid=1163363","country": "russia","categoria": "Tecnología y Software",},{"name": "headhunter-group-plc","country": "russia","categoria": "Tecnología y Software",},{"name": "globaltrans-inv?cid=1167212","country": "russia","categoria": "Transporte y Logística",},{"name": "ozon-holdings-plc","country": "russia","categoria": "Minorista",}];

// "Manufactura y Tecnología Industrial"
// "Energía y Recursos Naturales"
// "Tecnología y Software"
// "Telecomunicaciones y Medios de Comunicación"
// "Finanzas y Banca"
// "Alimentos y Bebidas"
// "Salud y Farmacéutica"
// "Minorista"
// "Construcción e Inmobiliaria"
// "Transporte y Logística"
// "Seguros"
// "Agricultura"
// "Educación"
// "Turismo y Viajes"
// "Moda y Vestimenta"

// Lista de categorías únicas obtenida previamente
var categoriasUnicasArray = [
    "Manufactura y Tecnología Industrial",
    "Energía y Recursos Naturales",
    "Tecnología y Software",
    "Telecomunicaciones y Medios de Comunicación",
    "Finanzas y Banca",
    "Alimentos y Bebidas",
    "Salud y Farmacéutica",
    "Minorista",
    "Construcción e Inmobiliaria",
    "Transporte y Logística",
    "Seguros",
    "Agricultura",
    "Educación",
    "Turismo y Viajes",
    "Moda y Vestimenta"
  ];
  
  // Variables para almacenar objetos divididos por categoría
  var categoriasDivididas = {};
  
  // Inicializar cada categoría con un array vacío
  for (var i = 0; i < categoriasUnicasArray.length; i++) {
    var categoria = categoriasUnicasArray[i];
    categoriasDivididas[categoria] = [];
  }
  
  // Iterar a través de companyInfo y dividir objetos según la categoría
  for (var i = 0; i < companyInfo.length; i++) {
    var company = companyInfo[i];
    var categoria = company.categoria;
    categoriasDivididas[categoria].push(company);
  }
  
  // Ahora tienes objetos separados por categoría en el objeto categoriasDivididas
  console.log(categoriasDivididas);

  