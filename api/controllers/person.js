const express = require('express');
const Router = express.Router();
const db = require("../models");
const Person = db.person;

Router.post('/newPerson', (req, res) => {

  const request = {
    person_rut: req.body.person_rut,
    person_name: req.body.person_name,
    person_lastname: req.body.person_lastname,
    person_age: req.body.person_age || null,
    person_address: req.body.person_address,
  };

  Person.findAll({
      where: {
        person_rut: req.body.person_rut,
      }
    })
    .then(data => {
      if (data.length > 0) {
        res.status(400).send({
          message: `User with the RUT ${req.body.person_rut} already exist.`
        });
      } else {
        Person.create(request).then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message: err.message || "Some error occurred while creating the record."
            });
          });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the record."
      });
    });
});

Router.get('/getAllPerson', (req, res) => {
  Person.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving persons."
      });
    });
});


Router.put('/updatePerson/', (req, res) => {
  const person_id = req.body.person_id;
  const request = {
    person_rut: req.body.person_rut,
    person_name: req.body.person_name,
    person_lastname: req.body.person_lastname,
    person_age: req.body.person_age || null,
    person_address: req.body.person_address,
  };

  Person.update(request, {
      where: {
        person_id: person_id
      }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "person was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Person with ${person_id}, person doesn't exist.`
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
});

Router.delete('/deletePerson/:person_id', (req, res) => {
  const person_id = req.params['person_id'];
  Person.destroy({
      where: {
        person_id: person_id
      }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Person was deleted successfully."
        });
      } else {
        res.send({
          message: `Cannot delete Person with ${person_id}, person doesn't exist.`
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: "Could not delete person"
      });
    });
});



module.exports = Router;