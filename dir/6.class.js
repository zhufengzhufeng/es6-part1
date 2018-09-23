"use strict";

var _class, _class2, _descriptor;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

var Parent = type(_class = (_class2 =
/*#__PURE__*/
function () {
  function Parent() {
    _classCallCheck(this, Parent);

    _initializerDefineProperty(this, "PI", _descriptor, this);
  }

  _createClass(Parent, [{
    key: "eat",
    value: function eat() {
      console.log('吃');
    }
  }]);

  return Parent;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "PI", [readonly], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 3.14;
  }
}), _applyDecoratedDescriptor(_class2.prototype, "eat", [big], Object.getOwnPropertyDescriptor(_class2.prototype, "eat"), _class2.prototype)), _class2)) || _class;

function type(target) {
  target.flag = '结婚了';
}

function readonly(target, key, discriptor) {
  discriptor.writable = false;
}

function big(target, key, discriptor) {
  var oldEat = discriptor.value;

  discriptor.value = function () {
    console.log('大餐');
    oldEat();
  };
}

var p = new Parent();
console.log(p.eat()); // 装饰器  装饰模式
// 可以装饰类 但是不能装饰函数 函数会预解释  target = Fn
// 可以装饰属性 属性的第一个参数是target = Fn.prototype,key = Pi,discriptor={}