import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, 
    Table} from 'reactstrap';
import moment from 'moment';
import '../index.css';

function RenderTabular({shipments, onClick}){
    if (shipments!=null){
        const ShipmentList = (shipments).map((shipment) => {
            return(
                    <tr key={shipment._id} onClick={() => onClick(shipment._id)}>
                        <td>{shipment.awbno}</td>
                        <td>{shipment.carrier}</td>
                        <td>{shipment.from?shipment.from:''}</td>
                        <td>{shipment.to?shipment.to:''}</td>
                        <td>{shipment.carrier}</td>
                        <td>{shipment.pickup_date ? moment.utc(shipment.pickup_date).local().format("DD/MM/YYYY"):''}</td>
                        <td>{shipment.extra_fields ? moment.utc(shipment.extra_fields.expected_delivery_date).local()
                        .format("DD/MM/YYYY"):''} </td>
                        <td className={shipment.current_status === "Delivered"? "statusGreen":""}>{shipment.current_status}</td>
                    </tr>
            );
        });

        return (
            <tbody className="table-scroll"     >
                { ShipmentList }
            </tbody>
            );
    }
}

const ShipmentDetails = (props) => {
    if (props.shipments != null){
        return (
            <Table hover responsive size="sm" className="overflow-auto-50"> 
                <thead >
                    <tr>
                    <th>AWB NUMBER</th>
                    <th>TRANSPORTER</th>
                    <th>SOURCE</th>
                    <th>DESTINATION</th>
                    <th>BRAND</th>
                    <th>START DATE</th>
                    <th>ETD</th>
                    <th>STATUS</th>
                    </tr>
                </thead>
                <RenderTabular shipments={props.shipments} onClick={props.onClick}/>
            </Table>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}
export default ShipmentDetails;