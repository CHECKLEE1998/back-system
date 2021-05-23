/**
 * 验证信息
 */

// 过滤特殊字符
export function stripscript(str) {
  let pattern = new RegExp(
    "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"
  );
  let rs = "";
  for (let i = 0; i < str.length; i++) {
    rs = rs + str.substr(i, 1).replace(pattern, "");
  }
  return rs;
}

// 邮箱验证
export function validateEmail(value) {
  let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return !reg.test(value) ? true : false;
}

// 密码验证
export function validatePassword(value) {
  let reg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){6,19}$/;
  return !reg.test(value) ? true : false;
}

// 账号验证
export function validateAccount(value) {
  let reg = /^[a-zA-z]\w{6,15}$/;
  return !reg.test(value) ? true : false;
}

// 手机验证
export function validatePhone(value) {
  let reg = /^1[3|4|5|7|8][0-9]{9}$/;
  return !reg.test(value) ? true : false;
}

// 验证码验证
export function validateCode(value) {
  let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6}$/;
  return !reg.test(value) ? true : false;
}