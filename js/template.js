function ObjectName(){
  this.attribute = attribute;
}

Object.prototype.test = function () {
  alert("Template");
};

exports.objectModule = ObjectName;
//exports.namedoesntmatter = nameofObject
