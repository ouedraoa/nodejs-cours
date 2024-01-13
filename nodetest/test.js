const promise = new Promise((resolve, reject) => {
    const ok = true;
    if (ok) {
        resolve("ok");
    } else {
        reject("ko");
    }
});

promise.then(res => {
    console.log(res);
})
    .catch(err => {
        console.log(err);
    });

async function asynFunction() {
    const val = "test";
    return val;
}

asynFunction().then(res => {

})
