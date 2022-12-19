/* importamos la libreria React y el useContext hook */
import React, { useContext, useEffect } from "react";

/* destructuring de Context */
import { Context } from "../store/appContext";
/* destructuring de Link */
import { Link } from "react-router-dom";
/* importamos los estilos */
import "../../styles/detallesPedido.css";

/* almacenamos las propiedades del objeto en una constante */
const DetallesPedido = ({
    id,
    nombre,
    img,
    precio,
    descripcion,
    dimensiones,
    categoria,
    nombreArtista,
    fotoArtista,
    fechaPedidoProp,
    idUser
}) => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        store.listaCesta = false;
        store.listaPerfil = false;
        store.productoPedido = true;
    }, [])


    return (
        <div className="container-pedido">
            <div className="col-6 col-foto-info-producto-cesta">
                <div className="container-foto-info-producto-pedido">
                    <img src={img} />
                </div>
            </div>

            <div className="col-6 col-info-producto-pedido d-flex">
                <div className="artista">
                    <Link
                        to={`/producto/${id}`}
                        onClick={() => {

                            localStorage.getItem("productSelect") &&
                                localStorage.removeItem("productSelect");

                            actions.productoSelect(
                                id,
                                nombre,
                                img,
                                precio,
                                descripcion,
                                dimensiones,
                                categoria,
                                nombreArtista,
                                fotoArtista,
                                idUser
                            )
                            store.listaPedidos = true;

                        }
                        }
                    >
                        <div className="d-flex flex-row">
                            <p className="titular">{"Título de la obra"}</p>
                            <p className="titulo-obra">{`: ${nombre}`}</p>
                        </div>
                    </Link>
                    <div className="d-flex flex-row">
                        <p className="titular">{`Artista`}</p>
                        <p>{`: ${nombreArtista}`}</p>
                    </div>
                    <div className="d-flex flex-row">
                        <p className="titular">{`Fecha de pedido`}</p>
                        <p>{`: ${fechaPedidoProp}`}</p>
                    </div>
                    <div className="d-flex flex-row">

                        <p className="titular">{`Precio`}</p>
                        <p>{`: ${precio} €`}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetallesPedido;
