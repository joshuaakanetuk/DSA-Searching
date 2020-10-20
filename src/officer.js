const { BinarySearchTree } = require("./classes");
const { Queue, _Node } = require("./classes");

function searching(tree, values = []) {
  const queue = new Queue();
  const node = tree;
  queue.enqueue(node);
  while (queue.first) {
    const node = queue.dequeue();
    values.push(node.value);
    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
  }
  return values;
}

const command = new BinarySearchTree();
command.insert(5, "Captain Picard");
command.insert(6, "Commander Data");

command.insert(3, "Commander Riker");
command.insert(2, "Lt. Cmdr. Worf");

command.insert(1, "Lieutenant Security-officer");
command.insert(4, "Lt. Cmdr. LaForge");
command.insert(8, "Lt. Cmdr. Crusher");
command.insert(7, "Lieutenant Selar");

const tree = searching(command);
console.log(tree);
