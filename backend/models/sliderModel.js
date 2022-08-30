import mongoose from "mongoose";

//Create table into MongoDB
const sliderSchema = new mongoose.Schema(
    {
      
        image: {type: String, required: true},
    },
    {
        timestamps: true , // add date
    }
);
const Slider = mongoose.model('Slider', sliderSchema);
export default Slider;