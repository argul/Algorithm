var utils = require("./utils.js");

(function(){
	var arr = utils.randomArr(1, 100, 20);
	utils.print(arr);
	arr = quick_sort(arr, function(a, b){ return a > b; });
	utils.print(arr);
}());

function quick_sort(arr, comparer){
	var swap = function(i, j){
		var tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	};
	var partition = function(startIdx, endIdx){
		var i = startIdx, j = endIdx, judge = arr[j];
		while (i < j){
			if (comparer(arr[i], judge)){
				arr[j] = arr[i];
				j--;
				arr[i] = arr[j];
				arr[j] = judge;
			}
			else{
				i++;
			}
		}
		//utils.print(startIdx, endIdx, judge);
		//utils.print(arr);
		return j;
	};
	var sort = function(startIdx, endIdx){
		if (endIdx == startIdx + 1){
			if (comparer(arr[startIdx], arr[endIdx])){
				swap(startIdx, endIdx);
			}
		}
		else if (endIdx > startIdx + 1){
			var split = partition(startIdx, endIdx);
			sort(startIdx, split - 1);
			sort(split + 1, endIdx);
		}
	};
	sort(0, arr.length - 1);
	return arr;
}
