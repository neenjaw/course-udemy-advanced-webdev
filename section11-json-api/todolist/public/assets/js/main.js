

const App = function(){ 
    const host = 'localhost';
    const port = 3000;
    const route = 'api/todos';
    const url = `http://${host}:${port}/${route}`;

    function setTodoClickListener() {
        function toggleTodoComplete(id, value, callback) {
            const req = {
                method: 'PUT',
                url: `${url}/${id}`,
                dataType: 'json',
                data: `todo[completed]=${value}`
            };

            $.ajax(req)
                .done(callback)
                .fail(() => {
                    console.error('There was a problem setting the completed state');
                });
        }

        function deleteTodo(id, callback) {
            const req = {
                method: 'DELETE',
                url: `${url}/${id}`,
                dataType: 'json'
            };

            $.ajax(req)
                .done(callback)
                .fail(() => {
                    console.error('There was a problem deleting the todo');
                });
        }

        $('.todolist').on('click', '.todolist-item', function(ev) {
            const currentCompleteState = ev.currentTarget.classList.contains('completed');

            toggleTodoComplete(ev.currentTarget.dataset.todoId, !currentCompleteState, function () {
                ev.currentTarget.classList.toggle('completed');
            });
        });

        $('.todolist').on('click', '.todo-delete', function(ev) {
            ev.stopPropagation();

            deleteTodo(ev.currentTarget.parentElement.dataset.todoId, function () {
                $(ev.currentTarget.parentElement).remove();
            });
        });
    }

    function getAllTodos() {
        const req = {
            method: 'GET',
            url: `${url}`,
            dataType: 'json'
        };

        $.ajax(req)
            .done((response) => {
                console.log(response);

                if (response.status === 'ok') {
                    response.result.forEach(function(todo) {
                        $(todoElementString(todo._id, todo.task, todo.completed)).appendTo('.todolist');
                    });
                }
            })
            .fail(() => {
                console.error('There was a problem retrieving the todo list');
            });
    }

    function todoElementString(id, task, completed) {
        const ifCompleted = (completed) ? ' completed' : '';

        return `<li class="todolist-item${ifCompleted}" data-todo-id="${id}">
            <span class="todo-task">${task}</span>
            <span class="todo-delete">X</span>
        </li>`;
    }

    setTodoClickListener();
    getAllTodos();
};

App();