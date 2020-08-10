import React from "react";
import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
} from "reactstrap";

const ItemComponent = (props) => {
    return (
        <div className="col-md-4">
            <Card style={{marginBottom: "30px"}}>
                <CardImg
                    top
                    width="100%"
                    src={`http://localhost:8000${props.image}`}
                    alt="Card image cap"
                />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardText>{props.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default ItemComponent;
