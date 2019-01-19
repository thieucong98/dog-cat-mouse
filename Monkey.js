function Monkey() {
  this.stomach = [];
}
Monkey.prototype.eat = function(cat) {
  this.stomach.push(cat);
};
