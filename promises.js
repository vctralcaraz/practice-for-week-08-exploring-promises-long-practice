/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here
function text1() {
    return 'text 1';
}

async function text2() {
    return 'text 2';
}

console.log('text1', text1());
console.log('text2', text2());
text2().then(result => console.log('text2 .then', result));

/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here
async function text2rev() {
    const value = await text2();
    console.log('text2rev', value);
}

text2rev();

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here
async function cPromise() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('cPromise is done!');
        }, 2000);
    });

    const result = await promise;
    console.log('my promise is', result);
}

cPromise();

/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done!');
    }, 1000);
}).then(result => console.log('.then my other promise is', result))

/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function text3() {
    console.log('text3');
}

wait(text3(), 500);

/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here
const tryRandomPromise = random => new Promise((resolve, reject) => {
    if(random > 0.5) {
        resolve('success!');
    } else {
        reject('random error!');
    }
});

for(let i = 1; i <= 10; i++) {
    const random = Math.random();
    wait(2000 + random * 1000)
        .then(() => tryRandomPromise(random))
        .then(result => console.log('random try #', i, result))
        .catch(error => console.error('random try #', i, error));
}

/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here
const tryTryAgain = async i => {
    const random = Math.random();

    await wait(3000 + random * 1000);

    try {
        const result = await tryRandomPromise(random);
        console.log('random try #', i, result);
    } catch(error) {
        console.error('random try #', i, error);
    }
}

for(let i = 1; i <= 10; i++) {
    tryTryAgain(i);
}


/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
console.log('END OF FILE');
