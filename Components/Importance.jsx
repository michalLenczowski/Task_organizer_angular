const Importance=React.createClass({
	getInitialState:function(){
		return this.props.store.state;

	},

	componentDidMount:function(){
		AppState.addListener((state)=>{
			this.setState({
				importance:state.importance	
			})
		})
	
	},

	setImportance:function(e){
		let importance=e.target.value;
		this.props.actions.setImportance(importance)
	},
	
	render:function(){
		return (
			<div className="form-group">
				<div className="col-md-1">
					<label className="control-label">Importance</label>
				</div>
				
				<div className="col-md-10">
					<select className="form-control"  onChange={this.setImportance}>
						<option value=""></option>
						{data.wages.map((index,i)=>
							(<option key={i} value={index}>{index}</option>))}
					</select>
				</div>

			</div>

		)
}
})