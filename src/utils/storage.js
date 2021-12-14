/* 
*Storage二次封装
*@author Baron
*
 */
import config from '@/config';
function storage() {
    function getStorage() {
        return JSON.parse(window.localStorage.getItem(config.namespace) || "{}");
    }

    return {
        setItem(key, val) {
            let _storage = getStorage();
            _storage[key] = val;
            window.localStorage.setItem(config.namespace, JSON.stringify(_storage))
        },
        getItem(key) {
            return getStorage()[key];
        },
        removeItem(key) {
            let _storage = getStorage();
            let status = delete _storage[key];
            window.localStorage.setItem(config.namespace, JSON.stringify(_storage))
            return status;
        },
        clear() {
            return window.localStorage.removeItem(config.namespace);
        }
    }
}

export default storage();