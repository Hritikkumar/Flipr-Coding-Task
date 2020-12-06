import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Table} from 'reactstrap';
import moment from 'moment';
import '../index.css';

function RenderTimeline({shipmentRow}){
    if (shipmentRow.scan!=null){
        const listScan = shipmentRow.scan.map((sc) => {
            return(
                <tr key={sc.time} className="p-4 border border-light">
                    <td className="tdStyle">|<span className="fa fa-circle fa-sm nodeStyle"></span>
                    <span className="fa fa-minus fa-sm nodeStyle"></span>
                    <span className="fa fa-minus fa-sm nodeStyle"></span>
                    </td>
                    <td className={sc.location.includes("Delivered")? "text-success bg-light":""}>{sc.location}</td>
                    <td className={sc.location.includes("Delivered")? "text-success":""}>{moment.utc(sc.time).local().format("DD-MM-YYYY")}</td>
                    <td className={sc.location.includes("Delivered")? "text-success":""}>{moment.utc(sc.time).local().format("HH-MM")}</td>
                </tr>
            );
        });
        return(
            <tbody>
                <tr>
                    <td className='bg-primary rounded-circle text-center'><img src="assets/images/destination.svg" alt="destination" /></td>
                </tr>
                {listScan}
                <tr>
                    <td className='bg-primary rounded-circle text-center'><img src="assets/images/warehouse.svg" alt="destination" /></td>
                </tr>
            </tbody>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}

const TimeLine = (props) => {
    console.log(props);
    if (props.shipmentRow != null){
        return (
            <Table borderless responsive size="sm">
                <RenderTimeline shipmentRow={props.shipmentRow}/>
            </Table>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}
export default TimeLine;