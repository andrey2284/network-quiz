// Основной класс для управления тестом
class NetworkEngineeringQuiz {
    constructor() {
        this.questions = [];
        this.filteredQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.quizStarted = false;
        this.quizCompleted = false;
        this.showAnswersImmediately = true;
        this.startTime = null;
        this.endTime = null;
        
        // Инициализация
        this.initElements();
        this.bindEvents();
        this.resetQuiz();
    }
    
    initElements() {
        // Основные элементы интерфейса
        this.elements = {
            welcomeScreen: document.getElementById('welcome-screen'),
            questionScreen: document.getElementById('question-screen'),
            resultsScreen: document.getElementById('results-screen'),
            
            startButton: document.getElementById('start-quiz'),
            prevButton: document.getElementById('prev-question'),
            nextButton: document.getElementById('next-question'),
            finishButton: document.getElementById('finish-quiz'),
            restartButton: document.getElementById('restart-quiz'),
            reviewButton: document.getElementById('review-answers'),
            
            difficultyFilter: document.getElementById('difficulty-filter'),
            shuffleCheckbox: document.getElementById('shuffle-checkbox'),
            showAnswersCheckbox: document.getElementById('show-answers-checkbox'),
            
            questionNumber: document.getElementById('question-number'),
            questionText: document.getElementById('question-text'),
            questionDifficulty: document.getElementById('question-difficulty'),
            optionsContainer: document.getElementById('options-container'),
            
            explanationTitle: document.getElementById('explanation-title'),
            explanationText: document.getElementById('explanation-text'),
            resultIndicator: document.getElementById('result-indicator'),
            
            progressText: document.getElementById('progress-text'),
            progressFill: document.getElementById('progress-fill'),
            difficultyText: document.getElementById('difficulty-text'),
            
            currentScore: document.getElementById('current-score'),
            totalScore: document.getElementById('total-score'),
            
            // Результаты
            scorePercentage: document.getElementById('score-percentage'),
            correctAnswers: document.getElementById('correct-answers'),
            totalQuestions: document.getElementById('total-questions'),
            timeTaken: document.getElementById('time-taken'),
            performanceLevel: document.getElementById('performance-level'),
            difficultyStats: document.getElementById('difficulty-stats'),
            
            // Модальное окно
            answersModal: document.getElementById('answers-modal'),
            answersList: document.getElementById('answers-list'),
            closeModal: document.querySelector('.close-modal')
        };
    }
    
    bindEvents() {
        // Кнопки навигации
        this.elements.startButton.addEventListener('click', () => this.startQuiz());
        this.elements.prevButton.addEventListener('click', () => this.prevQuestion());
        this.elements.nextButton.addEventListener('click', () => this.nextQuestion());
        this.elements.finishButton.addEventListener('click', () => this.finishQuiz());
        this.elements.restartButton.addEventListener('click', () => this.restartQuiz());
        this.elements.reviewButton.addEventListener('click', () => this.showAnswersReview());
        
        // Фильтры
        this.elements.difficultyFilter.addEventListener('change', () => this.applyFilters());
        this.elements.shuffleCheckbox.addEventListener('change', () => this.applyFilters());
        this.elements.showAnswersCheckbox.addEventListener('change', () => {
            this.showAnswersImmediately = this.elements.showAnswersCheckbox.checked;
        });
        
        // Модальное окно
        this.elements.closeModal.addEventListener('click', () => this.hideAnswersModal());
        this.elements.answersModal.addEventListener('click', (e) => {
            if (e.target === this.elements.answersModal) {
                this.hideAnswersModal();
            }
        });
        
        // Горячие клавиши
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    }
    
    // ===== ОСНОВНЫЕ МЕТОДЫ =====
    
    startQuiz() {
        this.quizStarted = true;
        this.quizCompleted = false;
        this.startTime = new Date();
        
        // Применяем фильтры
        this.applyFilters();
        
        // Переключаем экран
        this.showScreen('question-screen');
        
        // Загружаем первый вопрос
        this.loadQuestion();
        
        // Обновляем состояние кнопок
        this.updateNavigation();
    }
    
    applyFilters() {
        const difficulty = this.elements.difficultyFilter.value;
        const shuffle = this.elements.shuffleCheckbox.checked;
        
        // Фильтрация по сложности
        if (difficulty === 'all') {
            this.filteredQuestions = [...ALL_QUESTIONS];
        } else if (difficulty === 'final') {
            // Для финального теста берем только CCIE вопросы
            this.filteredQuestions = ALL_QUESTIONS.filter(q => q.difficulty === 'CCIE');
            // Для финального теста отключаем показ ответов сразу
            this.showAnswersImmediately = false;
            this.elements.showAnswersCheckbox.checked = false;
        } else {
            this.filteredQuestions = ALL_QUESTIONS.filter(q => q.difficulty === difficulty);
        }
        
        // Перемешивание
        if (shuffle) {
            this.shuffleQuestions();
        }
        
        // Сброс состояния теста
        this.resetQuizState();
        
        // Обновление интерфейса
        this.elements.totalScore.textContent = this.filteredQuestions.length;
        this.updateProgressBar();
    }
    
    shuffleQuestions() {
        for (let i = this.filteredQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.filteredQuestions[i], this.filteredQuestions[j]] = 
            [this.filteredQuestions[j], this.filteredQuestions[i]];
        }
    }
    
    resetQuizState() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.quizCompleted = false;
        
        this.elements.currentScore.textContent = '0';
        this.updateProgressBar();
    }
    
    loadQuestion() {
        if (this.currentQuestionIndex >= this.filteredQuestions.length) {
            this.finishQuiz();
            return;
        }
        
        const question = this.filteredQuestions[this.currentQuestionIndex];
        
        // Обновляем номер вопроса и сложность
        this.elements.questionNumber.textContent = `Вопрос ${this.currentQuestionIndex + 1}`;
        this.elements.questionText.textContent = question.question;
        
        // Устанавливаем цвет сложности
        this.setDifficultyStyle(question.difficulty);
        
        // Очищаем предыдущие варианты
        this.elements.optionsContainer.innerHTML = '';
        
        // Создаем варианты ответов
        question.options.forEach((option, index) => {
            const optionElement = this.createOptionElement(option, index, question);
            this.elements.optionsContainer.appendChild(optionElement);
        });
        
        // Проверяем, был ли уже ответ на этот вопрос
        const userAnswer = this.userAnswers[this.currentQuestionIndex];
        if (userAnswer !== undefined) {
            this.highlightAnsweredQuestion(userAnswer, question);
        } else {
            // Сбрасываем объяснение
            this.resetExplanation();
        }
        
        // Обновляем прогресс
        this.updateProgressBar();
        this.updateNavigation();
    }
    
    createOptionElement(optionText, index, question) {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.dataset.index = index;
        
        // Индекс варианта (1, 2, 3, 4)
        const indexSpan = document.createElement('span');
        indexSpan.className = 'option-index';
        indexSpan.textContent = index + 1;
        
        // Текст варианта
        const textSpan = document.createElement('span');
        textSpan.className = 'option-text';
        textSpan.textContent = optionText;
        
        optionDiv.appendChild(indexSpan);
        optionDiv.appendChild(textSpan);
        
        // Обработчик клика
        optionDiv.addEventListener('click', () => this.selectOption(index, question));
        
        return optionDiv;
    }
    
    selectOption(selectedIndex, question) {
        // Проверяем, не отвечали ли уже на этот вопрос
        if (this.userAnswers[this.currentQuestionIndex] !== undefined) {
            return;
        }
        
        const isCorrect = selectedIndex === question.correctAnswer;
        
        // Сохраняем ответ пользователя
        this.userAnswers[this.currentQuestionIndex] = {
            selectedIndex: selectedIndex,
            isCorrect: isCorrect,
            timestamp: new Date()
        };
        
        // Обновляем счет
        if (isCorrect) {
            this.score++;
            this.elements.currentScore.textContent = this.score;
        }
        
        // Подсвечиваем ответы
        this.highlightAnswers(selectedIndex, question);
        
        // Показываем объяснение (если включено)
        if (this.showAnswersImmediately) {
            this.showExplanation(isCorrect, question.explanation);
        } else {
            this.showWaitingMessage();
        }
        
        // Активируем кнопку "Далее" и "Завершить"
        this.updateNavigation();
    }
    
    highlightAnswers(selectedIndex, question) {
        const options = this.elements.optionsContainer.querySelectorAll('.option');
        
        options.forEach((option, index) => {
            // Сбрасываем все классы
            option.classList.remove('selected', 'correct', 'incorrect');
            
            // Помечаем выбранный вариант
            if (index === selectedIndex) {
                option.classList.add('selected');
            }
            
            // Помечаем правильный ответ
            if (index === question.correctAnswer) {
                option.classList.add('correct');
            }
            
            // Помечаем неправильный выбор
            if (index === selectedIndex && selectedIndex !== question.correctAnswer) {
                option.classList.add('incorrect');
            }
        });
    }
    
    highlightAnsweredQuestion(userAnswer, question) {
        this.highlightAnswers(userAnswer.selectedIndex, question);
        
        if (this.showAnswersImmediately || this.quizCompleted) {
            this.showExplanation(
                userAnswer.isCorrect, 
                question.explanation
            );
        }
    }
    
    showExplanation(isCorrect, explanation) {
        if (isCorrect) {
            this.elements.explanationTitle.textContent = '✓ Правильный ответ!';
            this.elements.resultIndicator.textContent = 'Правильно';
            this.elements.resultIndicator.className = 'result-indicator correct';
            this.elements.resultIndicator.innerHTML = '<i class="fas fa-check-circle"></i> Правильно';
        } else {
            this.elements.explanationTitle.textContent = '✗ Неправильный ответ';
            this.elements.resultIndicator.textContent = 'Неправильно';
            this.elements.resultIndicator.className = 'result-indicator incorrect';
            this.elements.resultIndicator.innerHTML = '<i class="fas fa-times-circle"></i> Неправильно';
        }
        
        this.elements.explanationText.textContent = explanation;
    }
    
    showWaitingMessage() {
        this.elements.explanationTitle.textContent = 'Ответ записан';
        this.elements.resultIndicator.textContent = 'Ожидание';
        this.elements.resultIndicator.className = 'result-indicator';
        this.elements.resultIndicator.innerHTML = '<i class="fas fa-clock"></i> Ожидание';
        this.elements.explanationText.textContent = 'Ваш ответ сохранен. Правильность будет показана после завершения теста.';
    }
    
    resetExplanation() {
        this.elements.explanationTitle.textContent = 'Объяснение';
        this.elements.resultIndicator.textContent = 'Выберите ответ';
        this.elements.resultIndicator.className = 'result-indicator';
        this.elements.resultIndicator.innerHTML = '<i class="fas fa-info-circle"></i> Выберите ответ';
        this.elements.explanationText.textContent = 'Выберите вариант ответа, чтобы увидеть объяснение.';
    }
    
    nextQuestion() {
        // Проверяем, ответил ли пользователь на текущий вопрос
        if (this.userAnswers[this.currentQuestionIndex] === undefined) {
            alert('Пожалуйста, выберите ответ перед переходом к следующему вопросу.');
            return;
        }
        
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex >= this.filteredQuestions.length) {
            this.finishQuiz();
        } else {
            this.loadQuestion();
        }
    }
    
    prevQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.loadQuestion();
        }
    }
    
    finishQuiz() {
        this.quizCompleted = true;
        this.endTime = new Date();
        
        // Показываем все ответы, если они не показывались сразу
        if (!this.showAnswersImmediately) {
            this.showAllAnswers();
        }
        
        // Переключаемся на экран результатов
        this.showScreen('results-screen');
        this.showResults();
    }
    
    showAllAnswers() {
        // Проходим по всем вопросам и показываем правильные ответы
        for (let i = 0; i < this.filteredQuestions.length; i++) {
            const question = this.filteredQuestions[i];
            const userAnswer = this.userAnswers[i];
            
            // Если пользователь не ответил, пропускаем
            if (userAnswer === undefined) continue;
            
            // Здесь можно добавить логику для показа всех ответов
            // Например, в модальном окне или на отдельной странице
        }
    }
    
    showResults() {
        const totalQuestions = this.filteredQuestions.length;
        const answeredQuestions = this.userAnswers.filter(a => a !== undefined).length;
        const correctAnswers = this.userAnswers.filter(a => a && a.isCorrect).length;
        
        // Рассчитываем процент
        const percentage = answeredQuestions > 0 ? 
            Math.round((correctAnswers / answeredQuestions) * 100) : 0;
        
        // Время прохождения
        const timeDiff = this.endTime - this.startTime;
        const minutes = Math.floor(timeDiff / 60000);
        const seconds = Math.floor((timeDiff % 60000) / 1000);
        
        // Обновляем интерфейс
        this.elements.scorePercentage.textContent = `${percentage}%`;
        this.elements.correctAnswers.textContent = correctAnswers;
        this.elements.totalQuestions.textContent = answeredQuestions;
        this.elements.timeTaken.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Определяем уровень
        let performanceLevel = 'Начинающий';
        if (percentage >= 90) performanceLevel = 'Эксперт (CCIE)';
        else if (percentage >= 70) performanceLevel = 'Продвинутый (CCNP)';
        else if (percentage >= 50) performanceLevel = 'Средний (CCNA)';
        
        this.elements.performanceLevel.textContent = performanceLevel;
        
        // Обновляем круг с прогрессом
        const scoreCircle = document.querySelector('.score-circle');
        scoreCircle.style.background = `conic-gradient(var(--success-color) ${percentage}%, #eee ${percentage}%)`;
        
        // Показываем статистику по уровням
        this.showDifficultyStats();
    }
    
    showDifficultyStats() {
        const stats = {
            CCNA: { total: 0, correct: 0 },
            CCNP: { total: 0, correct: 0 },
            CCIE: { total: 0, correct: 0 }
        };
        
        // Собираем статистику
        this.filteredQuestions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            if (userAnswer !== undefined) {
                stats[question.difficulty].total++;
                if (userAnswer.isCorrect) {
                    stats[question.difficulty].correct++;
                }
            }
        });
        
        // Генерируем HTML для статистики
        let statsHTML = '';
        
        for (const [difficulty, data] of Object.entries(stats)) {
            if (data.total > 0) {
                const percentage = Math.round((data.correct / data.total) * 100);
                const color = this.getDifficultyColor(difficulty);
                
                statsHTML += `
                    <div class="difficulty-stat">
                        <span class="stat-difficulty">${difficulty}</span>
                        <div class="stat-bar">
                            <div class="stat-fill" style="width: ${percentage}%; background-color: ${color};"></div>
                        </div>
                        <span class="stat-score">${data.correct}/${data.total} (${percentage}%)</span>
                    </div>
                `;
            }
        }
        
        this.elements.difficultyStats.innerHTML = statsHTML;
    }
    
    showAnswersReview() {
        let reviewHTML = '';
        
        this.filteredQuestions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isAnswered = userAnswer !== undefined;
            const isCorrect = isAnswered && userAnswer.isCorrect;
            
            reviewHTML += `
                <div class="review-item ${isAnswered ? (isCorrect ? 'correct' : 'incorrect') : 'unanswered'}">
                    <div class="review-question">
                        <strong>Вопрос ${index + 1}:</strong> ${question.question}
                    </div>
                    <div class="review-answer">
                        <strong>Ваш ответ:</strong> 
                        ${isAnswered ? question.options[userAnswer.selectedIndex] : 'Нет ответа'}
                        ${isAnswered ? 
                            (isCorrect ? 
                                '<span class="result-badge correct"><i class="fas fa-check"></i> Правильно</span>' : 
                                '<span class="result-badge incorrect"><i class="fas fa-times"></i> Неправильно</span>') : 
                            '<span class="result-badge unanswered"><i class="fas fa-minus"></i> Без ответа</span>'}
                    </div>
                    ${isAnswered && !isCorrect ? `
                        <div class="review-correct">
                            <strong>Правильный ответ:</strong> ${question.options[question.correctAnswer]}
                        </div>
                    ` : ''}
                    <div class="review-explanation">
                        <strong>Объяснение:</strong> ${question.explanation}
                    </div>
                    <hr>
                </div>
            `;
        });
        
        this.elements.answersList.innerHTML = reviewHTML;
        this.showAnswersModal();
    }
    
    showAnswersModal() {
        this.elements.answersModal.classList.add('active');
    }
    
    hideAnswersModal() {
        this.elements.answersModal.classList.remove('active');
    }
    
    restartQuiz() {
        this.resetQuizState();
        this.showScreen('welcome-screen');
        this.applyFilters();
    }
    
    resetQuiz() {
        this.quizStarted = false;
        this.quizCompleted = false;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        
        this.showScreen('welcome-screen');
        this.applyFilters();
    }
    
    // ===== ВСПОМОГАТЕЛЬНЫЕ МЕТОДЫ =====
    
    showScreen(screenName) {
        // Скрываем все экраны
        this.elements.welcomeScreen.classList.remove('active');
        this.elements.questionScreen.classList.remove('active');
        this.elements.resultsScreen.classList.remove('active');
        
        // Показываем нужный экран
        document.getElementById(screenName).classList.add('active');
    }
    
    setDifficultyStyle(difficulty) {
        // Устанавливаем цвет для сложности
        const color = this.getDifficultyColor(difficulty);
        const text = this.getDifficultyText(difficulty);
        
        this.elements.questionDifficulty.textContent = text;
        this.elements.questionDifficulty.className = `difficulty-badge ${difficulty.toLowerCase()}`;
        
        this.elements.difficultyText.textContent = text;
        this.elements.difficultyText.className = `difficulty-label ${difficulty.toLowerCase()}`;
    }
    
    getDifficultyColor(difficulty) {
        switch(difficulty) {
            case 'CCNA': return '#27ae60';
            case 'CCNP': return '#f39c12';
            case 'CCIE': return '#e74c3c';
            default: return '#3498db';
        }
    }
    
    getDifficultyText(difficulty) {
        switch(difficulty) {
            case 'CCNA': return 'CCNA';
            case 'CCNP': return 'CCNP';
            case 'CCIE': return 'CCIE';
            default: return 'Общий';
        }
    }
    
    updateProgressBar() {
        const total = this.filteredQuestions.length;
        const current = this.currentQuestionIndex + 1;
        const percentage = total > 0 ? (current / total) * 100 : 0;
        
        this.elements.progressText.textContent = `Вопрос ${current}/${total}`;
        this.elements.progressFill.style.width = `${percentage}%`;
    }
    
    updateNavigation() {
        // Кнопка "Назад"
        this.elements.prevButton.disabled = this.currentQuestionIndex === 0;
        
        // Кнопка "Далее"
        const hasAnswered = this.userAnswers[this.currentQuestionIndex] !== undefined;
        this.elements.nextButton.disabled = !hasAnswered;
        
        // Кнопка "Завершить"
        const allAnswered = this.userAnswers.filter(a => a !== undefined).length === this.filteredQuestions.length;
        this.elements.finishButton.disabled = !allAnswered;
        
        // Текст кнопки "Далее"
        if (this.currentQuestionIndex === this.filteredQuestions.length - 1) {
            this.elements.nextButton.innerHTML = 'Завершить <i class="fas fa-flag-checkered"></i>';
        } else {
            this.elements.nextButton.innerHTML = 'Далее <i class="fas fa-arrow-right"></i>';
        }
    }
    
    handleKeyPress(event) {
        if (!this.quizStarted || this.quizCompleted) return;
        
        // Клавиши 1-4 для выбора ответа
        if (event.key >= '1' && event.key <= '4') {
            const index = parseInt(event.key) - 1;
            const question = this.filteredQuestions[this.currentQuestionIndex];
            
            if (index < question.options.length) {
                this.selectOption(index, question);
            }
        }
        
        // Стрелки для навигации
        if (event.key === 'ArrowRight') {
            this.nextQuestion();
        } else if (event.key === 'ArrowLeft') {
            this.prevQuestion();
        }
        
        // Enter для следующего вопроса
        if (event.key === 'Enter') {
            this.nextQuestion();
        }
    }
}

// ===== ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ =====

// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    // Создаем экземпляр теста
    window.quizApp = new NetworkEngineeringQuiz();
    
    // Добавляем дополнительные стили для обзора ответов
    const style = document.createElement('style');
    style.textContent = `
        .review-item {
            margin-bottom: 25px;
            padding: 20px;
            border-radius: 8px;
            background-color: #f8f9fa;
        }
        
        .review-item.correct {
            border-left: 5px solid #27ae60;
        }
        
        .review-item.incorrect {
            border-left: 5px solid #e74c3c;
        }
        
        .review-item.unanswered {
            border-left: 5px solid #95a5a6;
        }
        
        .review-question {
            margin-bottom: 15px;
            font-size: 1.1rem;
        }
        
        .review-answer, .review-correct, .review-explanation {
            margin-bottom: 10px;
            padding: 10px;
            background-color: white;
            border-radius: 5px;
        }
        
        .result-badge {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 0.85rem;
            font-weight: 600;
            margin-left: 10px;
        }
        
        .result-badge.correct {
            background-color: #d4edda;
            color: #155724;
        }
        
        .result-badge.incorrect {
            background-color: #f8d7da;
            color: #721c24;
        }
        
        .result-badge.unanswered {
            background-color: #e2e3e5;
            color: #383d41;
        }
    `;
    document.head.appendChild(style);
    
    console.log('Network Engineering Quiz успешно загружен!');
});