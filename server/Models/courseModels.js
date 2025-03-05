import mongoose from "mongoose";
const CourseSchema = new mongoose.Schema({
    CourseProvider: {type:String,required:true},
    CourseTitle: {type:String,required:true},
    SkillsGained: {type:String,required:true},
    Rating: {type:Number, required:true},
    NumberofReviews: {type:String,required:true},
    CourseDuration: {type:String,required:true},
    CourseImage:{type:String},
    ProviderLogo: {type:String},
    CourseLink: {type:String},
    NumStudents: {type:Number},
    NumLessons : {type:String},
    Price : {type:String},
    Category: {type:String}
})
const CourseModel = new mongoose.model("courses",CourseSchema);
export default CourseModel;