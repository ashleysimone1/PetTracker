const { response } = require('express');
const knex = require('./knex');

class Pets {
  // This is just an example query, obviously you need to change it, but it shows you how to use knex.raw and dynamic values
  static async list() {
    try {
      const query = `SELECT * FROM pets`;
      const response = await knex.raw(query);
      return response.rows || [];
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async create(pet_name, pet_picture, pet_species, is_friendly) {
    try {
      const query = `INSERT INTO pets (pet_name, pet_picture, pet_species, is_friendly)
      values (?, ?, ?, ?)
      returning *`;
      const { rows: [newPet] } = await knex.raw(query, [pet_name, pet_picture, pet_species, is_friendly]);
      return newPet;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async delete(id){
    try{
      const query = `DELETE FROM pets WHERE pet_id = ?;`
      const { rowCount } = await knex.raw(query, [id]);
      return !!rowCount;
    }catch (err){
      console.error(err);
      return null;
    }
  }
}

module.exports = Pets;