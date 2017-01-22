function AppStore(){
	this.state={}
	this.setState=function(state){
		this.state={...this.state,state}
		this.dispatchEvents()
	}

	this.dispatchEvents=function(){
		this.callback(this.state)
	}

	this.callback=function(){}

	this.addListener=function(callback){
		this.callback=callback;
	}	


	this.makeActions=function(handler){
		var state=this.state;
		return function(){
			handler.apply(state,arguments)
			AppState.dispatchEvents()
		}

	}
}

const AppState=new AppStore()

AppState.state={
	score:0,
	temp_score:0.0,
	numb1:0,
	setactions:false,
	show_temp_score:false,
	show_final_score:false,
	activity:'',



}

var actions={
	clear:AppState.makeActions(function(){
		this.score=this.temp_score=this.numb1=0;
	}),
	negative:AppState.makeActions(function(){
		if(this.show_temp_score){

		}else{
			this.numb1=(-1)*this.numb1;
		}
		
	}),
	compute:AppState.makeActions(function(numb){
		if(this.numb1=='ERROR'){
			this.numb1=0;
		}

		if(this.temp_score=='ERROR'){
			this.score=this.temp_score=this.numb1=0;
		}

		this.show_temp_score=false;
		var str=numb.toString();
		if(this.numb1==0){
			this.numb1=str;
		}else{
			this.numb1+=str;
		}

		if(this.numb1.length>14){			
			this.numb1='ERROR'			
		}
	}),
	multiply:AppState.makeActions(function(){
		if(this.temp_score=='ERROR'){
			this.score=this.temp_score=this.numb1=0;
		}

		this.show_final_score=false;
		if(this.setactions){

			if(this.activity=='add'){				
				this.temp_score=this.temp_score+parseFloat(this.numb1)
			}else if(this.activity=='subtract'){
				this.temp_score=this.temp_score-parseFloat(this.numb1)
			}else if(this.activity=='multiply'){
				this.temp_score=this.temp_score*parseFloat(this.numb1)
			}else if(this.activity=='divide'){
				this.temp_score=[(this.temp_score)/(parseFloat(this.numb1))]

			}
			
			if(this.temp_score.toString().length>14){
				this.temp_score='ERROR'
			}

			this.show_temp_score=true;
		}else{
			this.temp_score=parseFloat(this.numb1);
		}		
		this.numb1=0;
		this.setactions=true;
		this.activity='multiply'
	}),
	
	add:AppState.makeActions(function(){
		if(this.temp_score=='ERROR'){
			this.score=this.temp_score=this.numb1=0;
		}

		this.show_final_score=false;
		if(this.setactions ){
			if(this.activity=='add'){
				this.temp_score=this.temp_score+parseFloat(this.numb1)
			}else if(this.activity=='subtract'){
				this.temp_score=this.temp_score-parseFloat(this.numb1)
			}else if(this.activity=='multiply'){
				this.temp_score=this.temp_score*parseFloat(this.numb1)
			}else if(this.activity=='divide'){
				this.temp_score=[(this.temp_score)/(parseFloat(this.numb1))]

			}
			if(this.temp_score.toString().length>13){
				this.temp_score='ERROR'
			}

			this.show_temp_score=true;
		}else{
			this.temp_score=parseFloat(this.numb1);
		}		
		this.numb1=0;
		this.setactions=true;
		this.activity='add'
	}),

	subtract:AppState.makeActions(function(){
		if(this.temp_score=='ERROR'){
			this.score=this.temp_score=this.numb1=0;
		}

		this.show_final_score=false;
		if(this.setactions ){
			if(this.activity=='add'){
				this.temp_score=this.temp_score+parseFloat(this.numb1)
			}else if(this.activity=='subtract'){
				this.temp_score=this.temp_score-parseFloat(this.numb1)
			}else if(this.activity=='multiply'){
				this.temp_score=this.temp_score*parseFloat(this.numb1)
			}else if(this.activity=='divide'){
				this.temp_score=[(this.temp_score)/(parseFloat(this.numb1))]

			}
			if(this.temp_score.length>14){
				this.temp_score='ERROR'
			}

			this.show_temp_score=true;
		}else{
			this.temp_score=parseFloat(this.numb1);
		}		
		this.numb1=0;
		this.setactions=true;
		this.activity='subtract'
	}),
	divide:AppState.makeActions(function(){
		if(this.temp_score=='ERROR'){
			this.score=this.temp_score=this.numb1=0;
		}

		this.show_final_score=false;
		if(this.setactions){
			if(this.activity=='add'){
				this.temp_score=this.temp_score+parseFloat(this.numb1)
			}else if(this.activity=='subtract'){
				this.temp_score=this.temp_score-parseFloat(this.numb1)
			}else if(this.activity=='multiply'){
				this.temp_score=this.temp_score*parseFloat(this.numb1)
			}else if(this.activity=='divide'){
				this.temp_score=[(this.temp_score)/(parseFloat(this.numb1))]

			}
			if(this.temp_score.length>14){
				this.temp_score='ERROR'
			}

			this.show_temp_score=true;
		}else{
			this.temp_score=parseFloat(this.numb1);
		}		
		this.numb1=0;
		this.setactions=true;
		this.activity='divide'
	}),
	summary:AppState.makeActions(function(){
		

		if(this.activity=='add'){
				this.temp_score=this.temp_score+parseFloat(this.numb1)
			}else if(this.activity=='subtract'){
				this.temp_score=this.temp_score-parseFloat(this.numb1)
			}else if(this.activity=='multiply'){
				this.temp_score=this.temp_score*parseFloat(this.numb1)
			}else if(this.activity=='divide'){
				this.temp_score=[(this.temp_score)/(parseFloat(this.numb1))]
			}
			if(this.temp_score.toString().length>14){
				this.score='ERROR'
			}else{
				this.score=this.temp_score;
			}
		this.activity=null;		
		this.show_final_score=true
	})	
}