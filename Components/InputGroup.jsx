const InputGroup=React.createClass({	
	/*getInitialState:function(){
		return this.props.store.state;

	},
	componentDidMount:function(){
		this.props.store.addListener((state)=>{
			this.setState({					
				name:state.name,
				importance:state.importance,
				category:state.category			
			})
		})
	},*/
	onAdd:function(){		
		this.props.actions.addList()
		/*this.setState({

			name:null,
			importance:null,
			category:null
		})*/
		//this.props.actions.clear()		
	},
	onRemove:function(){		
		this.props.actions.removeListAll()
		/*this.setState({

			name:null,
			importance:null,
			category:null
		})*/
		//this.props.actions.clear()	
	},

	render:function(){

		return (
			<div>	
				<input type="button" value="Add task" className="btn btn-success" id="add_task" onClick={this.onAdd}/><br/><br/>
				<input type="button"  value="Remove all tasks" className="btn btn-info" id="add_task" onClick={this.onRemove}/>	

			</div>	
	
	)}
	})	