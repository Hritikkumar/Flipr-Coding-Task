import React, {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import HttpPost from './HttpPostComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{
	constructor(props){
		super(props);
		// this.state={
		// 	data:[],
		// 	isLoaded:false,
		// 	name:'',
		// }
    }

	componentDidMount(){

	}

	render(){
		const Post=()=>{
			return(
				<HttpPost />
			);
		};
		const HomePage=()=>{
			return(
				<Home />
			);
		};
		// if(!isLoaded){
			return (
				<div>
					<Header />
					<Switch>
						<Route path="/home" component={HomePage} />
						<Route path="/post" component={Post} />
						{/* <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>}/>
						<Route path="/menu/:dishId" component={DishWithId} /> */}
						<Redirect to="/post"  />
					</Switch>
					{/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
					<DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
				</div>
			);
		// }
		// else{
		// 	return(
		// 		<div>
		// 			Data is loaded!
		// 		</div>
		// 	);
		// }
	};
}
export default Main;