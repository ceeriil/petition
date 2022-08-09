const router = require("express").Router();
const handle = require("../handlers");
const auth = require("../middleware/auth");

router.route("/").get(handle.showPetitions).post(auth, handle.createPetition);

router.get("/user", auth, handle.usersPetitions);

router
  .route("/:id")
  .get(handle.getPetition)
  .post(auth, handle.vote)
  .delete(auth, handle.deletePetition);

module.exports = router;
