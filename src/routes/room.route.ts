import  express from 'express'
import  roomController from '../controllers/room.controller'
import  authenticate from '../middlewares/authenticate.middleware'
import  authorize from '../middlewares/authorize.middleware'
import  {validateUserInput} from '../middlewares/validation.middleware'
const router = express.Router()


router.post('/', authenticate, authorize('admin'), validateUserInput('room'), roomController.createRoom)
router.delete('/:roomId', authenticate, authorize('admin'), roomController.deleteRoom);
router.patch('/:roomId', authenticate, authorize('admin'), roomController.editRoom);
router.get('/:roomId', authenticate, roomController.fetchOneRoom);
router.get('/', authenticate, roomController.fetchAllRooms)

export default router;