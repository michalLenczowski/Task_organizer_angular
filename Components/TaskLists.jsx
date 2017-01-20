var Home=function(props){
	var data=props.data;
	return (
		<div className="col-md-10 text-center">
            <ul className="list-unstyled link-list">
                {AppState.state.home_list.map((index,i)=>
                	<li ><span className="index">{i+1}.  </span>{index}
                <span  className="glyphicon glyphicon-trash" onClick={(index)=>actions.removeList(index)}></span><br/></li>)}<br/>
               </ul>
          </div>
	)
}

var Work=function(props){
	var data=props.data;
	return	(
		<div className="col-md-10 text-center">
            <ul className="list-unstyled link-list">
                {AppState.state.work_list.map((index,i)=>
                	<li ><span className="index">{i+1}.  </span>{index}
                <span  className="glyphicon glyphicon-trash" onClick={(index)=>actions.removeList(index)}></span><br/></li>)}<br/>
               </ul>
          </div>


	)		
}

var Other=function(props){
	var data=props.data;
	return (
		<div className="col-md-10 text-center">
            <ul className="list-unstyled link-list">
                {AppState.state.other_list.map((index,i)=>
                	<li ><span className="index">{i+1}.  </span>{index}
                <span  className="glyphicon glyphicon-trash" onClick={(index)=>actions.removeList(index)}></span><br/></li>)}<br/>
               </ul>
          </div>
	)
}