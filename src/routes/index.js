import expres from 'express'

import roomRouter from './room.js'

const router = expres.Router();
router.get("/", (req, res) => {
    res.status(200).send(` <h1>Welcome to  Hall Booking project</h1>`);
  });


router.use('/room',roomRouter)

export default router;