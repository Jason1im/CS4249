var x = "hello";

console.log(x);

document.dispatchEvent(new CustomEvent('log', {
    detail: {
        eventName: 'myevent',
        info: { key1: val1, key2: val2 }
    }
}));