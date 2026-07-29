// UpLift Prototype 1


const app = document.getElementById("app");




// Complete workout

function completeWorkout(workoutName) {


    if (!userData.completedWorkouts.includes(workoutName)) {


        userData.completedWorkouts.push(workoutName);



        const workout = workoutTypes[workoutName];



        if (workout) {


            addXP(workout.xp);



            if (workout.category === "core") {

                userData.coreWorkouts++;

            }


            if (workout.category === "strength") {

                userData.strengthWorkouts++;

            }


            if (workout.category === "backspot") {

                userData.backspotWorkouts++;

            }


            if (workout.category === "flexibility") {

                userData.flexibilitySessions++;

            }


            if (workout.category === "lowerBody") {

                userData.lowerBodyWorkouts++;

            }


            if (workout.category === "upperBody") {

                userData.upperBodyWorkouts++;

            }


        }



        userData.workoutsCompleted++;



        checkBadges();



        saveUserData();


    }



    showPage("training");


}






function showPage(page) {


    let content = "";





    // HOME

    if (page === "home") {


        content = `


        <h1>💖 UpLift</h1>

        <h2>🏠 Home</h2>



        <div class="card">

        <h3>⭐ Level ${userData.level}</h3>

        <p>${userData.xp}/${userData.xpToNextLevel} XP</p>

        </div>



        <div class="card">

        <h3>🔥 Daily Streak</h3>

        <p>${userData.streak} Days</p>

        </div>



        <div class="card">

        <h3>💪 Workouts Completed</h3>

        <p>${userData.workoutsCompleted}</p>

        </div>



        `;


    }






    // TRAINING

    if (page === "training") {


        const days = [

            "Sunday",

            "Monday",

            "Tuesday",

            "Wednesday",

            "Thursday",

            "Friday",

            "Saturday"

        ];



        const today = days[new Date().getDay()];



        const workout = dailyWorkouts[today];



        content = `



        <h1>💪 Training</h1>


        <h2>Today's Workout: ${today}</h2>




        <div class="card">


        <h3>🌅 Morning</h3>


        ${workout.morning.map(item => `


        <p>


        <button onclick="completeWorkout('${item}')">


        ${userData.completedWorkouts.includes(item) ? "✅" : "☐"}

        ${item}


        </button>


        </p>


        `).join("")}



        </div>






        <div class="card">


        <h3>🌙 Nighttime</h3>


        ${workout.nighttime.map(item => `


        <p>


        <button onclick="completeWorkout('${item}')">


        ${userData.completedWorkouts.includes(item) ? "✅" : "☐"}

        ${item}


        </button>


        </p>


        `).join("")}



        </div>



        `;


    }






    // BADGES

    if (page === "badges") {


        content = `


        <h1>🏅 Badge Gallery</h1>



        <div class="badge-gallery">



        ${Object.keys(badges).map(badge => {



            const unlocked = userData.unlockedBadges.includes(badge);



            return `



            <div class="badge-card ${unlocked ? "unlocked" : "locked"}">


            <h2>

            ${unlocked ? badges[badge].icon : "🔒"}

            </h2>



            <h3>

            ${badges[badge].name}

            </h3>



            <p>

            ${badges[badge].description}

            </p>



            <small>

            ${badges[badge].category}

            </small>



            </div>



            `;


        }).join("")}



        </div>



        `;


    }






    // PROFILE

    if (page === "profile") {


        content = `


        <h1>👤 Profile</h1>


        <div class="card">


        <p>⭐ Level: ${userData.level}</p>

        <p>XP: ${userData.xp}/${userData.xpToNextLevel}</p>

        <p>🔥 Streak: ${userData.streak}</p>

        <p>💪 Total Workouts: ${userData.workoutsCompleted}</p>


        <hr>


        <p>🔥 Core: ${userData.coreWorkouts}</p>

        <p>💪 Strength: ${userData.strengthWorkouts}</p>

        <p>🤸 Flexibility: ${userData.flexibilitySessions}</p>

        <p>🏋️ Backspot: ${userData.backspotWorkouts}</p>

        <p>🦵 Lower Body: ${userData.lowerBodyWorkouts}</p>

        <p>💪 Upper Body: ${userData.upperBodyWorkouts}</p>


        </div>



        `;


    }






    // SETTINGS

    if (page === "settings") {


        content = `


        <h1>⚙️ Settings</h1>



        <div class="card">


        <p>💖 Regular Mode</p>

        <p>🤍 Vacation Mode</p>

        <p>❤️ Period Mode</p>

        <p>🥗 ARFID Mode</p>


        </div>





        <div class="card">


        <h3>⚠️ Progress Settings</h3>


        <button onclick="resetProgress()">

        Reset Progress

        </button>


        </div>



        `;


    }






    app.innerHTML = content + `



    <div class="bottom-nav">


    <button onclick="showPage('home')">

    🏠<br>Home

    </button>



    <button onclick="showPage('training')">

    💪<br>Training

    </button>



    <button onclick="showPage('badges')">

    🏅<br>Badges

    </button>



    <button onclick="showPage('profile')">

    👤<br>Profile

    </button>



    <button onclick="showPage('settings')">

    ⚙️<br>Settings

    </button>


    </div>



    `;


}





showPage("home");
