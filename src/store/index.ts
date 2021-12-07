// 引入创建方法
import { createPinia } from 'pinia';
// 引入数据持久化工具
import piniaPersist from 'pinia-plugin-persist'

const pinia = createPinia();
export default pinia.use(piniaPersist);