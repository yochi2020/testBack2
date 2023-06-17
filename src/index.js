import app from "./server.js";
import mongoose from "mongoose";

app.listen(process.env.PORT,async()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGODB_URL).then(() => {
        // eslint-disable-next-line no-console
        console.log(`server is runing on port ${process.env.PORT}`);
    }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
    });
})