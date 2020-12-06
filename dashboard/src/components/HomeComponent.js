import React, {Component} from 'react';
import {Table, CardBody, Card, CardTitle, CardText} from 'reactstrap';
import axios from 'axios';


function TimelineView(counterValue){
    return(
        <Card>
            <CardBody className="bg-primary text-light rounded-lg">
                <CardTitle className="text-left pt-0">OOD</CardTitle>
                <CardText>      </CardText>
            </CardBody>
        </Card>
    );
}

// function TimelineView(){
//     return(
//         <div></div>
//     );
// }


function Home(props){
    console.log(props.shipments);
        if(props!=null){
            var res = {};
            props.shipments.forEach(function(x) {
                    res[x.current_status_code] = (res[x.current_status_code] || 0) + 1;
            })
            console.log(res);
            return(
            Object.entries(res).map((key, i) => {
                return (
                    <div className="col-12 col-md col-lg-2"key={i}>
                            <Card>
                                <CardBody className="bg-primary text-light rounded-lg">
                                    <CardTitle className="text-left pt-0">{key[0]}</CardTitle>
                                    <CardText>{res[key[0]]}</CardText>
                                </CardBody>
                            </Card>
                    </div>
                );
              })
            );
            // return(
            //     <div className="container mt-5">
            //         <div className="row align-items-start w-50 mx-auto">
            //             <div className="col-12 col-md col-lg">
            //                 <RenderCard counterValue={res}/>
            //             </div>
            //             <div className="col-12 col-md col-lg">
            //                 <RenderCard/>
            //             </div>
            //             <div className="col-12 col-md col-lg">
            //                 <RenderCard/>
            //             </div>
            //             <div className="col-12 col-md col-lg">
            //                 <RenderCard/>
            //             </div>
            //         </div>
            //     </div>
            // );
        }else{
            return(
                <div></div>
            );
        }
    }

export default Home