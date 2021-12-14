/* 
*
*工具函数
* */
export default {
  formateDate(date, rule = 'YYYY-MM-DD HH:mm:ss') {
    if (/(Y+)/.test(rule)) {
      rule = rule.replace(RegExp.$1, date.getFullYear())
    }
    const o = {
      // 'Y+': date.getFullYear(),
      'M+': date.getMonth() + 1,
      "D+": date.getDate(),
      "H+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds()
    }
    for (const k in o) {
      if (new RegExp(`(${k})`).test(rule)) {
        const val = o[k] + '';
        rule = rule.replace(RegExp.$1, ('00' + val).substr(val.length))
      }
    }

    return rule;
  },
  getFileName(path) {
    var pos1 = path.lastIndexOf('/');
    var pos2 = path.lastIndexOf('\\');
    var pos = Math.max(pos1, pos2)
    if (pos < 0)
      return path;
    else
      return path.substring(pos + 1);
  },
  dateDiff(hisTime) {
    var now = new Date().getTime(),
      diffValue = now - hisTime,
      result = '',
      minute = 1000 * 60,
      hour = minute * 60,
      day = hour * 24,
      month = day * 30,
      year = month * 12,

      _year = diffValue / year,
      _month = diffValue / month,
      _week = diffValue / (7 * day),
      _day = diffValue / day,
      _hour = diffValue / hour,
      _min = diffValue / minute;

    if (_year >= 1) result = parseInt(_year) + "年前";
    else if (_month >= 1) result = parseInt(_month) + "个月前";
    else if (_week >= 1) result = parseInt(_week) + "周前";
    else if (_day >= 1) result = parseInt(_day) + "天前";
    else if (_hour >= 1) result = parseInt(_hour) + "个小时前";
    else if (_min >= 1) result = parseInt(_min) + "分钟前";
    else result = "刚刚";
    return result;
  }

}