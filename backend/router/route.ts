import {Router} from 'express'
import getTodo from '../controllers/getTodos'
import addTodo from '../controllers/addTodo'
import { updateTodo } from '../controllers/updateTodo';
import { deleteTodo } from '../controllers/deleteTodo';

const router = Router();

router.get('/', (req,res) => {
    res.send('Hello world')
})

router.get('/getTodo', async(req,res) => {
    try {
        const data = await getTodo();
        res.status(200).json({
        success : true,
        data : data,
        message : "Data fetched successfully"
    })
    } catch (error) {
        console.log(error);
    }
})

router.post('/addTodo',async(req,res) => {
    const {title, description, status} = req.body
    try {
        const data = await addTodo(title, description, status);
        res.status(200).json({
        success : true,
        data : data,
        message : "Data added successfully"
    })
    } catch (error) {
        console.log(error);
    }
})

router.put('/updateTodo', updateTodo);
router.delete('/deleteTodo',deleteTodo)

export default router