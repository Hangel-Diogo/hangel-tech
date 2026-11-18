
/* =================================
   HANGEL TECH - JAVASCRIPT
================================= */
// CONEXÃO COM SUPABASE

const SUPABASE_URL = "https://gunkzswgncpbwxqtcrfw.supabase.co";

const SUPABASE_KEY = "sb_publishable_-vw-_BBGrEF32ITj6CcA6Q_HdLXyUCg";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

// MENU MOBILE

const menuMobile = document.getElementById("menu-mobile");
const menu = document.getElementById("menu");

menuMobile.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});


// ANO AUTOMÁTICO

document.getElementById("ano").textContent =
    new Date().getFullYear();


// SERVIÇOS

const servicos = [
    {
        nome: "Troca de Tela",
        descricao: "Substituição de telas danificadas, trincadas ou sem funcionamento.",
        icone: "fa-mobile-screen"
    },
    {
        nome: "Troca de Bateria",
        descricao: "Substituição de baterias com baixa autonomia ou problemas de carga.",
        icone: "fa-battery-full"
    },
    {
        nome: "Troca de Conector",
        descricao: "Reparo ou substituição do conector de carregamento.",
        icone: "fa-plug"
    },
    {
        nome: "Formatação",
        descricao: "Restauração e configuração do sistema do aparelho.",
        icone: "fa-gears"
    },
    {
        nome: "Remoção de Contas",
        descricao: "Suporte para recuperação e gerenciamento de contas, mediante comprovação de propriedade.",
        icone: "fa-user-shield"
    },
    {
        nome: "Reparos em Geral",
        descricao: "Diagnóstico e solução de outros problemas do seu celular.",
        icone: "fa-screwdriver-wrench"
    }
];

const gradeServicos = document.querySelector(".services-grid");

gradeServicos.innerHTML = servicos.map(servico => `
    <article class="service-card">
        <div class="service-icon">
            <i class="fa-solid ${servico.icone}"></i>
        </div>

        <h3>${servico.nome}</h3>

        <p>${servico.descricao}</p>
    </article>
`).join("");


// PREÇOS

const precos = [
    "Troca de tela",
    "Troca de bateria",
    "Troca de conector",
    "Formatação",
    "Remoção de contas",
    "Reparos em geral"
];

const listaPrecos = document.getElementById("lista-precos");

listaPrecos.innerHTML = `
    <div class="price-list">
        ${precos.map(servico => `
            <div class="price-item">
                <strong>${servico}</strong>
                <span>Sob consulta</span>
            </div>
        `).join("")}
    </div>

    <p class="price-note">
        Os valores variam conforme a marca, modelo e
        disponibilidade das peças. Solicite um orçamento.
    </p>
`;


// FORMULÁRIO DE AGENDAMENTO

const formulario = document.getElementById(
    "formulario-agendamento"
);

formulario.innerHTML = `
    <div class="booking-layout">

        <div class="booking-card">

            <form class="booking-form" id="booking-form">

                <div>
                    <label>Seu nome</label>
                    <input type="text" name="nome"
                        placeholder="Digite seu nome" required>
                </div>

                <div>
                    <label>WhatsApp</label>
                    <input type="tel" name="telefone"
                        placeholder="(00) 00000-0000" required>
                </div>

                <div>
                    <label>Marca do celular</label>
                    <select name="marca" required>
                        <option value="">Selecione</option>
                        <option>Apple</option>
                        <option>Samsung</option>
                        <option>Motorola</option>
                        <option>Xiaomi</option>
                        <option>Outra</option>
                    </select>
                </div>

                <div>
                    <label>Modelo do aparelho</label>
                    <input type="text" name="modelo"
                        placeholder="Ex.: iPhone 13" required>
                </div>

                <div class="full">
                    <label>Serviço desejado</label>
                    <select name="servico" required>
                        <option value="">Selecione o serviço</option>
                        ${servicos.map(s =>
                            `<option>${s.nome}</option>`
                        ).join("")}
                    </select>
                </div>

                <div>
                    <label>Data desejada</label>
                    <input type="date" name="data"
                        min="${new Date().toISOString().split("T")[0]}"
                        required>
                </div>

                <div>
                    <label>Horário preferido</label>
                    <select name="horario" required>
                        <option value="">Selecione</option>
                        <option>Manhã</option>
                        <option>Tarde</option>
                    </select>
                </div>

                <div class="full">
    <label>Como deseja receber o atendimento?</label>
    <select name="modalidade" required>
        <option value="">Selecione</option>
        <option value="Vou até a assistência">
            Vou até a assistência
        </option>
        <option value="Solicitar retirada em residência">
            Solicitar retirada em residência
        </option>
    </select>
</div>

<div class="full">
    <label>Endereço para retirada (se necessário)</label>
    <input type="text" name="endereco"
        placeholder="Rua, número e complemento">
</div>

<div>
    <label>Bairro</label>
    <input type="text" name="bairro"
        placeholder="Seu bairro">
</div>

<div>
    <label>Cidade</label>
    <input type="text" name="cidade"
        placeholder="Sua cidade">
</div>

<div class="full">
    <label>Ponto de referência</label>
    <input type="text" name="referencia"
        placeholder="Próximo a...">
</div>

                <div class="full">
                    <label>Descreva o problema</label>
                    <textarea name="problema"
                        placeholder="Conte um pouco sobre o problema do aparelho..."></textarea>
                </div>

                <div class="full">
                    <button type="submit" class="btn-primary">
                        Solicitar agendamento
                    </button>
                </div>

            </form>

            <div id="booking-message" class="toast"></div>

        </div>

        <div class="booking-card">

            <h3>Como funciona?</h3>

            <br>

            <div class="steps">

                <div class="step">
                    <div class="step-number">1</div>
                    <div>
                        <h3>Faça sua solicitação</h3>
                        <p>Preencha os dados do seu aparelho.</p>
                    </div>
                </div>

                <div class="step">
                    <div class="step-number">2</div>
                    <div>
                        <h3>Confirme o atendimento</h3>
                        <p>Entraremos em contato para confirmar a disponibilidade.</p>
                    </div>
                </div>

                <div class="step">
                    <div class="step-number">3</div>
                    <div>
                        <h3>Retirada em sua residência</h3>
                        <p>Consulte a disponibilidade de coleta do aparelho.</p>
                    </div>
                </div>

            </div>

        </div>

    </div>
`;



 // ENVIO DO AGENDAMENTO PARA SUPABASE E WHATSAPP

document.getElementById("booking-form")
    .addEventListener("submit", async function(event) {

        event.preventDefault();

        const formulario = this;
        const dados = new FormData(formulario);
        const botao = formulario.querySelector('button[type="submit"]');
        const mensagemAviso = document.getElementById("booking-message");

        botao.disabled = true;
        botao.textContent = "Enviando solicitação...";

        mensagemAviso.style.display = "block";
        mensagemAviso.textContent = "Registrando seu agendamento...";

        const modalidade = dados.get("modalidade");

        const agendamento = {
            customer_name: dados.get("nome"),
            phone: dados.get("telefone"),
            brand: dados.get("marca"),
            device_model: dados.get("modelo"),
            service: dados.get("servico"),
            preferred_date: dados.get("data"),
            preferred_period: dados.get("horario"),
            problem: dados.get("problema") || "",
            service_mode: modalidade,
            address: dados.get("endereco") || "",
            neighborhood: dados.get("bairro") || "",
            city: dados.get("cidade") || "",
            reference: dados.get("referencia") || ""
        };

        try {

            const { error } = await supabaseClient
                .from("appointments")
                .insert([agendamento]);

            if (error) {
                throw error;
            }

            const mensagem = `
Olá! Gostaria de solicitar um atendimento na HANGEL TECH.

Nome: ${agendamento.customer_name}
WhatsApp: ${agendamento.phone}
Marca: ${agendamento.brand}
Modelo: ${agendamento.device_model}
Serviço: ${agendamento.service}
Data desejada: ${agendamento.preferred_date}
Horário: ${agendamento.preferred_period}

Modalidade: ${agendamento.service_mode}
Endereço: ${agendamento.address || "Não informado"}
Bairro: ${agendamento.neighborhood || "Não informado"}
Cidade: ${agendamento.city || "Não informado"}
Referência: ${agendamento.reference || "Não informado"}

Problema: ${agendamento.problem || "Não informado"}

Taxa de retirada/entrega:
Centro: R$ 5,00
Bairros distantes: a combinar.
            `;

            const numeroWhatsApp = "5547933843294";

            mensagemAviso.textContent =
                "Agendamento registrado com sucesso! Abrindo WhatsApp...";

            window.location.href =
                `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        } catch (error) {

            console.error("Erro ao registrar agendamento:", error);

            mensagemAviso.textContent =
                "Não foi possível registrar seu agendamento. Tente novamente.";

        } finally {

            botao.disabled = false;
            botao.textContent = "Solicitar agendamento";

        }

    });
