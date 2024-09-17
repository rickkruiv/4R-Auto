fetch('json/services.json')
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

            const a = document.createElement('a');
            a.href = `https://wa.me/5544997229355?text=Olá%2C%20tudo%20bem%3F%20Gostaria%20de%20contratar%20o%20serviço%20de%20*${servicoInfo.titulo}*%20para%20o%20meu%20veículo%21!`;
            a.target = "_blank"
            const button = document.createElement("button");
            button.classList.add("cta");
            button.innerHTML = 'Agende o Serviço <i class="fa-solid fa-calendar-days"></i>';

            a.appendChild(button)

            divPopUp.appendChild(closeButton);
            divPopUp.appendChild(img);
            divPopUp.appendChild(h2);
            divPopUp.appendChild(ul);
            divPopUp.appendChild(a);

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

const carrosselServicesType = document.querySelector("#services-carrossel");
const prev = document.querySelector('.back');
const next = document.querySelector('.next');
let currentIndex = 0;

function carrosselService() {
    const translateValue = currentIndex * 20;

    carrosselServicesType.style.transform = `translateX(-${translateValue}%)`
}

function previously() {
    if (currentIndex > 0) {
        currentIndex--;
        carrosselService();
    };
}

function nextly() {
    if (currentIndex < 4) {
        currentIndex++;
        carrosselService();
    } else if (currentIndex == 4) {
        currentIndex = 0;
        carrosselService();
    };
}

prev.addEventListener('click', previously);


next.addEventListener('click', nextly);

if (window.innerWidth > 950) {
    setInterval(() => {
        if (!document.querySelector("#pop-up-layer")) {
            nextly()
        }
    }, 10000)
}

fetch('json/feedbacks.json')
    .then(response => response.json())
    .then(feedbacks => {
        const feedbackList = feedbacks["feedbacks"];
        const feedbacksContainer = document.querySelector(".feedbacks-container");

        feedbackList.forEach((feedback) => {
            const div = document.createElement("div");
            div.classList.add("feedback");

            const h3 = document.createElement("h3");
            h3.textContent = feedback.nome

            const coment = document.createElement("p");
            coment.textContent = feedback.comentario;

            const stars = document.createElement('div');
            stars.classList.add("stars");
            stars.innerHTML = getStars(feedback.avaliacao);

            div.appendChild(h3);
            div.appendChild(coment);
            div.appendChild(stars)
            feedbacksContainer.appendChild(div);


        })

        function getStars(rating) {
            let stars = '';
            for (let i = 0; i < 5; i++) {
                stars += i < rating ? '<span class="star">&#9733;</span>' : '<span class="star empty-star">&#9733;</span>';
            }
            return stars;
        }


        const allfeedbacks = document.querySelectorAll(".feedback");

        const observerFeedbacks = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const feedback = entry.target;
                    feedback.classList.add('visible')
                }
            })
        }, {
            threshold: 0.5
        })

        allfeedbacks.forEach(feedback => {
            observerFeedbacks.observe(feedback)
        })

    })

    .catch(error => {
        console.log("ERRO AO CARREGAR .JSON", error);
    });

const sendBtb = document.querySelector('.send-button');

sendBtb.addEventListener('click', (e) => {
    e.preventDefault()
})