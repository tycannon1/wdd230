const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () =>  {
    if (input.value === '') {
        alert("DON'T LEAVE IT BLANK");
        return;
    }

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = 'X';
    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
    });

    input.value = '';
    input.focus();
});
