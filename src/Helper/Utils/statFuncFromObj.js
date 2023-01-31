class StatFuncFromObj {
    static sortObj(data, key, order) {
        const dataCopy = [...data];
        let xMult = 1;
        let yMult = -1;
        if (order === "desc") {
            xMult = -1;
            yMult = 1;
        }
        return dataCopy.sort((a, b) => (a[key] < b[key] ? xMult : yMult));
    }

    static convertLocale(str) {
        const parseTimestamp = new Date(str * 1000);
        return parseTimestamp.toLocaleString("id-ID");
    }

    static findMean(data, key) {
        const dataCopy = [...data];
        const {length} = dataCopy;
        return dataCopy.reduce((arr, val) => {
            return arr + val[key] / length;
        }, 0);
    }

    static getArrFromObj(data, key) {
        return StatFuncFromObj.sortObj(data, key).map((a) => a[key]);
    }

    static findQuantile(data, key, q) {
        const arrData = StatFuncFromObj.getArrFromObj(data, key);
        const pos = (arrData.length - 1) * q;
        const base = Math.floor(pos);
        const rest = pos - base;
        if (arrData[base + 1] !== undefined) {
            return arrData[base] + rest * (arrData[base + 1] - arrData[base]);
        } else {
            return arrData[base];
        }
    }

    static findMedian(data, key) {
        return StatFuncFromObj.findQuantile(data, key, 0.5)
    }

    static findStd(data, key) {
        const mu = StatFuncFromObj.findMean(data, key)
        const arrData = StatFuncFromObj.getArrFromObj(data, key);
        const diffArr = arrData.map(a => (a - mu) ** 2);
        return Math.sqrt((diffArr.reduce((a, b) => a + b, 0)) / (arrData.length - 1));
    };
}

export default StatFuncFromObj;
