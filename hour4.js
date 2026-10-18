const fetchUserData = () => {
    return new Promise((resolve, reject) => {
        console.log("COnnecting to server...");

        setTimeout(() => {
            const isSuccess = true;

            if(isSuccess) {
                resolve({id: 101, username: "JRM_Dev", level: 42});
            }
            else {
                reject("Error 500: Failed to fetch player data.");
            }
        }, 2000);
    });
};

const loadGame = async () => {
    try {
        const userData = await fetchUserData();

        console.log("Data received", userData);
        console.log("Welcome back, ", userData.username);
    }
    catch {
        console.error("Network Failed!", error);
    }
}

loadGame();