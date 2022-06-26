import connectMongo from "lib/connectMongo";

export default async (req, res)=> {
  try {
    await connectMongo();
    return res.json({connected: true}); 
    
  }catch(error) {
    return res.json({connected: false});
  }
}