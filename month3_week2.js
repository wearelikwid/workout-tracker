const month3_week2_workouts = {
    sunday: {
        title: "UPPER BODY",
        warmup: [
            "Flow sequence x 3:",
            "• 10 shoulder dislocates with band",
            "• 10 scap push-ups to cobra",
            "• 10 german hang holds (3 sec each)",
            "• 10 support holds on bars/rings"
        ],
        mainWorkout: [
            "1. Straight Arm Strength (4 rounds):",
            "• Back lever progressions 15-20 sec",
            "• Front lever progressions 15-20 sec",
            "• Planche lean holds 20-30 sec",
            "• 8-10 Skin the cats",
            "Rest 2-3 mins between rounds",
            "2. Bent Arm Strength (4 rounds):",
            "• 5 Explosive muscle-up transitions",
            "• 8 Ring dips (RTO)",
            "• 10 Wide pull-ups + 10 close pull-ups",
            "• 12 Bulgarian ring push-ups",
            "Rest 2 mins between rounds",
            "3. Isometric Focus (3 rounds):",
            "• Iron cross progression 10-15 sec",
            "• Victorian cross progression 10-15 sec",
            "• Support hold (RTO) 45 sec",
            "Rest 2-3 mins between rounds",
            "Finisher:",
            "3 sets:",
            "• Max L-sit pull-ups",
            "• Max archer push-ups",
            "Rest 90 sec between sets"
        ]
    },
    monday: {
        title: "LOWER BODY CONTROL",
        warmup: [
            "Joint prep:",
            "• Hip CARs (controlled articular rotations)",
            "• Ankle mobility work",
            "• Knee circles",
            "• Jefferson curls (bodyweight only)"
        ],
        mainWorkout: [
            "1. Balance Skills (4 rounds):",
            "• Single leg deadlift holds 20 sec each side",
            "• Pistol squat negatives 5 each side",
            "• Shrimp squat holds 15 sec each side",
            "• Single leg jump & stick 5 each side",
            "Rest 90 sec between rounds",
            "2. Dynamic Control (3 rounds):",
            "• Walking pistol squats 5 each leg",
            "• 360° squat jumps x 5",
            "• Single leg box jumps 5 each leg",
            "• Matrix lunges 10 each leg",
            "Rest 2 mins between rounds",
            "3. Explosive Power (4 rounds):",
            "• Clap push-ups x 8",
            "• Explosive switch lunges x 10 each leg",
            "• Broad jump + backjump x 5",
            "• Tuck jump to precision landing x 5",
            "Rest 2 mins between rounds"
        ]
    },
    tuesday: {
        title: "SKILL DAY",
        warmup: [
            "Movement prep:",
            "• Wrist mobility routine",
            "• Shoulder mobility flow",
            "• Hollow/arch body rocks",
            "• Handstand wall slides"
        ],
        mainWorkout: [
            "1. Handstand Development (5 rounds):",
            "• Free handstand practice 30-45 sec",
            "• Press to handstand progression x 3",
            "• Handstand pirouette progression x 3",
            "• Wall HSPU negatives x 5",
            "Rest 2 mins between rounds",
            "2. Core Integration (4 rounds):",
            "• Front lever raises x 5",
            "• Back lever raises x 5",
            "• Straddle L-sit to press x 3",
            "• Dragon flag negatives x 5",
            "Rest 2 mins between rounds",
            "3. Flow Sequence (3 rounds):",
            "• Crow pose to handstand x 3",
            "• L-sit to tuck planche x 3",
            "• Back bridge to wall walk x 3",
            "Rest 2-3 mins between rounds"
        ]
    },
    wednesday: {
        title: "MOVEMENT MASTERY",
        warmup: [
            "Animal flow sequence:",
            "• Bear crawls",
            "• Ape walks",
            "• Lizard crawls",
            "• Crab reaches"
        ],
        mainWorkout: [
            "1. Skill Connection (4 rounds):",
            "• Muscle-up to L-sit x 3",
            "• Front lever to back lever transition x 3",
            "• Tuck planche to handstand x 3",
            "Rest 3 mins between rounds",
            "2. Movement Complex (3 rounds):",
            "For quality:",
            "• 5 Ring muscle-ups",
            "• 8 One arm push-up progressions each side",
            "• 10 Pistol squat to shin grab each leg",
            "Rest 2-3 mins between rounds",
            "3. Flow Practice (15 mins):",
            "Work on connecting:",
            "• Handstand variations",
            "• Planche progressions",
            "• Lever transitions",
            "• Ground flow movement",
            "Take breaks as needed",
            "Finisher:",
            "Quality practice - 2 rounds:",
            "Choose 2 skills you want to develop and practice for 5 mins each",
            "Focus on perfect form and control"
        ]
    }
};

function loadMonth3Week2Workouts() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday'];
    
    days.forEach(day => {
        const workoutDetails = document.getElementById(`details-${day}`);
        if (workoutDetails && month3_week2_workouts[day]) {
            let html = `<h4>${month3_week2_workouts[day].title}</h4>`;
            
            html += '<div class="workout-section"><h5>Warmup:</h5><ul>';
            month3_week2_workouts[day].warmup.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            html += '<div class="workout-section"><h5>Main Workout:</h5><ul>';
            month3_week2_workouts[day].mainWorkout.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            workoutDetails.innerHTML = html;
        }
    });
}