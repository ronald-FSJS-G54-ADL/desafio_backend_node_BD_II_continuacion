import { Router } from 'express'
import { createPost, deletePost, getAllPosts, incrementLikes, saludo } from '../controllers/posts_controller.js'

const router = Router()

//Ruta de prueba
router.get('/', saludo)

//Ruta GET
router.get('/posts', getAllPosts)  

//ruta POST
router.post('/posts', createPost)

//ruta PUT incremento de likes
router.put('/posts/like/:id', incrementLikes)

//ruta DELETE
router.delete('/posts/:id', deletePost)

export default router