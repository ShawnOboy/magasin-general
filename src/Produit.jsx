import "./Produit.scss"
export default function Produit(props) {
    console.log("les propriétés du produit: ", props);
    return(

      <div className="Produit">
        <img src={"/images-produits/" + props.pid + ".webp"} alt={props.nom} />
        <span className="nom">{props.nom} </span>
        <span className="prix">${props.prix} </span>
        <button>Ajouter au panier</button>
      </div>

    )

}