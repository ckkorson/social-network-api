const router = require('express').Router();
const {
  // getThoughts,
  // getSingleThought,
  createThought,
  // updateThought,
  // deleteThought,
} = require('../../controllers/thoughtController');

// /api/students
// router.route('/').get(getThoughts).post(createThought);
router.route('/').post(createThought)
// /api/students/:studentId
// router
// .route('/:studentId')
// .get(getSingleThought)
// .put(updateThought)
// .delete(deleteThought);

module.exports = router;
