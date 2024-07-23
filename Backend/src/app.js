// import express from 'express'

// import cors from "cors"
// import cookieParser from 'cookie-parser';


// const app = express();
// app.use(cors())

// //import routes
// import { overComplete } from './routes/overCompleteRoute';
// app.use('/api/v1',overComplete)
// export {app}


import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';
import overCompleteRouter from './routes/overCompleteRoute'; // Import the router

const app = express();

app.use(cors());
app.use(express.json()); // Parse incoming requests with JSON payloads
app.use(cookieParser());

// Mount routes
app.use('/api/v1', overCompleteRouter); // Mount the router on the specified path
//http://localhost:8000/api/v1/submitOver
export { app };