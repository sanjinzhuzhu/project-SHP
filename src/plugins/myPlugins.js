//vue插件一定是暴露一个对象

let myplugins = {};
myplugins.install = function(Vue,options){
   //Vue.prototype.$bus
   //Vue.directive
   //Vue.component
   //Vue.filiter.....
   Vue.directive(options.name,(element,params)=>{
    element.innerHTML =params.value.toUpperCase()
    console.log(params);
   })
}

export default myplugins;