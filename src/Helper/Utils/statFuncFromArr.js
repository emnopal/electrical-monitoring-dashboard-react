class StatFuncFromArr {
    static sortObj(data, order) {
        const dataCopy = [...data];
        let xMult = 1;
        let yMult = -1;
        if (order === "desc") {
            xMult = -1;
            yMult = 1;
        }
        return dataCopy.sort((a, b) => (a < b ? xMult : yMult));
    }

    static findMean(data) {
        const dataCopy = [...data];
        const {length} = dataCopy;
        return dataCopy.reduce((arr, val) => {
            return arr + val / length;
        }, 0);
    }

    static findSum(data) {
        const dataCopy = [...data];
        return dataCopy.reduce((arr, val) => {
            return arr + val;
        }, 0);
    }

    static findQuantile(data, q) {
        const pos = (data.length - 1) * q;
        const base = Math.floor(pos);
        const rest = pos - base;
        if (data[base + 1] !== undefined) {
            return data[base] + rest * (data[base + 1] - data[base]);
        } else {
            return data[base];
        }
    }

    static findMedian(data) {
        return StatFuncFromArr.findQuantile(data, 0.5)
    }

    static findStd(data) {
        const mu = StatFuncFromArr.findMean(data)
        const diffArr = data.map(a => (a - mu) ** 2);
        return Math.sqrt((StatFuncFromArr.findSum(diffArr)) / (data.length - 1));
    };
}

export default StatFuncFromArr;
