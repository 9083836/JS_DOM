const resultDiv = document.querySelector('.result');
const taskInput = document.querySelector('input[type="text"]');
const addButton = document.querySelector('.add');
const deleteButton = document.querySelector('.delete');

addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskDiv = document.createElement('div');
        taskDiv.textContent = taskText;
        taskDiv.style.border = "1px solid #fff";
        taskDiv.style.padding = "6px";
        taskDiv.style.borderRadius = "4px";
        taskDiv.style.marginBottom = "5px";
        taskDiv.style.wordBreak = "break-all";

        resultDiv.append(taskDiv);

        taskInput.value = '';
    }
});


deleteButton.addEventListener('click', () => {
    resultDiv.innerHTML = '';
});
