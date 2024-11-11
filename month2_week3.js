const month2_week3_workouts = {
    sunday: {
        title: "UPPER BODY",
        warmup: [
            "• 10 arm circles each direction",
            "• 10 scapular pull-ups",
            "• 10 cat-cow stretches",
            "• 10 band pull-aparts"
        ],
        mainWorkout: [
            "1. Pull Complex (4 rounds):",
            "• 8-10 Strict pull-ups",
            "• 12 Australian pull-ups",
            "• 10 Chin-ups",
            "• 15 Inverted rows",
            "Rest 90 sec between rounds",
            "2. Push Complex (4 rounds):",
            "• 15 Diamond push-ups",
            "• 12 Decline push-ups",
            "• 10 Pike push-ups",
            "• Max regular push-ups",
            "Rest 90 sec between rounds",
            "3. Ring Work (3 rounds):",
            "• 8-10 Ring dips",
            "• 10 Ring push-ups",
            "• 12 Ring rows",
            "• Hold top position of ring dip for 20 sec",
            "Rest 2 mins between rounds",
            "Finisher:",
            "4 rounds:",
            "• Max push-ups",
            "• Max pull-ups",
            "• 30 sec rest between rounds"
        ]
    },
    monday: {
        title: "LOWER BODY",
        warmup: [
            "• 20 air squats",
            "• 10 lunges each leg",
            "• 30 sec wall sit",
            "• 10 hip circles each leg"
        ],
        mainWorkout: [
            "1. Plyometric Complex (4 rounds):",
            "• 10 Jump squats",
            "• 8 Split jumps each leg",
            "• 10 Box jumps",
            "• 12 Speed skaters",
            "Rest 90 sec between rounds",
            "2. Strength Complex (4 rounds):",
            "• 15 Pistol squat progressions each leg",
            "• 20 Bulgarian split squats each leg",
            "• 30 Calf raises",
            "• 45 sec Wall sit",
            "Rest 2 mins between rounds",
            "3. Endurance Block (3 rounds):",
            "• 30 Walking lunges",
            "• 20 Jump squats",
            "• 30 Step-ups (total)",
            "Rest 90 sec between rounds",
            "Finisher:",
            "5 min AMRAP:",
            "• 10 Burpees",
            "• 20 Air squats",
            "• 30 Mountain climbers"
        ]
    },
    tuesday: {
        title: "CORE",
        warmup: [
            "2 rounds:",
            "• 30 sec hollow hold",
            "• 30 sec arch hold",
            "• 30 sec side plank each side",
            "• 10 superman holds"
        ],
        mainWorkout: [
            "1. Static Holds (4 rounds):",
            "• L-sit progression 30 sec",
            "• Tuck planche hold 20 sec",
            "• Hollow body hold 45 sec",
            "• Advanced plank hold 45 sec",
            "Rest 60 sec between rounds",
            "2. Dynamic Core (4 rounds):",
            "• 15 V-ups",
            "• 20 Leg raises",
            "• 25 Flutter kicks",
            "• 30 Bicycle crunches",
            "Rest 60 sec between rounds",
            "3. Plank Series (3 rounds):",
            "• 45 sec Plank with shoulder taps",
            "• 30 sec Side plank with hip dips each side",
            "• 45 sec Up-down planks",
            "• 30 sec Plank saw",
            "Rest 90 sec between rounds"
        ]
    },
    wednesday: {
        title: "FULL BODY",
        warmup: [
            "AMRAP 5 mins:",
            "• 5 Inchworm walks",
            "• 10 Mountain climbers",
            "• 15 Jumping jacks"
        ],
        mainWorkout: [
            "1. Bodyweight Circuit (4 rounds):",
            "• 10 Pull-ups",
            "• 15 Push-ups",
            "• 20 Squats",
            "• 25 Mountain climbers",
            "Rest 90 sec between rounds",
            "2. Core to Extremity (4 rounds):",
            "• 8 Burpee pull-ups",
            "• 12 Pike push-ups",
            "• 16 Jump lunges (total)",
            "• 20 V-ups",
            "Rest 2 mins between rounds",
            "3. AMRAP 12 mins:",
            "• 5 Chin-ups",
            "• 10 Dips",
            "• 15 Jump squats",
            "• 20 Russian twists",
            "Finisher:",
            "For time:",
            "• 50 Push-ups",
            "• 40 Squats",
            "• 30 V-ups",
            "• 20 Burpees",
            "• 10 Pull-ups"
        ]
    }
};

function loadMonth2Week3Workouts() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday'];
    
    days.forEach(day => {
        const workoutDetails = document.getElementById(`details-${day}`);
        if (workoutDetails && month2_week3_workouts[day]) {
            let html = `<h4>${month2_week3_workouts[day].title}</h4>`;
            
            html += '<div class="workout-section"><h5>Warmup:</h5><ul>';
            month2_week3_workouts[day].warmup.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            html += '<div class="workout-section"><h5>Main Workout:</h5><ul>';
            month2_week3_workouts[day].mainWorkout.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            workoutDetails.innerHTML = html;
        }
    });
}