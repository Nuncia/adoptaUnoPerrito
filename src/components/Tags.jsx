import PropTypes from 'prop-types'
import { Badge } from "react-bootstrap";

const Tags = ({colorBadge, textoBadge}) => {
    return(
        <>
            <Badge  className="longBadge" bg={colorBadge}>{textoBadge}</Badge>
        </>
    )
};

Tags.propTypes = {
    colorBadge: PropTypes.string.isRequired,
    textoBadge: PropTypes.string.isRequired
};

export default Tags;

