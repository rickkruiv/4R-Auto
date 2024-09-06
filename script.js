const servicos = {
    "ServicosMecanicos": {
        "ManutencaoPreventiva": {
            "titulo": "Manutenção Preventiva",
            "ul1": "Inspeção geral do veículo para detectar possíveis problemas.",
            "ul2": "Troca de óleo e filtros para garantir o bom funcionamento do motor.",
            "ul3": "Verificação e reabastecimento de fluidos essenciais."
        },
        "ReparosMecanicos": {
            "titulo": "Reparos Mecânicos",
            "ul1": "Conserto de motores, incluindo substituição de peças e ajuste fino.",
            "ul2": "Reparos em caixas de câmbio para garantir a troca suave de marchas.",
            "ul3": "Manutenção de eixos e sistemas de freio para segurança e performance."
        },
        "DiagnosticoEletronico": {
            "titulo": "Diagnóstico Eletrônico",
            "ul1": "Uso de scanners automotivos para identificar falhas e erros eletrônicos.",
            "ul2": "Análise detalhada dos sistemas eletrônicos para encontrar problemas.",
            "ul3": "Correção de falhas eletrônicas para restaurar o funcionamento ideal do veículo."
        }
    },
    "ServicosEstetica": {
        "PinturaPersonalizada": {
            "titulo": "Pintura Personalizada",
            "ul1": "Aplicação de pintura completa ou parcial com acabamentos especiais.",
            "ul2": "Escolha de acabamentos como fosco, metálico ou perolizado.",
            "ul3": "Reparo de pequenos arranhões e imperfeições na pintura."
        },
        "PolimentoCristalizacao": {
            "titulo": "Polimento e Cristalização",
            "ul1": "Polimento da carroceria para restaurar o brilho original.",
            "ul2": "Aplicação de proteção extra com cristalização ou vitrificação.",
            "ul3": "Remoção de manchas e oxidações da pintura."
        },
        "Envelopamento": {
            "titulo": "Envelopamento",
            "ul1": "Aplicação de vinil adesivo para mudar a cor do carro.",
            "ul2": "Adição de detalhes estilizados ou gráficos personalizados.",
            "ul3": "Remoção e substituição do envelopamento quando desejado."
        }
    },
    "ServicosSuspensaoAlinhamento": {
        "AlinhamentoBalanceamento": {
            "titulo": "Alinhamento e Balanceamento",
            "ul1": "Ajuste da suspensão para garantir um desgaste uniforme dos pneus.",
            "ul2": "Balanceamento das rodas para eliminar vibrações durante a condução.",
            "ul3": "Verificação de ângulos de roda para garantir estabilidade e segurança."
        },
        "TrocaSuspensao": {
            "titulo": "Troca de Suspensão",
            "ul1": "Substituição de amortecedores desgastados para melhorar o conforto.",
            "ul2": "Ajuste de molas e componentes de suspensão para manter o veículo estável.",
            "ul3": "Inspeção e substituição de peças danificadas."
        },
        "RebaixamentoSuspensao": {
            "titulo": "Rebaixamento de Suspensão",
            "ul1": "Ajuste da altura do veículo para melhorar a estética.",
            "ul2": "Melhoria no desempenho do carro com um centro de gravidade mais baixo.",
            "ul3": "Instalação de componentes de rebaixamento para atender a preferências pessoais."
        }
    },
    "ServicosPerformance": {
        "TurboSupercharger": {
            "titulo": "Instalação de Turbo e Supercharger",
            "ul1": "Adição de sistemas de indução forçada para aumentar a potência do motor.",
            "ul2": "Ajuste dos sistemas de admissão e escape para suportar a maior potência.",
            "ul3": "Teste e calibragem do motor para garantir desempenho ideal."
        },
        "RemapECU": {
            "titulo": "Remap de ECU",
            "ul1": "Ajuste do software da ECU para melhorar o desempenho e a eficiência.",
            "ul2": "Modificação dos parâmetros do motor para otimizar a resposta e a economia.",
            "ul3": "Teste e validação das alterações para garantir a segurança e a performance."
        },
        "EscapeEsportivo": {
            "titulo": "Escape Esportivo",
            "ul1": "Instalação de sistemas de escape para melhorar o desempenho do motor.",
            "ul2": "Modificação do som do escape para um tom esportivo e mais agressivo.",
            "ul3": "Ajuste do sistema de escape para maximizar o fluxo e a eficiência."
        }
    },
    "ServicosPneus": {
        "TrocaPneus": {
            "titulo": "Troca de Pneus",
            "ul1": "Venda e substituição de pneus, incluindo alinhamento e balanceamento.",
            "ul2": "Verificação do estado dos pneus e recomendação de substituições necessárias.",
            "ul3": "Rodízio de pneus para garantir desgaste uniforme e longevidade."
        },
        "ReparoPneus": {
            "titulo": "Reparo de Pneus",
            "ul1": "Conserto de furos e danos menores para prolongar a vida útil dos pneus.",
            "ul2": "Inspeção detalhada dos pneus para identificar outros possíveis danos.",
            "ul3": "Recomendação de substituição se o dano for irreparável."
        },
        "CalibragemNitrogenio": {
            "titulo": "Calibragem de Pneus com Nitrogênio",
            "ul1": "Uso de nitrogênio para manter a pressão dos pneus por mais tempo.",
            "ul2": "Melhoria na performance e na segurança dos pneus com a calibragem correta.",
            "ul3": "Redução da oxidação interna dos pneus e aumento da durabilidade."
        }
    }
}

const findOuts = document.querySelectorAll(".find-out");

function encontrarPorTitulo(serviceKey) {
    for (const categoria in servicos) {
        for (const chave in servicos[categoria]) {
            if (chave === serviceKey) {
                return servicos[categoria][chave];
            };
        };
    };
};

function criarPopUp(dataTitle) {
    const body = document.body;
    const servicoInfo = encontrarPorTitulo(dataTitle);

    const divPopUpLayer = document.createElement("div");
    divPopUpLayer.id = "pop-up-layer";

    const divPopUp = document.createElement("div");
    divPopUp.classList.add("pop-up");

    const closeButton = document.createElement("i");
    closeButton.classList.add("fa-regular", "fa-circle-xmark");
    closeButton.id = "close-pop-up";
    closeButton.onclick = closePopUp;

    const img = document.createElement("img");
    img.src = `imgs/${dataTitle}.webp`;
    img.alt = dataTitle;

    const h2 = document.createElement("h2");
    h2.textContent = servicoInfo.titulo;

    const ul = document.createElement("ul");

    const li1 = document.createElement("li");
    li1.textContent = servicoInfo.ul1;

    const li2 = document.createElement("li");
    li2.textContent = servicoInfo.ul2;

    const li3 = document.createElement("li");
    li3.textContent = servicoInfo.ul3;

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    const button = document.createElement("button");
    button.classList.add("cta");
    button.innerHTML = 'Agende o Serviço <i class="fa-solid fa-calendar-days"></i>';

    divPopUp.appendChild(closeButton);
    divPopUp.appendChild(img);
    divPopUp.appendChild(h2);
    divPopUp.appendChild(ul);
    divPopUp.appendChild(button);

    divPopUpLayer.appendChild(divPopUp);

    body.appendChild(divPopUpLayer);

    body.classList.add("no-scroll");

    document.addEventListener("keydown", fecharComEsc);
};



function closePopUp() {
    const body = document.body;
    const divPopUpLayer = document.querySelector("#pop-up-layer");

    if (divPopUpLayer) {
        divPopUpLayer.remove();
    };


    body.classList.remove('no-scroll');
    document.removeEventListener("keydown", fecharComEsc);
};

function fecharComEsc(event) {
    if (event.key === "Escape") {
        closePopUp();
    };
};

findOuts.forEach(findOut => {
    findOut.addEventListener('click', function () {
        const service = this.closest('.service');
        const serviceTitle = service.getAttribute('data-titulo');
        criarPopUp(serviceTitle);
    });
});

