function Form({ setTitulo, setImgSRC, setDescripcion, agregarPost, titulo, imgSrc, descripcion }) {
    return (
    <div className="form">
      <div className="mb-2">
        <h5 className="pb-2">Agregar post</h5>
        <div className="text-start ps-2">
            <label>Título</label>
        </div>
        <input
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-2">
        <div className="text-start ps-2">
            <label>URL de la imagen</label>
        </div>
        <input
          value={imgSrc}
          onChange={(event) => setImgSRC(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <div className="text-start ps-2">
            <label>Descripción</label>
        </div>
        <textarea
          value={descripcion}
          onChange={(event) => setDescripcion(event.target.value)}
          className="form-control"
        ></textarea>
      </div>
      <div className="d-flex">
        <button onClick={agregarPost} className="btn btn-light m-auto">
          Agregar
        </button>
      </div>
    </div>
  );
}

export default Form;
