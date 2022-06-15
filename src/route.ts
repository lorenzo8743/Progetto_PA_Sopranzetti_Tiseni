import { repository } from './database/Models/repository';
import Express, { Request, Response } from 'express';
import { checkHeader } from './middleware/auth-JWT';
import { errorHandler } from './middleware/middleware-error';
const router = Express.Router();

router.get('/', (req, res) => {
    res.send('Hello pippo');
});

var repo = new repository();

router.get('/test', checkHeader, errorHandler, (req: Request, res: Response) => {
    repo.test().then((result) => {
        res.send(result)
    })
} )


export default router