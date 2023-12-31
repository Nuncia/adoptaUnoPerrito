import PropTypes from 'prop-types';
import Tags from './Tags';
import { Card } from 'react-bootstrap';

const MyCard = ({imagen, titulo, texto, colorBadge, textoBadge}) => {
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='imagen' variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>
                        {texto}
                    </Card.Text>
                    <Tags colorBadge={colorBadge} textoBadge ={textoBadge}/>
                </Card.Body>
            </Card>
        </>
    );
};
export default MyCard;

MyCard.propTypes = {
    imagen: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    colorBadge: PropTypes.string.isRequired,
    textoBadge: PropTypes.string.isRequired
};