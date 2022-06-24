import express, { Response as ExResponse, Request as ExRequest } from 'express';
import httpErrors from 'http-errors';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import path from 'path';
import { RegisterRoutes } from './controllers/routes';
import { webappRoot } from './env';

export const app = express();

if (webappRoot) {
  const index = path.join(webappRoot, 'index.html');
  app.use(express.static(webappRoot));
  app.get(
    '/',
    (req, res, next) => {
      const { amount } = req.query;

      if (!amount || typeof amount !== 'string') {
        next(new httpErrors.BadRequest('Invalid/missing amount parameter'));
        return;
      }
      res.sendFile(index);
    },
  );
}

app.use(
  cors({
    allowedHeaders: '*',
    exposedHeaders: '*',
  }),
);

// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());

app.get('/re', (req, res) => {
  res.redirect('https://www.baidu.com');
});

app.use('/docs', swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => res.send(
  swaggerUi.generateHTML(await import('./controllers/swagger.json')),
));

RegisterRoutes(app);
