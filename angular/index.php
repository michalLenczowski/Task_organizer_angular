    <!DOCTYPE html>
<html lang="pl" ng-app="application">
    <head>     
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title> Task Organizer </title>
        <link href="//fonts.googleapis.com/css?family=Merriweather:300i,400|Oswald:300,400,700&subset=latin-ext" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:700,300,600,400&subset=latin-ext' rel='stylesheet' type='text/css'>
        

        <link href='http://fonts.googleapis.com/css?family=Raleway:300,200,100' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
       
        <link href="../main.css" rel="stylesheet">
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>       
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
    
        
    <script src="index.js"></script>   

    </head>
    <body >

        <div class="container" ng-controller="main">
        <div class="col-md-4">
        <div  id="menu">
        <p class="text-center">TASKS TO FINISH:</p>
        <div class="text-center" id="task_numb"><p>{{tasks}}</p></div>

        <p class="text-center">NEW TASK:</p>
        
            <textarea  id="task_place" placeholder="Place your task here" class="form-control" ng-model="task_name"></textarea><br>
            

            <div class="form-group">
            <div class="col-md-1">
            <label class="control-label">Time:</label>
            </div>
            <div class="col-md-10">
              <!--<input type="button" class="btn btn-default pull-left" id="add_hour_back" value="-">-->
              <input type="text"  id="add_hour" class="form-control" ng-model="time" required placeholder="08:00" />
           
               <!--<input type="button" class="btn btn-default pull-right" id="hour_forward" value="+"> -->             

            </div>
            </div><br><br>


            <div class="form-group">
            <div class="col-md-1">
            <label class="control-label">Category:</label>
            </div>
            <div class="col-md-10">
            <select ng-model="category" class="form-control">
            <option  value=""></option>
            <option ng-repeat="category in categories" value="{{category}}">{{category}}</option>
            </select></div>
            </div>

            
            <br> <br>        
            
            <input type="button" class="btn btn-success" id="add_task" value="Add task" ng-click="add()"><br><br>

            <input type="button" class="btn btn-danger" id="task_removing" value="Remove all tasks" ng-click="removeall()">


        </div>
        </div>
        <div class="col-md-5">        
        <div id="task_list" >
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="myNavbar">
                  <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"  ng-click="sethome()">HOME</a></li>
                    <li><a href="#"  ng-click="setwork()">WORK</a></li>
                    <li><a href="#" ng-click="setother()">OTHER</a></li>
                    </ul></div></div>
                <table >
                <thead>
                  <tr>
                    <th class="col1">#</th>
                    <th class="col2">Task</th>
                    <th class="col3">Hour</th>
                    <th class="col4">Actions</th>
                  </tr>
                </thead>
                <tbody id="tasklist"></tbody>
                    </table></nav>            
                     
                    <div class="col-md-10 " ng-if="home">
                         <table >
                        <thead></thead>
                        <tbody>
                          <tr ng-repeat="tab in tab_home">
                            <td class="index">{{$index+1}}.</td>
                            <td class="name">{{tab.name}}</td>
                            <td class="date">{{tab.date}}</td>
                            <td id="actions"  ng-click="removeFromArray(tab_home,tab)" class="glyphicon glyphicon-trash"></td>
                          </tr>                        
                        </tbody>
                    </table>                    
                    </div>
                    <div class="col-md-10" ng-if="work">
                        <table >
                        <thead></thead>
                        <tbody >
                          <tr ng-repeat="tab in tab_work">
                            <td class="index">{{$index+1}}.</td>
                            <td class="name">{{tab.name}}</td>
                            <td class="date">{{tab.date}}</td>
                            <td id="actions"  ng-click="removeFromArray(tab_work,tab)" class="glyphicon glyphicon-trash"></td>
                          </tr>                        
                        </tbody>
                    </table>
                    </div>            
                    <div class="col-md-10" ng-if="other">
                        <table >
                        <thead></thead>
                        <tbody >
                          <tr ng-repeat="tab in tab_other">
                            <td class="index">{{$index+1}}.</td>
                            <td class="name">{{tab.name}}</td>
                            <td class="date">{{tab.date}}</td>
                            <td id="actions"  ng-click="removeFromArray(tab_other,tab)" class="glyphicon glyphicon-trash"></td>
                          </tr>                        
                        </tbody>
                    </table>
                    </div>
                    
            </div>

        </div>
        </div>      


        
    
         
    </body>
</html>