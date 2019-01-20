var chalk = require("chalk");
function test(name) {
  console.log(name);
}

function Dog() {
  this.stomach = [];
}
Dog.prototype.eat = function(mouse) {
  this.stomach.push(mouse);
};
Dog.prototype.sayHi = function() {
  console.log("xin chaof cong  ÏÏ"+ chalk.blue("kasdfakjsdf"));
};
module.exports = Dog;
