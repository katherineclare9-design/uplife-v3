    // SETTINGS


    if (page === "settings") {


        content = `



        <h1>⚙️ Settings</h1>




        <div class="card">


        <h3>🌈 App Mode</h3>



        <button class="mode-button" onclick="changeMode('Regular')">

        💖 Regular Mode

        </button>



        <button class="mode-button" onclick="changeMode('Vacation')">

        🤍 Vacation Mode

        </button>



        <button class="mode-button" onclick="changeMode('Period')">

        ❤️ Period Mode

        </button>



        <p>

        Current Mode: ${userData.mode}

        </p>


        </div>






        <div class="card">


        <h3>🥗 Nutrition Support</h3>



        <label>


        <input 

        type="checkbox"

        ${userData.arfidSupport ? "checked" : ""}

        onclick="toggleARFID()"

        >


        ARFID Support Feature



        </label>



        <p>

        This helps the app understand nutrition information should be handled sensitively.

        </p>



        </div>







        <div class="card">


        <h3>💾 Data</h3>



        <button onclick="resetProgress()">

        Reset Progress

        </button>


        </div>



        `;


    }
