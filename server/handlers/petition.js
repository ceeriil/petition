const db = require("../models");

exports.showPetitions = async (req, res, next) => {
  try {
    const petitions = await db.Petition.find().populate("user", [
      "username",
      "id",
    ]);
    // .populate('voted', ['username', 'id']);

    return res.status(200).json(petitions);
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    });
  }
};

exports.usersPetitions = async (req, res, next) => {
  const { id } = req.decoded;
  try {
    const user = await db.User.findById(id).populate("petitions");

    return res.status(200).json(user.petitions);
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    });
  }
};

exports.createPetition = async (req, res, next) => {
  const { id } = req.decoded;
  const { question, options } = req.body;
  try {
    const user = await db.User.findById(id);
    const petition = await db.Petition.create({
      question,
      user,
      options: options.map((option) => ({ option, votes: 0 })),
    });
    user.petitions.push(petition._id);
    await user.save();

    return res.status(201).json({ ...petition._doc, user: user._id });
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    });
  }
};

exports.vote = async (req, res, next) => {
  const { id: petitionId } = req.params;
  const { id: userId } = req.decoded;
  const { answer } = req.body;
  try {
    if (answer) {
      const petition = await db.Petition.findById(petitionId);
      if (!petition) throw new Error("No petition found");

      const vote = petition.options.map((option) =>
        option.option === answer
          ? {
              option: option.option,
              _id: option._id,
              votes: option.votes + 1,
            }
          : option
      );

      console.log("VOTE: USERID ", userId);
      console.log("VOTE: petition.voted ", petition.voted);
      console.log(
        "VOTE: vote filter",
        petition.voted.filter((user) => user.toString() === userId).length
      );

      if (
        petition.voted.filter((user) => user.toString() === userId).length <= 0
      ) {
        petition.voted.push(userId);
        petition.options = vote;
        await petition.save();

        return res.status(202).json(petition);
      } else {
        throw new Error("Already voted");
      }
    } else {
      throw new Error("No Answer Provided");
    }
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    });
  }
};

exports.getPetition = async (req, res, next) => {
  try {
    const { id } = req.params;
    const petition = await db.Petition.findById(id).populate("user", [
      "username",
      "id",
    ]);
    // .populate('voted', ['username', 'id']);
    if (!petition) throw new Error("No petition found");

    return res.status(200).json(petition);
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    });
  }
};

exports.deletePetition = async (req, res, next) => {
  const { id: petitionId } = req.params;
  const { id: userId } = req.decoded;
  try {
    let user = await db.User.findById(userId);
    if (user.petitions) {
      // not sure if necessary either...
      user.petitions = user.petitions.filter((userPetition) => {
        return userPetition._id.toString() !== petitionId.toString(); // not sure if necessary to use toString()
      });
    }

    const petition = await db.Petition.findById(petitionId);
    if (!petition) throw new Error("No petition found");
    if (petition.user.toString() !== userId) {
      throw new Error("Unauthorized access");
    }
    await user.save();
    await petition.remove();
    return res.status(202).json({ petition, deleted: true });
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    });
  }
};
