import React from 'react';
import { CardBody, Card, CardTitle, CardText} from 'reactstrap';

function RenderStatus({clickedShipment, counterValue,counterName, onClick}){
    if(clickedShipment===counterName){
        return(
            <Card onClick={() => onClick(counterName)}>
                <CardBody className="bg-blue rounded-lg card-padding">
                    <CardTitle className="text-left h6 font-weight-bold">{counterName}</CardTitle>
                    <CardText className="h1 text-right">{counterValue}</CardText>
                </CardBody>
            </Card>
        );
    }else{
        return(
            <Card onClick={() => onClick(counterName)}>
                <CardBody className="bg-light-blue rounded-lg card-padding">
                    <CardTitle className="text-left h6 font-weight-bold">{counterName}</CardTitle>
                    <CardText className="h1 text-right">{counterValue}</CardText>
                </CardBody>
            </Card>
        );
    }
}


const Home = (props) => {
    var res = {};
    props.shipments.forEach(function(x) {
            res[x.current_status_code] = (res[x.current_status_code] || 0) + 1;
    })
    console.log(props);
    return(
        Object.entries(res).map((key, i) => {
            return (
                <div className="col-12 col-md"key={i}>
                <RenderStatus clickedShipment={props.clickedShipment} counterValue={res[key[0]]} counterName={key[0]} onClick={props.onClick} />
                </div>
            );
        })
    );
}
export default Home