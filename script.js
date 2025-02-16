// Задача №1
document.addEventListener('DOMContentLoaded', function () {
    let count = 0;
    const button = document.getElementById('clickButton');
    const display = document.getElementById('clickCount');
    const message = document.getElementById('message');

    button.addEventListener('click', function () {
      count++;
      display.textContent = count;

      if (count >= 15) {
        button.disabled = true;
        message.textContent = "Вы достигли максимального количества кликов!";
      }
    });
});

// Задача  №2
document.addEventListener('DOMContentLoaded', function () {
    let count = 10;
    const display = document.getElementById('timer');
    const resetButton = document.getElementById('resetButton');
    let interval;

    function startTimer() {
      interval = setInterval(function () {
        count--;
        display.textContent = count;

        if (count <= 0) {
          clearInterval(interval);
          display.textContent = "Время вышло!";
        }
      }, 1000);
    }

    resetButton.addEventListener('click', function () {
      clearInterval(interval);
      count = 10;
      display.textContent = count;
      startTimer();
    });

    startTimer();
});

// Задача №3
document.addEventListener('DOMContentLoaded', function () {
    let count = 0;
    let interval;
    const display = document.getElementById('timerText');
    const startButton = document.getElementById('startTimerButton');
    const stopButton = document.getElementById('stopTimerButton');
    const resetButton = document.getElementById('resetTimerButton');

    startButton.addEventListener('click', function () {
      if (!interval) {
        interval = setInterval(function () {
          count++;
          display.textContent = count;
        }, 1000);
      }
    });

    stopButton.addEventListener('click', function () {
      clearInterval(interval);
      interval = null;
    });

    resetButton.addEventListener('click', function () {
      clearInterval(interval);
      interval = null;
      count = 0;
      display.textContent = count;
    });
});