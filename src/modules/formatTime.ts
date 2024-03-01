const WEEK_DAYS = ['日', '一', '二', '三', '四', '五', '六'];

/**
 * 字符串添加0前缀
 * @param str string | number
 * @param len number
 * @returns string
 */
function pad(str: string | number, len = 2): string {
    str += '';
    return '0000'.slice(0, len - (str as string).length) + str;
}

/**
 * 格式化时间
 * @param time string | number | Date
 * @param template string 格式
 * @returns string
 */
export function formatTime(time: string | number | Date, template: string) {
    const date = new Date(time);
    const y = date.getFullYear();
    const M = date.getMonth() + 1;
    const q = Math.floor((M - 1) / 4) + 1; // 季度
    const d = date.getDate();
    const w = date.getDay();
    const H = date.getHours(); // 24小时
    const h = ((H - 1) % 12) + 1; // 12小时
    const m = date.getMinutes();
    const s = date.getSeconds(); // 秒
    const S = date.getMilliseconds(); // 毫秒

    return (template || '')
        .replace(/yyyy/g, y + '')
        .replace(/yy/g, (y % 100) + '')
        .replace(/q/g, q + '')
        .replace(/MM/g, pad(M, 2))
        .replace(/M/g, M + '')
        .replace(/dd/g, pad(d, 2))
        .replace(/d/g, d + '')
        .replace(/WWW/g, '星期' + WEEK_DAYS[w])
        .replace(/WW/g, '周' + WEEK_DAYS[w])
        .replace(/W/g, '' + WEEK_DAYS[w])
        .replace(/HH/g, pad(H, 2))
        .replace(/H/g, H + '')
        .replace(/hh/g, pad(h + '', 2))
        .replace(/h/g, h + '')
        .replace(/mm/g, pad(m, 2))
        .replace(/m/g, m + '')
        .replace(/ss/g, pad(s, 2))
        .replace(/s/g, s + '')
        .replace(/SSS/g, pad(S, 3))
        .replace(/S/g, S + '');
}
