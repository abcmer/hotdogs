const express = require ('express');
const router = express.Router();
const {getAllMovies} = require('../queries/get-all-movies')

router.get('/', (req, res, next) => {
  res.json({"msg": "Hello World"})
});

router.get('/movies', async (req, res, next) => {
  const data = await getAllMovies()
  console.log('data', data)
  res.json(data)
})



router.post('/users', (req, res, next) => {
  User.create(req.body)
    .then(data => res.json(data))
    .catch(next)
})

router.put('/users/:userId', async (req, res, next) => {
  const {userId} = req.params;
  const filter = { _id: userId };
  const update = req.body;
  try { 
    let doc = await User.findOneAndUpdate(filter, update);
    console.log('doc', doc)
    res.json(await User.findOneAndUpdate(filter, update))
  } catch (error) {
    next(error)
  }
})

router.get('/users', (req, res, next) => {
  const filter = req.query;
  User.find(filter)
    .then(data => res.json(data))
    .catch(next)
})



module.exports = router;