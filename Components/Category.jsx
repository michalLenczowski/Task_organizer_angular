var Category=React.createClass({
	getInitialState:function(){
		return this.props.store.state;

	},

	componentDidMount:function(){
		AppState.addListener((state)=>{
			this.setState({
				category:state.category	
			})
		})
	
	},

	setCategory:function(e){
		let category=e.target.value;
		this.props.actions.setCategory(category)
	},
	
	render:function(){
		return(
			<div className="form-group">
				<div className="col-md-1">
					<label className="control-label">Category</label>
				</div>
				
				<div className="col-md-10">
					<select className="form-control" onChange={this.setCategory}>
						<option value=""></option>
						{data.categories.map((index,i)=>
							(<option key={i} value={index}>{index}</option>))}
					</select>
				</div>

			</div>
)
}
})