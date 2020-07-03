// 导入所有接口
import apiList from './service/apiList.js'
// 将所有接口对象 合并在apiListAll里
var apiListAll = Object.assign(apiList);
const install = Vue => {
    if(install.installed)
        return;
    install.installed = true;

    Object.defineProperties(Vue.prototype, {
        // 注意哦，此处挂载在 Vue 原型的 $api 对象上
        $api: {
            get() {
                return apiListAll
            },

        }
    })
}

export default install