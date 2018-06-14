
export const charValidator = {
  validator: (rule, value, callback) => {
    if (/[\\/:*?"<|'&%>]/.test(value)) {
      callback(new Error(`内容不能包含非法字符 \\/:*?"<|'&%>`));
    } else {
      callback();
    }
  },
  trigger: 'blur'
};

export const allSpaceRule = {
  validator: (rule, value, callback) => {
    if (value.length > 0 && value.trim() === '') {
      callback(new Error('内容不能全部为空格'));
    } else {
      callback();
    }
  },
  trigger: 'blur'
};

export const max32ChartRule = {
  validator: (rule, value, callback) => {
    if (getByteLen(value) > 32) {
      callback(new Error('内容长度不能超过32个字符，一个汉字算两个字符'));
    } else {
      callback();
    }
  },
  trigger: 'blur'
};
export const max64ChartRule = {
  validator: (rule, value, callback) => {
    if (getByteLen(value) > 64) {
      callback(new Error('内容长度不能超过64个字符，一个汉字算两个字符'));
    } else {
      callback();
    }
  },
  trigger: 'blur'
};

export const max256ChartRule = {
  validator: (rule, value, callback) => {
    if (getByteLen(value) > 256) {
      callback(new Error('内容长度不能超过256个字符，一个汉字算两个字符'));
    } else {
      callback();
    }
  },
  trigger: 'blur'
};

export const max512ChartRule = {
  validator: (rule, value, callback) => {
    if (getByteLen(value) > 512) {
      callback(new Error('内容长度不能超过512个字符，一个汉字算两个字符'));
    } else {
      callback();
    }
  },
  trigger: 'blur'
};

export const numberRule = {
  validator: (rule, value, callback) => {
    if (/\D/.test(value)) {
      callback(new Error('内容必须为数字'));
    } else {
      callback();
    }
  },
  trigger: 'blur'
};

export const requireRule = {
  required: true,
  message: '内容不能为空',
  trigger: 'blur'
};

export const ipRule = {
  validator(rule, value, callback) {
    if (!/^((25[0-5]|2[0-4]\d|[01]?\d\d?)($|(?!\.$)\.)){4}$/.test(value)) {
      callback(new Error('请输入合法的IP地址'));
    } else {
      callback();
    }
  },
  trigger: 'blur'
};

export const portRule = {
  validator(rule, value, callback) {
    let _port = parseInt(value);
    if (_port < 1 || _port > 65535) {
      callback(new Error('端口号只能处于1-65535的范围'));
    } else {
      callback();
    }
  },
  trigger: 'blur'
};

function getByteLen(val) {
  let len = 0;
  for (let i = 0; i < val.length; i++) {
    let a = val.charAt(i);
    if (a.match(/[^\x00-\xff]/ig) !== null) {
      len += 2;
    } else {
      len += 1;
    }
  }
  return len;
}
