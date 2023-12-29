document.addEventListener('DOMContentLoaded', function () {
    function blinkEyes() {
        var eyes = document.querySelectorAll('.eye');
        eyes.forEach(function (eye) {
            eye.style.animation = `blink 0.3s alternate ease-out`;
            document.querySelectorAll('.sparkle').style = 'display:hidden;'
        });

        setTimeout(function () {
            eyes.forEach(function (eye) {
                eye.style.animation = 'none';
                moveEyes();
                
            });
            setTimeout(blinkEyes, 3000); // Blink every 10 seconds
        }, 1000);
    }

    function moveEyes() {
        var randomX = Math.floor(Math.random() * 21) - 5;
        var randomY = Math.floor(Math.random() * 5) - 25;
        document.querySelectorAll('.eye').forEach(function (eye) {
            eye.style.transform = `translate(${randomX}px, ${randomY}px)`;
        });
    }

    
    
    

    blinkEyes(); // Initial blink
});


function changeEmotion() {
    var emotionInput = document.getElementById('emotionInput').value.toLowerCase();
    var robotFace = document.getElementById('robotFace');
    robotFace.className = 'robot face ' + emotionInput;
}
