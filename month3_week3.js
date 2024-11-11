const month3_week3_workouts = {
    sunday: {
        title: "UPPER BODY CONTROL",
        warmup: [
            "Movement prep x 2:",
            "• 30 sec arm circles each direction",
            "• 10 scap pull-ups to active hangs",
            "• 10 plank to downward dog flows",
            "• Support hold practice 30 sec"
        ],
        mainWorkout: [
            "1. Pull Mastery (4 rounds):",
            "• 5 Ice cream maker pull-ups",
            "• 8 Around-the-world pull-ups",
            "• 10 Archer pull-ups (5 each side)",
            "• 12 L-sit chin-ups",
            "Rest 2-3 mins between rounds",
            "2. Push Control (4 rounds):",
            "• 8 Pseudo planche push-ups (lean forward)",
            "• 10 Ring turned out push-ups",
            "• 12 Archer push-ups (6 each side)",
            "• 15 Pike push-ups",
            "Rest 2 mins between rounds",
            "3. Hold Progressions (3 sets):",
            "• Back lever progression 20-30 sec",
            "• Front lever progression 20-30 sec",
            "• Planche progression 20-30 sec",
            "• Full ring support hold 45 sec",
            "Rest 2 mins between sets",
            "Finisher:",
            "Descending ladder:",
            "10-8-6-4-2",
            "• Pull-ups",
            "• Dips",
            "No rest between sets, 1 min between exercises"
        ]
    },
    monday: {
        title: "LOWER BODY FLOW",
        warmup: [
            "Mobility flow:",
            "• 90/90 hip switches x 10 each side",
            "• Cossack squats x 10 each side",
            "• Deep squat holds with reaches",
            "• Ankle mobilization routine"
        ],
        mainWorkout: [
            "1. Single Leg Focus (4 rounds):",
            "• 5 Elevator pistol squats each leg",
            "• 8 Jump to pistol catch each leg",
            "• 10 Single leg hops (forward/back)",
            "• 12 Matrix lunges each leg",
            "Rest 2 mins between rounds",
            "2. Dynamic Control (3 rounds):",
            "• 5 Plyometric pistol squats each leg",
            "• 8 180° jump squats",
            "• 10 Switch lunges",
            "• 30 sec Single leg balance each side",
            "Rest 2 mins between rounds",
            "3. Flow Sequence (4 rounds):",
            "• Walking handstand 5 steps",
            "• Cartwheel to pistol squat x 3 each side",
            "• Single leg vertical jumps x 5 each",
            "Rest as needed for quality"
        ]
    },
    tuesday: {
        title: "SKILL INTEGRATION",
        warmup: [
            "3 rounds:",
            "• Hollow body rocks x 20",
            "• Superman rocks x 20",
            "• Side plank rotations x 10 each",
            "• Wall handstand shoulder taps x 10"
        ],
        mainWorkout: [
            "1. Handstand Flow (5 rounds):",
            "• Handstand press practice x 3",
            "• Handstand pirouettes x 2 each way",
            "• Handstand forward/backward walks",
            "• Freestanding hold practice 30 sec",
            "Rest 2 mins between rounds",
            "2. Core Control (4 rounds):",
            "• 5 Full dragon flags",
            "• 8 Strict toes to bar",
            "• 10 Ring ab rollouts",
            "• 60 sec L-sit progression",
            "Rest 2 mins between rounds",
            "3. Movement Integration (3 rounds):",
            "• Back lever to German hang x 3",
            "• Tuck planche to L-sit x 3",
            "• Front lever raises x 5",
            "Rest 2-3 mins between rounds"
        ]
    },
    wednesday: {
        title: "MOVEMENT FLOW",
        warmup: [
            "10 min flow practice:",
            "• Animal movement transitions",
            "• Ground-based mobility",
            "• Light skill practice",
            "• Joint preparation"
        ],
        mainWorkout: [
            "1. Skill Combinations (4 rounds):",
            "• Muscle-up to L-sit hold x 3",
            "• Front lever to inverted hang x 3",
            "• Handstand press to planche prog. x 3",
            "Rest 2-3 mins between rounds",
            "2. Flow Complex (3 rounds):",
            "Practice connecting:",
            "• Handstand variations",
            "• Various lever positions",
            "• Ground movement",
            "• Jump transitions",
            "Work 2 mins, rest 2 mins",
            "3. Movement Exploration (15 mins):",
            "Choose 3 skills to work on:",
            "• 5 mins each skill",
            "• Focus on quality",
            "• Experiment with variations",
            "Rest as needed",
            "Finisher:",
            "Strength endurance:",
            "3 rounds of:",
            "• 30 sec pull-up holds (various positions)",
            "• 30 sec push-up holds (various positions)",
            "• 30 sec L-sit holds",
            "• 30 sec rest"
        ]
    }
};

function loadMonth3Week3Workouts() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday'];
    
    days.forEach(day => {
        const workoutDetails = document.getElementById(`details-${day}`);
        if (workoutDetails && month3_week3_workouts[day]) {
            let html = `<h4>${month3_week3_workouts[day].title}</h4>`;
            
            html += '<div class="workout-section"><h5>Warmup:</h5><ul>';
            month3_week3_workouts[day].warmup.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            html += '<div class="workout-section"><h5>Main Workout:</h5><ul>';
            month3_week3_workouts[day].mainWorkout.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            workoutDetails.innerHTML = html;
        }
    });
}