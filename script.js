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
];

const container = document.getElementById('lista-presentes');

function renderizarPresentes() {
    presentes.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card-presente';

        card.innerHTML = `
            <div class="img-container">
                <img src="${item.imagem}" alt="${item.nome}">
            </div>
            <div class="card-info">
                <h3>${item.nome}</h3>
                <a href="${item.link}" target="_blank" class="btn-presentear">Presentear</a>
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

function copiarPix() {
    const chave = document.getElementById('pix-chave').innerText;
    navigator.clipboard.writeText(chave).then(() => {
        const msg = document.getElementById('msg-copiado');
        msg.style.display = 'block';
        setTimeout(() => { msg.style.display = 'none'; }, 2000);
    });
}
// Inicia a renderização ao carregar a página
document.addEventListener('DOMContentLoaded', renderizarPresentes);