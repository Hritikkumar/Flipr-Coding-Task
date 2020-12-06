import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import Home from './HomeComponent';
import {Redirect} from 'react-router-dom';

class HttpPost extends Component{

    constructor(props){
        super(props);
        this.state={
            token:'',
            body:{
                email:''
            },
            isLoaded:false,
            shipments:[]
        };
        this.changeHandler=this.changeHandler.bind(this);
        this.submitHandler=this.submitHandler.bind(this);
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
        .then(response => {
            console.log(response);
            this.setState({
                shipments:response.data,
                isLoaded:true
            })
        })
        .catch(error=> {
            console.log(error);
        })
        event.preventDefault();
    }

    render(){
        if(this.state.isLoaded){
            return(
                <div className="container mt-5">
                    <div className="row align-items-start w-75 mx-auto">
                        <Home shipments={this.state.shipments} />
                    </div>
                </div>
            )
        }       
        return(
            <div className="container mt-5">
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
                    <Button type="submit" value="submit" color="primary">Track</Button>
                </Form>
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