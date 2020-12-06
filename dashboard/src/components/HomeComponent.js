import React, {Component} from 'react';
import {Table, CardBody, Card, CardTitle, CardText} from 'reactstrap';
import axios from 'axios';
import '../index.css';

function RenderStatus({counterValue,counterName, onClick}){
    return(
        <Card onClick={() => onClick(counterName)}>
            <CardBody className="bg-primary text-light rounded-lg">
                <CardTitle className="text-left pt-0">{counterName}</CardTitle>
                <CardText>{counterValue}</CardText>
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
    function handleClick(e) {    
        e.preventDefault();    
        console.log('The link was clicked.');  
    }
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
    // return (
    //     <div className="container">
    //         <div className="row">
    //             {menu}
    //         </div>
    //     </div>
    // );
}


// function Home(props){
//     console.log(props.shipments);
//     const handleSelect=(e)=>{
//         console.log(e);
//         return(
//             <div>Something</div>
//         );
//     }
//         if(props!=null){
//             var res = {};
//             props.shipments.forEach(function(x) {
//                     res[x.current_status_code] = (res[x.current_status_code] || 0) + 1;
//             })
//             console.log(res);
//             return(
//                 Object.entries(res).map((key, i) => {
//                     return (
//                         <div className="col-12 col-md col-lg-2"key={i} onClick={handleSelect} >
//                             <Card>
//                                 <CardBody className="bg-primary text-light rounded-lg">
//                                     <CardTitle className="text-left pt-0">{key[0]}</CardTitle>
//                                     <CardText>{res[key[0]]}</CardText>
//                                 </CardBody>
//                             </Card>
//                         </div>
//                     );
//                 })
//             );

//         }else{
//             return(
//                 <div></div>
//             );
//         }
//     }

export default Home