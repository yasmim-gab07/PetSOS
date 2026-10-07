/* ================================================= */
/* PETSOS 2.0 */
/* SISTEMA PRINCIPAL */
/* ================================================= */


/* ================================================= */
/* INICIALIZAÇÃO */
/* ================================================= */

document.addEventListener("DOMContentLoaded", function () {

    carregarPets();
    carregarTutor();
    carregarVeterinarios();

});


/* ================================================= */
/* FUNÇÕES GERAIS DE MODAL */
/* ================================================= */

function abrirModal(id) {

    const modal = document.getElementById(id);

    if (modal) {
        modal.classList.add("show");
    }

}


function fecharModal(id) {

    const modal = document.getElementById(id);

    if (modal) {
        modal.classList.remove("show");
    }

}


/* Fechar modal clicando fora */

window.addEventListener("click", function (event) {

    if (event.target.classList.contains("modal")) {

        event.target.classList.remove("show");

    }

});


/* ================================================= */
/* INÍCIO */
/* ================================================= */

function voltarInicio() {

    const modais = document.querySelectorAll(".modal");

    modais.forEach(function (modal) {
        modal.classList.remove("show");
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================================================= */
/* NOTIFICAÇÕES */
/* ================================================= */

function abrirNotificacoes() {

    abrirModal("notifications-modal");

}


/* ================================================= */
/* TUTOR */
/* ================================================= */

function abrirTutor() {

    carregarTutor();

    abrirModal("tutor-modal");

}


function salvarTutor() {

    const nome =
        document.getElementById("tutor-name").value.trim();

    const email =
        document.getElementById("tutor-email").value.trim();

    const telefone =
        document.getElementById("tutor-phone").value.trim();

    const cidade =
        document.getElementById("tutor-city").value.trim();


    if (nome === "") {

        alert("Digite seu nome.");

        return;

    }


    const tutor = {

        nome: nome,

        email: email || "Não informado",

        telefone: telefone || "Não informado",

        cidade: cidade || "Não informada"

    };


    localStorage.setItem(
        "tutor",
        JSON.stringify(tutor)
    );


    carregarTutor();


    alert("Dados do tutor salvos com sucesso!");

}


function carregarTutor() {

    const dados =
        JSON.parse(localStorage.getItem("tutor"));


    if (!dados) {

        return;

    }


    const nomeInput =
        document.getElementById("tutor-name");

    const emailInput =
        document.getElementById("tutor-email");

    const telefoneInput =
        document.getElementById("tutor-phone");

    const cidadeInput =
        document.getElementById("tutor-city");


    if (nomeInput) {
        nomeInput.value = dados.nome || "";
    }

    if (emailInput) {
        emailInput.value =
            dados.email === "Não informado"
                ? ""
                : dados.email || "";
    }

    if (telefoneInput) {
        telefoneInput.value =
            dados.telefone === "Não informado"
                ? ""
                : dados.telefone || "";
    }

    if (cidadeInput) {
        cidadeInput.value =
            dados.cidade === "Não informada"
                ? ""
                : dados.cidade || "";
    }


    const nomeDisplay =
        document.getElementById("tutor-name-display");

    const emailDisplay =
        document.getElementById("tutor-email-display");

    const avatar =
        document.getElementById("tutor-avatar");


    if (nomeDisplay) {

        nomeDisplay.textContent =
            dados.nome || "Tutor PetSOS";

    }


    if (emailDisplay) {

        emailDisplay.textContent =
            dados.email || "Cadastre seus dados";

    }


    if (avatar) {

        avatar.textContent =
            dados.nome
                ? dados.nome.charAt(0).toUpperCase()
                : "T";

    }

}


/* ================================================= */
/* PETS */
/* ================================================= */

function abrirPets() {

    carregarPets();

    esconderFormulario();

    abrirModal("pets-modal");

}


function mostrarFormulario() {

    const formulario =
        document.getElementById("pet-form");


    if (!formulario) {
        return;
    }


    formulario.style.display = "block";


    formulario.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

}


function esconderFormulario() {

    const formulario =
        document.getElementById("pet-form");


    if (formulario) {

        formulario.style.display = "none";

        formulario.dataset.editing = "";

    }

}


function cancelarEdicao() {

    limparFormulario();

    esconderFormulario();

}


/* ================================================= */
/* SALVAR PET */
/* ================================================= */

function salvarPet() {

    const nome =
        document.getElementById("pet-name").value.trim();

    const especie =
        document.getElementById("pet-species").value;

    const sexo =
        document.getElementById("pet-sex").value;

    const idade =
        document.getElementById("pet-age").value;

    const peso =
        document.getElementById("pet-weight").value;

    const alergias =
        document.getElementById("pet-allergies").value.trim();

    const medicamentos =
        document.getElementById("pet-medicines").value.trim();

    const condicoes =
        document.getElementById("pet-conditions").value.trim();

    const observacoes =
        document.getElementById("pet-notes").value.trim();


    /* Validação */

    if (
        nome === "" ||
        especie === "" ||
        sexo === "" ||
        idade === "" ||
        peso === ""
    ) {

        alert(
            "Preencha nome, espécie, sexo, idade e peso."
        );

        return;

    }


    let pets =
        JSON.parse(localStorage.getItem("pets")) || [];


    const formulario =
        document.getElementById("pet-form");


    const idEdicao =
        formulario.dataset.editing;


    /* ================================================= */
    /* EDITAR PET */
    /* ================================================= */

    if (idEdicao) {

        const indice =
            pets.findIndex(function (pet) {

                return String(pet.id) === String(idEdicao);

            });


        if (indice !== -1) {

            pets[indice] = {

                ...pets[indice],

                nome: nome,

                especie: especie,

                sexo: sexo,

                idade: idade,

                peso: peso,

                alergias:
                    alergias || "Nenhuma",

                medicamentos:
                    medicamentos || "Nenhum",

                condicoes:
                    condicoes || "Nenhuma",

                observacoes:
                    observacoes || "Nenhuma"

            };

        }


        alert("Ficha do pet atualizada!");

    }


    /* ================================================= */
    /* NOVO PET */
    /* ================================================= */

    else {

        const novoPet = {

            id: Date.now(),

            nome: nome,

            especie: especie,

            sexo: sexo,

            idade: idade,

            peso: peso,

            alergias:
                alergias || "Nenhuma",

            medicamentos:
                medicamentos || "Nenhum",

            condicoes:
                condicoes || "Nenhuma",

            observacoes:
                observacoes || "Nenhuma"

        };


        pets.push(novoPet);


        alert("Pet cadastrado com sucesso!");

    }


    localStorage.setItem(
        "pets",
        JSON.stringify(pets)
    );


    limparFormulario();

    carregarPets();

}


/* ================================================= */
/* CARREGAR PETS */
/* ================================================= */

function carregarPets() {

    const lista =
        document.getElementById("pet-list");


    if (!lista) {
        return;
    }


    const pets =
        JSON.parse(localStorage.getItem("pets")) || [];


    lista.innerHTML = "";


    /* Nenhum pet */

    if (pets.length === 0) {

        lista.innerHTML = `

            <div class="empty-state">

                <strong>
                    Nenhum pet cadastrado
                </strong>

                <p>
                    Cadastre seu primeiro animal
                    para começar.
                </p>

            </div>

        `;

        return;

    }


    /* Mostrar pets */

    pets.forEach(function (pet) {

        const primeiraLetra =
            pet.nome.charAt(0).toUpperCase();


        lista.innerHTML += `

            <div class="registered-pet">

                <div class="registered-pet-icon">

                    ${primeiraLetra}

                </div>


                <div class="registered-pet-info">

                    <strong>
                        ${pet.nome}
                    </strong>


                    <p>
                        ${pet.especie}
                        ·
                        ${pet.sexo}
                        ·
                        ${pet.idade} anos
                        ·
                        ${pet.peso} kg
                    </p>


                    <div class="pet-details">

                        <strong>Alergias:</strong>
                        ${pet.alergias}

                        <br>

                        <strong>Medicamentos:</strong>
                        ${pet.medicamentos}

                        <br>

                        <strong>Condições:</strong>
                        ${pet.condicoes}

                    </div>


                    <div class="pet-actions">

                        <button
                            onclick="editarPet(${pet.id})"
                        >
                            Editar ficha
                        </button>


                        <button
                            onclick="excluirPet(${pet.id})"
                        >
                            Excluir
                        </button>

                    </div>

                </div>

            </div>

        `;

    });

}


/* ================================================= */
/* EDITAR PET */
/* ================================================= */

function editarPet(id) {

    const pets =
        JSON.parse(localStorage.getItem("pets")) || [];


    const pet =
        pets.find(function (item) {

            return String(item.id) === String(id);

        });


    if (!pet) {
        return;
    }


    document.getElementById("pet-name").value =
        pet.nome || "";

    document.getElementById("pet-species").value =
        pet.especie || "";

    document.getElementById("pet-sex").value =
        pet.sexo || "";

    document.getElementById("pet-age").value =
        pet.idade || "";

    document.getElementById("pet-weight").value =
        pet.peso || "";

    document.getElementById("pet-allergies").value =
        pet.alergias === "Nenhuma"
            ? ""
            : pet.alergias || "";

    document.getElementById("pet-medicines").value =
        pet.medicamentos === "Nenhum"
            ? ""
            : pet.medicamentos || "";

    document.getElementById("pet-conditions").value =
        pet.condicoes === "Nenhuma"
            ? ""
            : pet.condicoes || "";

    document.getElementById("pet-notes").value =
        pet.observacoes === "Nenhuma"
            ? ""
            : pet.observacoes || "";


    const formulario =
        document.getElementById("pet-form");


    formulario.dataset.editing = id;

    formulario.style.display = "block";


    const titulo =
        formulario.querySelector("h3");


    if (titulo) {

        titulo.textContent =
            "Editar ficha do pet";

    }


    formulario.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

}


/* ================================================= */
/* EXCLUIR PET */
/* ================================================= */

function excluirPet(id) {

    const confirmar =
        confirm(
            "Tem certeza que deseja excluir este pet?"
        );


    if (!confirmar) {
        return;
    }


    let pets =
        JSON.parse(localStorage.getItem("pets")) || [];


    pets =
        pets.filter(function (pet) {

            return String(pet.id) !== String(id);

        });


    localStorage.setItem(
        "pets",
        JSON.stringify(pets)
    );


    carregarPets();

    alert("Pet excluído.");

}


/* ================================================= */
/* LIMPAR FORMULÁRIO */
/* ================================================= */

function limparFormulario() {

    const campos = [

        "pet-name",
        "pet-age",
        "pet-weight",
        "pet-allergies",
        "pet-medicines",
        "pet-conditions",
        "pet-notes"

    ];


    campos.forEach(function (id) {

        const campo =
            document.getElementById(id);

        if (campo) {
            campo.value = "";
        }

    });


    const especie =
        document.getElementById("pet-species");

    const sexo =
        document.getElementById("pet-sex");


    if (especie) {
        especie.value = "";
    }

    if (sexo) {
        sexo.value = "";
    }


    const formulario =
        document.getElementById("pet-form");


    if (formulario) {

        formulario.dataset.editing = "";

        const titulo =
            formulario.querySelector("h3");

        if (titulo) {
            titulo.textContent =
                "Cadastrar novo pet";
        }

    }

}


/* ================================================= */
/* CARTÃO DE EMERGÊNCIA */
/* ================================================= */

function abrirEmergencia() {

    atualizarCartaoEmergencia();

    abrirModal("emergency-modal");

}


function atualizarCartaoEmergencia() {

    const container =
        document.getElementById(
            "emergency-content"
        );


    if (!container) {
        return;
    }


    const pets =
        JSON.parse(localStorage.getItem("pets")) || [];


    if (pets.length === 0) {

        container.innerHTML = `

            <div class="empty-state">

                <strong>
                    Nenhum pet cadastrado
                </strong>

                <p>
                    Cadastre um pet para
                    acessar o cartão de emergência.
                </p>

            </div>

        `;

        return;

    }


    const pet = pets[0];


    container.innerHTML = `

        <div class="pet-info">

            <small>
                PET
            </small>

            <h3>
                ${pet.nome}
            </h3>

            <p>
                ${pet.especie}
                ·
                ${pet.sexo}
                ·
                ${pet.idade} anos
                ·
                ${pet.peso} kg
            </p>

        </div>


        <div class="info">

            <strong>
                Alergias
            </strong>

            <p>
                ${pet.alergias}
            </p>

        </div>


        <div class="info">

            <strong>
                Medicamentos
            </strong>

            <p>
                ${pet.medicamentos}
            </p>

        </div>


        <div class="info">

            <strong>
                Condições de saúde
            </strong>

            <p>
                ${pet.condicoes}
            </p>

        </div>


        <div class="info">

            <strong>
                Observações
            </strong>

            <p>
                ${pet.observacoes}
            </p>

        </div>

    `;

}


/* ================================================= */
/* VETERINÁRIOS */
/* ================================================= */


/*
    Clínicas fictícias para a demonstração
    do projeto acadêmico.
*/

const veterinarios = [

    {

        id: 1,

        nome:
            "Clínica Veterinária PetCare",

        endereco:
            "Vila Xavier · Araraquara - SP",

        telefone:
            "(16) 3333-1111",

        horario:
            "08:00 às 20:00",

        descricao:
            "Atendimento clínico para cães e gatos.",

        especialidades: [

            "Clínica geral",

            "Vacinação",

            "Dermatologia",

            "Cirurgia"

        ]

    },


    {

        id: 2,

        nome:
            "Hospital Veterinário Central",

        endereco:
            "Centro · Araraquara - SP",

        telefone:
            "(16) 3333-2222",

        horario:
            "24 horas",

        descricao:
            "Hospital veterinário com atendimento emergencial.",

        especialidades: [

            "Emergência",

            "Internação",

            "Cirurgia",

            "Cardiologia",

            "Exames"

        ]

    },


    {

        id: 3,

        nome:
            "Clínica Animal Saúde",

        endereco:
            "Jardim Primavera · Araraquara - SP",

        telefone:
            "(16) 3333-3333",

        horario:
            "08:00 às 18:00",

        descricao:
            "Atendimento especializado e acompanhamento preventivo.",

        especialidades: [

            "Clínica geral",

            "Nutrição",

            "Dermatologia",

            "Oftalmologia"

        ]

    }

];


/* ================================================= */
/* ABRIR VETERINÁRIOS */
/* ================================================= */

function abrirVeterinarios() {

    carregarVeterinarios();

    abrirModal("veterinary-modal");

}


/* ================================================= */
/* CARREGAR VETERINÁRIOS */
/* ================================================= */

function carregarVeterinarios(
    listaPersonalizada = veterinarios
) {

    const lista =
        document.getElementById("vet-list");


    if (!lista) {
        return;
    }


    lista.innerHTML = "";


    if (listaPersonalizada.length === 0) {

        lista.innerHTML = `

            <div class="empty-state">

                <strong>
                    Nenhum resultado encontrado
                </strong>

                <p>
                    Tente pesquisar outro nome
                    ou especialidade.
                </p>

            </div>

        `;

        return;

    }


    listaPersonalizada.forEach(function (vet) {

        lista.innerHTML += `

            <div class="vet-item">

                <div class="vet-top">

                    <div class="vet-icon">

                        <svg viewBox="0 0 24 24">

                            <path d="M6 3v7"></path>

                            <path d="M10 3v7"></path>

                            <path d="M6 7h4"></path>

                            <path d="M8 10v11"></path>

                            <path d="M16 3v18"></path>

                            <circle
                                cx="16"
                                cy="7"
                                r="3"
                            ></circle>

                        </svg>

                    </div>


                    <div class="vet-info">

                        <strong>
                            ${vet.nome}
                        </strong>

                        <p>
                            ${vet.endereco}
                        </p>

                    </div>

                </div>


                <div class="vet-specialties">

                    ${vet.especialidades
                        .map(function (especialidade) {

                            return `
                                <span class="specialty-tag">
                                    ${especialidade}
                                </span>
                            `;

                        })
                        .join("")}

                </div>


                <div class="vet-actions">

                    <button
                        class="view-button"
                        onclick="abrirClinica(${vet.id})"
                    >
                        Ver clínica
                    </button>


                    <button
                        class="chat-button"
                        onclick="abrirChatComClinica(${vet.id})"
                    >
                        Conversar
                    </button>

                </div>

            </div>

        `;

    });

}


/* ================================================= */
/* PESQUISA DE VETERINÁRIOS */
/* ================================================= */

function filtrarVeterinarios() {

    const campo =
        document.getElementById("search-vet");


    const busca =
        campo.value
            .toLowerCase()
            .trim();


    const resultados =
        veterinarios.filter(function (vet) {

            const texto = (

                vet.nome +
                " " +
                vet.endereco +
                " " +
                vet.descricao +
                " " +
                vet.especialidades.join(" ")

            ).toLowerCase();


            return texto.includes(busca);

        });


    carregarVeterinarios(resultados);

}


/* ================================================= */
/* PERFIL DA CLÍNICA */
/* ================================================= */

function abrirClinica(id) {

    const vet =
        veterinarios.find(function (item) {

            return item.id === id;

        });


    if (!vet) {
        return;
    }


    const container =
        document.getElementById("clinic-content");


    container.innerHTML = `

        <div class="clinic-cover">

            <div class="clinic-cover-icon">
                +
            </div>

            <h2>
                ${vet.nome}
            </h2>

            <p>
                ${vet.descricao}
            </p>

        </div>


        <div class="clinic-section">

            <h3>
                Especialidades
            </h3>

            <div class="clinic-specialties">

                ${vet.especialidades
                    .map(function (especialidade) {

                        return `
                            <span>
                                ${especialidade}
                            </span>
                        `;

                    })
                    .join("")}

            </div>

        </div>


        <div class="clinic-section">

            <h3>
                Endereço
            </h3>

            <p>
                ${vet.endereco}
            </p>

        </div>


        <div class="clinic-section">

            <h3>
                Atendimento
            </h3>

            <p>
                ${vet.horario}
            </p>

        </div>


        <div class="clinic-section">

            <h3>
                Telefone
            </h3>

            <p>
                ${vet.telefone}
            </p>

        </div>


        <button
            class="primary-button"
            onclick="abrirChatComClinica(${vet.id})"
        >
            Conversar com esta clínica
        </button>

    `;


    abrirModal("clinic-modal");

}


/* ================================================= */
/* CHAT */
/* ================================================= */

function abrirChat() {

    abrirModal("chat-modal");

}


function abrirChatComClinica(id) {

    const vet =
        veterinarios.find(function (item) {

            return item.id === id;

        });


    if (!vet) {
        return;
    }


    const header =
        document.querySelector(".chat-header");


    if (header) {

        header.innerHTML = `

            <div class="vet-avatar">
                ${vet.nome.charAt(0)}
            </div>

            <div>

                <strong>
                    Dra. Mariana
                </strong>

                <span>
                    ${vet.nome}
                </span>

                <small>
                    ${vet.especialidades[0]}
                </small>

            </div>

            <span class="online-dot"></span>

        `;

    }


    abrirModal("chat-modal");

}


/* ================================================= */
/* ENVIAR MENSAGEM */
/* ================================================= */

function enviarMensagem() {

    const input =
        document.getElementById("chat-input");


    const texto =
        input.value.trim();


    if (texto === "") {
        return;
    }


    const mensagens =
        document.getElementById("chat-messages");


    const agora =
        new Date();


    const hora =
        agora.toLocaleTimeString(
            "pt-BR",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );


    mensagens.innerHTML += `

        <div class="message sent">

            <span>
                Você
            </span>

            ${texto}

            <small>
                ${hora}
            </small>

        </div>

    `;


    input.value = "";


    mensagens.scrollTop =
        mensagens.scrollHeight;


    /* Resposta simulada */

    setTimeout(function () {

        mensagens.innerHTML += `

            <div class="message received">

                <span>
                    Dra. Mariana
                </span>

                Entendi. Vou analisar
                as informações enviadas.
                Como posso ajudar?

                <small>
                    ${hora}
                </small>

            </div>

        `;


        mensagens.scrollTop =
            mensagens.scrollHeight;

    }, 700);

}


/* ================================================= */
/* ENTER NO CHAT */
/* ================================================= */

function verificarEnter(event) {

    if (event.key === "Enter") {

        enviarMensagem();

    }

}


/* ================================================= */
/* ENVIAR FICHA PELO CHAT */
/* ================================================= */

function enviarFichaChat() {

    const pets =
        JSON.parse(localStorage.getItem("pets")) || [];


    const mensagens =
        document.getElementById("chat-messages");


    if (pets.length === 0) {

        alert(
            "Cadastre um pet antes de enviar a ficha."
        );

        return;

    }


    const pet = pets[0];


    mensagens.innerHTML += `

        <div class="message sent">

            <span>
                Você
            </span>

            Ficha de emergência enviada:

            <br><br>

            <strong>
                ${pet.nome}
            </strong>

            <br>

            ${pet.especie}
            ·
            ${pet.sexo}
            ·
            ${pet.idade} anos
            ·
            ${pet.peso} kg

            <br><br>

            Alergias:
            ${pet.alergias}

            <br>

            Medicamentos:
            ${pet.medicamentos}

            <small>
                agora
            </small>

        </div>

    `;


    mensagens.scrollTop =
        mensagens.scrollHeight;


    setTimeout(function () {

        mensagens.innerHTML += `

            <div class="message received">

                <span>
                    Dra. Mariana
                </span>

                Recebi a ficha do
                ${pet.nome}. Obrigada!
                Essas informações serão
                importantes para o atendimento.

                <small>
                    agora
                </small>

            </div>

        `;


        mensagens.scrollTop =
            mensagens.scrollHeight;

    }, 800);

}


/* ================================================= */
/* CONFIGURAÇÕES */
/* ================================================= */

function abrirConfiguracoes() {

    abrirModal("settings-modal");

}