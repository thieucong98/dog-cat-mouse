function test(name) {
  console.log(name);
}

function Cat() {
  this.stomach = [];
}
Cat.prototype.eat = function(mouse) {
  this.stomach.push(mouse);
};
module.exports = test;
