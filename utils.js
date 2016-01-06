function print(){
	if (arguments.length == 1){
		console.log(arguments[0]);
	}
	else{
		var str = Array.prototype.slice.call(arguments,0).join(", ");
		console.log(str);
	}
}

function randomArr(min, max, len){
	var arr = [];
	var stripe = max - min;
	for (var i = 0; i < len; ++i){
		arr[i] = min + parseInt(Math.random() * stripe);
	}
	return arr;
}

function array_foreach(arr, proc){
	for (var i = 0, len = arr.length; i < len; i++){
		proc(arr[i]);
	}
}

function array_map(arr, proc){
	for (var i = 0, len = arr.length; i < len; i++){
		arr[i] = proc(arr[i]);
	}
}

exports.print = print;
exports.randomArr = randomArr;
exports.array_foreach = array_foreach;
exports.array_map = array_map;
