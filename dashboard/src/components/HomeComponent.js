import React, {Component} from 'react';
import {Table, CardBody, Card, CardTitle, CardText} from 'reactstrap';

function RenderCard({shipmentstate}){
    return(
        <Card>
            <CardBody className="bg-primary text-light">
                <CardTitle>OOD</CardTitle>
                <CardText>450</CardText>
            </CardBody>
        </Card>
    );
}

// function TimelineView(){
//     return(
//         <div></div>
//     );
// }


class Home extends Component{
    constructor(props){
        super(props);
        this.state={};
    };
    render(){
        return(
            <div className="container mt-5">
                <div className="row align-items-start w-50 mx-auto">
                    <div className="col-12 col-md col-lg">
                        <RenderCard />
                    </div>
                    <div className="col-12 col-md col-lg">
                        <RenderCard/>
                    </div>
                    <div className="col-12 col-md col-lg">
                        <RenderCard/>
                    </div>
                    <div className="col-12 col-md col-lg">
                        <RenderCard/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Home