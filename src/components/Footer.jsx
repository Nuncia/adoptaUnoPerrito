import {PropTypes} from 'prop-types';

const Footer = ({textoFooter}) => {
    return(
        <footer className="footer">
            <p> {textoFooter} </p>
        </footer>
    );
};

export default Footer;

Footer.propTypes = {
    textoFooter: PropTypes.string.isRequired
}