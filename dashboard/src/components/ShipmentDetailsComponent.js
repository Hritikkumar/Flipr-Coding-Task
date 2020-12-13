import React from 'react';
import { Table} from 'reactstrap';
import moment from 'moment';

function RenderTabular({shipments, onClick}){
    if (shipments!=null){
        const ShipmentList = (shipments).map((shipment) => {
            return(
                    <tr key={shipment._id} onClick={() => onClick(shipment._id)} className="tableRow">
                        <td className="p-3">{shipment.awbno}</td>
                        <td className="p-3">{shipment.carrier}</td>
                        <td className="p-3">{shipment.from?shipment.from:''}</td>
                        <td className="p-3">{shipment.to?shipment.to:''}</td>
                        <td className="p-3">{shipment.carrier}</td>
                        <td className="p-3">{shipment.pickup_date ? moment.utc(shipment.pickup_date).local().format("DD/MM/YYYY"):''}</td>
                        <td className="p-3">{shipment.extra_fields ? moment.utc(shipment.extra_fields.expected_delivery_date).local()
                        .format("DD/MM/YYYY"):''} </td>
                        <td className={shipment.current_status === "Delivered"? "text-success p-3 font-weight-bold":"p-3"}>{shipment.current_status}</td>
                    </tr>
            );
        });

        return (
            <tbody className="table-scroll">
                { ShipmentList }
            </tbody>
            );
    }
}

const ShipmentDetails = (props) => {
    if (props.shipments != null){
        return (
            <Table hover borderless responsive size="sm" className="rounded m-2 table-tabular"> 
                <thead>
                    <tr className="table-heading text-left">
                        <th className="pl-3">AWB NUMBER</th>
                        <th className="pl-3">TRANSPORTER</th>
                        <th className="pl-3">SOURCE</th>
                        <th className="pl-3">DESTINATION</th>
                        <th className="pl-3">BRAND</th>
                        <th className="pl-3">START DATE</th>
                        <th className="pl-3">ETD</th>
                        <th className="pl-3">STATUS</th>
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