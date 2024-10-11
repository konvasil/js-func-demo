const ages = {
    john: 32,
    nick: 22,
    mary: 12
}


function foo (list) {
    let age = Object.values(list).map((age) => age + 10 / 2);
    return age
}

console.log(foo(ages))
