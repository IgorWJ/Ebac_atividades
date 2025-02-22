$(document).ready(function() {
    // Adiciona a tarefa ao enviar o formulário
    $('#task-form').on('submit', function(e) {
        e.preventDefault();

        const taskText = $('#task-input').val().trim();

        if (taskText !== "") {
            const newTask = $('<li></li>').text(taskText);
            $('#task-list').append(newTask);
            $('#task-input').val('');
        }
    });

    // Adiciona efeito de riscar a tarefa ao clicar
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('done');
    });
});