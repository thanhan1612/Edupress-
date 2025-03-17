import CourseModel from "../Models/courseModels.js";
import InstructorsModel from "../Models/Instructors.js";
export const findInstructorbyCourse = async (req,res) => {
    const {CourseTitle} = req.body;
    try {
        const course = await CourseModel.findOne({ CourseTitle: CourseTitle }).populate("Instructor_id");
        if (!course){
            res.status(400).send({
                message:"course not found"
            })
        }
        res.status(200).send({
            course
        })
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
}