export const config = {
   credentials: true,
   origin: [
      'http://localhost:3000',
      'localhost:3000',
      'http://172.20.20.3:3000',
      '172.20.20.3:3000',
      "http://localhost:8080",
      "localhost:8080",
      "http://127.0.0.1:5173",
      "127.0.0.1:5173"
   ],
   default: 'http://localhost:3000',
   optionsSuccessStatus: 200
};