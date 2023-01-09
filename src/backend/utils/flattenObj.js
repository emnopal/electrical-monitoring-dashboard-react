import { formatTime } from "./formatTime.js";

export const flattenObj = (obj, as) => {
    const newObj = {};

    Object.keys(obj).forEach((key) => {
        Object.keys(obj[key]).forEach((keyKey) => {

            let _keyValueTemp = obj[key][keyKey]
            let _keyTemp = _keyValueTemp['timestamp']

            newObj[_keyTemp] = obj[key][keyKey]
            newObj[_keyTemp]['Current'] = parseFloat(_keyValueTemp['Current'])
            newObj[_keyTemp]['Energy'] = parseFloat(_keyValueTemp['Energy'])
            newObj[_keyTemp]['Frequency'] = parseFloat(_keyValueTemp['Frequency'])
            newObj[_keyTemp]['Power'] = parseFloat(_keyValueTemp['Power'])
            newObj[_keyTemp]['Power Factor'] = parseFloat(_keyValueTemp['Power Factor'])
            newObj[_keyTemp]['Total Price'] = parseFloat(_keyValueTemp['Total Price'])
            newObj[_keyTemp]['Voltage'] = parseFloat(_keyValueTemp['Voltage'])
            newObj[_keyTemp]['readable_timestamp'] = formatTime(_keyValueTemp['timestamp'] * 1000)
        })
    })

    if (as) {
        if (as.toLowerCase() === 'json') return JSON.stringify(newObj, null, 4);
        if (as.toLowerCase() === 'array') return Object.values(newObj);
        return JSON.stringify(newObj, null, 4);
    }

    return newObj;
}
