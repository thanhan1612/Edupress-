import mongoose from "mongoose";
const InstructorsSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    logo: {
        type:String,
        default:"https://as1.ftcdn.net/v2/jpg/01/87/38/18/1000_F_187381803_PkyqnKdHacpV4dXk6jaHGTvtdwqVCclS.jpg"
    },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "courses" }]
});
const InstructorsModel = new mongoose.model("Instructors",InstructorsSchema);
export default InstructorsModel;