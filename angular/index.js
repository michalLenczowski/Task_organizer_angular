var app=angular.module("application",[]);

app.controller("main", ['$scope',function($scope){
	$scope.categories=['home','work','other'];	
	$scope.tasks=0;


	$scope.time=null;
	$scope.task_name=null;	
	$scope.category=null;
	$scope.importance=null;
	$scope.tab_home=[];
	$scope.tab_work=[];
	$scope.tab_other=[];
	$scope.home=true;
	$scope.work=false;
	$scope.other=false;


	
	$scope.sethome=function(){
		$scope.home=true;
		$scope.work=$scope.other=false;		
	}
	$scope.setwork=function(){
		$scope.work=true;
		$scope.home=$scope.other=false;
	}
	$scope.setother=function(){
		$scope.other=true;
		$scope.work=$scope.home=false;
	}

	$scope.clear=function(){
		$scope.category=$scope.time=$scope.task_name=null;
	};

	$scope.removeall=function(){
		$scope.tasks=0;
		$scope.tab_home=$scope.tab_work=$scope.tab_other=[];
		$scope.clear();
	};

	$scope.removeFromArray=function(array,obj){
		var index=array.indexOf(obj);
		if(array.length>index){
			array.splice(index,1);
			$scope.tasks--;
		}
	}
	$scope.add=function(){
		if($scope.category!=null && $scope.time!=null && $scope.task_name!=null){
			var time=parseFloat($scope.time);
			if($scope.category=='home'){
				$scope.tab_home.push({id:time,date:$scope.time,name:$scope.task_name});
				$scope.tab_home.sort(function(a,b){
					return parseFloat(a.id)-parseFloat(b.id);
				});
			
			}else if($scope.category=='work'){
				$scope.tab_work.push({id:time,date:$scope.time,name:$scope.task_name});
				$scope.tab_work.sort(function(a,b){
					return parseFloat(a.id)-parseFloat(b.id);
				});
			}else if($scope.category=='other'){

				$scope.tab_other.push({id:time,date:$scope.time,name:$scope.task_name});
				$scope.tab_other.sort(function(a,b){
					return parseFloat(a.id)-parseFloat(b.id);
				});
			}	

		$scope.tasks++;		
		$scope.clear();	
		}else{
			alert("Nie wypełniłeś wszystkich pól");
		}
	};
}]);



	







