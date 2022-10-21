const express = require("express");
const articuloSchema = require("../models/articulo");


const router = express.Router();

// create articulo
router.post("/articulos", (req, res) => {
  const articulo = articuloSchema(req.body);
  articulo
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all articulos
router.get("/articulos", (req, res) => {
  articuloSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a articulo
router.get("/articulos/:id", (req, res) => {
  const { id } = req.params;
  articuloSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a articulo
router.delete("/articulos/:id", (req, res) => {
  const { id } = req.params;
  articuloSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a articulo
router.put("/articulos/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  articuloSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;