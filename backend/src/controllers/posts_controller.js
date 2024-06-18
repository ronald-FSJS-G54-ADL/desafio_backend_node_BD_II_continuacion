import { createPost_model, deletePost_model, getAllPosts_model, incrementLikes_model } from "../models/posts_models.js"

//Ruta de prueba
export const saludo = (req, res) => {
    res.send('ruta «/» habilitada')
}

//GET
export const getAllPosts = async (req, res) => {
    try {
        const posts = await getAllPosts_model()
        res.status(200).json({posts: posts})
    } catch (error) {
        next(error)
    }
}


//POST
export const createPost = async (req, res) => {
    try {
        const { titulo, img, descripcion, likes } = req.body
        const newPost = await createPost_model({ titulo, img, descripcion, likes })
        res.status(201).json(newPost)
    } catch (error) {
        next(error)
    }
}

//PUT (incremento de likes)
export const incrementLikes = async (req, res) => {
    const { id } = req.params
    try {
        const updatePost = await incrementLikes_model(id)
        res.status(200).json(updatePost)
    } catch (error) {
        next(error)
    }
}


//DELETE
export const deletePost = async (req, res) => {
    const { id } = req.params
    try {
        const deletePost = await deletePost_model(id)
        if(deletePost){
            res.status(200).json({message: 'Post eliminado.'})
        } else {
            res.status(404).json({message: 'Post no encontrado.'})
        }
    } catch (error) {
        next(error)
    }
}