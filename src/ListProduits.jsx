import "./ListProduits.scss";
import Produit from "./Produit";
import produits from "./data/produits.json";

export default function ListProduits() {

    return(

        <section className="ListProduits">
            <h2>Liste des produits</h2>

            <section className="produit">

                {produits.map((prd) => <Produit nom={prd.nom} prix={prd.prix} pid={prd.id} />)}

            </section>

        </section>

    )

}