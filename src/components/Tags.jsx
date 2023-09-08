import { Badge } from "react-bootstrap";

const Tags = ({colorBadge, textoBadge}) => {
    return(
        <>
            <Badge bg={colorBadge}>{textoBadge}</Badge>
        </>
    )
};

export default Tags;