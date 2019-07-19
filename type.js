/**
 * author: coderCy
 * 完美的判断类型
 * @param { any } value 要判断的值
 * @returns { string } 形式如下：'[object Function]' || '[object Array]'
 */
 export default function(value){
     return Object.prototype.toString.call(value);
 }