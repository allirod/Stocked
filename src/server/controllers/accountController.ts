import db from '../db';
import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { client } from '../server';

const errorGenerator = (e: Error, middleware: string) => {
    return {
        log: `Error in ${middleware}`,
        status: 500,
        message: {error: e}
    }
}

type controllerMethod = (req: Request, res: Response, next: NextFunction) => Promise<void>;

interface IController {
    [key: string]: controllerMethod
}

const accountController: IController = {};

accountController.signup = async function(req, res, next){
    const { firstName, lastName, username, password } = req.body;
    try {
        const result = await db.query('SELECT * FROM users WHERE username=$1', [username]);
        if(result.rows.length) {
            res.locals.status = 400;
            res.locals.message = 'Username not available';
            return next();
        } else {
            const hash = await bcrypt.hash(password, 12);
            await db.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hash]);
            res.locals.status = 200;
            res.locals.message = 'Successful user creation'
            return next();
        }
    } catch (err) {
        return next(errorGenerator(err, 'accountController.signup'));
    }
}

accountController.login = async function(req, res, next) {
    const { username, password } = req.body;
    res.locals.obj = {};
    try{
        const { rows } = await db.query('SELECT * FROM users WHERE username=$1', [ username ]);
        if(!rows.length) {
            res.locals.username = username;
            res.locals.obj.message = 'User not found';
            return next();
        }
        const bcryptBool = bcrypt.compareSync(password, rows[0].password);
        if(bcryptBool) {
            req.session.username = username
            req.session.save();
        };
        res.locals.obj.message = bcryptBool ? 'Success' : 'Invalid password';
        return next();
    } catch (e) {
        return next(errorGenerator(e, 'accountController.login'));
    }
}

export default accountController;