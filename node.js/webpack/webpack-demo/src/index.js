import _ from 'lodash';
// 在js文件中，用import方式引入'lodash'模块，存在下划线中
// 这次我们在js中声明了下划线是什么！ 模块化后加强了依赖关系， 不是全局
function component(){

    var element = document.createElement('div');

//通过_.join方法，往元素里面添加内容
    element.innerHTML = _.join(['Hello',"webpack"], " ");

    return element;
}
//component()调用的得到返回值，添加到body里面
document.body.appendChild(component());