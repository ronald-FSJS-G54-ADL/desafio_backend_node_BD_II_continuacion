import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Post from "./components/Post";

const urlBaseServer = "http://localhost:5000";

function App() {
  const [titulo, setTitulo] = useState("");
  const [imgSrc, setImgSRC] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data: {posts} } = await axios.get(urlBaseServer + "/posts");
    setPosts(posts); 
  };

  const agregarPost = async () => {
    const post = { titulo, img: imgSrc, descripcion, likes: 0 };
    await axios.post(urlBaseServer + "/posts", post);
    getPosts();
    resetForm();
  };

  // Funcion likes (para actualizar solo el post y no toda la lista)
  const like = async (id) => {
    await axios.put(urlBaseServer + `/posts/like/${id}`);
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    )
  }

  // Eliminar un post
  const eliminarPost = async (id) => {
    await axios.delete(urlBaseServer + `/posts/${id}`);
    getPosts();
  };

  const resetForm = () => {
    setTitulo("");
    setImgSRC("");
    setDescripcion("");
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <h2 className="py-5 text-center">&#128248; Like Me &#128248;</h2>
      <div className="row m-auto px-5">
        <div className="col-12 col-sm-4">
          <Form
            setTitulo={setTitulo}
            setImgSRC={setImgSRC}
            setDescripcion={setDescripcion}
            agregarPost={agregarPost}
            titulo={titulo}
            imgSrc={imgSrc}
            descripcion={descripcion}
          />
        </div>
        <div className="col-12 col-sm-8 px-5 row posts align-items-start">
          {posts.map((post, i) => (
            <Post
              key={i}
              post={post}
              like={like}
              eliminarPost={eliminarPost}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
