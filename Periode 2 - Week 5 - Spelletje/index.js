document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const coloredBox = document.getElementById('colored-box');
    const result = document.getElementById('result');
    
    let gameState = 'ready';
    let timeoutId = null;
    let startTime = null;

    function startGame() {
        
        gameState = 'waiting';
        result.textContent = '';
        startButton.classList.add('hidden');
        coloredBox.classList.remove('hidden');
        coloredBox.style.backgroundColor = 'red';
        
        
        const waitTime = Math.random() * 9000 + 1000; 
        
        timeoutId = setTimeout(() => {
            gameState = 'green';
            startTime = Date.now();
            coloredBox.style.backgroundColor = 'green';
        }, waitTime);
    }

    function handleBoxClick() {
        if (gameState === 'waiting') {
            
            clearTimeout(timeoutId);
            result.textContent = 'Te vroeg geklikt!';
            resetGame();
        } else if (gameState === 'green') {
            
            const endTime = Date.now();
            const reactionTime = endTime - startTime;
            result.textContent = `Reactietijd: ${reactionTime} ms`;
            resetGame(); 
        }
    }

    function resetGame() {
        gameState = 'ready';
        coloredBox.classList.add('hidden');
        startButton.classList.remove('hidden');
    }

    
    startButton.addEventListener('click', startGame);
    coloredBox.addEventListener('click', handleBoxClick);
});