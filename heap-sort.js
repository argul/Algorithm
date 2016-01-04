var utils = require("./utils.js");

(function(){
	//var arr = utils.randomArr(0, 100, 10);
	var arr = [ 32, 64, 64, 57, 62, 98, 54, 19, 74, 49 ];
	utils.print(arr);
	arr = heap_sort(arr, function(a,b){ return a > b; });
	utils.print(arr);
}());

function heap_sort(arr, comparer){
	var swap = function(src, dst){
		var tmp = arr[src];
		arr[src] = arr[dst];
		arr[dst] = tmp;
	};
	var heapify = function(idx){
		while (idx > 0){
			var par = parseInt(idx/2);
			if (comparer(arr[idx], arr[par])){
				swap(idx, par);
			}
			idx = par;
		}
	};
	var tail = arr.length - 1;
	var downward = function(idx){
		var leftchild = (idx + 1) * 2 - 1;
		var rightchild = leftchild + 1;
		if (rightchild <= tail){
			var a = arr[idx], b = arr[leftchild], c = arr[rightchild];
			if ((comparer(b, c) || b == c)
				&& comparer(b, a)){
				swap(idx, leftchild);
				downward(leftchild);
			}
			else if ((comparer(c, b) || b == c)
					&& comparer(c, a)){
				swap(idx, rightchild);
				downward(rightchild);
			}
		}
		else if (leftchild <= tail){
			if (comparer(arr[leftchild], arr[rightchild])){
				swap(idx, leftchild);
				downward(leftchild);
			}
		}
	};
	var extract = function(){
		swap(0, tail);
		tail--;
		downward(0);
	};
	for (var len = arr.length, i = len - 1; i >= len / 2; i--){
		heapify(i);
	}
	for (var i = 0, len = arr.length; i < len; i++){
		extract();
	}
	return arr;
}
