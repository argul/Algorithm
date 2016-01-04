var utils = require("./utils.js");

(function(){
	var arr = utils.randomArr(1, 100, 20);
	utils.print(arr);
	arr = count_sort(arr);
	utils.print(arr);
}());

function count_sort(arr){
	var LEN = 100;
	var helper = new Array(LEN);
	for (var i = 0; i < LEN; ++i){
		helper[i] = 0;
	}
	for (var i = 0, len = arr.length; i < len; ++i){
		helper[arr[i]]++;
	}
	for (var i = 1; i < LEN; ++i){
		helper[i] += helper[i - 1];
	}
	var ret = arr.slice(0);
	for (var i = arr.length - 1; i >= 0; i--){
		ret[helper[arr[i]] - 1] = arr[i];
		helper[arr[i]]--;
	}
	return ret;
}
