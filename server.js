const { Prisma } = require('@prisma/client');
const prisma = require('./src/lib/prisma');
const express = require('express');
const next = require('next');
const multer = require('multer');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

server.use(express.json());
server.post('/api/lessons', upload.single('lessonPdf'), async (req, res) => {
  try {
    const body = req.body;
    const lessonPdf = req.file ? req.file.buffer : null;

    console.log('Request Body:', body);
    console.log('Lesson PDF:', lessonPdf);

    if (req.is('multipart/form-data')) {
      // File upload case
      if (!lessonPdf) {
        return res.status(400).json({ message: 'No file provided' });
      }
    } else {
      // JSON data case
      if (!body.lessonNumber || !body.lessonTitle || !body.unitId) {
        return res.status(400).json({ message: 'Invalid data provided' });
      }
    }    

    const lesson = await prisma.lesson.create({
      data: {
        lessonNumber: body.lessonNumber,
        lessonTitle: body.lessonTitle,
        lessonPdf: lessonPdf,
        unitId: body.unitId,
      },
    });

    res.json(lesson);
  } catch (error) {
    console.error(error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      res.status(400).json({ message: 'Invalid data provided' });
    } else {
      res.status(500).json({ message: 'Something went wrong!' });
    }
  }
});

app.prepare().then(() => {
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3001, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3001');
  });
});
