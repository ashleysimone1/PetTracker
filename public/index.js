const petForm = document.querySelector('#pet-form');

const handleSubmit = (e) => {
    e.preventDefault();
    const petObj = Object.fromEntries(new FormData(e.target));
    petObj.friendly = petObj.friendly === "on";
    console.log(petObj);

    fetch('/api', () => {
        method: 'POST'
    })
}

petForm.addEventListener('submit', handleSubmit);