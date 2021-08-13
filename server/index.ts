import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors';

const app = express();

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://alex:alex1301@cluster0.jbpst.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${5000}`)))
.catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false);