import {Request, Response} from 'express';

const mainFunction = (req: Request, res: Response): Response => {
  return res.json({
    response: 'ok',
    status: 200,
    routes: [
      {
        metod: 'GET',
        path: '/api/',
        description: 'API Working',
      },
    ],
  });
};

export default mainFunction;
