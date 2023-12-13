const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 8000;
const Pets  = require('./db/models/pets')

const publicDir = path.join(__dirname, '..', 'public');

const staticAssets = express.static(publicDir);
app.use(staticAssets);

app.get('/allPets', async (req, res) => {
    const petList = await Pets.list()
    console.log(petList);
    res.send(petList);
});

app.post('/api', async (req, res) => {
    console.log(req.body);
    const { friendly, petName, petPicture, petSpecies } = req.body;
    const newPet = await Pets.create(req.body);
    res.send()
})

app.listen(PORT, () => {
    console.log(`listening on port on http://localhost:${PORT}`);
})