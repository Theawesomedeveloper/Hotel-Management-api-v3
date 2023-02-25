import  express from 'express'
import  authenticate from '../middlewares/authenticate.middleware'
import  authorize from '../middlewares/authorize.middleware'
import  roomTypeController from '../controllers/roomtype.controller'
import  {validateUserInput} from '../middlewares/validation.middleware'

const router = express.Router();

router.post('/', authenticate, authorize('admin'), validateUserInput('roomtype'), roomTypeController.createRoomType);
router.patch('/:roomType', authenticate, authorize('admin'), roomTypeController.editRoomType);
router.delete('/:roomType', authenticate, authorize('admin'), roomTypeController.deleteRoomType);
router.get('/:roomType', authenticate, roomTypeController.fetchOneRoomType);
router.get('/', authenticate, roomTypeController.fetchAllRoomTypes);

export default router;


