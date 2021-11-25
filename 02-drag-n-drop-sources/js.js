const item = document.querySelector('.item'),
placeholder = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

placeholder.forEach((placeholder) => {
    placeholder.addEventListener('dragover', dragOver);
    placeholder.addEventListener('dragenter', dradEnter);
    placeholder.addEventListener('dragleave', dragLeave);
    placeholder.addEventListener('drop', Drop);
});

function dragStart(e) {
    e.target.classList.add('hold');
    setTimeout(() => e.target.classList.add('hide'), 0);
}

function dragEnd(e) {
    e.target.classList.remove('hold', 'hide');
}

function dragOver(e) {
    e.preventDefault();
}

function dradEnter(e) {
    e.target.classList.add('hovered');
}

function dragLeave(e) {
    e.target.classList.remove('hovered');
}

function Drop(e) {
    e.target.classList.remove('hovered');
    e.target.append(item);
}