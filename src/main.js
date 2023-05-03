const { db } = require('../db/connection.js');
const Pokemon = require('./model.js');

async function main() {
  await db.sync({force: true});

  const pikachu = await Pokemon.create({
    name: 'Pikachu',
    type: 'Electric',
    weight: 6
  });

  await Pokemon.bulkCreate([
    {
      name: "Bulbasaur",
      type: "Grass/Poison",
      weight: 6.9,
    },
    {
      name: "Charmander",
      type: "Fire",
      weight: 8.5,
    },
    {
      name: "Squirtle",
      type: "Water",
      weight: 9,
    },
  ])

  const allPokemon = await Pokemon.findAll();
  // console.log(allPokemon);
  const oneCharmander = await Pokemon.findOne({ where: {name: "Charmander"}});
  // console.log(oneCharmander);
  const idOfOne = await Pokemon.findByPk(1);
  console.log(idOfOne);

  // const updateResult = await Pokemon.update({
  //   type: "lightning"
  // },
  // { where: {name: "Pikachu"}})

  // console.log(updateResult);

  // const deleteResult = await Pokemon.destroy({ where: {name: "Charmander"}})
  // console.log(deleteResult)
}

main();


// let's say you have an async function called retrieveData()

// we can use .then to grab the values from the resolved Promise

// retrieveData()
// .then(response => console.log(response))