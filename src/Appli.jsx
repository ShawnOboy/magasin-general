import './Appli.scss';
import Entete from './Entete';
import ListProduits from './ListProduits';
import Footer from './Footer';

function Appli() {
  return (

      <div className="Appli">
        <Entete/>
        <ListProduits/>
        <Footer/>
      </div>

  );
}

export default Appli;
