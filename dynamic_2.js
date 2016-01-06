var utils = require("./utils.js");

(function(){
	var piece_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var value_arr = [1, 1.6, 3.3, 4.1, 7.2, 9.0, 9.2, 10.1, 9.5, 11.1];
	var splitee = 45;
	var cost = 0.3;
	utils.print("max value is", dynamic_2(splitee, piece_arr, value_arr, cost));
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	//utils.array_map(arr, function(element){
		//return dynamic_1(element, piece_arr, value_arr);
	//});
	//utils.print(arr);
}());

function dynamic_2(total, pieces, values, cost){
	var cache = {};
	var split_cache = {};
	var iter_times = 0;
	var inner = function(total){
		if (undefined != cache[total]){
			return cache[total];
		}
		if (total <= 0){
			return 0;
		}
		iter_times++;
		for (var i = 0, len = pieces.length; i < len; i++){
			if (total >= pieces[i]){
				var remain = total - pieces[i];
				var t = values[i] + inner(remain) - ((remain > 0) ? cost : 0);
				var exist = cache[total];
				if (undefined == exist || t > exist){
					cache[total] = t;
					var split_method = (split_cache[total - pieces[i]] || []).slice(0);
					split_method.push(pieces[i]);
					split_cache[total] = split_method;
				}
			}
		}
		return cache[total];
	}
	inner(total);
	utils.print("iter_times", iter_times);
	utils.print(split_cache[total]);
	return cache[total];
}
