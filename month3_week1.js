const month3_week1_workouts = {
    sunday: {
        title: "UPPER BODY",
        warmup: [
            "Circuit x 2:",
            "• 30 sec arm circles",
            "• 10 cat-camel",
            "• 10 resistance band pull-aparts",
            "• 10 scap pull-ups"
        ],
        mainWorkout: [
            "1. Pull Mastery (4 rounds):",
            "• 3-5 Archer pull-ups each side",
            "• 8 L-sit pull-ups (or tuck)",
            "• 10 Mixed grip chin-ups",
            "• 12 Typewriter pull-ups",
            "Rest 2-3 mins between rounds",
            "2. Push Development (4 rounds):",
            "• 8 Ring turned out push-ups",
            "• 10 Decline pike push-ups",
            "• 12 Korean dips",
            "• 15 Pseudo planche push-ups",
            "Rest 2 mins between rounds",
            "3. Static Strength (3 rounds):",
            "• Back lever progression 20 sec",
            "• Front lever progression 20 sec",
            "• 30 sec Support hold on rings (RTO)",
            "• 45 sec Tuck planche hold",
            "Rest 2 mins between rounds",
            "Finisher:",
            "3 rounds:",
            "• Max Ring dips",
            "• Max Pull-ups",
            "• 60 sec rest between rounds"
        ]
    },
    monday: {
        title: "LOWER BODY & AGILITY",
        warmup: [
            "Dynamic:",
            "• 2 mins jumping rope",
            "• 20 leg swings each leg",
            "• 10 knee circles each leg",
            "• 20 ankle mobility each foot"
        ],
        mainWorkout: [
            "1. Plyometric Skills (4 rounds):",
            "• 5 Depth jumps",
            "• 8 Box jumps to precision landing",
            "• 10 Single leg bounds each leg",
            "• 12 Lateral jumps",
            "Rest 2 mins between rounds",
            "2. Single Leg Focus (3 rounds):",
            "• 8 Pistol squats each leg",
            "• 10 Advanced shrimp squats each leg",
            "• 12 Single leg glute bridges each side",
            "• 15 Single leg calf raises each side",
            "Rest 90 sec between rounds",
            "3. Jump Endurance (4 rounds):",
            "• 30 sec Jump squat variations",
            "• 30 sec Split jump variations",
            "• 30 sec Tuck jumps",
            "• 30 sec rest",
            "Rest 2 mins between rounds"
        ]
    },
    tuesday: {
        title: "CORE & SKILLS",
        warmup: [
            "3 rounds:",
            "• 30 sec hollow hold",
            "• 30 sec arch hold",
            "• 30 sec side plank each side",
            "• 10 inchworm walks"
        ],
        mainWorkout: [
            "1. Handstand Progress (5 rounds):",
            "• 45 sec Chest-to-wall handstand",
            "• 5 Wall HSPU negatives",
            "• 3 Kick-up practice (focus on control)",
            "• 20 sec Free handstand hold practice",
            "Rest 2 mins between rounds",
            "2. Core Control (4 rounds):",
            "• 8 Full dragon flags",
            "• 12 Toes to bar strict",
            "• 15 Ab rollouts",
            "• 45 sec L-sit progression",
            "Rest 90 sec between rounds",
            "3. Planche Work (3 rounds):",
            "• Advanced tuck planche 20 sec",
            "• 8 Planche lean push-ups",
            "• 10 Pseudo planche push-ups",
            "• Tuck planche rocks 30 sec",
            "Rest 2 mins between rounds"
        ]
    },
    wednesday: {
        title: "FULL BODY SKILLS",
        warmup: [
            "Movement flow 5 mins:",
            "• Animal walks",
            "• Quadrupedal movement",
            "• Mobility flows",
            "• Light skill practice"
        ],
        mainWorkout: [
            "1. Skill Integration (4 rounds):",
            "• 3-5 Bar muscle-up progressions",
            "• 8 Ring muscle-up transitions",
            "• 10 Explosive pull-ups",
            "• 12 Deep ring dips",
            "Rest 2-3 mins between rounds",
            "2. Movement Complex (3 rounds):",
            "• 10 Pull-up to toes to bar",
            "• 12 Ring archer push-ups",
            "• 15 Jump switch lunges",
            "• 20 Hollow rocks",
            "Rest 2 mins between rounds",
            "3. Endurance Challenge:",
            "12 min AMRAP:",
            "• 5 Bar muscle-up progressions",
            "• 10 HSPU progressions",
            "• 15 Pistol squats (total)",
            "• 20 V-ups",
            "Finisher:",
            "For quality - 2 rounds:",
            "• 30 sec L-sit hold",
            "• 30 sec Tuck planche hold",
            "• 30 sec Handstand hold",
            "• 30 sec Front lever progression",
            "Rest 1 min between rounds"
        ]
    }
};

function loadMonth3Week1Workouts() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday'];
    
    days.forEach(day => {
        const workoutDetails = document.getElementById(`details-${day}`);
        if (workoutDetails && month3_week1_workouts[day]) {
            let html = `<h4>${month3_week1_workouts[day].title}</h4>`;
            
            html += '<div class="workout-section"><h5>Warmup:</h5><ul>';
            month3_week1_workouts[day].warmup.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            html += '<div class="workout-section"><h5>Main Workout:</h5><ul>';
            month3_week1_workouts[day].mainWorkout.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            workoutDetails.innerHTML = html;
        }
    });
}