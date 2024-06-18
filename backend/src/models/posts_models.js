import pool from "../../database/config.js"


// Get all posts
export const getAllPosts_model = async () => {
    const sqlQuery = {text:'SELECT * FROM posts'}
    try {
        const result = await pool.query(sqlQuery)
        return result.rows
    } catch (error) {
        throw new Error('Error al obtener los posts: ' + error.message)
    }
}

// Creating a posts
export const createPost_model = async ({ titulo, img, descripcion, likes = 0 }) => {
    const sqlQuery = {
        text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *',
        values: [titulo, img, descripcion, likes] 
    }
    try {
        const result = await pool.query(sqlQuery)
        return result.rows[0]
    } catch (error) {
        throw new Error('Error al crear el post: ' + error.message)
    }
}

//Incrementing likes on a post
export const incrementLikes_model = async (id) => {
    const sqlQuery = {
        text: 'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *',
        values: [id]
    }
    try {
        const result = await pool.query(sqlQuery)
        return result.rows[0]
    } catch (error) {
        throw new Error('Error al incrementar los likes: ' + error.message)
    }
}

//Delete a post
export const deletePost_model = async (id) => {
    const sqlQuery = {
        text: 'DELETE FROM posts WHERE id = $1 RETURNING *',
        values: [id]
    }
    try {
        const result = await pool.query(sqlQuery)
        return result.rows[0]
    } catch (error) {
        throw new Error('Error al eliminar el post: ' + error.message)
    }
}