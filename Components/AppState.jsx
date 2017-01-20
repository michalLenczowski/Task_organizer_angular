var data={
	categories:['home','work','other'],
	wages:[1,2,3,4,5,6,7,8,9,10]
};



function AppStore(){
	this.state={};
	this.setState=function(state){
		this.state={...this.state,...state}
		this.dispatchEvents()
	}
	this.dispatchEvents=function(){
		this.callback(this.state)
	}

	this.callback=function(){};

	this.addListener=(callback)=>{
		this.callback=callback;
	}
	this.makeActions=function(handler){
		var state=this.state;
		return function(){
			handler.apply(state,arguments);

			AppState.dispatchEvents();
		}
	}

}

const AppState=new AppStore()

AppState.state={
	data:data,
	home:true,
	work:false,
	other:false,
	home_list:[],
	work_list:[],
	other_list:[],
	task_number:0,
	name:null,
	importance:0

}

var actions={
	
	setHome:AppState.makeActions(function(){
		
			this.home=true,
			this.work=false,
			this.other=false

	}),
	setWork:AppState.makeActions(function(){
		
			this.home=false,
			this.work=true,
			this.other=false

	}),	
	
	setOther:AppState.makeActions(function(){		
			this.home=false,
			this.work=false,
			this.other=true
	}),
	addList:AppState.makeActions(function(){
		var index=(this.importance-1);
		if(this.category=='home'){			
			this.home_list.splice(index,0,this.name);
		}else if(this.category=='work'){
			this.work_list.splice(index,0,this.name);
				}else if(this.category=='other'){
					this.other_list.splice(index,0,this.name);
				}			
		this.task_number++;		
	}),
	removeList:AppState.makeActions(function(id){	
		if(this.home){
			let index=id
			if(index!== -1)
				this.home_list.splice(index,1)			
		}else if(this.work){
			let index=id
			if(index!== -1)
				this.work_list.splice(index,1)
		}else if(this.other){
			let index=id
			if(index!== -1)
				this.other_list.splice(index,1)
		}
		if(this.task_number >0)
				this.task_number--;

	}),
	removeListAll:AppState.makeActions(function(){
		this.home_list=this.work_list=this.other_list=[]
		this.task_number=0
	}),
	setName:AppState.makeActions(function(name){
		this.name=name;
	}),
	setCategory:AppState.makeActions(function(category){
		this.category=category;
	}),
	setImportance:AppState.makeActions(function(importance){
	
		this.importance=importance;
	}),
	/*clear:AppState.makeActions(function(){

		this.name=this.importance=this.category=null;


	})*/
}