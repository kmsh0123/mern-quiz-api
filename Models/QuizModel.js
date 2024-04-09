import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    question : {
        type : String,
        required : true
    },
    answers : [
        {
            answer : {
                type : String,
                required : true
            },
            isCorrect : {
                type : String,
                required : true
            }
        }
    ]
})

const QuizModel = mongoose.model("quiz",quizSchema);
export default QuizModel;