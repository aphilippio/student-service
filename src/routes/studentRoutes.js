import{Router} from 'express';
import{addStudent, findStudent} from '../controller/studentController.js';
import {findStudentsByName} from "../service/studentService.js";

const router = Router();
router.post('/student', addStudent);
router.get('/student/:studentId', findStudent);

//TODO: Homework implement other routes

export default router;