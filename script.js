// ===== Network Engineering Quiz - Основной скрипт =====
console.log('Загрузка script.js...');

// Основной класс для управления тестом
class NetworkEngineeringQuiz {
    constructor() {
        console.log('Инициализация NetworkEngineeringQuiz...');
        console.log('Доступно вопросов:', ALL_QUESTIONS ? ALL_QUESTIONS.length : 0);
        
        this.filteredQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.quizStarted = false;
        this.quizCompleted = false;
        this.showAnswersImmediately = true; // По умолчанию включено
        this.startTime = null;
        this.endTime = null;
        this.currentSelectedAnswer = null;
        this.isFinalTestMode = false;
        this.settingsLocked = false; // Новый флаг для блокировки настроек
        
        this.initElements();
        this.bindEvents();
        this.applyFilters();
        this.updateQuestionCounts();
        
        console.log('Тест успешно инициализирован!');
    }
    
    initElements() {
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
            questionImage: document.getElementById('question-image'),
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
            
            scorePercentage: document.getElementById('score-percentage'),
            correctAnswers: document.getElementById('correct-answers'),
            totalQuestions: document.getElementById('total-questions'),
            timeTaken: document.getElementById('time-taken'),
            performanceLevel: document.getElementById('performance-level'),
            difficultyStats: document.getElementById('difficulty-stats'),
            
            answersModal: document.getElementById('answers-modal'),
            answersList: document.getElementById('answers-list'),
            closeModal: document.querySelector('.close-modal')
        };
        
        console.log('Элементы DOM загружены');
    }
    
    bindEvents() {
        console.log('Настройка обработчиков событий...');
        
        this.elements.startButton.addEventListener('click', () => this.startQuiz());
        this.elements.prevButton.addEventListener('click', () => this.prevQuestion());
        this.elements.nextButton.addEventListener('click', () => this.nextQuestion());
        this.elements.finishButton.addEventListener('click', () => this.finishQuiz());
        this.elements.restartButton.addEventListener('click', () => this.restartQuiz());
        this.elements.reviewButton.addEventListener('click', () => this.showAnswersReview());
        
        this.elements.difficultyFilter.addEventListener('change', () => {
            if (!this.settingsLocked) {
                this.applyFilters();
            } else {
                alert('Настройки заблокированы во время теста!');
                // Восстанавливаем предыдущее значение
                this.elements.difficultyFilter.value = this.currentDifficulty;
            }
        });
        
        this.elements.shuffleCheckbox.addEventListener('change', () => {
            if (!this.settingsLocked) {
                this.applyFilters();
            } else {
                alert('Настройки заблокированы во время теста!');
                this.elements.shuffleCheckbox.checked = !this.elements.shuffleCheckbox.checked;
            }
        });
        
        // ФИКС: Правильная обработка чекбокса с блокировкой во время теста
        this.elements.showAnswersCheckbox.addEventListener('change', (e) => {
            if (this.settingsLocked) {
                e.preventDefault();
                this.elements.showAnswersCheckbox.checked = this.showAnswersImmediately;
                alert('Настройка "Показывать ответы сразу" заблокирована во время теста!');
                return;
            }
            
            this.showAnswersImmediately = e.target.checked;
            console.log('Показ ответов:', this.showAnswersImmediately ? 'включен' : 'выключен');
            
            // Обновляем отображение если на текущем вопросе уже есть ответ
            if (this.currentSelectedAnswer !== null && this.quizStarted) {
                const question = this.filteredQuestions[this.currentQuestionIndex];
                this.updateQuestionDisplay(question);
            }
        });
        
        this.elements.closeModal.addEventListener('click', () => this.hideAnswersModal());
        this.elements.answersModal.addEventListener('click', (e) => {
            if (e.target === this.elements.answersModal) {
                this.hideAnswersModal();
            }
        });
        
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
        
        console.log('Обработчики событий настроены');
    }
    
    updateQuestionCounts() {
        if (ALL_QUESTIONS && ALL_QUESTIONS.length > 0) {
            const ccnaCount = ALL_QUESTIONS.filter(q => q.difficulty === 'CCNA').length;
            const ccnpCount = ALL_QUESTIONS.filter(q => q.difficulty === 'CCNP').length;
            const ccieCount = ALL_QUESTIONS.filter(q => q.difficulty === 'CCIE').length;
            
            const ccnaElement = document.getElementById('ccna-count');
            const ccnpElement = document.getElementById('ccnp-count');
            const ccieElement = document.getElementById('ccie-count');
            
            if (ccnaElement) ccnaElement.textContent = `${ccnaCount} вопросов`;
            if (ccnpElement) ccnpElement.textContent = `${ccnpCount} вопросов`;
            if (ccieElement) ccieElement.textContent = `${ccieCount} вопросов`;
            
            console.log(`Статистика: CCNA=${ccnaCount}, CCNP=${ccnpCount}, CCIE=${ccieCount}, Всего=${ALL_QUESTIONS.length}`);
        }
    }
    
    startQuiz() {
        if (this.filteredQuestions.length === 0) {
            alert('Нет вопросов для тестирования. Выберите другой фильтр.');
            return;
        }
        
        // Запоминаем текущие настройки
        this.currentDifficulty = this.elements.difficultyFilter.value;
        
        // Блокируем настройки
        this.settingsLocked = true;
        this.quizStarted = true;
        this.quizCompleted = false;
        this.startTime = new Date();
        
        // Делаем настройки неактивными
        this.elements.difficultyFilter.disabled = true;
        this.elements.shuffleCheckbox.disabled = true;
        this.elements.showAnswersCheckbox.disabled = true;
        
        // Обновляем текст кнопки
        this.elements.startButton.disabled = true;
        this.elements.startButton.innerHTML = '<i class="fas fa-play"></i> Тест начат';
        this.elements.startButton.style.opacity = '0.7';
        
        this.showScreen('question-screen');
        this.loadQuestion();
        this.updateNavigation();
        
        console.log('Тест начат. Вопросов:', this.filteredQuestions.length);
        console.log('Режим показа ответов:', this.showAnswersImmediately ? 'ВКЛ' : 'ВЫКЛ');
    }
    
    applyFilters() {
        const difficulty = this.elements.difficultyFilter.value;
        const shuffle = this.elements.shuffleCheckbox.checked;
        
        console.log('Применение фильтров. Сложность:', difficulty, 'Перемешать:', shuffle);
        
        if (!ALL_QUESTIONS || ALL_QUESTIONS.length === 0) {
            console.error('Ошибка: вопросы не загружены!');
            alert('Ошибка: вопросы не загружены. Проверьте файл questions.js');
            return;
        }
        
        if (difficulty === 'all') {
            this.filteredQuestions = [...ALL_QUESTIONS];
            this.isFinalTestMode = false;
        } else if (difficulty === 'final') {
            const ccnaQuestions = ALL_QUESTIONS.filter(q => q.difficulty === 'CCNA');
            const ccnpQuestions = ALL_QUESTIONS.filter(q => q.difficulty === 'CCNP');
            const ccieQuestions = ALL_QUESTIONS.filter(q => q.difficulty === 'CCIE');
            
            const getRandomQuestions = (arr, count) => {
                if (arr.length === 0) return [];
                const shuffled = [...arr].sort(() => 0.5 - Math.random());
                return shuffled.slice(0, Math.min(count, arr.length));
            };
            
            this.filteredQuestions = [
                ...getRandomQuestions(ccnaQuestions, 10),
                ...getRandomQuestions(ccnpQuestions, 10),
                ...getRandomQuestions(ccieQuestions, 10)
            ];
            
            this.isFinalTestMode = true;
            // В финальном тесте автоматически отключаем показ ответов
            this.showAnswersImmediately = false;
            this.elements.showAnswersCheckbox.checked = false;
        } else {
            this.filteredQuestions = ALL_QUESTIONS.filter(q => q.difficulty === difficulty);
            this.isFinalTestMode = false;
        }
        
        if (shuffle && this.filteredQuestions.length > 0) {
            this.shuffleQuestions();
        }
        
        this.resetQuizState();
        this.elements.totalScore.textContent = this.filteredQuestions.length;
        this.updateProgressBar();
        
        console.log('Фильтры применены. Вопросов для теста:', this.filteredQuestions.length);
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
        this.userAnswers = new Array(this.filteredQuestions.length);
        this.quizStarted = false;
        this.quizCompleted = false;
        this.currentSelectedAnswer = null;
        this.settingsLocked = false;
        
        // Разблокируем настройки
        this.elements.difficultyFilter.disabled = false;
        this.elements.shuffleCheckbox.disabled = false;
        this.elements.showAnswersCheckbox.disabled = false;
        
        // Восстанавливаем кнопку
        this.elements.startButton.disabled = false;
        this.elements.startButton.innerHTML = '<i class="fas fa-play"></i> Начать тест';
        this.elements.startButton.style.opacity = '1';
        
        this.elements.currentScore.textContent = '0';
        this.updateProgressBar();
    }
    
    loadQuestion() {
        this.currentSelectedAnswer = null;
        
        if (this.currentQuestionIndex >= this.filteredQuestions.length) {
            this.finishQuiz();
            return;
        }
        
        const question = this.filteredQuestions[this.currentQuestionIndex];
        
        this.elements.questionNumber.textContent = `Вопрос ${this.currentQuestionIndex + 1}`;
        this.elements.questionText.textContent = question.question;
        
        if (question.image) {
            this.elements.questionImage.src = question.image;
            this.elements.questionImage.style.display = 'block';
            this.elements.questionImage.alt = `Изображение для вопроса ${question.id}`;
        } else {
            this.elements.questionImage.style.display = 'none';
        }
        
        this.setDifficultyStyle(question.difficulty);
        this.elements.optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = this.createOptionElement(option, index, question);
            this.elements.optionsContainer.appendChild(optionElement);
        });
        
        const userAnswer = this.userAnswers[this.currentQuestionIndex];
        if (userAnswer !== undefined) {
            this.highlightAnsweredQuestion(userAnswer, question);
        } else {
            this.resetExplanation();
        }
        
        this.updateProgressBar();
        this.updateNavigation();
    }
    
    createOptionElement(optionText, index, question) {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.dataset.index = index;
        
        const indexSpan = document.createElement('span');
        indexSpan.className = 'option-index';
        indexSpan.textContent = index + 1;
        
        const textSpan = document.createElement('span');
        textSpan.className = 'option-text';
        textSpan.textContent = optionText;
        
        optionDiv.appendChild(indexSpan);
        optionDiv.appendChild(textSpan);
        
        optionDiv.addEventListener('click', () => {
            this.selectOption(index, question);
        });
        
        return optionDiv;
    }
    
    selectOption(selectedIndex, question) {
        // ФИКС: Режим без показа ответов - нельзя менять после выбора
        if (this.userAnswers[this.currentQuestionIndex] !== undefined && !this.showAnswersImmediately) {
            alert('В режиме без показа ответов нельзя изменить выбранный ответ! Нажмите "Далее" для подтверждения.');
            return;
        }
        
        // Если в финальном тесте уже отвечали - нельзя менять
        if (this.userAnswers[this.currentQuestionIndex] !== undefined && this.isFinalTestMode) {
            alert('В финальном тесте нельзя изменять ответы!');
            return;
        }
        
        const isCorrect = selectedIndex === question.correctAnswer;
        
        this.currentSelectedAnswer = {
            selectedIndex: selectedIndex,
            isCorrect: isCorrect,
            question: question
        };
        
        this.updateQuestionDisplay(question);
        this.updateNavigation();
    }
    
    updateQuestionDisplay(question) {
        const selectedIndex = this.currentSelectedAnswer.selectedIndex;
        const options = this.elements.optionsContainer.querySelectorAll('.option');
        
        options.forEach((option, index) => {
            option.classList.remove('selected', 'correct', 'incorrect');
            
            if (index === selectedIndex) {
                option.classList.add('selected');
            }
            
            // Показываем правильные ответы только если включен режим или тест завершен
            if (this.showAnswersImmediately || this.quizCompleted) {
                if (index === question.correctAnswer) {
                    option.classList.add('correct');
                }
                
                if (index === selectedIndex && selectedIndex !== question.correctAnswer) {
                    option.classList.add('incorrect');
                }
            }
        });
        
        if (this.showAnswersImmediately || this.quizCompleted) {
            this.showExplanation(this.currentSelectedAnswer.isCorrect, question.explanation);
        } else {
            this.showWaitingMessage();
        }
    }
    
    showExplanation(isCorrect, explanation) {
        if (isCorrect) {
            this.elements.explanationTitle.textContent = '✓ Правильный ответ!';
            this.elements.resultIndicator.innerHTML = '<i class="fas fa-check-circle"></i> Правильно';
            this.elements.resultIndicator.className = 'result-indicator correct';
        } else {
            this.elements.explanationTitle.textContent = '✗ Неправильный ответ';
            this.elements.resultIndicator.innerHTML = '<i class="fas fa-times-circle"></i> Неправильно';
            this.elements.resultIndicator.className = 'result-indicator incorrect';
        }
        
        this.elements.explanationText.textContent = explanation;
    }
    
    showWaitingMessage() {
        this.elements.explanationTitle.textContent = 'Ответ выбран';
        this.elements.resultIndicator.innerHTML = '<i class="fas fa-clock"></i> Ожидание подтверждения';
        this.elements.resultIndicator.className = 'result-indicator';
        this.elements.explanationText.textContent = 'Вы выбрали ответ. Нажмите "Далее", чтобы подтвердить ответ и перейти к следующему вопросу.';
    }
    
    resetExplanation() {
        this.elements.explanationTitle.textContent = 'Объяснение';
        this.elements.resultIndicator.innerHTML = '<i class="fas fa-info-circle"></i> Выберите ответ';
        this.elements.resultIndicator.className = 'result-indicator';
        this.elements.explanationText.textContent = 'Выберите вариант ответа, чтобы увидеть объяснение.';
    }
    
    nextQuestion() {
        if (this.currentSelectedAnswer === null) {
            alert('Пожалуйста, выберите ответ перед переходом к следующему вопросу.');
            return;
        }
        
        // Сохраняем ответ только при нажатии "Далее"
        this.userAnswers[this.currentQuestionIndex] = {
            selectedIndex: this.currentSelectedAnswer.selectedIndex,
            isCorrect: this.currentSelectedAnswer.isCorrect,
            timestamp: new Date()
        };
        
        if (this.currentSelectedAnswer.isCorrect) {
            this.score++;
            this.elements.currentScore.textContent = this.score;
        }
        
        this.currentQuestionIndex++;
        this.currentSelectedAnswer = null;
        
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
        this.quizStarted = false;
        this.settingsLocked = false; // Разблокируем настройки
        this.endTime = new Date();
        
        // Разблокируем настройки
        this.elements.difficultyFilter.disabled = false;
        this.elements.shuffleCheckbox.disabled = false;
        this.elements.showAnswersCheckbox.disabled = false;
        
        // Восстанавливаем кнопку
        this.elements.startButton.disabled = false;
        this.elements.startButton.innerHTML = '<i class="fas fa-redo"></i> Начать заново';
        this.elements.startButton.style.opacity = '1';
        this.elements.startButton.onclick = () => this.restartQuiz();
        
        if (this.currentSelectedAnswer !== null && this.userAnswers[this.currentQuestionIndex] === undefined) {
            this.userAnswers[this.currentQuestionIndex] = {
                selectedIndex: this.currentSelectedAnswer.selectedIndex,
                isCorrect: this.currentSelectedAnswer.isCorrect,
                timestamp: new Date()
            };
            
            if (this.currentSelectedAnswer.isCorrect) {
                this.score++;
                this.elements.currentScore.textContent = this.score;
            }
        }
        
        // В финальном тесте показываем все ответы в конце
        if (!this.showAnswersImmediately) {
            this.showAllAnswers();
        }
        
        this.showScreen('results-screen');
        this.showResults();
    }
    
    showAllAnswers() {
        // Показываем правильные ответы для всех вопросов
        for (let i = 0; i < this.filteredQuestions.length; i++) {
            const question = this.filteredQuestions[i];
            const userAnswer = this.userAnswers[i];
            
            if (userAnswer !== undefined && i === this.currentQuestionIndex) {
                const options = this.elements.optionsContainer.querySelectorAll('.option');
                
                options.forEach((option, index) => {
                    if (index === question.correctAnswer) {
                        option.classList.add('correct');
                    }
                    
                    if (index === userAnswer.selectedIndex && userAnswer.selectedIndex !== question.correctAnswer) {
                        option.classList.add('incorrect');
                    }
                });
                
                this.showExplanation(userAnswer.isCorrect, question.explanation);
                break;
            }
        }
    }
    
    showResults() {
        const answeredQuestions = this.userAnswers.filter(a => a !== undefined).length;
        const correctAnswers = this.userAnswers.filter(a => a && a.isCorrect).length;
        const percentage = answeredQuestions > 0 ? Math.round((correctAnswers / answeredQuestions) * 100) : 0;
        
        const timeDiff = this.endTime - this.startTime;
        const minutes = Math.floor(timeDiff / 60000);
        const seconds = Math.floor((timeDiff % 60000) / 1000);
        
        this.elements.scorePercentage.textContent = `${percentage}%`;
        this.elements.correctAnswers.textContent = correctAnswers;
        this.elements.totalQuestions.textContent = answeredQuestions;
        this.elements.timeTaken.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        let performanceLevel = 'Начинающий';
        if (percentage >= 90) performanceLevel = 'Эксперт (CCIE)';
        else if (percentage >= 70) performanceLevel = 'Продвинутый (CCNP)';
        else if (percentage >= 50) performanceLevel = 'Средний (CCNA)';
        
        this.elements.performanceLevel.textContent = performanceLevel;
        
        const scoreCircle = document.querySelector('.score-circle');
        if (scoreCircle) {
            scoreCircle.style.background = `conic-gradient(var(--success-color) ${percentage}%, #eee ${percentage}%)`;
        }
        
        this.showDifficultyStats();
    }
    
    showDifficultyStats() {
        const stats = { CCNA: { total: 0, correct: 0 }, CCNP: { total: 0, correct: 0 }, CCIE: { total: 0, correct: 0 } };
        
        this.filteredQuestions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            if (userAnswer !== undefined && stats[question.difficulty]) {
                stats[question.difficulty].total++;
                if (userAnswer.isCorrect) {
                    stats[question.difficulty].correct++;
                }
            }
        });
        
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
        
        this.elements.difficultyStats.innerHTML = statsHTML || '<p>Нет данных по уровням</p>';
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
                        ${question.image ? `<br><img src="${question.image}" class="review-image" alt="Изображение вопроса">` : ''}
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
        
        // Восстанавливаем обработчик кнопки
        this.elements.startButton.innerHTML = '<i class="fas fa-play"></i> Начать тест';
        this.elements.startButton.onclick = () => this.startQuiz();
    }
    
    showScreen(screenName) {
        this.elements.welcomeScreen.classList.remove('active');
        this.elements.questionScreen.classList.remove('active');
        this.elements.resultsScreen.classList.remove('active');
        document.getElementById(screenName).classList.add('active');
    }
    
    setDifficultyStyle(difficulty) {
        const text = difficulty;
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
    
    updateProgressBar() {
        const total = this.filteredQuestions.length;
        const current = this.currentQuestionIndex + 1;
        const percentage = total > 0 ? (current / total) * 100 : 0;
        
        this.elements.progressText.textContent = `Вопрос ${current}/${total}`;
        this.elements.progressFill.style.width = `${percentage}%`;
    }
    
    updateNavigation() {
        this.elements.prevButton.disabled = this.currentQuestionIndex === 0;
        const hasSelectedAnswer = this.currentSelectedAnswer !== null;
        this.elements.nextButton.disabled = !hasSelectedAnswer;
        
        const allAnswered = this.userAnswers.filter(a => a !== undefined).length === this.filteredQuestions.length;
        this.elements.finishButton.disabled = !allAnswered;
        
        if (this.currentQuestionIndex === this.filteredQuestions.length - 1) {
            this.elements.nextButton.innerHTML = 'Завершить <i class="fas fa-flag-checkered"></i>';
        } else {
            this.elements.nextButton.innerHTML = 'Далее <i class="fas fa-arrow-right"></i>';
        }
    }
    
    handleKeyPress(event) {
        if (!this.quizStarted || this.quizCompleted) return;
        
        if (event.key >= '1' && event.key <= '4') {
            const index = parseInt(event.key) - 1;
            const question = this.filteredQuestions[this.currentQuestionIndex];
            
            if (index < question.options.length) {
                this.selectOption(index, question);
            }
        }
        
        if (event.key === 'ArrowRight') {
            this.nextQuestion();
        } else if (event.key === 'ArrowLeft') {
            this.prevQuestion();
        }
        
        if (event.key === 'Enter') {
            this.nextQuestion();
        }
    }
    
    highlightAnsweredQuestion(userAnswer, question) {
        const options = this.elements.optionsContainer.querySelectorAll('.option');
        
        options.forEach((option, index) => {
            if (index === userAnswer.selectedIndex) {
                option.classList.add('selected');
            }
            
            // Показываем правильные/неправильные ответы если тест завершен или включен показ ответов
            if (this.quizCompleted || this.showAnswersImmediately) {
                if (index === question.correctAnswer) {
                    option.classList.add('correct');
                }
                
                if (index === userAnswer.selectedIndex && userAnswer.selectedIndex !== question.correctAnswer) {
                    option.classList.add('incorrect');
                }
            }
        });
        
        if (this.quizCompleted || this.showAnswersImmediately) {
            this.showExplanation(userAnswer.isCorrect, question.explanation);
        }
    }
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== DOM полностью загружен ===');
    
    // Добавляем стили для изображений
    const style = document.createElement('style');
    style.textContent = `
        .question-image-container {
            margin: 20px 0;
            text-align: center;
        }
        
        .question-image {
            max-width: 100%;
            max-height: 300px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .review-image {
            max-width: 100%;
            max-height: 200px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        
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
    
    try {
        console.log('Создание экземпляра NetworkEngineeringQuiz...');
        window.quizApp = new NetworkEngineeringQuiz();
        console.log('=== Network Engineering Quiz успешно загружен! ===');
    } catch (error) {
        console.error('ОШИБКА при создании теста:', error);
        alert('Ошибка запуска теста. Проверьте консоль для подробностей.');
    }
});