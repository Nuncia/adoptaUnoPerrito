import Tags from './Tags';
import { Card } from 'react-bootstrap';

const Card = ({imagen, titulo, texto, colorBadge, textoBadge}) => {
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>
                        {texto}
                    </Card.Text>
                    <Tags colorBadge={colorBadge}/>{textoBadge}
                </Card.Body>
            </Card>
        </>
    );
};
export default Card;