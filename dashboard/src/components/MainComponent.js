import React, {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{
	constructor(props){
		super(props);
		this.state={
			data:[],
			isLoaded:false,
			name:'',
		}
    }

	componentDidMount(){
		var name=this.state.name;
		var api=`https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/${name}`;
		// api=api.concat(name)
		fetch(api)
		.then(res => res.json())
		.then(json => {
			this.setState({
					isLoaded:true,
					data:json,
			})
		});
	}

	render(){
		const HomePage=()=>{
			return(
				<Home />
			);
		};
		var {isLoaded, data} = this.state;
		if(!isLoaded){
			return (
				<div>
					<Header />
					<Switch>
						<Route path="/home" component={HomePage} />
						{/* <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>}/>
						<Route path="/menu/:dishId" component={DishWithId} /> */}
						<Redirect to="/home"  />
					</Switch>
					{/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
					<DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
				</div>
			);
		}
		else{
			return(
				<div>
					Data is loaded!
				</div>
			);
		}
	};
}
export default Main;