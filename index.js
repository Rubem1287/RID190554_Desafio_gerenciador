let tarefas = [
  { tarefa: "comprar pão", etiqueta: "vermelha" },
  { tarefa: "passear com o cachorro", etiqueta: "rosa" },
  { tarefa: "fazer o almoço", etiqueta: "verde" },
  { tarefa: "tomar café", etiqueta: "laranja" },
  { tarefa: "fazer a janta", etiqueta: "amarela" },
];

function renderizar() {
  let lista = document.getElementById("lista");
  let listaEtiquetas = document.getElementById("etiquetas");

  lista.innerHTML = ""; // Limpa a lista antes de renderizar
  listaEtiquetas.innerHTML = ""; // Limpa a lista de etiquetas
  let contador = 0;
  tarefas.forEach((item, index) => {
    let listaContainer = document.createElement("div");
    listaContainer.id = "listaContainer";
    contador++;
    let li_tarefa = document.createElement("li");
    li_tarefa.textContent = item.tarefa;

    let li_etiqueta = document.createElement("li");
    li_etiqueta.textContent = item.etiqueta;

    let botaoConcluir = document.createElement("button");
    botaoConcluir.textContent = "Concluir";
    botaoConcluir.className = "botoes";
    botaoConcluir.onclick = function () {
      riscarTarefa(item, index);
    };

    listaContainer.appendChild(li_etiqueta);
    listaContainer.appendChild(botaoConcluir);
    listaContainer.appendChild(li_tarefa);
    lista.appendChild(li_tarefa);
    listaEtiquetas.appendChild(listaContainer);
  });

  document.getElementById("contador").innerHTML = "Tarefas: " + contador;
  contador = 0;
}

function riscarTarefa(item, index) {
  console.log(item);
  let lista_riscada = [];
  let listaRiscada = [];
  console.log(item);
  listaRiscada = document.getElementById("lista-riscada");
  lista_riscada.push({ tarefa: item.tarefa, etiqueta: item.etiqueta });
  console.log(lista_riscada);

  lista_riscada.forEach((item, indice) => {
    let li_riscado1 = document.createElement("li");
    let li_riscado2 = document.createElement("li");
    let imagens = document.getElementById("imagens");
    let imgContainer = document.createElement("div");
    imgContainer.id = "imgContainer";
    let img = document.createElement("img");
    img.src = "check-mark.png";
    img.alt = "imagem check";
    img.width = 15;
    img.height = 15;
    li_riscado1.textContent = `${item.tarefa}`;
    li_riscado2.textContent = `${item.etiqueta}`;
    listaRiscada.appendChild(li_riscado1);
    imgContainer.appendChild(li_riscado2);
    imgContainer.appendChild(img);
    imagens.appendChild(imgContainer);
    console.log(item);
    console.log(indice);
    delete tarefas[index];

    console.log(tarefas);
  });
  renderizar();
}

function salvarTarefa(event) {
  event.preventDefault();
  let tarefa = document.getElementById("tarefa").value;
  let etiqueta = document.getElementById("etiqueta").value;

  tarefas.push({ tarefa: tarefa, etiqueta: etiqueta });

  let lista = document.getElementById("lista");

  let li = document.createElement("li");

  let botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Concluir";

  li.textContent = `${tarefas.tarefa} <<<>>> ${tarefas.etiqueta}`;

  lista.appendChild(li);

  lista.appendChild(botaoRemover);
  document.getElementById("form").reset();
  renderizar();
}

document.addEventListener("DOMContentLoaded", renderizar);
