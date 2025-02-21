import CourseModel from "../Models/courseModels.js"
const getCourses = async (req,res) => {
    try{
    let courses = await CourseModel.find();
    res.status(200).send({
        messageS:"Successful",
        courses
    });
    console.log(courses[0].CourseImage)
    }
    catch(error) {
        res.status(500).send({
            message:error.message
        })
    }

}
export default getCourses;