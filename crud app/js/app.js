const addTodo = document.querySelector('.addTodo');
const list = document.querySelector('ul');


addTodo.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.addTodo.value);
    const goalValue = event.target.addTodo.value

    const li = document.createElement('li');
    
    const textInput = document.createElement('input');
    textInput.setAttribute('type', 'text');
    textInput.setAttribute('value', goalValue);
    textInput.setAttribute('readonly', 'readonly');

    const editBtn = document.createElement('button');
    editBtn.setAttribute('type', 'button');
    editBtn.setAttribute('class', 'edit');

    const editIcon = document.createElement('i');
    editIcon.setAttribute('class', "fa-solid fa-pencil");
    
    editBtn.appendChild(editIcon);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.setAttribute('class', 'delete');


    const deleteIcon = document.createElement('i');
    deleteIcon.setAttribute('class', 'fa-solid fa-trash');
    deleteBtn.appendChild(deleteIcon)

    li.appendChild(textInput);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    
    li.style.cursor = 'pointer';

    list.appendChild(li);

    event.target.addTodo.value = ""

    // textInput.addEventListener('click', () => {
    //     li.classList.toggle('completed')
    // })

    editBtn.addEventListener('click', () => {
        textInput.removeAttribute('readonly')
        textInput.focus();
        editBtn.style.display = 'none'
        deleteBtn.style.display = 'none';

        const submit = document.createElement('button');
        submit.textContent = 'Update';
        li.appendChild(submit);

        submit.addEventListener('click', () => {
            textInput.setAttribute('readonly', 'readonly')
            editBtn.style.display = 'block'
            deleteBtn.style.display = 'block';
            submit.style.display = 'none'

            deleteBtn.addEventListener('click', () => {
                textInput.removeAttribute('readonly')
                deleteBtn.style.display = ''
            })

        })  
    })
    localStorage.setItem('addTodo', JSON.stringify(addTodo));
})