import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Table} from 'reactstrap';
import moment from 'moment';
import '../index.css';

function RenderTimeline({shipmentRow}){
    if (shipmentRow.scan!=null){
        const listScan = shipmentRow.scan.map((scan) => {
            return(
                <tr key={scan.time} className="p-4">
                    <td className="tdStyle">&nbsp;|<br/><span className="fa fa-circle fa-sm nodeStyle link-circle"></span>
                    <span className="fa fa-minus fa-sm nodeStyle link"></span>
                    <span className="fa fa-minus fa-sm nodeStyle link"></span>
                    </td>
                    <td className={scan.location.includes("Delivered")? "text-success bg-light-blue pt-3":"pt-3"}>{scan.location}</td>
                    <td className={scan.location.includes("Delivered")? "text-success bg-light-blue pt-3":"pt-3"}>{moment.utc(scan.time).local().format("DD-MM-YYYY")}</td>
                    <td className={scan.location.includes("Delivered")? "text-success bg-light-blue pt-3":"pt-3"}>{moment.utc(scan.time).local().format("HH-MM")}</td>
                </tr>
            );
        });
        return(
            <tbody className="">
                <tr>
                    <td className='bg-light-blue rounded-circle text-center'><img src="assets/images/destination.svg" width="15" height="15" alt="destination" /></td>
                </tr>
                {listScan}
                <tr>
                    <td className='bg-light-blue rounded-circle text-center'><img src="assets/images/warehouse.svg" width="15" height="15" alt="destination" /></td>
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
            <Table borderless responsive size="sm" className="table-timeline mx-auto">
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