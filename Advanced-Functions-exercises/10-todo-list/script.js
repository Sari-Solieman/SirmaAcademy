//script.js
document.getElementById('add-button').addEventListener('click', function () {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    if (task !== '') {
        const li = document.createElement('li');

        const tasktext = document.createTextNode(task);

        const removeButton = document.createElement('button')
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-button';

        li.appendChild(tasktext);
        li.appendChild(removeButton);

        document.getElementById('todo-list').appendChild(li);

        input.value = '';

        removeButton.addEventListener('click', function () {
            li.remove();
        })
    }
});