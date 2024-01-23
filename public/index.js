const petForm = document.querySelector('#pet-form');

const createPetCard = (obj) => {
    fetch('/allPets')
    .then(response => {
        return response
    })
    .then(data => {
        console.log(data)
    })
    const petList = document.querySelector('#pet-list');
    const section = document.createElement('li');
    petList.appendChild(section);

    const h2 = document.createElement('h2');
    h2.innerText = obj.petName;
    section.appendChild(h2);

    const img = document.createElement('img');
    img.src = obj.petPicture;
    section.appendChild(img);

    const petSpecies = document.createElement('h3');
    petSpecies.innerText = `Species: ${obj.petSpecies}`;
    section.appendChild(petSpecies);

    const isFriendly = document.createElement('h4');
    isFriendly.innerText = obj.friendly;
    section.appendChild(isFriendly);
}


const handleSubmit = (e) => {
    e.preventDefault();
    const petObj = Object.fromEntries(new FormData(e.target));
    petObj.friendly?petObj.friendly = 'Friendly!':petObj.friendly = 'Watch out!';
    console.log(petObj);

    fetch('/api', {
        method : "POST", 
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify(petObj)
      })
      .then(res => res.json())
      createPetCard(petObj);
}

petForm.addEventListener('submit', handleSubmit);

