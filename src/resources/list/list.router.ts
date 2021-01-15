import { Router } from 'express';

const listRouter = Router();

listRouter.route('/:id').get().post().put().delete();

export { listRouter };
