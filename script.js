// Function which takes a modal id name as an argument
function showModal(modal) {

    // Gets all modals and removes class 'show'
    closeModal();

    // Uses the passed argument to find the modal from HTML elements
    modal = document.getElementById(modal);

    // Toggles 'show' class from the element list of classes
    modal.classList.add("show")



    var background = document.getElementById('close-modals');

    background.classList.add('show-background');
}

function closeModal() {

    var background = document.getElementById('close-modals');

    background.classList.remove('show-background');

    // Gets all modals and removes class 'show'
    allModals = document.getElementsByClassName('modal');
    for(var i = 0; i < allModals.length; i++) {
        allModals[i].classList.remove("show");
    }
}



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
