import React, {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import HttpPost from './HttpPostComponent';
import axios from 'axios';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{
	constructor(props){
		super(props);
		this.state={
			shipments:[],
		}
	}
	
	componentWillMount(){
		const token='​tTU3gFVUdP';
        const body={
			email:"mayankmittal@intugine.com",
		}
		const email=body.email;
        const headers={ 'Authorization':`Bearer ${token}` };
        axios.post('https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch',{email: email},{headers})
        .then(response => {
			console.log(response);
        })
        .catch(error=> {
            console.log(error);
        })
	}

	render(){
		const PostPage=()=>{
			return(
				<HttpPost />
			);
		};
		const HomePage=()=>{
			return(
				<Home />
			);
		};
		return(
			<div>
				<Header/>
				<HttpPost/>
				<Switch>
					<Route path="/home" Component={HomePage}/>
					<Route path="/post" Component={PostPage}/>
					<Redirect to="/post"/>
				</Switch>
			</div>
		)
	}
}

export default Main;

// function Main(){
// 	const url='https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch'
// 	const [shipments]= useState([])

// 	let content = null

// 	useEffect(() => {
// 			const token='​tTU3gFVUdP';
// 			const email='mayankmittal@intugine.com';
// 			const headers={ 'Authorization':`Bearer ${token}` };
// 			// axios.post('https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch',{email: email},{headers})
// 			// .then(response 
// 			const requestOptions = {
// 				method: 'POST',
// 			};
// 			fetch('https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch',{email:email},{headers}, requestOptions).then(response => {
// 				console.log(response);
// 			})
// 			.catch(error=> {
// 				console.log(error);
// 			})
// 	},[url])

// 	if(shipments){
// 		return(
// 			<div>
// 				<Header/>
// 				<Home shipments={shipments}/>
// 			</div>
// 		);
// 	}
// 	return(
// 		<div>
// 			{content}
// 		</div>
// 	);
// }
