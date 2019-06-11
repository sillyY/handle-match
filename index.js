/** 
var S = function( salary ){     
    return salary * 4;
};
var A = function( salary ){
    return salary * 3;
};
var B = function( salary ){
     return salary * 2;
};

var calculateBonus = function( func, salary ){
     return func( salary );
};

calculateBonus( S, 10000  );    // 输出：40000


// 迭代器模式
var each = function( ary, callback ){     
    for ( var i = 0, l = ary.length; i < l; i++ ){     
        callback.call( ary[i], i, ary[ i ] );  // 把下标和元素当作参数传给callback函数
    }
};

each( [ 1, 2, 3 ], function( i, n ){
    alert ( [ i, n ] );
});
*/

// 方法

var handleMatch = function(func, match) {
    return func(match)
}

var each = function( ary, callback ){     
    for ( var i = 0, l = ary.length; i < l; i++ ){     
        callback.call( ary[i], i, ary[ i ] );  // 把下标和元素当作参数传给callback函数
    }
};

// 使用
const data = ['1', '2', '3']

const regs = [/\d/, /[a-zA-Z]/]

function match1(data) {
    console.log(`${data} is number`);
}
function match2(data) {
    console.log(`${data} is letter`);
}

each(regs, function(i, n) {
    
})