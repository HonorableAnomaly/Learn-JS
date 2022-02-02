// Nested setTimeout callbacks within a function

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'indigo';
//                         setTimeout(() => {
//                             document.body.style.backgroundColor = 'violet';
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// A variable taking several arguments for the same setTimeout function

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay);
};

// Rewritten function to take the color change variable, still nested, but better refactored
delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                    delayedColorChange('indigo', 1000, () => {
                        delayedColorChange('purple', 1000, () => {
    
                        });
                    });
                });
            });
        });
    });
});


// demo typical simple async callback hell
searchMovieAPI ('Lord of the Rings', () => {
    saveToMyDB ('movies', () => {
        // if it works, run this
    }, () => {
        // if it doesn't work, run this
    })
}, () => {
    // if API is down or request failed, run this
})