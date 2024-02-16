const Pets = require("../models/Pets");
const Requests = require("../models/Request");

module.exports.giveaway_post = async (req, res) => {
  const { type, breed, age, owner, description, address } = req.body.formData;
  const image = req.body.image;
  let pet = await new Pets({
    image,
    petType: type,
    breed,
    age,
    petOwner: owner,
    petDescription: description,
    address,
  });
  pet = await pet.save();
  res.send(pet);
};

module.exports.adopt_get = async (req, res) => {
  let Dogs = await Pets.find({ type: "Dog" });
  let Cats = await Pets.find({ type: "Cat" });
  let Birds = await Pets.find({ type: "Bird" });
  let Rabbits = await Pets.find({ type: "Rabbit" });
  let Mouses = await Pets.find({ type: "Mouse" });
  let Hamsters = await Pets.find({ type: "Hamster" });
  res.status(200).json({ Dogs, Cats, Birds, Rabbits, Mouses, Hamsters });
};
module.exports.search_get = async (req, res) => {
  let Dogs = await Pets.find({
    $and: [{ type: "Dog" }, { breed: { $regex: req.params.key } }],
  });
  let Cats = await Pets.find({
    $and: [{ type: "Cat" }, { breed: { $regex: req.params.key } }],
  });
  let Birds = await Pets.find({
    $and: [{ type: "Bird" }, { breed: { $regex: req.params.key } }],
  });
  let Rabbits = await Pets.find({
    $and: [{ type: "Rabbit" }, { breed: { $regex: req.params.key } }],
  });
  let Mouses = await Pets.find({
    $and: [{ type: "Mouse" }, { breed: { $regex: req.params.key } }],
  });
  let Hamsters = await Pets.find({
    $and: [{ type: "Hamster" }, { breed: { $regex: req.params.key } }],
  });
  res.status(200).json({ Dogs, Cats, Birds, Rabbits, Mouses, Hamsters });
};
module.exports.adopt_single_get = async (req, res) => {
  let pet = await Pets.findOne({ _id: req.params.id });
  res.send({ pet: pet });
};

module.exports.adopt_post = async (req, res) => {
  const id=req.params.id;
  const { name, email, phone, address } = req.body;
  try {
    let request = new Requests({
      Name: name,
      Email: email,
      Phone_Number: phone,
      Address: address,
    });
    request = await request.save();
    if(request){
      let pet=await Pets.deleteOne({_id:id});
    }
    res.send(request);
  } catch (err) {
    res.status(500).send(err.message);
    console.log(err.message);
  }
};
