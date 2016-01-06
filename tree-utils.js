var utils = require("./utils.js");

var TreeNode = {
	createInstance : function(){
		var ret = {};
		var substance, key, leftchild, rightchild, ancestor;
		ret.Substance = function() { return substance; };
		ret.SetSubstance = function(v) { substance = v; };
		ret.Key = function() { return key; };
		ret.SetKey = function(v) { key = v; };
		ret.LeftChild = function() { return leftchild; };
		ret.SetLeftChild = function(v) { leftchild = v; };
		ret.RightChild = function() { return rightchild; };
		ret.SetRightChild = function(v) { rightchild = v; };
		ret.Ancestor = function() { return ancestor; };
		ret.SetAncestor = function(v) { ancestor = v; };
		return ret;
	}
};

function DumpTree(root, dumper){
	dumper = dumper || function(node) { return node.Key; };
}

exports.TreeNode = TreeNode;
exports.DumpTree = DumpTree;
