function saveProgress(dayId, isCompleted) {
    const month = document.getElementById('monthSelect').value;
    const week = document.getElementById('weekSelect').value;
    const key = `workout-${month}-${week}-${dayId}`;
    localStorage.setItem(key, isCompleted);
}

function loadProgress(dayId) {
    const month = document.getElementById('monthSelect').value;
    const week = document.getElementById('weekSelect').value;
    const key = `workout-${month}-${week}-${dayId}`;
    return localStorage.getItem(key) === 'true';
}

function handleMonthChange() {
    const monthSelect = document.getElementById('monthSelect');
    const weekSelect = document.getElementById('weekSelect');
    const workoutContainer = document.getElementById('workoutContainer');
    
    if (monthSelect.value) {
        weekSelect.disabled = false;
    } else {
        weekSelect.disabled = true;
        workoutContainer.classList.add('hidden');
    }
    
    weekSelect.value = '';
    workoutContainer.classList.add('hidden');
}

function handleWeekChange() {
    const weekSelect = document.getElementById('weekSelect');
    const workoutContainer = document.getElementById('workoutContainer');
    
    if (weekSelect.value) {
        workoutContainer.classList.remove('hidden');
        loadWorkouts();
    } else {
        workoutContainer.classList.add('hidden');
    }
}

function toggleDayDetails(dayId) {
    const details = document.getElementById(`details-${dayId}`);
    const allDetails = document.getElementsByClassName('workout-details');
    
    Array.from(allDetails).forEach(detail => {
        if (detail.id !== `details-${dayId}`) {
            detail.style.display = 'none';
        }
    });

    if (details.style.display === 'none' || !details.style.display) {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

function markComplete(dayId, event) {
    event.stopPropagation();
    const dayCard = document.getElementById(dayId);
    const isCompleted = !dayCard.classList.contains('completed');
    dayCard.classList.toggle('completed');
    const button = event.target;
    button.textContent = isCompleted ? 'Completed' : 'Mark Complete';
    
    saveProgress(dayId, isCompleted);
}

function loadWorkouts() {
    const month = document.getElementById('monthSelect').value;
    const week = document.getElementById('weekSelect').value;
    
    const days = ['sunday', 'monday', 'tuesday', 'wednesday'];
    days.forEach(day => {
        const details = document.getElementById(`details-${day}`);
        if (details) {
            details.innerHTML = '';
        }
        
        const dayCard = document.getElementById(day);
        const button = dayCard.querySelector('.complete-btn');
        const isCompleted = loadProgress(day);
        
        if (isCompleted) {
            dayCard.classList.add('completed');
            button.textContent = 'Completed';
        } else {
            dayCard.classList.remove('completed');
            button.textContent = 'Mark Complete';
        }
    });
    
    if (month === '1') {
        if (week === '1') {
            loadMonth1Week1Workouts();
        } else if (week === '2') {
            loadMonth1Week2Workouts();
        } else if (week === '3') {           
            loadMonth1Week3Workouts();       
        } else if (week === '4') {           
            loadMonth1Week4Workouts();       
        }
    } else if (month === '2') {
        if (week === '1') {
            loadMonth2Week1Workouts();
        } else if (week === '2') {
            loadMonth2Week2Workouts();
        } else if (week === '3') {
            loadMonth2Week3Workouts();
        } else if (week === '4') {
            loadMonth2Week4Workouts();
        }
    } else if (month === '3') {
        if (week === '1') {
            loadMonth3Week1Workouts();
        } else if (week === '2') {
            loadMonth3Week2Workouts();
        } else if (week === '3') {
            loadMonth3Week3Workouts();
        } else if (week === '4') {
            loadMonth3Week4Workouts();
        }
    }
}