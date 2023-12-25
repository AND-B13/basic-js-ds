function removeKFromList(l, k) {
  if (l === null) {
    return null;
  }
  
  while (l !== null && l.value === k) {
    l = l.next;
  }
  
  let currentNode = l;
  let previousNode = null;
  
  while (currentNode !== null) {
    if (currentNode.value === k) {
      if (previousNode !== null) {
        previousNode.next = currentNode.next;
      }
    } else {
      previousNode = currentNode;
    }
    currentNode = currentNode.next;
  }
  
  return l;
}

module.exports = {
  removeKFromList
};
