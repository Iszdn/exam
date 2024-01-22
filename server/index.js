import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
const { Schema } = mongoose;

const courseSchema = new Schema({
  title: String, 
  author: String,
  image: String,
  price:Number,
  desc:String
});
const Courses = mongoose.model('course', courseSchema);

app.get('/', async (req, res) => {
try {
 const course=await Courses.find({})
    res.json(course)
} catch (error) {
    res.status(500).json(error)
} 
})
app.post('/', async (req, res) => {
    try {
     const course=new Courses({...req.body})
        await course.save()
        res.status(200).json("created")
    } catch (error) {
        res.status(500).json(error)
    } 
    })
    app.get('/:id', async (req, res) => {
        try {
            const {id}=req.params
         const course=await Courses.findById(id)
            res.json(course)
        } catch (error) {
            res.status(500).json(error)
        } 
        })
        app.delete('/:id', async (req, res) => {
            try {
                const {id}=req.params
             const course=await Courses.findByIdAndDelete(id)
             res.status(200).json("deleted")
            } catch (error) {
                res.status(500).json(error)
            } 
            })
mongoose.connect("mongodb+srv://nuranaisazade:nurana2004@cluster0.bnrclo9.mongodb.net/").then(()=>console.log("connected")).catch((error)=>console.log(error))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})