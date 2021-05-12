

export const waiter = new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 2000);
});