const month2_week4_workouts = {
    sunday: {
        title: "UPPER BODY",
        warmup: [
            "• 10 shoulder rolls each direction",
            "• 10 arm circles each direction",
            "• 10 scap pull-ups",
            "• 10 push-up to downward dog"
        ],
        mainWorkout: [
            "1. Pull Progression (4 rounds):",
            "• 5 Slow negative pull-ups (5 sec down)",
            "• 8 Wide grip pull-ups",
            "• 10 Close grip chin-ups",
            "• 12 Commando pull-ups (alternating sides)",
            "Rest 2 mins between rounds",
            "2. Push Complex (4 rounds):",
            "• 12 Pseudo planche push-ups",
            "• 15 Archer push-ups",
            "• 20 Hindu push-ups",
            "• Max standard push-ups",
            "Rest 2 mins between rounds",
            "3. Ring Work (3 rounds):",
            "• 45 sec Ring support hold",
            "• 8-10 Ring dips",
            "• 12 Ring rows (feet elevated)",
            "• 30 sec Ring turned out support hold",
            "Rest 90 sec between rounds",
            "Finisher:",
            "Death by Pull-ups and Push-ups:",
            "Minute 1: 1 pull-up + 2 push-ups",
            "Minute 2: 2 pull-ups + 4 push-ups",
            "Continue adding 1 pull-up and 2 push-ups each minute until failure"
        ]
    },
    monday: {
        title: "LOWER BODY",
        warmup: [
            "2 rounds:",
            "• 20 hip circles each leg",
            "• 20 ankle circles each foot",
            "• 10 leg swings each leg",
            "• 20 high knees"
        ],
        mainWorkout: [
            "1. Jump Complex (4 rounds):",
            "• 10 Tuck jumps",
            "• 8 180° jumps",
            "• 6 Broad jumps",
            "• 10 Calf jumps",
            "Rest 90 sec between rounds",
            "2. Pistol Progression (4 rounds):",
            "• 5 Pistol squats each leg (or progression)",
            "• 10 Shrimp squats each leg",
            "• 15 Single leg bridges each side",
            "• 20 Step-ups each leg",
            "Rest 2 mins between rounds",
            "3. Endurance Complex (3 rounds):",
            "• 30 Walking lunges",
            "• 40 Air squats",
            "• 50 Mountain climbers",
            "• 60 sec Wall sit",
            "Rest 2 mins between rounds",
            "Finisher:",
            "8 min AMRAP:",
            "• 10 Jump squats",
            "• 15 Alternating lunges",
            "• 20 High knees"
        ]
    },
    tuesday: {
        title: "CORE/SKILLS",
        warmup: [
            "3 rounds:",
            "• 20 sec Dead bug",
            "• 20 sec Bird dog",
            "• 20 sec Cat-cow",
            "• 20 sec Hollow body rocks"
        ],
        mainWorkout: [
            "1. Handstand Progression (4 rounds):",
            "• 45 sec Wall handstand hold",
            "• 10 Wall walks",
            "• 8 Pike push-ups",
            "• 5 Wall handstand push-up negatives",
            "Rest 2 mins between rounds",
            "2. Core Control (4 rounds):",
            "• 15 Dragon flags (or progression)",
            "• 20 Hollow rocks",
            "• 25 Reverse crunches",
            "• 30 sec L-sit progression",
            "Rest 90 sec between rounds",
            "3. Planche Progression (3 rounds):",
            "• 30 sec Tuck planche lean",
            "• 20 sec Advanced frog stand",
            "• 15 Pseudo planche push-ups",
            "• 10 Planche leans",
            "Rest 2 mins between rounds"
        ]
    },
    wednesday: {
        title: "FULL BODY",
        warmup: [
            "5 mins light movement:",
            "• Bear crawls",
            "• Crab walks",
            "• Inchworm walks",
            "• Spider-man crawls"
        ],
        mainWorkout: [
            "1. Skill Circuit (4 rounds):",
            "• 8 Muscle-ups (or progression)",
            "• 8 Skin the cats (or progression)",
            "• 10 Box pistols each leg",
            "• 12 Handstand push-ups (or pike push-ups)",
            "Rest 2 mins between rounds",
            "2. AMRAP 15 mins:",
            "• 5 Pull-ups",
            "• 10 Dips",
            "• 15 Jump squats",
            "• 20 Mountain climbers",
            "3. Tabata Intervals (8 rounds):",
            "20 sec work/10 sec rest:",
            "• Burpees",
            "• Push-ups",
            "• Jump lunges",
            "• V-ups",
            "Finisher:",
            "For Quality - 3 rounds:",
            "• 10 Slow negative pull-ups",
            "• 15 Ring dips",
            "• 20 Jump squats",
            "Rest 1 min between rounds"
        ]
    }
};

function loadMonth2Week4Workouts() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday'];
    
    days.forEach(day => {
        const workoutDetails = document.getElementById(`details-${day}`);
        if (workoutDetails && month2_week4_workouts[day]) {
            let html = `<h4>${month2_week4_workouts[day].title}</h4>`;
            
            html += '<div class="workout-section"><h5>Warmup:</h5><ul>';
            month2_week4_workouts[day].warmup.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            html += '<div class="workout-section"><h5>Main Workout:</h5><ul>';
            month2_week4_workouts[day].mainWorkout.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            workoutDetails.innerHTML = html;
        }
    });
}