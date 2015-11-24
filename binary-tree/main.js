function Node(vlr){
  this.value = vlr;
  this.leftNode = undefined;
  this.rightNode = undefined;
}

function Tree(){
  var root = undefined;
}


Tree.prototype.addNode = function(value){
  if(!this.root)
    this.root = new Node(value);
  else {
    this.compare(this.root, value);
  }
}

Tree.prototype.compare = function(node, value){
  if(value > node.value)
    this.tryPlace(node, value, true);
  else if(value < node.value)
    this.tryPlace(node, value, false);
}

Tree.prototype.tryPlace = function(node, value, side){
      if(side){
        if(node.rightNode)
          this.compare(node.rightNode, value);
        else
          node.rightNode = new Node(value);
      }
      else{
        if(node.leftNode)
          this.compare(node.leftNode, value);
        else
          node.leftNode = new Node(value);
      }
}


var tree = new Tree();
tree.addNode(5);
tree.addNode(3);
tree.addNode(7);
tree.addNode(6);
console.log(tree);
