const Screen=React.createClass({
	getInitialState:function(){
		return this.props.store.state
	},
	componentDidMount:function(){
		AppState.addListener((state)=>{
			this.setState({
				score:state.score
			})
		})
	},
	render:function(){
		return (
			<div id="screen">
				{AppState.state.show_final_score?  <p id="score">{AppState.state.score}</p> : AppState.state.show_temp_score? <p id="score">{AppState.state.temp_score}</p> : <p id="score">{AppState.state.numb1}</p>} 
			</div>

		
		)}
})

const Table=React.createClass({

	getInitialState:function(){
	return this.props.store.state
	},
	componentDidMount:function(){
		AppState.addListener((state)=>{
			this.setState({
				score:state.score
			})
		})
	},
	onClear:function(){
		this.props.actions.clear()
		
	},
	negative:function(){
		this.props.actions.negative()
	},
	onNumber:function(e){

		let numb=e.target.value;
		this.props.actions.compute(numb)
	},
	onMultiply:function(){
		this.props.actions.multiply()
	},
	onSubtract:function(){
		this.props.actions.subtract()
	},
	onAdd:function(){
		this.props.actions.add()
	},
	onDivide:function(){
		this.props.actions.divide()
	},
	onSummary:function(){
		this.props.actions.summary()
	},

	render:function(){
		return (
		<div>
			<table id="table">
          
             <tbody>
            <tr>
                <td><input type="button" className="btn btn-primary" value="C" id="clear" onClick={this.onClear} /></td>
                <td><input type="button" className="btn btn-primary menu" value="±" onClick={this.negative}/></td>
                <td><input type="button" className="btn btn-primary menu" value="÷" onClick={this.onDivide}/></td>
                <td><input type="button" className="btn btn-primary menu" value="X"  onClick={this.onMultiply}/></td>
            </tr>
            <tr>
                <td> <input type="button" className="btn btn-primary numb_btn" value="7" onClick={this.onNumber} /></td>
                <td><input type="button" className="btn btn-primary numb_btn" value="8"  onClick={this.onNumber}/></td>
                <td><input type="button" className="btn btn-primary numb_btn" value="9"  onClick={this.onNumber}/></td>
                <td><input type="button" className="btn btn-primary menu" value="-"  onClick={this.onSubtract}/></td>
            </tr> 
            <tr>
                <td><input type="button" className="btn btn-primary numb_btn" value="4"  onClick={this.onNumber}/></td>
                <td><input type="button" className="btn btn-primary numb_btn" value="5" onClick={this.onNumber}/></td>
                <td><input type="button" className="btn btn-primary numb_btn" value="6"  onClick={this.onNumber}/></td>
                <td><input type="button" className="btn btn-primary menu" value="+" onClick={this.onAdd}/></td>
            </tr> 
            <tr>
                <td> <input type="button" className="btn btn-primary numb_btn" value="1" onClick={this.onNumber} /></td>
                <td><input type="button" className="btn btn-primary numb_btn" value="2" onClick={this.onNumber} /></td>
                <td><input type="button" className="btn btn-primary numb_btn" value="3"  onClick={this.onNumber}/></td>
                <td rowSpan="2"><input type="button" className="btn btn-primary menu_equal" value="="   onClick={this.onSummary}/></td>
            </tr>	
            <tr>
                <td colSpan="2"><input type="button" className="btn btn-primary numb_btn_zero" value="0" onClick={this.onNumber}/></td>
                <td><input type="button" className="btn btn-primary numb_btn" value="." onClick={this.onNumber}/></td>                
            </tr>
             </tbody>
            </table>  

		</div>
	
	)}
})

const App=React.createClass({
	getInitialState:function(){
		return this.props.store.state
	},
	componentDidMount:function(){
		AppState.addListener((state)=>{
			this.setState({
				score:state.score,
				temp_score:state.temp_score,
			})
		})
	},
	render:function(){
		return (
			<div className="col-md-4 text-center" id="calculator">
				<Screen store={AppState}/><br/>
				<Table store={AppState} actions={actions}/>

			</div>
		)
	}
})


ReactDOM.render(<App store={AppState} actions={actions}/>,document.getElementById("program"))