const filterInput = document.querySelector('#filter-input');

function filterList() {
    const filterText = filterInput.value.toLowerCase();
    const contactList = document.querySelector('#names');
    const contactNames = contactList.getElementsByTagName('a');

    for (let i = 0; i < contactNames.length; i++) {

        const currentName = contactNames[i];
        const nameText = currentName.textContent.toLowerCase();

        if (nameText.indexOf(filterText) > -1) {
            currentName.parentElement.style.display = '';
        } else {
            currentName.parentElement.style.display = 'none';
        }
    }
}

filterInput.addEventListener('keyup', filterList);