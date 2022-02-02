// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

// THE PROMISE VERSION - No need for success or failure arguments in the function
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// fakeRequestCallback('books.com/page1', (response) => {
//     console.log("IT WORKED!!!");
//     console.log(response);
//     fakeRequestCallback('books.com/page2', (response) => {
//         console.log("IT WORKED AGAIN!!!");
//         console.log(response);
//         fakeRequestCallback('books.com/page3', (response) => {
//             console.log("IT WORKED AGAIN, AGAIN!!!");
//             console.log(response);
//         }, (err) => {
//             console.log("ERROR!!! (3rd request)", err);
//         })
//     }, (err) => {
//         console.log("ERROR!!! (2nd request)", err);
//     })
// }, (err) => {
//     console.log("ERROR!!!", err);
// })


// Calling the fakeRequestPromise with much simpler syntax than callback hell
// const request = fakeRequestPromise('goodreads.com/api/fantasyreadinglist');
// request.then(() => {
//     console.log("PROMISE RESOLVED.");
//     console.log("IT WORKED!!!");
// }).catch(() => {
//     console.log("PROMISE REJECTED.");
//     console.log("OH NO, ERROR!!!");
// })

// Alternate way of spacing the code
// const request = fakeRequestPromise('goodreads.com/api/fantasyreadinglist');

// request
//     .then(() => {
//         console.log("IT WORKED!!!");
//     }).catch(() => {
//         console.log("OH NO, ERROR!!!");
//     })


// Chaining the variable and the request together!
// fakeRequestPromise('goodreads.com/api/fantasyreadinglist')
//     .then(() => {
//         console.log("IT WORKED!!!");
//     }).catch(() => {
//         console.log("OH NO, ERROR!!!");
//     });


// Chaining the variable and the request together, and adding callback hell
fakeRequestPromise('goodreads.com/api/fantasyreadinglist/page1')
    .then(() => {
        console.log("IT WORKED!!!");        
        fakeRequestPromise('goodreads.com/api/fantasyreadinglist/page2')
        .then(() => {
            console.log("IT WORKED AGAIN!!!");            
            fakeRequestPromise('goodreads.com/api/fantasyreadinglist/page3')
            .then(() => {
                console.log("IT WORKED AGAIN, AGAIN!!! ALL DATA RETRIEVED!!!");
            }).catch(() => {
                console.log("OH NO, ERROR!!! (3rd request)");
            });
        }).catch(() => {
            console.log("OH NO, ERROR!!! (2nd request)");
        });
    }).catch(() => {
        console.log("OH NO, ERROR!!!");
    });