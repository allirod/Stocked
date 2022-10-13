import express from 'express'
import accountController from './controllers/accountController';

const router = express.Router();

router.post('/signup', accountController.signup, (req, res, next) => {
    return res.status(res.locals.status).json(res.locals.message);
})

router.post('/login', accountController.login, async (req, res, next) => {
    return res.status(200).json(res.locals.obj);
})

export default router