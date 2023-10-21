var foo = {
    bar: 123,
    bas: [{
        qux: 1,
    },
    {
        qux: 2,
    },
    {
        qux: 3,
    }]
};

console.log(foo.bar); // 123
console.log(foo.bas); // [ { qux: 1 }, { qux: 2 }, { qux: 3 } ]
console.log(foo.bas[2]); // { qux: 3 }
console.log(foo.bas[2].qux); // 3