const Textarea=React.createClass({
	getInitialState:function(){
		return this.props.store.state;

	},

	componentDidMount:function(){
		AppState.addListener((state)=>{
			this.setState({
				name:state.name	
			})
		})
	},


	setName:function(e){
		let name=e.target.value;		
		
		this.props.actions.setName(name)
	},

	render:function(){
		return (
			<div>
				<textarea id="task_place" placeholder="Place your task here" onChange={this.setName} className="form-control"></textarea>
			</div>
			)
	}

})