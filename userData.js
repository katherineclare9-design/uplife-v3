// UpLift User Data System


let userData = {


    xp: 0,

    level: 1,

    xpToNextLevel: 500,

    streak: 0,

    workoutsCompleted: 0,

    checklistCompleted: 0,

    completedWorkouts: [],

    unlockedBadges: [],

    lastWorkoutDate: null


};




// Save user progress

function saveUserData() {


    localStorage.setItem(

        "upliftData",

        JSON.stringify(userData)

    );


}




// Load user progress

function loadUserData() {


    const savedData = localStorage.getItem("upliftData");


    if (savedData) {


        userData = JSON.parse(savedData);


    }


}




// Add XP

function addXP(amount) {


    userData.xp += amount;



    while (userData.xp >= userData.xpToNextLevel) {


        userData.xp -= userData.xpToNextLevel;


        userData.level += 1;


        userData.xpToNextLevel = Math.floor(

            userData.xpToNextLevel * 1.25

        );


        alert(

            "🎉 Level Up! You reached Level " + userData.level

        );


    }



    saveUserData();


}




// Reset Progress

function resetProgress() {


    const confirmReset = confirm(

        "Resetting your progress will erase any and all completed workouts or recent badge history"

    );


    if (confirmReset) {


        localStorage.removeItem("upliftData");


        location.reload();


    }


}




loadUserData();
