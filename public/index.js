const petForm = document.querySelector('#pet-form');

const createPetCard = (obj) => {
    const petList = document.querySelector('#pet-list');
    const section = document.createElement('li');
    petList.appendChild(section);

    const h2 = document.createElement('h2');
    h2.innerText = obj.petName;
    section.appendChild(h2);

    const img = document.createElement('img');
    img.src = `Name:`, obj.petPicture;
    section.appendChild(img);

    const petSpecies = document.createElement('h3');
    petSpecies.innerText = `Species:`, obj.petSpecies;
    section.appendChild(petSpecies);

    const isFriendly = document.createElement('h4');
    if(isFriendly){
        isFriendly.textContent = 'This pet is friendly!'
    }else{
        isFriendly.textContent = 'This pet is not friendly :('
    }
    section.appendChild(obj.isFriendly);
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
      .then(data => console.log(data))

      createPetCard(petObj);
}

petForm.addEventListener('submit', handleSubmit);

