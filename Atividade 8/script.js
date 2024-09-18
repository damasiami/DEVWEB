document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".content");
    
    // Função para adicionar conteúdo nas abas
    function addContent(form, input, list) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita o envio do formulário
            const contentText = input.value;

            // Cria um novo item de lista
            const newContent = document.createElement("li");
            newContent.textContent = contentText;

            // Adiciona o novo conteúdo à lista
            list.appendChild(newContent);

            // Limpa o campo de entrada
            input.value = '';
        });
    }

    // Adiciona eventos às abas
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetTab = button.getAttribute("data-tab");

            // Remove a classe ativa de todas as abas e conteúdos
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => {
                content.classList.remove("active");
            });

            // Adiciona a classe ativa à aba e conteúdo selecionados
            button.classList.add("active");
            document.getElementById(targetTab).classList.add("active");
        });
    });

    // Chama a função de adicionar conteúdo para cada aba
    addContent(document.getElementById("contentForm1"), document.getElementById("contentInput1"), document.getElementById("contentList1"));
    addContent(document.getElementById("contentForm2"), document.getElementById("contentInput2"), document.getElementById("contentList2"));

    // Lógica para tarefas
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    taskForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio do formulário

        const taskText = taskInput.value;

        // Cria um novo item de lista
        const newTask = document.createElement("li");
        newTask.textContent = taskText;

        // Adiciona a nova tarefa à lista
        taskList.appendChild(newTask);

        // Limpa o campo de entrada
        taskInput.value = '';
    });
});
