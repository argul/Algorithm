var utils = require("./utils.js");
var treeutils = require("./tree-utils.js");

(function(){
	var tree = create_simple_tree();
	iter_tree_precede(tree);
	iter_tree_middle(tree);
	iter_tree_middle2(tree);
	iter_tree_posterior(tree);
}());

function create_simple_tree(){
	var A = treeutils.TreeNode.createInstance();
	A.SetKey("A");
	
	var B = treeutils.TreeNode.createInstance();
	B.SetKey("B");
	
	var C = treeutils.TreeNode.createInstance();
	C.SetKey("C");

	var D = treeutils.TreeNode.createInstance();
	D.SetKey("D");

	var E = treeutils.TreeNode.createInstance();
	E.SetKey("E");

	var F = treeutils.TreeNode.createInstance();
	F.SetKey("F");

	var G = treeutils.TreeNode.createInstance();
	G.SetKey("G");

	A.SetLeftChild(B);
	B.SetAncestor(A);
	A.SetRightChild(C);
	C.SetAncestor(A);
	B.SetLeftChild(D);
	D.SetAncestor(B);
	B.SetRightChild(E);
	E.SetAncestor(B);
	C.SetLeftChild(F);
	F.SetAncestor(C);
	C.SetRightChild(G);
	G.SetAncestor(C);

	return A;
}

function iter_tree_precede(tree, arr){
	var dump = (arr == undefined);
	arr = arr || new Array();
	arr.push(tree.Key());
	if (tree.LeftChild()){
		iter_tree_precede(tree.LeftChild(), arr);
	}
	if (tree.RightChild()){
		iter_tree_precede(tree.RightChild(), arr);
	}
	if (dump){
		utils.print(arr);
	}
}

function iter_tree_middle(tree, arr){
	var dump = (arr == undefined);
	arr = arr || new Array();
	if (tree.LeftChild()){
		iter_tree_middle(tree.LeftChild(), arr);
	}
	arr.push(tree.Key());
	if (tree.RightChild()){
		iter_tree_middle(tree.RightChild(), arr);
	}
	if (dump){
		utils.print(arr);
	}
}

function iter_tree_middle2(tree){
	var arr = new Array();
	var first = function(){
		var cur = tree;
		while (cur.LeftChild()){
			cur = cur.LeftChild();
		}
		return cur;
	};
	var next = function(node){
		if (node.RightChild()){
			var cur = node.RightChild();
			while (cur.LeftChild()){
				cur = cur.LeftChild();
			}
			return cur;
		}
		else if (node.Ancestor() && node.Ancestor().LeftChild() == node){
			return node.Ancestor();
		}
		else if (node.Ancestor() && node.Ancestor().RightChild() == node){
			var cur = node.Ancestor();
			while (cur.Ancestor()){
				if (cur.Ancestor().LeftChild() == cur){
					return cur.Ancestor();
				}
				else{
					cur = cur.Ancestor();
				}
			}
			return undefined;
		}
	};
	var cur = first();
	while (cur){
		arr.push(cur.Key());
		cur = next(cur);
	}
	utils.print(arr);
}

function iter_tree_posterior(tree, arr){
	var dump = (arr == undefined);
	arr = arr || new Array();
	if (tree.LeftChild()){
		iter_tree_posterior(tree.LeftChild(), arr);
	}
	if (tree.RightChild()){
		iter_tree_posterior(tree.RightChild(), arr);
	}
	arr.push(tree.Key());
	if (dump){
		utils.print(arr);
	}
}
