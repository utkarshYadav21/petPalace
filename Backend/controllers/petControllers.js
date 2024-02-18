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
  let Dogs = await Pets.find({ petType: "Dog" });
  let Cats = await Pets.find({ petType: "Cat" });
  let Birds = await Pets.find({ petType: "Bird" });
  let Rabbits = await Pets.find({ petType: "Rabbit" });
  let Mouses = await Pets.find({ petType: "Mouse" });
  let Hamsters = await Pets.find({ petType: "Hamster" });
  res.status(200).json({ Dogs, Cats, Birds, Rabbits, Mouses, Hamsters });
};
module.exports.search_get = async (req, res) => {
  let Dogs = await Pets.find({
    $and: [{ petType: "Dog" }, { breed: { $regex: req.params.key } }],
  });
  let Cats = await Pets.find({
    $and: [{ petType: "Cat" }, { breed: { $regex: req.params.key } }],
  });
  let Birds = await Pets.find({
    $and: [{ petType: "Bird" }, { breed: { $regex: req.params.key } }],
  });
  let Rabbits = await Pets.find({
    $and: [{ petType: "Rabbit" }, { breed: { $regex: req.params.key } }],
  });
  let Mouses = await Pets.find({
    $and: [{ petType: "Mouse" }, { breed: { $regex: req.params.key } }],
  });
  let Hamsters = await Pets.find({
    $and: [{ petType: "Hamster" }, { breed: { $regex: req.params.key } }],
  });
  res.status(200).json({ Dogs, Cats, Birds, Rabbits, Mouses, Hamsters });
};
module.exports.adopt_single_get = async (req, res) => {
  let pet = await Pets.findOne({ _id: req.params.id });
  console.log(pet);
  res.send({ pet: pet });
};

module.exports.adopt_post = async (req, res) => {
  const { name, email, phone, address ,id} = req.body;
  try {
    let request = new Requests({
      Name: name,
      Email: email,
      Phone_Number: phone,
      Address: address,
      petId:id
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
