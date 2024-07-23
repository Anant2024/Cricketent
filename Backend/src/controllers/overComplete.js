import { Score } from "../models/Score.js"

const overComplete=(async(req,res)=>{
   console.log("i am anant")
   const over = req.body
   //checking if object is empty or not 
   // if(Object.keys(eachOver).length===0){
   //  console.log("Complete the over!!")
   // }
   //now push the over detalil to database
try {
  const score = await Score.findOneAndUpdate(
    {}, 
    { $push: { eventOver: over } }, // Pushing eachOver object into the eventOver array
    { new: true }
   
  
);  

console.log("Over detailed saved")
} catch (error) {
    console.log("error while saving the over",error)
}



   console.log(over)
   res.send("Response from overComplete");
   
})
export {overComplete}