const Pets = require("../models/Pets");
const Requests = require("../models/Request");

// Handle pet giveaway request
module.exports.giveaway_post = async (req, res) => {
  try {
    const { type, breed, age, owner, description, address } = req.body.formData;
    const image = req.body.image;

    const pet = new Pets({
      image,
      petType: type,
      breed,
      age,
      petOwner: owner,
      petDescription: description,
      address,
    });

    const savedPet = await pet.save();
    res.status(201).json({ pet: savedPet });
  } catch (error) {
    console.error("Error in giveaway_post:", error);
    res
      .status(500)
      .json({ message: "Failed to save pet", error: error.message });
  }
};

// Get pets available for adoption by type
module.exports.adopt_get = async (req, res) => {
  try {
    const petTypes = ["Dog", "Cat", "Bird", "Rabbit", "Mouse", "Hamster"];
    const pets = {};

    for (const type of petTypes) {
      pets[type] = await Pets.find({ petType: type });
    }

    res.status(200).json(pets);
  } catch (error) {
    console.error("Error in adopt_get:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch pets", error: error.message });
  }
};

// Search pets by breed
module.exports.search_get = async (req, res) => {
  try {
    const { key } = req.params;
    const petTypes = ["Dog", "Cat", "Bird", "Rabbit", "Mouse", "Hamster"];
    const pets = {};

    for (const type of petTypes) {
      pets[type] = await Pets.find({
        petType: type,
        breed: { $regex: key, $options: "i" }, // Case insensitive search
      });
    }

    res.status(200).json(pets);
  } catch (error) {
    console.error("Error in search_get:", error);
    res
      .status(500)
      .json({ message: "Failed to search pets", error: error.message });
  }
};

// Get a single pet by ID
module.exports.adopt_single_get = async (req, res) => {
  try {
    const pet = await Pets.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }
    res.status(200).json({ pet });
  } catch (error) {
    console.error("Error in adopt_single_get:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch pet", error: error.message });
  }
};

// Handle adoption request
module.exports.adopt_post = async (req, res) => {
  const { name, email, phone, address, id } = req.body;

  try {
    const request = new Requests({
      Name: name,
      Email: email,
      Phone_Number: phone,
      Address: address,
      petId: id,
    });

    const savedRequest = await request.save();

    if (savedRequest) {
      await Pets.deleteOne({ _id: id });
      res
        .status(201)
        .json({
          request: savedRequest,
          message: "Adoption request successful and pet removed from listing",
        });
    } else {
      res.status(400).json({ message: "Failed to save adoption request" });
    }
  } catch (error) {
    console.error("Error in adopt_post:", error);
    res
      .status(500)
      .json({ message: "Failed to process adoption", error: error.message });
  }
};

// const Pets = require("../models/Pets");
// const Requests = require("../models/Request");

// module.exports.giveaway_post = async (req, res) => {
//   const { type, breed, age, owner, description, address } = req.body.formData;
//   const image = req.body.image;
//   let pet = await new Pets({
//     image,
//     petType: type,
//     breed,
//     age,
//     petOwner: owner,
//     petDescription: description,
//     address,
//   });
//   pet = await pet.save();
//   res.send(pet);
// };

// module.exports.adopt_get = async (req, res) => {
//   let Dogs = await Pets.find({ petType: "Dog" });
//   let Cats = await Pets.find({ petType: "Cat" });
//   let Birds = await Pets.find({ petType: "Bird" });
//   let Rabbits = await Pets.find({ petType: "Rabbit" });
//   let Mouses = await Pets.find({ petType: "Mouse" });
//   let Hamsters = await Pets.find({ petType: "Hamster" });
//   res.status(200).json({ Dogs, Cats, Birds, Rabbits, Mouses, Hamsters });
// };
// module.exports.search_get = async (req, res) => {
//   let Dogs = await Pets.find({
//     $and: [{ petType: "Dog" }, { breed: { $regex: req.params.key } }],
//   });
//   let Cats = await Pets.find({
//     $and: [{ petType: "Cat" }, { breed: { $regex: req.params.key } }],
//   });
//   let Birds = await Pets.find({
//     $and: [{ petType: "Bird" }, { breed: { $regex: req.params.key } }],
//   });
//   let Rabbits = await Pets.find({
//     $and: [{ petType: "Rabbit" }, { breed: { $regex: req.params.key } }],
//   });
//   let Mouses = await Pets.find({
//     $and: [{ petType: "Mouse" }, { breed: { $regex: req.params.key } }],
//   });
//   let Hamsters = await Pets.find({
//     $and: [{ petType: "Hamster" }, { breed: { $regex: req.params.key } }],
//   });
//   res.status(200).json({ Dogs, Cats, Birds, Rabbits, Mouses, Hamsters });
// };
// module.exports.adopt_single_get = async (req, res) => {
//   let pet = await Pets.findOne({ _id: req.params.id });
//   console.log(pet);
//   res.send({ pet: pet });
// };

// module.exports.adopt_post = async (req, res) => {
//   const { name, email, phone, address ,id} = req.body;
//   try {
//     let request = new Requests({
//       Name: name,
//       Email: email,
//       Phone_Number: phone,
//       Address: address,
//       petId:id
//     });
//     request = await request.save();
//     if(request){
//       let pet=await Pets.deleteOne({_id:id});
//     }
//     res.send(request);
//   } catch (err) {
//     res.status(500).send(err.message);
//     console.log(err.message);
//   }
// };
