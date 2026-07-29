// UpLift Badge System


const badges = {


    firstStep: {

        name: "🏅 First Step",

        description: "Complete your first workout",

        requirement: 1

    },


    coreStarter: {

        name: "🏅 Core Starter",

        description: "Complete 5 core workouts",

        requirement: 5

    },


    strengthStarter: {

        name: "🏅 Strength Starter",

        description: "Complete 5 strength workouts",

        requirement: 5

    },


    consistency: {

        name: "🔥 3 Day Flame",

        description: "Complete workouts for 3 days",

        requirement: 3

    }


};





function checkBadges() {


    // First workout badge

    if (

        userData.workoutsCompleted >= 1 &&

        !userData.unlockedBadges.includes("firstStep")

    ) {


        userData.unlockedBadges.push("firstStep");


        alert(

            "🎉 Badge Unlocked!\n\n🏅 First Step"

        );


    }



    saveUserData();


}
