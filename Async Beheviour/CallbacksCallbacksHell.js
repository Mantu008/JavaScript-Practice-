function loginUser(name, callback) {
    setTimeout(() => {
        console.log(`${name} Logged In`);
        callback({ userId: 101 });
    }, 1000);
}

function getUserData(userId, callback) {
    setTimeout(() => {
        console.log(`Data Fatched For Given userId ${userId}`);
        callback({ orderId: 5001 });
    }, 1000);
}

function getOrder(orderId, callback) {
    setTimeout(() => {
        console.log(`Order details fetched for orderId ${orderId}`);
        callback();
    }, 1000);
}

loginUser("Mantu", (user) => {
    getUserData(user.userId, (data) => {
        getOrder(data.orderId, () => {
            console.log("All Task Complete");
        });
    });
});
