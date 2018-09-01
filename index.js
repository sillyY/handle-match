module.exports = function(data ,regs) {
    var dataType = Object.prototype.toString.call(data),
        regsType = Object.prototype.toString.call(regs);
    if(dataType !== '[object Array]') {
        console.error('Error: database can only be Array.');
        return;
    }
    if(regsType !== '[object Map]') {
        console.error('Error: regs can only be Map.');
        return;
    }
    regs.forEach((value, key, map) => {
        let keyType = Object.prototype.toString.call(key),
            valueType = Object.prototype.toString.call(value);
        if (keyType !== '[object RegExp]') {
            console.error('Error: the key of regs can only be RegExp.');
            return;
        }
        if(valueType !== '[object Function]') {
            console.error('Error: the value of regs can only be Function.')
            return;
        }
        for (let item of data) {
            if(key.test(item)){
                value(item);
            }
        }
    });
}



