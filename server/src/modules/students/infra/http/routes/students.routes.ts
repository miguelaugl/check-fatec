import { Router } from 'express';
import multer from "multer";
import multerCONF from "../../../../../config/multer.js";

import StudentsController from '@modules/students/infra/http/controller/StudentsController';

const studentsRouter = Router();
const studentsController = new StudentsController();

// studentsRouter.get('/', studentsController.find);
studentsRouter.post('/', multer(multerCONF).single("file"), studentsController.create);
studentsRouter.post('/login', studentsController.login);

export default studentsRouter;
