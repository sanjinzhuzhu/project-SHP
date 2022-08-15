import { v4 as uuidv4 } from 'uuid';
//要生成一个随机字符串，且每次执行不能发生变化，游客身份持久存储
export const getUUID = () => {
    //先从本地存储获取uuid (看下本地存储里面是否有)
    let uuid_token = localStorage.getItem('UUIDTOKEN')
    //如果没有本地没有 就自己生成
    if (!uuid_token) {
        uuid_token = uuidv4();
        //本地存储一次
      localStorage.setItem('UUIDTOKEN',uuid_token);  
    }
    //切记有返回值，没有返回值就是undefined
    return uuid_token;
}
//配置好后 去vue仓库中查看是否有uuid存在，如果存在，在操作下一步，数据带给服务器
//在api文件的request.js中，但是游客还在store中，所以捞不到数据，所以需要在请求仓库中模拟得捞到
//捞到后在到request.js中引入store，最后在到api中