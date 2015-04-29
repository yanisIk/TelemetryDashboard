getMotorTemperatures = function(){
	return Measures.find({type:'motorTemperature'}, {}, {sort: {timestamp: -1}});
}

getVehicleSpeeds = function(){
 	return Measures.find({type:'speed'},{}, {sort: {timestamp: -1}});
}   