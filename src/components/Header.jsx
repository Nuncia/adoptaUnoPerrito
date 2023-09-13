import { PropTypes } from "prop-types";

const Header = ({textoTitulo}) =>{
    return(
        <header>
            <nav>
                <div className="encabezado">
                    <h1>{textoTitulo}</h1>
                </div>
            </nav>
        </header>
        
    )
};

export default Header;

Header.propTypes = {
    textoTitulo: PropTypes.string.isRequired
};