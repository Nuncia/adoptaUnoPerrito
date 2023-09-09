import { Badge } from "react-bootstrap";

const Tags = ({colorBadge, textoBadge}) => {
    return(
        <>
            <Badge  className="longBadge" bg={colorBadge}>{textoBadge}</Badge>
        </>
    )
};

export default Tags;