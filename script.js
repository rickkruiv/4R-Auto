fetch('services.json')
    .then(response => response.json())
    .then(servicos => {

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

    })
    .catch(error => {
        console.error("ERRO AO CARREGAR .JSON", error);
    });