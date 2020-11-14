// callback
const sum = (a, b, callback) => {
    if (isNaN(a) || isNaN(b)) {
        callback(new Error('Should be integer'), null)
    } else {
        callback(null, a + b)
    }   
}

// How to call callback
sum(1, undefined, (err, result) => {
    if (result) {
        console.log(result)
    } else {
        console.error(err)
    }
})    


// promise
const sumPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        sum(a, b, (err, result) => {
            if (result) {
                resolve(result)
            } else {
                reject(err)
            }
        })
    })
}


// how to call promise
sumPromise(10, undefined).then(result => console.log('promise', result)).catch(err => console.error(err)) 


// async/await
const sumAwait = async (a, b) => {
    try {
        const data = await sumPromise(a, b)
        console.log('await', data)
    } catch (error) {
        console.error(error)   
    }
}


// how to call async/await
sumAwait(9, undefined)
