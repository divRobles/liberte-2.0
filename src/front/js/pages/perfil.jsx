import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Filtro } from "../component/perfil/Filtro.jsx";
import { About } from "../component/perfil/About.jsx";
import "../../styles/perfil/perfil.css";

export const Perfil = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);

  const [scroll, setScroll] = useState(null);

  // Por algun motivo la pagina se renderiza con scroll hacia abajo, asi que ejecutamos esto para que se cargue si scroll (no tarda nada)
  useEffect(() => {
    window.scrollTo(0, 0);
    setScroll(true);
    store.productoPedido = false;
  }, []);


  useEffect(() => {

    actions.perfil_artista(id);

    // actions.perfil_galeria(id, {
    //   precio_min: "",
    //   precio_max: "",
    //   categoria: "",
    //   vendido: false,
    // });
  }, [id]);


  return (
    <>
      {scroll ? (
        store.artista.id && (

          <div className="pt-4 mb-0 min-vh-100">
            <div className="container">
              <h1
                className="perfil-header fst-italic fw-light mb-4"
                id="stack-top"
              >
                {typeof store.artista.nombre !== "undefined"
                  ? typeof store.userInfo.id !== "undefined" &&
                    store.userInfo.id == id
                    ? `Hola, ${store.artista.nombre} !`
                    : `${store.artista.nombre} `
                  : `${store.artista.nombre}`}
              </h1>
              <About id={id} />
            </div>
            <Filtro
              id={id}
              nombreArtista={`${store.artista.nombre}`}
              fotoArtista={store.artista.foto_usuario}
            />
          </div>
        )
      ) : null}
    </>
  );
};
