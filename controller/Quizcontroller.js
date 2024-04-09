import QuizModel from "../Models/QuizModel.js"

export const getQuiz = async (req,res)=>{
    try {
    const data = await QuizModel.find({},{_id : 1,question : 1,answers : 1});
    res.status(200).json({data})
    } catch (error) {
    res.status(500).json({message : error.message})
    }
}

export const getQuizId = async (req,res)=>{
    try {
    const {id} = req.params;
    const data = await QuizModel.findById(id,{_id : 1,question : 1,answers : 1});
    res.status(200).json({data})
    } catch (error) {
    res.status(500).json({message : error.message})
    }
}

export const postQuiz = async (req,res)=>{
   try {
    const quiz = new QuizModel(req.body);
    await quiz.save();
    res.status(200).json(quiz)
   } catch (error) {
    res.status(500).json({message : error.message})
   }
}

export const putQuizId = async (req,res)=>{
    try {
    const {id} = req.params;
    const quiz = await QuizModel.findByIdAndUpdate(id,req.body);
    if(!quiz){
    res.status(404).json({message : `Cannot find by Id ${id}`})
    }
    res.status(200).json(quiz)
    } catch (error) {
    res.status(500).json({message : error.message})
    }
}

export const deleteQuizId = async (req,res)=>{
   try {
    const {id} = req.params;
    const quiz = await QuizModel.findByIdAndDelete(id);
    res.status(200).json(quiz)
   } catch (error) {
    res.status(500).json({message : error.message})
   }
}