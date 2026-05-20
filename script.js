// Array de objetos contendo os dados de cada presente
const presentes = [
    {
        nome: "Fatiador Cortador Ralador",
        imagem: "img/50.png",
        link: "https://shopee.com.br/Profissional-Multiuso-Cozinha-Slicer-A%C3%A7o-Inox-16-em-1-Fatiador-Cortador-Ralador-De-Legumes-Verduras-Frutas-Alimentos-i.1293262405.22699028918?extraParams=%7B%22display_model_id%22%3A179409884085%2C%22model_selection_logic%22%3A3%7D&rModelId=179409884085&sp_atk=0baf95a0-1d6c-4baa-a36a-57ba01039f47&vItemId=58252453240&vModelId=228797208491&vShopId=1665239494&xptdk=0baf95a0-1d6c-4baa-a36a-57ba01039f47"
    },
 {
        nome: "Porta Ovos",
        imagem: "img/51.png",
        link: "https://shopee.com.br/Porta-Ovos-4-Andares-Rolante-em-Pl%C3%A1stico-para-Geladeira-Organizador-24-a-30-Ovos-i.462426918.23794330101?extraParams=%7B%22display_model_id%22%3A199178474086%2C%22model_selection_logic%22%3A3%7D&rModelId=199178474086&sp_atk=24e1fa7d-7311-4335-9652-1df6621a0a86&vItemId=22299282699&vModelId=229434982040&vShopId=1665239494&xptdk=24e1fa7d-7311-4335-9652-1df6621a0a86"
    },
     {
        nome: "Kit 10 potes marmitas",
        imagem: "img/52.png",
        link: "https://shopee.com.br/Kit-10-Potes-Marmitas-1.000ml-Vasilhas-transparentes-BPA-FREE-reutiliz%C3%A1vel-cozinha-microondas-i.322050038.23498679662?extraParams=%7B%22display_model_id%22%3A229424154536%2C%22model_selection_logic%22%3A3%7D&rModelId=229424154536&sp_atk=00212599-8229-48e0-a1f8-2ae5f2d4b327&vItemId=58206134582&vModelId=139655437469&vShopId=1665239494&xptdk=00212599-8229-48e0-a1f8-2ae5f2d4b327"
    },
         {
        nome: "jarra de Vidro",
        imagem: "img/53.png",
        link: "https://shopee.com.br/Jarra-De-Vidro-Su%C3%AD%C3%A7a-1-Litro-Jarra-Para-Suco-%C3%81gua-Vidro-Resistente-i.1014347671.23693909087?extraParams=%7B%22display_model_id%22%3A238784191405%2C%22model_selection_logic%22%3A3%7D&rModelId=238784191405&sp_atk=d556364f-36a8-4a08-a950-5130dfec1711&vItemId=23599298393&vModelId=189616517951&vShopId=1665239494&xptdk=d556364f-36a8-4a08-a950-5130dfec1711"
    },
             {
        nome: "Suporte Organizador",
        imagem: "img/54.png",
        link: "https://shopee.com.br/Suporte-para-Pratos-Organizador-de-Arm%C3%A1rio-2-andares-Aramado-Cozinha-i.915198403.58201022828?extraParams=%7B%22display_model_id%22%3A219615013751%2C%22model_selection_logic%22%3A3%7D&rModelId=219615013751&sp_atk=d76a7d1a-b847-4038-85f1-b99707316208&vItemId=58203319524&vModelId=169724170633&vShopId=1665239494&xptdk=d76a7d1a-b847-4038-85f1-b99707316208"
    },
                 {
        nome: "Tijela Multiuso",
        imagem: "img/55.png",
        link: "https://shopee.com.br/Tigela-Multiuso-Profissional-Fundo-Cozinha-Completa-Gourmet-i.373277040.8468874387?extraParams=%7B%22display_model_id%22%3A82881298876%2C%22model_selection_logic%22%3A3%7D&rModelId=82881298876&sp_atk=751a951f-164a-44f5-aa65-550faf47c704&vItemId=58253483555&vModelId=129654638626&vShopId=1665239494&xptdk=751a951f-164a-44f5-aa65-550faf47c704"
    },
                     {
        nome: "Faqueiro",
        imagem: "img/56.png",
        link: "https://shopee.com.br/Kit-Completo-Facas-4-Pe%C3%A7as-Uso-Di%C3%A1rio-Cozinha-i.311200678.58258492006?extraParams=%7B%22display_model_id%22%3A209188029359%2C%22model_selection_logic%22%3A3%7D&sp_atk=28c4a1e2-edb4-4495-b44f-805e904d093a&xptdk=28c4a1e2-edb4-4495-b44f-805e904d093a"
    },
                         {
        nome: "Jogo de 6 taças",
        imagem: "img/57.png",
        link: "https://shopee.com.br/Jogo-6-Ta%C3%A7a-Diamante-Copo-Vidro-Transparente-Bico-De-Jaca-330ml-i.1243787136.23298778570?extraParams=%7B%22display_model_id%22%3A209177706251%2C%22model_selection_logic%22%3A3%7D&rModelId=209177706251&sp_atk=75b65489-619f-4579-af67-e25011dd9296&vItemId=58200835612&vModelId=189614815352&vShopId=1665239494&xptdk=75b65489-619f-4579-af67-e25011dd9296"
    },
                             {
        nome: "Kit tapete para banheiro",
        imagem: "img/58.png",
        link: "https://shopee.com.br/Tapete-para-Banheiro-kit-com-3-pe%C3%A7as-Antiderrapante-Super-Soft-atacado-Pe%C3%A7as-Algod%C3%A3o-e-Pel%C3%BAcia-i.608748879.51659728534?extraParams=%7B%22display_model_id%22%3A282581681315%2C%22model_selection_logic%22%3A3%7D&sp_atk=d8f911b1-efe0-4609-89f6-70888e2a768d&xptdk=d8f911b1-efe0-4609-89f6-70888e2a768d"
    },
                                 {
        nome: "Tapete para banheiro",
        imagem: "img/59.png",
        link: "https://shopee.com.br/1-2-Tapete-de-Banheiro-Absorvente-Antiderrapante-Secagem-R%C3%A1pida-i.343246764.58258313230?extraParams=%7B%22display_model_id%22%3A199620347901%2C%22model_selection_logic%22%3A3%7D&sp_atk=669ff2ba-c416-43fa-a09a-f4602f5bc5e8&xptdk=669ff2ba-c416-43fa-a09a-f4602f5bc5e8"
    },
                                     {
        nome: "Pano Microfibra kit 10un",
        imagem: "img/60.png",
        link: "https://shopee.com.br/Pano-de-Microfibra-Flanela-Kit-10-Un-30x30cm-Multiuso-Limpeza-Dom%C3%A9stica-Vidro-Pia-Cor-Aleat%C3%B3ria-CA!!-i.1468361340.58257168077?extraParams=%7B%22display_model_id%22%3A189187174982%2C%22model_selection_logic%22%3A3%7D&sp_atk=2cc57c3d-9272-424f-8740-3a51355ebbf3&xptdk=2cc57c3d-9272-424f-8740-3a51355ebbf3"
    },
                                         {
        nome: "Petisqueira",
        imagem: "img/61.png",
        link: "https://shopee.com.br/Kit-Petisqueira-para-Petiscos-Frios-Queijo-Churrasco-com-Molheira-Ramekin-e-Garfinhos-i.339641067.58205634424?extraParams=%7B%22display_model_id%22%3A199186132830%2C%22model_selection_logic%22%3A3%7D&sp_atk=29cbeeac-ca99-4f51-958c-b8dece57cf27&xptdk=29cbeeac-ca99-4f51-958c-b8dece57cf27"
    },
                                             {
        nome: "Formas Kit 3 un",
        imagem: "img/62.png",
        link: "https://shopee.com.br/Kit-3-Formas-com-Fundo-Remov%C3%ADvel-Antiaderente-com-Fundo-Remov%C3%ADvel-para-torta-Bolo-i.352674932.23093594578?extraParams=%7B%22display_model_id%22%3A229435813467%2C%22model_selection_logic%22%3A3%7D&rModelId=229435813467&sp_atk=55d2e533-164b-4582-a28f-601d47e011ae&vItemId=22599385489&vModelId=219618953748&vShopId=1665239494&xptdk=55d2e533-164b-4582-a28f-601d47e011ae"
    },
                                                 {
        nome: "Tela mosquiteiro alimentos",
        imagem: "img/63.png",
        link: "https://shopee.com.br/Protetores-Tela-Mosquiteiro-Alimentos-Fruta-E-Bolo-i.524015837.10646064691?extraParams=%7B%22display_model_id%22%3A130205474710%2C%22model_selection_logic%22%3A3%7D&rModelId=130205474710&sp_atk=b8cf8002-9de0-43e6-b38a-722fbf59843e&vItemId=23599290605&vModelId=209617229637&vShopId=1665239494&xptdk=b8cf8002-9de0-43e6-b38a-722fbf59843e"
    },
                                                     {
        nome: "Varal de Chão",
        imagem: "img/64.png",
        link: "https://shopee.com.br/Varal-De-Ch%C3%A3o-3-Andares-Para-Roupas-e-Calcinhas-4-Rodas-Dobr%C3%A1vel-Refor%C3%A7ado-e-Port%C3%A1til-i.318583394.15782946794?extraParams=%7B%22display_model_id%22%3A159530862167%2C%22model_selection_logic%22%3A3%7D&sp_atk=1adf5189-da1c-48e1-aac4-cd625709d6a0&xptdk=1adf5189-da1c-48e1-aac4-cd625709d6a0"
    },
                                                         {
        nome: "Formas de Gelo kit 4un",
        imagem: "img/65.png",
        link: "https://shopee.com.br/Kit-4-Formas-de-Gelo-Silicone-Com-Tampa-R%C3%ADgida-Flex%C3%ADvel-Fundo-Retangular-14-Cubos-Multiuso-Lav%C3%A1vel-i.1384711887.22693870039?extraParams=%7B%22display_model_id%22%3A129649992692%2C%22model_selection_logic%22%3A3%7D&sp_atk=4d15191d-18d4-4e03-96f6-e2c91fd2c5a2&xptdk=4d15191d-18d4-4e03-96f6-e2c91fd2c5a2"
    },
                                                            {
        nome: "Assadeira",
        imagem: "img/66.png",
        link: "https://shopee.com.br/Assadeiras-Lasanheira-Travessa-de-vidro-Retangular-i.374232483.20748637042?extraParams=%7B%22display_model_id%22%3A127347609528%2C%22model_selection_logic%22%3A3%7D&rModelId=127347609528&sp_atk=08b5c616-6fbc-4e99-9433-ee8f6bb58939&vItemId=58203909310&vModelId=219617294654&vShopId=1665239494&xptdk=08b5c616-6fbc-4e99-9433-ee8f6bb58939"
    },
                                                                {
        nome: "Forma kit 2un",
        imagem: "img/67.png",
        link: "https://shopee.com.br/KIT-2-(DUAS)-Formas-Assadeira-P%C3%A3o-GRANDE-N%C2%B03-Caseiro-Bolo-Ingl%C3%AAs-Retangular-28x11x5cm-i.382616347.58203065858?extraParams=%7B%22display_model_id%22%3A228797927288%2C%22model_selection_logic%22%3A3%7D&rModelId=228797927288&sp_atk=10a9f038-9c06-4f5d-809c-844b2b60b805&vItemId=22194896561&vModelId=228801512289&vShopId=1665239494&xptdk=10a9f038-9c06-4f5d-809c-844b2b60b805"
    },
                                                                    {
        nome: "Kit utensilio de silicone",
        imagem: "img/68.png",
        link: "https://shopee.com.br/Kit-4p%C3%A7s-22cm-de-silicone-utens%C3%ADlios-cozinha-esp%C3%A1tula-colher-concha-escumadeira-i.1046470373.58209848077?extraParams=%7B%22display_model_id%22%3A189621339673%2C%22model_selection_logic%22%3A3%7D&sp_atk=df17a58f-09d9-4a09-9eb0-e77a3026257e&xptdk=df17a58f-09d9-4a09-9eb0-e77a3026257e"
    },
                                                                        {
        nome: "Kit Cabide 50 un",
        imagem: "img/69.png",
        link: "https://shopee.com.br/Cabide-Acr%C3%ADlico-Kit-50-Cabides-Para-Roupas-Transparente-Adulto-Refor%C3%A7ado-Organizador-i.1101178064.23397767557?extraParams=%7B%22display_model_id%22%3A189598928102%2C%22model_selection_logic%22%3A3%7D&rModelId=189598928102&sp_atk=174b89de-fa6f-4190-bb9c-a2bdd0771478&vItemId=58252410344&vModelId=199183661926&vShopId=1665239494&xptdk=174b89de-fa6f-4190-bb9c-a2bdd0771478"
    },
                                                                            {
        nome: "Pote com Medido",
        imagem: "img/70.png",
        link: "https://shopee.com.br/Pote-Herm%C3%A9tico-2.5L-Com-Copo-Medidor-Bico-Dosador-Cozinha-Mantimentos-Lavanderia-Multiuso-i.1619145136.23198934354?extraParams=%7B%22display_model_id%22%3A209179885715%2C%22model_selection_logic%22%3A3%7D&rModelId=209179885715&sp_atk=34f32608-a901-407b-b838-8be908c5930b&vItemId=58203319424&vModelId=129654593351&vShopId=1665239494&xptdk=34f32608-a901-407b-b838-8be908c5930b"
    },
                                                                                {
        nome: "Tábua de Madeira",
        imagem: "img/71.png",
        link: "https://shopee.com.br/T%C3%81BUA-TECA-PARA-CORTE-DE-CARNES-PETISQUEIRA-MADEIRA-NOBRE-TABUA-DE-CORTE-TECA-INVERTIDA-M%C3%89DIA-i.539823555.20699681619?extraParams=%7B%22display_model_id%22%3A169716616240%2C%22model_selection_logic%22%3A3%7D&sp_atk=644c435d-a046-4bec-97f1-62878e312dfa&xptdk=644c435d-a046-4bec-97f1-62878e312dfa"
    },
                                                                                    {
        nome: "Tábua Inox",
        imagem: "img/72.png",
        link: "https://shopee.com.br/T%C3%A1bua-De-Corte-304-A%C3%A7o-Inoxid%C3%A1vel-Antibacteriana-%C3%80-Prova-De-Mofo-46-cm-T%C3%A1bua-De-cozinha-i.1738554693.48458146733?extraParams=%7B%22display_model_id%22%3A390724963583%2C%22model_selection_logic%22%3A3%7D&sp_atk=a4b47b10-6e8e-4768-8cc1-9fe638c5a13a&xptdk=a4b47b10-6e8e-4768-8cc1-9fe638c5a13a"
    },
                                                                                        {
        nome: "Tábua de Passar Roupa",
        imagem: "img/73.png",
        link: "https://shopee.com.br/T%C3%A1bua-Mesa-de-Passar-Roupa-T%C3%A9rmica-Multiuso-Port%C3%A1til-i.661698210.20899319192?extraParams=%7B%22display_model_id%22%3A169397569589%2C%22model_selection_logic%22%3A3%7D&sp_atk=ef0c05e9-ed0e-478e-a78b-eefc03bf9d2b&xptdk=ef0c05e9-ed0e-478e-a78b-eefc03bf9d2b"
    },
                                                                                            {
        nome: "Abridor de Latas",
        imagem: "img/74.png",
        link: "https://shopee.com.br/Abridor-De-Latas-3-Em-1-Garrafas-A%C3%A7o-Inox-Profissional-Casa-i.1558233660.58256909383?extraParams=%7B%22display_model_id%22%3A219186995438%2C%22model_selection_logic%22%3A3%7D&sp_atk=b5939d15-9dbb-4ad7-bb31-1cbc12ccf9c6&xptdk=b5939d15-9dbb-4ad7-bb31-1cbc12ccf9c6"
    },
                                                                                                {
        nome: "Forma de Pizza",
        imagem: "img/75.png",
        link: "https://shopee.com.br/KIT-2-Formas-Bandeja-Grande-Antiaderente-Redonda-Pizza-P%C3%A3o-Queijo-Forma-30cm-i.414937135.56059335083?extraParams=%7B%22display_model_id%22%3A355825407440%2C%22model_selection_logic%22%3A3%7D&rModelId=355825407440&sp_atk=aca8a5c7-7911-4a4f-82e4-bc269eab30b9&vItemId=58206138616&vModelId=209186513984&vShopId=1665239494&xptdk=aca8a5c7-7911-4a4f-82e4-bc269eab30b9"
    },
    {
        nome: "Assadeira de Bolo",
        imagem: "img/76.png",
        link: "https://shopee.com.br/Jogo-de-3-Formas-de-e-Pudim-Bolo-N%C2%BA-18-20-e-22-Tubo-Cone-Aluminio-Bolo-Vulc%C3%A3o-Sui%C3%A7o-com-furo-i.1376556391.55707578738?extraParams=%7B%22display_model_id%22%3A420674845644%2C%22model_selection_logic%22%3A3%7D&sp_atk=64f57e1a-c111-4580-89ce-a8bbfeaa8acb&xptdk=64f57e1a-c111-4580-89ce-a8bbfeaa8acb"
    },    
    {
        nome: "Avental",
        imagem: "img/77.png",
        link: "https://shopee.com.br/Avental-De-Renda-De-Algod%C3%A3o-Puro-Estilo-Ocidental-Para-Mulheres-Cozinha-Cozimento-Fino-Ver%C3%A3o-Novo-Influenciador-i.1006215031.24283991062?extraParams=%7B%22display_model_id%22%3A127994004074%2C%22model_selection_logic%22%3A3%7D&sp_atk=a3e28186-cf0b-4f1b-8704-9c1e1def1aaa&xptdk=a3e28186-cf0b-4f1b-8704-9c1e1def1aaa"
    },    {
        nome: "Fue",
        imagem: "img/78.png",
        link: "https://shopee.com.br/Batedor-Manual-Tramontina-Softta-Cinza-i.1651670254.23794543928?extraParams=%7B%22display_model_id%22%3A239430735947%2C%22model_selection_logic%22%3A3%7D&sp_atk=c377e8fb-4741-408f-90f3-bd9366ab0dd2&xptdk=c377e8fb-4741-408f-90f3-bd9366ab0dd2"
    }, {
        nome: "Pilão de Madeira",
        imagem: "img/79.png",
        link: "https://shopee.com.br/Pil%C3%A3o-de-Bambu-Socador-Para-Tempero-Alho-Ervas-Finas-Multiuso-i.850501874.22898585594?extraParams=%7B%22display_model_id%22%3A189175855441%2C%22model_selection_logic%22%3A3%7D&sp_atk=a6689878-b869-49d6-be09-5ddf664bd30c&xptdk=a6689878-b869-49d6-be09-5ddf664bd30c"
    },
    {
        nome: "Kit Peneira Inox",
        imagem: "img/80.png",
        link: "https://shopee.com.br/Kit-Peneira-Coador-Manual-Em-A%C3%A7o-Inox-Para-Cozinha-i.1085236305.22292875800?extraParams=%7B%22display_model_id%22%3A228764289757%2C%22model_selection_logic%22%3A3%7D&rModelId=228764289757&sp_atk=60336c4b-b6af-4f2e-a5f2-e6425fbcaec9&vItemId=58206134593&vModelId=139655437488&vShopId=1665239494&xptdk=60336c4b-b6af-4f2e-a5f2-e6425fbcaec9"
    },
     {
        nome: "Pegador de Massas",
        imagem: "img/81.png",
        link: "https://shopee.com.br/Pegador-De-Massa-Tramontina-Inox-i.1116105179.23094015028?extraParams=%7B%22display_model_id%22%3A189607424441%2C%22model_selection_logic%22%3A3%7D&sp_atk=86abd1f6-9f61-4328-8b14-926dd16eb579&xptdk=86abd1f6-9f61-4328-8b14-926dd16eb579"
    },
         {
        nome: "Kit Utensílios",
        imagem: "img/82.png",
        link: "https://shopee.com.br/%E2%80%8E-Kit-Jogo-Utens%C3%ADlios-De-Cozinha-Tramontina-Ability-Preto-Antiaderente-Nylon-Pegadores-Conjunto-Multiuso-Cozinha-i.1203262771.23297783690?extraParams=%7B%22display_model_id%22%3A219179025134%2C%22model_selection_logic%22%3A3%7D&sp_atk=e5cc01d3-cad3-4cad-8f05-34e197911e8f&xptdk=e5cc01d3-cad3-4cad-8f05-34e197911e8f"
    },
             {
        nome: "Puxa Saco",
        imagem: "img/83.png",
        link: "https://shopee.com.br/Puxa-Saco-Xadrez-Bege-Porta-Sacolinha-De-Lixo-De-Cozinha-Basico-.-i.379509502.23394220424?extraParams=%7B%22display_model_id%22%3A179408265679%2C%22model_selection_logic%22%3A3%7D&sp_atk=03cb609f-250a-4744-bd30-61b32f12a5dc&xptdk=03cb609f-250a-4744-bd30-61b32f12a5dc"
    },
                 {
        nome: "Saleiro e Paliteiro",
        imagem: "img/84.png",
        link: "https://shopee.com.br/Saleiro-E-Paliteiro-Cer%C3%A2mica-O%C3%A1sis-90ml-Com-Suporte-3-Pe%C3%A7as-Luxo-Hauskraft-i.345663395.22398071160?extraParams=%7B%22display_model_id%22%3A228776264883%2C%22model_selection_logic%22%3A3%7D&sp_atk=d1e6cd2f-dfbe-44ee-826a-1c8b019fe1bb&xptdk=d1e6cd2f-dfbe-44ee-826a-1c8b019fe1bb"
    },
                     {
        nome: "Tesoura",
        imagem: "img/85.png",
        link: "https://shopee.com.br/Tesoura-Multiuso-Tramontina-A%C3%A7o-Inox-Costura-Escrit%C3%B3rio-Uso-Geral-Original-i.309841349.10621589637?extraParams=%7B%22display_model_id%22%3A109715278080%2C%22model_selection_logic%22%3A3%7D&sp_atk=ec4aa819-cb0e-4932-b0d3-d6743075d491&xptdk=ec4aa819-cb0e-4932-b0d3-d6743075d491"
    },
                         {
        nome: "Balde 10 l",
        imagem: "img/86.png",
        link: "https://shopee.com.br/Kit-2-1-Balde-Dobr%C3%A1vel-10-Litros-Retr%C3%A1til-Silicone-Powermaid-Resist%C3%AAnte-Com-Al%C3%A7a-e-Gancho-i.1447820189.55207119719?extraParams=%7B%22display_model_id%22%3A420635976796%2C%22model_selection_logic%22%3A3%7D&sp_atk=c86678c1-e4b9-4f31-a102-98eb067fd00d&xptdk=c86678c1-e4b9-4f31-a102-98eb067fd00d"
    },
                             {
        nome: "Espanador",
        imagem: "img/87.png",
        link: "https://shopee.com.br/Espanador-280-Cent%C3%ADmetros-Ajust%C3%A1vel-Telesc%C3%B3pica-Dobra-Duster-Escova-De-Limpeza-De-Poeira-i.1384708159.23093586900?extraParams=%7B%22display_model_id%22%3A219183769636%2C%22model_selection_logic%22%3A3%7D&sp_atk=d11df6c9-2c6e-4fc3-af3d-13f33c794eb5&xptdk=d11df6c9-2c6e-4fc3-af3d-13f33c794eb5"
    },
                                 {
        nome: "Capacho",
        imagem: "img/88.png",
        link: "https://shopee.com.br/Tapete-Porta-Entrada-Casa-Capacho-Vinil-40cm-x-60cm-Margarida-i.1125405787.58253950973?extraParams=%7B%22display_model_id%22%3A159553051600%2C%22model_selection_logic%22%3A3%7D&sp_atk=e8d7e16e-e9c3-4ec2-9f1e-06dadabeb66b&xptdk=e8d7e16e-e9c3-4ec2-9f1e-06dadabeb66b"
    },
                                     {
        nome: "Capacho",
        imagem: "img/89.png",
        link: "https://shopee.com.br/Tapete-Porta-de-Entrada-Limpou-o-Pezinho-Capacho-Antiderrapante-Lav%C3%A1vel-Interno-Externo-i.1556901328.51705032503?extraParams=%7B%22display_model_id%22%3A355463800728%2C%22model_selection_logic%22%3A3%7D&sp_atk=f5a7847b-4b5c-42ce-ba10-0efebb445150&xptdk=f5a7847b-4b5c-42ce-ba10-0efebb445150"
    },
                                         {
        nome: "Capacho kit 2",
        imagem: "img/90.png",
        link: "https://shopee.com.br/Kit-02-Tapetes-Capachos-Porta-Entrada-50x70cm-Trama-Premium-100-Algod%C3%A3o-i.1752595466.58258531664?extraParams=%7B%22display_model_id%22%3A239441030289%2C%22model_selection_logic%22%3A3%7D&sp_atk=06a6bfe5-2070-4291-b0d9-3804bf5fe2fd&xptdk=06a6bfe5-2070-4291-b0d9-3804bf5fe2fd"
    },
                                             {
        nome: "Enchimento Almofada kit",
        imagem: "img/91.png",
        link: "https://shopee.com.br/Kit-4-Almofadas-45cm-x-45cm-de-Espuma-Extra-Macio-Envio-Imediato-i.1511560387.23194946732?extraParams=%7B%22display_model_id%22%3A179415806485%2C%22model_selection_logic%22%3A3%7D&sp_atk=8b791a65-933c-4dc7-bdd3-78aa298b7acd&xptdk=8b791a65-933c-4dc7-bdd3-78aa298b7acd"
    },
                                                {
        nome: "Almofada kit",
        imagem: "img/92.png",
        link: "https://shopee.com.br/Kit-04-Almofadas-Cheias-em-Suede-Drapeada-45x45cm-Decorativas-Sala-Quarto-Sof%C3%A1-i.291258068.21897750753?extraParams=%7B%22display_model_id%22%3A109720089196%2C%22model_selection_logic%22%3A3%7D&sp_atk=0432cadc-23cf-4a37-b44f-4da187b87e42&xptdk=0432cadc-23cf-4a37-b44f-4da187b87e42"
    },
                                                    {
        nome: "Manta Microfibra",
        imagem: "img/93.png",
        link: "https://shopee.com.br/Manta-De-Microfibra-Queen-Casal-Toque-Extra-Macio-Antial%C3%A9rgico-Quentinho-Flanel-Habitat-i.1526576446.19999705731?extraParams=%7B%22display_model_id%22%3A179409454214%2C%22model_selection_logic%22%3A3%7D&sp_atk=1206106d-cea8-4de6-bb7e-f599fa939a20&xptdk=1206106d-cea8-4de6-bb7e-f599fa939a20"
    },
                                                        {
        nome: "Potes",
        imagem: "img/94.png",
        link: "https://shopee.com.br/Kit-3-Potes-Herm%C3%A9ticos-Sanremo-785ml-Retangular-Marmita-Freezer-Microondas-BPA-Free-Tampa-Veda%C3%A7%C3%A3o-i.1687078180.58207907524?extraParams=%7B%22display_model_id%22%3A209620077914%2C%22model_selection_logic%22%3A3%7D&sp_atk=b22945c6-dd1b-4880-8dcc-26be8fd20833&xptdk=b22945c6-dd1b-4880-8dcc-26be8fd20833"
    },
                                                            {
        nome: "Potes",
        imagem: "img/96.png",
        link: "https://shopee.com.br/Kit-10-Potes-Herm%C3%A9ticos-Electrolux-Pl%C3%A1stico-BPA-Free-Organizadores-Cozinha-i.984932739.22392515497?extraParams=%7B%22display_model_id%22%3A179704385996%2C%22model_selection_logic%22%3A3%7D&sp_atk=8407c623-51a9-495c-b87d-2ad193dc2189&xptdk=8407c623-51a9-495c-b87d-2ad193dc2189"
    },
                                                                {
        nome: "Descascador de batatas",
        imagem: "img/95.png",
        link: "https://shopee.com.br/Descascador-de-Batatas-Manual-Tramontina-Utilit%C3%A1-em-A%C3%A7o-Inox-com-Cabo-de-Polipropileno-Preto-i.775333751.22797736355?extraParams=%7B%22display_model_id%22%3A189165838977%2C%22model_selection_logic%22%3A3%7D&rModelId=189165838977&sp_atk=49853abc-bbda-4a30-baef-e9b0f05d0ba0&vItemId=58206141855&vModelId=159790681155&vShopId=1665239494&xptdk=49853abc-bbda-4a30-baef-e9b0f05d0ba0"
    },
                                                                    {
        nome: "Afiador de Facas Tramontina",
        imagem: "img/97.png",
        link: "https://shopee.com.br/Afiador-De-Facas-Profio-Tramontina-Base-Antideslizante-i.307785200.23198067711?extraParams=%7B%22display_model_id%22%3A189169228851%2C%22model_selection_logic%22%3A3%7D&rModelId=189169228851&sp_atk=d56e3725-c590-4017-a48b-258833209ea1&vItemId=23799357677&vModelId=149552652057&vShopId=1665239494&xptdk=d56e3725-c590-4017-a48b-258833209ea1"
    },
                                                                        {
        nome: "Colher longa",
        imagem: "img/98.png",
        link: "https://shopee.com.br/Colher-Longa-Tramontina-Utility-para-Coquetel-em-A%C3%A7o-Inox-30cm-i.925335143.58256329027?extraParams=%7B%22display_model_id%22%3A229438978205%2C%22model_selection_logic%22%3A3%7D&sp_atk=f4f6c22e-b9ef-418f-b8c6-2816f6cf5f9f&xptdk=f4f6c22e-b9ef-418f-b8c6-2816f6cf5f9f"
    },
                                                                            {
        nome: "Frigideira",
        imagem: "img/99.png",
        link: "https://shopee.com.br/Jogo-de-Frigideiras-TRAMONTINA-Antiaderente-2-Pe%C3%A7as-Turim-i.297611432.41430008882?extraParams=%7B%22display_model_id%22%3A297533129935%2C%22model_selection_logic%22%3A3%7D&sp_atk=ef8485b1-f7a2-45dd-917f-9ba08772b755&xptdk=ef8485b1-f7a2-45dd-917f-9ba08772b755"
    },
                                                                {
        nome: "Potes Tramontina",
        imagem: "img/100.png",
        link: "https://shopee.com.br/Jogo-de-Potes-Tramontina-MixColor-Algod%C3%A3o-7-Pe%C3%A7as-i.952347226.22394211970?extraParams=%7B%22display_model_id%22%3A159785312409%2C%22model_selection_logic%22%3A3%7D&sp_atk=b65edcde-8f7d-43b3-9793-24d9fa660d6c&xptdk=b65edcde-8f7d-43b3-9793-24d9fa660d6c"
    },
                                                                    {
        nome: "Utensílios Inox Tramontina",
        imagem: "img/101.png",
        link: "https://shopee.com.br/Jogo-De-Utens%C3%ADlios-Tramontina-Extrata-Em-A%C3%A7o-Inox-4-Pe%C3%A7as-Prata-i.1699117525.23394895663?extraParams=%7B%22display_model_id%22%3A139839150664%2C%22model_selection_logic%22%3A3%7D&sp_atk=dfe6c35f-3b44-4e51-859c-1b1406e7b14e&xptdk=dfe6c35f-3b44-4e51-859c-1b1406e7b14e"
    },
    {
        nome: "Kit Churrasco Tramontina",
        imagem: "img/102.png",
        link: "https://shopee.com.br/Kit-Churrasco-T%C3%A1bua-de-Carne-com-Faca-e-Garfo-Inox-Tramontina-i.361358337.22798350829?extraParams=%7B%22display_model_id%22%3A199605531752%2C%22model_selection_logic%22%3A3%7D&sp_atk=7986c13c-f354-43d7-add1-1a2ff5985bd2&xptdk=7986c13c-f354-43d7-add1-1a2ff5985bd2"
    },
    {
        nome: "Colher Silicone",
        imagem: "img/103.png",
        link: "https://shopee.com.br/Colher-de-Silicone-Cabo-Longo-30cm-Linha-Garbo-Cozinha-i.733707036.22098011520?extraParams=%7B%22display_model_id%22%3A238775252940%2C%22model_selection_logic%22%3A3%7D&sp_atk=e8800a2c-156c-42c7-b359-59bb12222bb0&xptdk=e8800a2c-156c-42c7-b359-59bb12222bb0"
    },
        {
        nome: "Apoiador de Panela",
        imagem: "img/104.png",
        link: "https://shopee.com.br/Descanso-de-Panela-Bambu-4-Suportes-Retr%C3%A1til-Porta-Panela-Apoio-Quente-Travessas-Formato-de-%C3%81rvore-i.324217028.58210065706?extraParams=%7B%22display_model_id%22%3A189189024275%2C%22model_selection_logic%22%3A3%7D&sp_atk=2ddd93e0-277a-4b30-8b8d-52d0ed5c26b0&xptdk=2ddd93e0-277a-4b30-8b8d-52d0ed5c26b0"
    },
            {
        nome: "Escova Elétrica Limpeza",
        imagem: "img/105.png",
        link: "https://shopee.com.br/Escova-El%C3%A9trica-Limpeza-Kit-12-em-1-Sem-Fio-Girat%C3%B3ria-Port%C3%A1til-i.1243683750.20599839417?extraParams=%7B%22display_model_id%22%3A179407009977%2C%22model_selection_logic%22%3A3%7D"
    },
                {
        nome: "Rodo",
        imagem: "img/106.png",
        link: "https://shopee.com.br/1-2-Rodo-de-Silicone-Para-Limpeza-de-Piso-Vidros-Com-Gancho-Secos-e-Molhados-Uso-Duplo-Vassoura-M%C3%A1gica-i.384552607.23693841317?extraParams=%7B%22display_model_id%22%3A189172999488%2C%22model_selection_logic%22%3A3%7D"
    },
                    {
        nome: "Processador de Alimentos",
        imagem: "img/107.png",
        link: "https://shopee.com.br/Processador-de-Alimentos-Triturador-de-Alho-900ml-500ml-170ml-Escolha-o-Tamanho-e-Cor-i.1325749486.58205363941?extraParams=%7B%22display_model_id%22%3A209185927894%2C%22model_selection_logic%22%3A3%7D&sp_atk=22b3bd9f-a2dd-4cc4-8261-47e757114a1b&xptdk=22b3bd9f-a2dd-4cc4-8261-47e757114a1b"
    },
                        {
        nome: "Porta Frios",
        imagem: "img/108.png",
        link: "https://shopee.com.br/Pote-Porta-Frios-Com-2-Divis%C3%B3rias-Sanremo-Herm%C3%A9tica-Vac-Freezer-Livre-Bpa-i.1477402890.52955822030?extraParams=%7B%22display_model_id%22%3A262388298303%2C%22model_selection_logic%22%3A3%7D&sp_atk=01e05b63-1529-482d-8517-8035916ef218&xptdk=01e05b63-1529-482d-8517-8035916ef218"
    },
                            {
        nome: "Porta Queijo",
        imagem: "img/109.png",
        link: "https://shopee.com.br/Pote-Porta-Queijo-Queijeira-Trava-Mais-Com-Escorredor-Veda-Bem-BPA-Free-Plas%C3%BAtil-i.710933076.58253248053?extraParams=%7B%22display_model_id%22%3A199616847190%2C%22model_selection_logic%22%3A3%7D&sp_atk=618e6d69-85e8-4ff4-8117-f054daab8def&xptdk=618e6d69-85e8-4ff4-8117-f054daab8def"
    },
                              {
        nome: "Mop",
        imagem: "img/110.png",
        link: "https://shopee.com.br/product/1389142964/54653322708?d_id=a8d73&uls_trackid=55mhf3n702jv&utm_content=3nQ4V8GwPsSJeEFRjRdSqUefVoNf"
    },
                                  {
        nome: "Coador Café Inox",
        imagem: "img/111.png",
        link: "https://shopee.com.br/Filtro-De-Caf%C3%A9-Coador-Caf%C3%A9-Ch%C3%A1-Inox-De-Alta-Qualidade-At%C3%B3xico-Reutiliz%C3%A1vel-Pour-Over-Envio-imediato-i.1800811941.58209733886?extraParams=%7B%22display_model_id%22%3A238805631354%2C%22model_selection_logic%22%3A3%7D"
    },
                                      {
        nome: "Filtro de Linha",
        imagem: "img/112.png",
        link: "https://shopee.com.br/R%C3%A9gua-Filtro-de-Linha-com-7-Tomadas-Extens%C3%A3o-El%C3%A9trica-1-Universal-4-USB-Bivolt-10A-110v-220v-Cabo-de-2-Metros-Seguro-e-confi%C3%A1vel-i.728534865.23492630391?extraParams=%7B%22display_model_id%22%3A209591000261%2C%22model_selection_logic%22%3A3%7D"
    },
                                          {
        nome: "Garrafa de Café",
        imagem: "img/113.png",
        link: "https://shopee.com.br/Garrafa-Termica-Tramontina-Bule-modelo-Exata-1L-na-cor-Preta-i.493648855.48409814171?extraParams=%7B%22display_model_id%22%3A425865919692%2C%22model_selection_logic%22%3A3%7D"
    },
                                              {
        nome: "Manta Cobertor",
        imagem: "img/114.png",
        link: "https://shopee.com.br/Manta-Cobertor-Microfibra-Casal-Queen-King-Quentinha-Antial%C3%A9rgico-Po%C3%A1-Habitat-i.1526576446.19698201316?extraParams=%7B%22display_model_id%22%3A239422476115%2C%22model_selection_logic%22%3A3%7D"
    },
                                                {
        nome: "Potes Organizadores",
        imagem: "img/115.png",
        link: "https://shopee.com.br/Kit-4-Potes-Organizadores-Porta-Cebola-Alho-Lim%C3%A3o-Tomate-i.1640188726.55656384557?extraParams=%7B%22display_model_id%22%3A410576981677%2C%22model_selection_logic%22%3A3%7D&sp_atk=5a5d381a-8c2e-4d86-a5e5-15be7b6136e8&xptdk=5a5d381a-8c2e-4d86-a5e5-15be7b6136e8"
    },
                                                    {
        nome: "Potes Inox",
        imagem: "img/116.png",
        link: "https://shopee.com.br/Conjunto-Bowls-de-Inox-Com-Tampa-Bumper-i.342086228.56204823836?extraParams=%7B%22display_model_id%22%3A420447156515%2C%22model_selection_logic%22%3A3%7D&sp_atk=a27d0262-d0da-4581-9352-d15e85e03405&xptdk=a27d0262-d0da-4581-9352-d15e85e03405"
    },
                                                        {
        nome: "Escorredor de Louças",
        imagem: "img/117.png",
        link: "https://shopee.com.br/Escorredor-de-Lou%C3%A7as-em-A%C3%A7o-Carbono-para-Cozinha-Organizador-de-Pratos-Tigelas-e-Talheres-i.1691649621.58257199934?extraParams=%7B%22display_model_id%22%3A219619642023%2C%22model_selection_logic%22%3A3%7D&sp_atk=d6ff9ecd-3818-4d94-a819-65c84d39debf&xptdk=d6ff9ecd-3818-4d94-a819-65c84d39debf"
    },
                                                            {
        nome: "Pano de Chão Kit 10un",
        imagem: "img/118.png",
        link: "https://shopee.com.br/10-Pano-de-ch%C3%A3o-xadrez-Extra-Grande-pano-de-limpeza-70x45-i.947339711.22738513313?extraParams=%7B%22display_model_id%22%3A88685327236%2C%22model_selection_logic%22%3A3%7D&sp_atk=591ec6d0-8ecb-4378-a70b-e40d18c4aa10&xptdk=591ec6d0-8ecb-4378-a70b-e40d18c4aa10"
    },
                                                                {
        nome: "Porta Papel toalha e guardanapo kit",
        imagem: "img/119.png",
        link: "https://shopee.com.br/Kit-Bambu-Porta-Guardanapo-Suporte-de-Papel-Toalha-Grande-para-Mesa-Bancada-Cozinha-i.1386797050.22498843976?extraParams=%7B%22display_model_id%22%3A209178516730%2C%22model_selection_logic%22%3A3%7D&sp_atk=d2b424bf-e3ef-4491-83b0-f7ef6f79dc2c&xptdk=d2b424bf-e3ef-4491-83b0-f7ef6f79dc2c"
    },
                                                                    {
        nome: "Descanso de Colher",
        imagem: "img/120.png",
        link: "https://shopee.com.br/Descanso-de-Colher-para-Cozinha-Suporte-Porta-Colher-Esp%C3%A1tula-Organizador-de-Utens%C3%ADlios-Bancada-Anti-Sujeira-i.542383017.58257047278?extraParams=%7B%22display_model_id%22%3A119728042218%2C%22model_selection_logic%22%3A3%7D&sp_atk=47ddf856-dd2f-4412-ad7e-464f3c3f0c66&xptdk=47ddf856-dd2f-4412-ad7e-464f3c3f0c66"
    },
                                                                        {
        nome: "Pano para limpar vidro",
        imagem: "img/121.png",
        link: "https://shopee.com.br/Pano-M%C3%A1gico-Limpa-Vidros-e-Espelhos-%C3%81kora-40x40cm-%E2%80%93-Microfibra-Premium-Sem-Fiapos-i.1348876063.21399885221?extraParams=%7B%22display_model_id%22%3A209612515197%2C%22model_selection_logic%22%3A3%7D&sp_atk=1136e11c-23de-40f8-b78a-4f2b3fda221b&xptdk=1136e11c-23de-40f8-b78a-4f2b3fda221b"
    },
                                                                            {
        nome: "Kit Lixeira",
        imagem: "img/122.png",
        link: "https://shopee.com.br/Jogo-1-Ou-2-Lixeiras-Inox-9L-Tampa-Click-Moderna-Compacta-Cozinha-Banheiro-Premium-F%C3%A1cil-Limpeza-i.1075890129.52757706182?extraParams=%7B%22display_model_id%22%3A355684490051%2C%22model_selection_logic%22%3A3%7D&sp_atk=1d0f9160-c263-420c-96c0-5590af1b3f75&xptdk=1d0f9160-c263-420c-96c0-5590af1b3f75"
    },
    
];


const container = document.getElementById('lista-presentes');

function renderizarPresentes() {
    presentes.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card-presente';

        // clique no card inteiro
        card.addEventListener('click', () => {
            window.open(item.link, '_blank');
        });

        card.innerHTML = `
            <div class="img-container">
                <img src="${item.imagem}" alt="${item.nome}">
            </div>
            <div class="card-info">
                <h3>${item.nome}</h3>
                <a href="${item.link}" target="_blank" class="btn-presentear">
                    Presentear
                </a>
            </div>
        `;

        container.appendChild(card);
    });
}

const musica = document.getElementById('musica-tema');
const btnAudio = document.getElementById('btn-audio');
const audioIcon = document.getElementById('audio-icon');
const volumeSlider = document.getElementById('volume-control');

// Função que você já tem, atualizada para iniciar o volume do slider
function fecharModal() {
    document.getElementById('modal-aviso').style.display = 'none';
    
    if (musica) {
        musica.volume = volumeSlider.value;
        musica.play().catch(e => console.log("Autoplay bloqueado pelo browser"));
    }
}

// Alternar entre Mudo e Som
function toggleMute() {
    if (musica.muted) {
        musica.muted = false;
        audioIcon.innerText = "🔊";
    } else {
        musica.muted = true;
        audioIcon.innerText = "🔇";
    }
}

// Controle de Volume em tempo real
volumeSlider.addEventListener('input', (e) => {
    const vol = e.target.value;
    musica.volume = vol;
    
    if (vol == 0) {
        audioIcon.innerText = "🔇";
    } else {
        audioIcon.innerText = "🔊";
    }
});

// Inicia a renderização ao carregar a página
document.addEventListener('DOMContentLoaded', renderizarPresentes);