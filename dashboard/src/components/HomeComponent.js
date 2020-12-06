import React from 'react';
import { CardBody, Card, CardTitle, CardText} from 'reactstrap';
import '../index.css';

function RenderStatus({counterValue,counterName, onClick}){
    return(
        <Card onClick={() => onClick(counterName)}>
            <CardBody className="bg-primary text-light rounded-lg">
                <CardTitle className="text-left h6">{counterName}</CardTitle>
                <CardText className="h2 text-right">{counterValue}</CardText>
            </CardBody>
        </Card>
    );
}

// function TimelineView(){
//     return(
//         <div></div>
//     );
// }

const Home = (props) => {
    var res = {};
    props.shipments.forEach(function(x) {
            res[x.current_status_code] = (res[x.current_status_code] || 0) + 1;
    })
    console.log(props);
    return(
        Object.entries(res).map((key, i) => {
            return (
                <div className="col-12 col-md col-lg-2"key={i}>
                <RenderStatus counterValue={res[key[0]]} counterName={key[0]} onClick={props.onClick} />
                </div>
            );
        })
    );
}
export default Home