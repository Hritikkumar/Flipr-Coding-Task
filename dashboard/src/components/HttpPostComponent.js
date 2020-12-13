import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';
import axios from 'axios';
import Home from './HomeComponent';
import ShipmentDetails from './ShipmentDetailsComponent';
import TimeLine from './TimelineComponent';

class HttpPost extends Component{

    constructor(props){
        super(props);
        this.state={
            token:'',
            Shipments:[],
            body:{
                email:'',
            },
            isLoaded:false,
            selectedShipment:'DEL',
            shipmentRow:'5d309ea2048c0a3321692de8',
        };
        this.changeHandler=this.changeHandler.bind(this);
        this.submitHandler=this.submitHandler.bind(this);
    }

    onShipmentSelect(shipmentStatus) {
        console.log(shipmentStatus);
        this.setState({ selectedShipment: shipmentStatus});
      }
    
    onSelectRow(shipmentRow){
        console.log(shipmentRow);
        this.setState({ shipmentRow: shipmentRow});
    }

    changeHandler = (event) =>{
        if(event.target.name==='token' | event.target.name==='username'){
            this.setState({
                [event.target.name]:event.target.value
            });
        }else{
            let {body} =this.state;
            const name=event.target.name;
            const value=event.target.value;
            body[name]=value;
            this.setState({
                body
            });
        }
    }

    submitHandler = (event) =>{
        console.log(this.state);
        // const token='​tTU3gFVUdP';
        // const email="mayankmittal@intugine.com"
        const token=this.state.token;
        const email=this.state.body.email;
        const headers={ 'Authorization':`Bearer ${token}` };
        axios.post('https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch',{email: email},{headers})
        .then(res => 
            this.setState({
                Shipments:res.data,
                isLoaded:true
            }))
        .catch(error=> {
            console.log(error);
        })
        event.preventDefault();
    }

    render(){
        if(this.state.isLoaded){
            return(
                <div className="container-fluid mt-5 mb-5">
                    <div className="row mx-auto shipment-count text-center">
                        <Home shipments={this.state.Shipments} 
                        onClick={(shipmentStatus) => this.onShipmentSelect(shipmentStatus)} clickedShipment={this.state.selectedShipment}/>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4 mt-5 p-4 light-border mx-auto rounded">
                            <TimeLine shipmentRow = {this.state.Shipments.filter((shipmentRow) => shipmentRow._id === this.state.shipmentRow)[0]} />
                        </div>
                        <div className="col-12 col-md-8 col-lg-7 mt-5 w-100 ml-auto light-border rounded">
                            <ShipmentDetails shipments={this.state.Shipments.filter((shipment) => shipment.current_status_code === this.state.selectedShipment)}
                            onClick={(shipmentRow) => this.onSelectRow(shipmentRow)} />
                        </div>
                    </div>
                </div>
            )
        }  
        return(
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col col-md-6 mx-auto border border-secondary p-5 rounded-lg">
                        <Form onSubmit={this.submitHandler}>
                            <FormGroup>
                                <Label htmlFor="token">Bearer Token</Label>
                                <Input type="text" id="token" name="token" innerRef={(input) => this.token = input} 
                                onChange={this.changeHandler} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" name="email" innerRef={(input) => this.email = input}
                                onChange={this.changeHandler}  />
                            </FormGroup>
                            <Button type="submit" value="submit" className="bg-blue">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
            
        );

    }
}

export default HttpPost;
// if(this.state.isLoaded == true){
        //     return(
        //         <Home data={this.state.data}/>
        //     );
        // }else