import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import donorRoutes from "./routes/donorRoutes.js";


// Routes
import authRoutes from './routes/auth.js';

const app = express();
app.use(cors());
app.use(express.json()); // for JSON body parsing

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/bloodbank', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);
app.use("/api/donors", donorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
