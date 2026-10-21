const Imagen = ({ img, color = "#000", text = "#fff", titulo, descripcion }) => {
    return (
        <div className="col-3 mb-4">
            <div className="card p-3" style={{ backgroundColor: color, color: text, borderColor: color }}>
                
                {/* 1. Título arriba de la imagen */}
                <div className="card-header bg-transparent border-0 text-center pb-2">
                    <h5 className="card-title m-0 fw-bold">{titulo}</h5>
                </div>

                {/* 2. Imagen en el centro */}
                <div className="card-img text-center">
                    <img className="mx-auto d-block img-fluid" src={img} alt={titulo || "Imagen"} width={200} height={350} style={{ objectFit: "cover" }} />
                </div>

                {/* 3. Descripción abajo de la imagen */}
                <div className="card-body text-center pt-3">
                    <p className="card-text m-0">{descripcion}</p>
                </div>

            </div>
        </div>
    );
};

export default Imagen;