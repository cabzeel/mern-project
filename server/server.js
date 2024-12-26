import express from 'express';
import dotenv from 'dotenv';
import path from 'path'

import { connectDB } from './config/db.js';

import productRoutes from './routes/product.route.js'

dotenv.config();

export const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //allows us to parse request to our body(req.body) middleware
const __dirname = path.resolve();
app.use("/api/products", productRoutes);

if(process.env.NODE_ENV === "production") {
   app.use(express.static(path.join(__dirname, "/client/dist")));

   app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client","dist","index.html"));
   })
}



/**
 * CRUD - CREATE, UPDATE, DELETE, READ
 */


app.listen(PORT, () => {
   connectDB();
   console.log('Server is running on http://localhost:' + PORT);
   });
