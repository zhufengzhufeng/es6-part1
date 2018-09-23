function _classCallCheck(inst, constructor) {
  if (!(inst instanceof constructor)) {
    throw new Error('without new');
  }
}
function defineProperty(target,properties) {
  for(let i = 0 ; i < properties.length;i++){
    Object.defineProperty(target, properties[i].key, properties[i])
  }
}
function _createClass(target,protoProperties,staticProperties) {
  if (protoProperties.length) defineProperty(target.prototype, protoProperties);
  if (staticProperties.length) defineProperty(target, staticProperties)
}
let Parent = function () {
  function Parent(money) {
    _classCallCheck(this, Parent);
    this.money = money;
    return {}
  }
  _createClass(Parent, [
    {
      key: 'drink',
      value() {
        console.log('dirnk')
      }
    },
    {
      key: 'eat',
      value() {
        console.log('eat')
      }
    }
  ], [
      {
        key: 'a',
        value() {
          return 1
        }
      }
    ])
  return Parent
}();

function _inherits(childConstructor,parentConstructor) {
  // 继承公有属性
  childConstructor.prototype = Object.create(parentConstructor.prototype,{constructor:{value:childConstructor}});
  // 继承静态的方法
  childConstructor.__proto__ = parentConstructor
}
let Child = function (Parent) {
  _inherits(Child,Parent);
  function Child() {
    _classCallCheck(this,Child);
    let that = this;
    let r = Child.__proto__.apply(this,arguments);
    if(typeof r == 'object' || typeof r == 'function'){
      that = r; // 如果父类返回了一个引用类型 那么这个引用类型会作为子类的this
    }
    that.money = 200
    return that
  }
  return Child;
}(Parent);
let c = new Child(100);
console.log(c.money)


