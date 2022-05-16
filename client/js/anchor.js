class Anchor {
    constructor(id, href, hrefTarget) {
      (this.id = id),
        (this.href = href),
        (this.hrefTarget = hrefTarget),
        (this.hrefExpected = true),
        (this.hrefTargetExpected = true);
    }
  }

  function allAnchors() {
    let nodeList = document.querySelectorAll("a");
    console.log(nodeList);
    let objectArray = [];
    i = 0;
    nodeList.forEach(function (node) {
      objectArray.push(new Anchor(i, node.hasAttribute("href"), node.href));
      i++;
    });
    return objectArray;
  }
  
  module.export = { allAnchors }