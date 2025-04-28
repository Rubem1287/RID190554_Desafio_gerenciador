let tarefas = [];
let status;
const hoje = new Date();
const dia = String(hoje.getDate()).padStart(2, "0");
const mes = String(hoje.getMonth() + 1).padStart(2, "0");
const ano = hoje.getFullYear();
const dataFormatada = `${dia}/${mes}/${ano}`;
let contador = 0;

function renderizar() {
  let lista = document.getElementById("lista");

  lista.innerHTML = ""; // Limpa a lista antes de renderizar

  tarefas.forEach((item, index) => {
    let listaContainer = document.createElement("div");
    listaContainer.id = "listaMain";
    let li_tarefa = document.createElement("li");
    li_tarefa.textContent = item.tarefa;
    let data = document.createElement("li");
    data.textContent = "Criado em : " + dataFormatada;
    data.id = "datas";

    let li_etiqueta = document.createElement("li");
    li_etiqueta.textContent = item.etiqueta;
    li_etiqueta.id = "etiqueta_circulo";

    let botaoConcluir = document.createElement("button");
    botaoConcluir.id = "btnConcluir";
    botaoConcluir.textContent = "Concluir";
    botaoConcluir.className = "botoes";
    botaoConcluir.onclick = function () {
      adicionarStatus(item, index);
    };
    if (item.status != "concluido") {
      lista.appendChild(li_tarefa);
      lista.appendChild(botaoConcluir);
      lista.appendChild(li_etiqueta);
      lista.appendChild(data);
    }
  });

  document.getElementById("contador").innerHTML =
    "Tarefas concluídas: " + contador;
}

function adicionarStatus(item, index) {
  let lista_riscada = document.getElementById("lista-riscada");
  tarefas[index].status = "concluido";
  lista.innerHTML = "";
  let li_riscado1 = document.createElement("li");
  li_riscado1.id = "li_riscado1";
  let li_riscado2 = document.createElement("li");
  li_riscado2.id = "li_riscado2";
  let imgContainer = document.createElement("div");
  imgContainer.id = "imgContainer";
  let datas_riscada = document.createElement("li");
  datas_riscada.textContent = "Criado em : " + dataFormatada;
  datas_riscada.id = "datas_riscada";
  let img = document.createElement("img");
  img.id = "img";
  img.src = "check_mark.svg";
  img.alt = "imagem check";
  img.width = 15;
  img.height = 15;
  li_riscado1.textContent = `${item.tarefa}`;
  li_riscado2.textContent = `${item.etiqueta}`;

  lista_riscada.appendChild(li_riscado1);
  lista_riscada.appendChild(li_riscado2);
  lista_riscada.appendChild(datas_riscada);
  lista_riscada.appendChild(img);
  contador++;
  renderizar();
}

function salvarTarefa(event) {
  event.preventDefault();
  let tarefa = document.getElementById("tarefa").value;
  let etiqueta = document.getElementById("etiqueta").value;

  tarefas.push({ tarefa: tarefa, etiqueta: etiqueta, status: "não concluido" });
  let lista = document.getElementById("lista");
  let li = document.createElement("li");

  let botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Concluir";

  li.textContent = `${tarefas.tarefa} ${tarefas.etiqueta} ${tarefas.status}`;

  lista.appendChild(li);
  lista.appendChild(botaoRemover);
  document.getElementById("form").reset();
  renderizar();
}

document.addEventListener("DOMContentLoaded", renderizar);

// ----------------------------------------------------------------------------
//Primeira solução
//Pra funcionar essa tem que mexer no css agora
// function renderizar() {
//   let lista = document.getElementById("lista");
//   let listaEtiquetas = document.getElementById("etiquetas");
//   lista.innerHTML = ""; // Limpa a lista antes de renderizar
//   listaEtiquetas.innerHTML = ""; // Limpa a lista de etiquetas

//   tarefas.forEach((item, index) => {
//     let listaContainer = document.createElement("div");
//     listaContainer.id = "listaMain";
//     let li_tarefa = document.createElement("li");
//     li_tarefa.textContent = item.tarefa;
//     let data = document.createElement("li");
//     data.textContent = "Criado em : " + dataFormatada;
//     data.id = "datas";

//     let li_etiqueta = document.createElement("li");
//     li_etiqueta.textContent = item.etiqueta;
//     li_etiqueta.id = "etiqueta_circulo";

//     let botaoConcluir = document.createElement("button");
//     botaoConcluir.id = "btnConcluir";
//     botaoConcluir.textContent = "Concluir";
//     botaoConcluir.className = "botoes";
//     botaoConcluir.onclick = function () {
//       console.log(index);

//       riscarTarefa(item, index);
//     };

//     listaContainer.appendChild(li_etiqueta);
//     listaContainer.appendChild(botaoConcluir);
//     listaContainer.appendChild(li_tarefa);
//     listaContainer.appendChild(data);
//     lista.appendChild(li_tarefa);
//     listaEtiquetas.appendChild(listaContainer);
//   });
//   document.getElementById("contador").innerHTML =
//     "Tarefas concluídas: " + contador;
//   //contador = 0;
// }

// function riscarTarefa(item, index) {
//   contador++;
//   let lista_riscada = [];
//   let listaRiscada = [];
//   console.log(index + "riscar");
//   listaRiscada = document.getElementById("lista-riscada");
//   lista_riscada.push({
//     tarefa: item.tarefa,
//     etiqueta: item.etiqueta,
//   });
//   console.log(lista_riscada + "riscada");
//   lista_riscada.forEach((item) => {
//     let li_riscado1 = document.createElement("li");
//     let li_riscado2 = document.createElement("li");
//     li_riscado2.id = "li_riscado2";
//     // let li_etiqueta_riscado = document.createElement("li");
//     // li_etiqueta_riscado.textContent = item.etiqueta;
//     // li_etiqueta_riscado.id = "etiqueta_circulo_riscado";
//     let imagens = document.getElementById("imagens-riscada");
//     let imgContainer = document.createElement("div");
//     imgContainer.id = "imgContainer";
//     let datas_riscada = document.createElement("li");
//     datas_riscada.textContent = "Criado em : " + dataFormatada;
//     datas_riscada.id = "datas_riscada";
//     let img = document.createElement("img");
//     img.id = "img";
//     img.src = "check_mark.svg";
//     img.alt = "imagem check";
//     img.width = 15;
//     img.height = 15;
//     li_riscado1.textContent = `${item.tarefa}`;
//     li_riscado2.textContent = `${item.etiqueta}`;
//     listaRiscada.appendChild(li_riscado1);
//     imgContainer.appendChild(li_riscado2);
//     imgContainer.appendChild(datas_riscada);
//     imgContainer.appendChild(img);
//     imagens.appendChild(imgContainer);
//     delete tarefas[index];
//     console.log();
//   });
//   renderizar();
// }

// function salvarTarefa(event) {
//   event.preventDefault();
//   let tarefa = document.getElementById("tarefa").value;
//   let etiqueta = document.getElementById("etiqueta").value;

//   tarefas.push({ tarefa: tarefa, etiqueta: etiqueta });

//   let lista = document.getElementById("lista");

//   let li = document.createElement("li");

//   let botaoRemover = document.createElement("button");
//   botaoRemover.textContent = "Concluir";

//   li.textContent = `${tarefas.tarefa} ${tarefas.etiqueta}`;

//   lista.appendChild(li);

//   lista.appendChild(botaoRemover);
//   document.getElementById("form").reset();
//   renderizar();
// }

// document.addEventListener("DOMContentLoaded", renderizar);
