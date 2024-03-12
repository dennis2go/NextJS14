import mongoose from 'mongoose';

let connection: {};
const db = "mongodb+srv://bloemeke:BVB-09@cluster0.e6s3cnu.mongodb.net/onlineShop?retryWrites=true&w=majority&appName=Cluster0";
export const connectToDb = async() => {
    try {
        if(connection) {
            return;
        }
        else {
            const temp = await mongoose.connect(db);
            connection = temp.connections[0].readyState;
        }
        
    }
    catch(error) {
        throw new Error("Databank Connecting ERROR:"+ error);
    }
}

