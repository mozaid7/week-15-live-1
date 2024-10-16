
import { PrismaClient } from "@prisma/client";
import express from "express";

// you can enject the environment variables in docker at the time of running the image not hard-code it in the committing codebase

// docker run -p 3000:3000 -e DATABASE_URL="your_databse_url" backend (your image name)

const app = express();
app.use(express.json());

const client = new PrismaClient();

app.get("/", (req, res) => {
    res.json({
        message: "Healthy server"
    })
})

app.post("/", async (req, res) => {
    await client.user.create({
        data: {
            email: req.body.email,
            name: req.body.name
        }
    })

    res.json({
        message: "Done signing up!"
    })
})



app.listen(3000);