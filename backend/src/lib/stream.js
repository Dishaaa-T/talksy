import {StreamChat} from "stream-chat";
import "dotenv/config";

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;

if(!api_key || !api_secret){
    console.error("Stream API key and secret are required");
}

const streamClient = StreamChat.getInstance(api_key, api_secret);

export const upsertStreamUser = async (userData) => {
    try{
        await streamClient.upsertUser(userData);
    }
        catch(error){
            console.error("Error upserting Stream user:", error);
        }
    
}

//ADD FUNCTION TO GENERATE STREAM TOKEN
export const generateStreamToken = (userId) => {};
    

export default streamClient;
