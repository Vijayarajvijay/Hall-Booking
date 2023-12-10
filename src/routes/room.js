import express  from 'express'
import roomController from '../controller/room.js'

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send(` <h1>Welcome to  Hall Booking project</h1>`);
  });

router.post('/createRoom',roomController.createRoom)
router.post('/bookingRoom',roomController.bookRoom)
router.get('/allBookedRoom',roomController.getRoomsBookedData)
router.get('/allCustomersBooked',roomController.getCustomersBookedData)
router.get('/customerBookingCounts/:customerName',roomController.customerBookingCount)

export default router