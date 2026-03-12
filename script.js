// ===== Network Engineer Quiz - Обновлённый скрипт =====
console.log('Загрузка обновлённого script.js...');

const QUESTION_FIXES = {
    4: { correctAnswer: 2 },
    8: {
        correctAnswer: 0,
        options: [
            'Кабель витая пара (Ethernet), наиболее распространённый в локальных проводных сетях для подключения компьютеров и сетевого оборудования',
            'Коаксиальный кабель RG-6 с волновым сопротивлением 75 Ом для передачи телевизионного сигнала и кабельного интернета с широкополосным доступом',
            'Оптоволоконный кабель OM4 многомодовый для передачи данных на большие расстояния со скоростью до 100 Гбит/с с использованием лучей света',
            'Кабель USB 3.2 для подключения периферийных устройств к компьютерам с максимальной скоростью до 20 Гбит/с и обратной совместимостью'
        ],
        explanation: '✅ В локальных проводных сетях чаще всего используется витая пара (Ethernet). Оптика и коаксиал тоже применяются, но заметно реже для стандартного подключения рабочих мест.'
    },
    9: { correctAnswer: 0 },
    10: {
        correctAnswer: 3,
        options: [
            'Диапазон 172.32.0.0 - 172.63.255.255, который не относится к частным адресам RFC 1918 и может маршрутизироваться в интернете',
            'Публичный адрес 8.8.8.8, принадлежащий компании Google и используемый в качестве публичного DNS-резолвера',
            'Адрес 200.100.50.25, который может быть назначен серверу, доступному из глобального интернета',
            'Диапазон 192.168.0.0 - 192.168.255.255, используемый во внутренних сетях и не маршрутизируемый в публичном интернете'
        ],
        explanation: '✅ Диапазон 192.168.0.0/16 является частным согласно RFC 1918. К частным также относятся 10.0.0.0/8 и 172.16.0.0/12.'
    },
    11: { correctAnswer: 0 },
    14: { correctAnswer: 1 },
    15: { correctAnswer: 0 },
    16: { correctAnswer: 0 },
    17: { correctAnswer: 0 },
    19: { correctAnswer: 0 },
    21: { correctAnswer: 0 },
    22: { correctAnswer: 0 },
    23: { correctAnswer: 1 },
    24: { correctAnswer: 0 },
    28: { correctAnswer: 0 },
    29: { correctAnswer: 0 },
    30: { correctAnswer: 0 },
    31: { correctAnswer: 0 },
    32: { correctAnswer: 0 },
    34: { correctAnswer: 0 },
    35: { correctAnswer: 0 },
    36: { correctAnswer: 0 },
    37: { correctAnswer: 0 },
    41: { correctAnswer: 0 },
    42: { correctAnswer: 0 },
    43: { correctAnswer: 0 },
    44: { correctAnswer: 0 },
    45: { correctAnswer: 0 },
    47: { correctAnswer: 0 },
    48: { correctAnswer: 0 },
    49: { correctAnswer: 0 },
    50: { correctAnswer: 0 },
    54: { correctAnswer: 0 },
    55: { correctAnswer: 0 },
    56: { correctAnswer: 0 },
    57: { correctAnswer: 0 },
    58: { correctAnswer: 0 },
    60: { correctAnswer: 0 },
    61: { correctAnswer: 0 },
    62: { correctAnswer: 0 },
    63: { correctAnswer: 0 },
    67: { correctAnswer: 0 },
    68: { correctAnswer: 0 },
    69: { correctAnswer: 0 },
    70: { correctAnswer: 0 },
    71: { correctAnswer: 0 },
    73: { correctAnswer: 0 },
    74: { correctAnswer: 0 },
    75: { correctAnswer: 0 },
    76: { correctAnswer: 0 },
    80: { correctAnswer: 0 },
    81: { correctAnswer: 0 },
    82: { correctAnswer: 0 },
    83: { correctAnswer: 0 },
    84: { correctAnswer: 0 },
    86: { correctAnswer: 0 },
    87: { correctAnswer: 0 },
    88: { correctAnswer: 0 },
    89: { correctAnswer: 0 },
    93: { correctAnswer: 0 },
    95: { correctAnswer: 0 },
    96: { correctAnswer: 0 },
    97: { correctAnswer: 0 },
    99: { correctAnswer: 0 },
    100: { correctAnswer: 0 },
    101: { correctAnswer: 0 },
    102: { correctAnswer: 0 },
    106: { correctAnswer: 0 },
    107: { correctAnswer: 0 },
    108: { correctAnswer: 0 },
    109: {
        question: 'Какие из перечисленных протоколов поддерживают маршрутизацию IPv6?',
        correctAnswer: 3,
        explanation: '✅ OSPFv3, EIGRP для IPv6 и RIPng поддерживают маршрутизацию IPv6. В этом вопросе правильный вариант — «все перечисленные».'
    },
    110: { correctAnswer: 0 },
    112: { correctAnswer: 0 },
    113: { correctAnswer: 0 },
    114: { correctAnswer: 0 },
    115: { correctAnswer: 0 },
    119: { correctAnswer: 0 },
    120: { correctAnswer: 0 },
    121: { correctAnswer: 0 },
    122: { correctAnswer: 0 },
    123: { correctAnswer: 0 },
    125: { correctAnswer: 0 },
    126: { correctAnswer: 0 },
    127: { correctAnswer: 0 },
    128: { correctAnswer: 0 },
    132: { correctAnswer: 0 },
    133: { correctAnswer: 0 },
    134: { correctAnswer: 0 },
    135: { correctAnswer: 0 },
    136: { correctAnswer: 0 },
    138: { correctAnswer: 0 },
    139: { correctAnswer: 0 },
    140: { correctAnswer: 0 },
    141: { correctAnswer: 0 },
    145: { correctAnswer: 0 },
    146: { correctAnswer: 0 },
    147: { correctAnswer: 0 },
    148: { correctAnswer: 0 },
    149: { correctAnswer: 0 },
    151: { correctAnswer: 0 },
    152: { correctAnswer: 0 },
    153: { correctAnswer: 0 },
    154: { correctAnswer: 0 },
    158: { correctAnswer: 0 },
    159: { correctAnswer: 0 },
    160: { correctAnswer: 0 },
    161: { correctAnswer: 0 },
    162: { correctAnswer: 0 },
    164: { correctAnswer: 0 },
    165: { correctAnswer: 0 },
    166: { correctAnswer: 0 },
    167: { correctAnswer: 0 }
};

const AUTO_FIX_EXCEPTIONS = new Set([104, 170]);
const DIFFICULTIES = ['CCNA', 'CCNP', 'CCIE'];

class NetworkEngineeringQuiz {
    constructor() {
        this.elements = {};
        this.allQuestions = [];
        this.filteredQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.quizStarted = false;
        this.quizCompleted = false;
        this.settingsLocked = false;
        this.isFinalTestMode = false;
        this.startTime = null;
        this.endTime = null;
        this.lastNonFinalShowAnswers = true;
        this.showAnswersImmediately = true;

        this.initElements();
        this.injectUtilityStyles();
        this.bindEvents();
        this.allQuestions = this.prepareQuestionBank(ALL_QUESTIONS || []);
        this.applyFilters();
        this.updateQuestionCounts();

        console.log('Инициализация завершена. Загружено вопросов:', this.allQuestions.length);
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
    }

    bindEvents() {
        this.elements.startButton.addEventListener('click', () => {
            if (this.quizCompleted) {
                this.restartQuiz();
            } else if (!this.quizStarted) {
                this.startQuiz();
            }
        });

        this.elements.prevButton.addEventListener('click', () => this.prevQuestion());
        this.elements.nextButton.addEventListener('click', () => this.nextQuestion());
        this.elements.finishButton.addEventListener('click', () => this.finishQuiz());
        this.elements.restartButton.addEventListener('click', () => this.restartQuiz());
        this.elements.reviewButton.addEventListener('click', () => this.showAnswersReview());
        this.elements.closeModal.addEventListener('click', () => this.hideAnswersModal());

        this.elements.answersModal.addEventListener('click', (event) => {
            if (event.target === this.elements.answersModal) {
                this.hideAnswersModal();
            }
        });

        this.elements.difficultyFilter.addEventListener('change', () => {
            if (this.settingsLocked) {
                this.restoreSettings();
                this.showLockedSettingsMessage();
                return;
            }
            this.applyFilters();
        });

        this.elements.shuffleCheckbox.addEventListener('change', () => {
            if (this.settingsLocked) {
                this.restoreSettings();
                this.showLockedSettingsMessage();
                return;
            }
            this.applyFilters();
        });

        this.elements.showAnswersCheckbox.addEventListener('change', (event) => {
            if (this.settingsLocked) {
                event.preventDefault();
                this.restoreSettings();
                this.showLockedSettingsMessage();
                return;
            }

            this.showAnswersImmediately = event.target.checked;
            this.lastNonFinalShowAnswers = this.showAnswersImmediately;
            this.applyFilters();
        });

        document.addEventListener('keydown', (event) => this.handleKeyPress(event));
    }

    injectUtilityStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .question-image-container { margin: 24px 0 8px; text-align: center; }
            .question-image { max-width: 100%; max-height: 320px; border-radius: 18px; border: 1px solid rgba(148,163,184,.25); box-shadow: 0 16px 40px rgba(15,23,42,.08); }
            .review-image { max-width: 100%; max-height: 220px; margin-top: 12px; border-radius: 12px; }
            .review-item { padding: 18px; border-radius: 18px; background: #f8fafc; margin-bottom: 18px; border: 1px solid rgba(148,163,184,.18); }
            .review-item.correct { border-left: 5px solid #16a34a; }
            .review-item.incorrect { border-left: 5px solid #dc2626; }
            .review-item.unanswered { border-left: 5px solid #64748b; }
            .review-question, .review-answer, .review-correct, .review-explanation { margin-bottom: 12px; }
            .result-badge { display: inline-flex; align-items: center; gap: 6px; margin-left: 10px; padding: 4px 10px; border-radius: 999px; font-size: .85rem; font-weight: 700; }
            .result-badge.correct { background: rgba(22,163,74,.12); color: #15803d; }
            .result-badge.incorrect { background: rgba(220,38,38,.12); color: #b91c1c; }
            .result-badge.unanswered { background: rgba(100,116,139,.12); color: #475569; }
            .option-locked { opacity: .88; }
        `;
        document.head.appendChild(style);
    }

    prepareQuestionBank(rawQuestions) {
        return rawQuestions.map((question) => this.normalizeQuestion(question));
    }

    normalizeQuestion(sourceQuestion) {
        const question = this.deepClone(sourceQuestion);
        const manualFix = QUESTION_FIXES[question.id];

        if (manualFix) {
            if (manualFix.question) question.question = manualFix.question;
            if (manualFix.options) question.options = [...manualFix.options];
            if (manualFix.explanation) question.explanation = manualFix.explanation;
            if (typeof manualFix.correctAnswer === 'number') question.correctAnswer = manualFix.correctAnswer;
        } else {
            const suggestedAnswer = this.detectLikelyCorrectAnswer(question);
            if (
                suggestedAnswer !== null &&
                suggestedAnswer !== question.correctAnswer &&
                !AUTO_FIX_EXCEPTIONS.has(question.id)
            ) {
                question.correctAnswer = suggestedAnswer;
            }
        }

        question.question = this.cleanText(question.question);
        question.explanation = this.cleanText(question.explanation);
        question.options = question.options.map((option) => this.cleanText(option));

        return question;
    }

    detectLikelyCorrectAnswer(question) {
        const normalized = `${question.question} ${question.explanation}`.toLowerCase();
        const tokens = normalized.match(/[a-zа-я0-9]+/g) || [];
        const tokenSet = new Set(tokens.filter((token) => token.length > 2));
        const scores = question.options.map((option) => {
            const optionTokens = new Set((option.toLowerCase().match(/[a-zа-я0-9]+/g) || []).filter((token) => token.length > 2));
            let score = 0;
            tokenSet.forEach((token) => {
                if (optionTokens.has(token)) score += 1;
            });
            return score;
        });

        let bestIndex = 0;
        for (let index = 1; index < scores.length; index += 1) {
            if (scores[index] > scores[bestIndex]) {
                bestIndex = index;
            }
        }

        const currentScore = scores[question.correctAnswer] ?? 0;
        const bestScore = scores[bestIndex] ?? 0;

        if (bestIndex !== question.correctAnswer && bestScore - currentScore >= 3) {
            return bestIndex;
        }

        return question.correctAnswer;
    }

    cleanText(value) {
        return String(value || '').replace(/\s+/g, ' ').trim();
    }

    deepClone(value) {
        return JSON.parse(JSON.stringify(value));
    }

    shuffleArray(array) {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    updateQuestionCounts() {
        const counts = DIFFICULTIES.reduce((acc, difficulty) => {
            acc[difficulty] = this.allQuestions.filter((question) => question.difficulty === difficulty).length;
            return acc;
        }, {});

        const ccnaElement = document.getElementById('ccna-count');
        const ccnpElement = document.getElementById('ccnp-count');
        const ccieElement = document.getElementById('ccie-count');

        if (ccnaElement) ccnaElement.textContent = `${counts.CCNA || 0} вопросов`;
        if (ccnpElement) ccnpElement.textContent = `${counts.CCNP || 0} вопросов`;
        if (ccieElement) ccieElement.textContent = `${counts.CCIE || 0} вопросов`;
    }

    applyFilters() {
        const difficulty = this.elements.difficultyFilter.value;
        const shuffleQuestions = this.elements.shuffleCheckbox.checked;

        if (difficulty === 'final') {
            this.isFinalTestMode = true;
            this.showAnswersImmediately = false;
            this.elements.showAnswersCheckbox.checked = false;
            this.elements.showAnswersCheckbox.disabled = true;

            const finalQuestions = [];
            DIFFICULTIES.forEach((level) => {
                const pool = this.allQuestions.filter((question) => question.difficulty === level);
                finalQuestions.push(...this.shuffleArray(pool).slice(0, Math.min(10, pool.length)));
            });
            this.filteredQuestions = finalQuestions;
        } else {
            this.isFinalTestMode = false;
            this.elements.showAnswersCheckbox.disabled = false;
            this.showAnswersImmediately = this.lastNonFinalShowAnswers;
            this.elements.showAnswersCheckbox.checked = this.showAnswersImmediately;

            if (difficulty === 'all') {
                this.filteredQuestions = [...this.allQuestions];
            } else {
                this.filteredQuestions = this.allQuestions.filter((question) => question.difficulty === difficulty);
            }
        }

        if (shuffleQuestions) {
            this.filteredQuestions = this.shuffleArray(this.filteredQuestions);
        }

        this.filteredQuestions = this.prepareSessionQuestions(this.filteredQuestions);
        this.resetQuizState();
        this.elements.totalScore.textContent = String(this.filteredQuestions.length);
        this.updateProgressBar();
        this.updateNavigation();
    }

    prepareSessionQuestions(questions) {
        if (!questions.length) return [];

        const targetPositions = this.createBalancedCorrectPositions(questions.length);

        return questions.map((question, index) => {
            const cloned = this.deepClone(question);
            const correctOption = cloned.options[cloned.correctAnswer];
            const distractors = cloned.options.filter((_, optionIndex) => optionIndex !== cloned.correctAnswer);
            const shuffledDistractors = this.shuffleArray(distractors);
            const targetPosition = targetPositions[index];
            const newOptions = [...shuffledDistractors];
            newOptions.splice(targetPosition, 0, correctOption);

            return {
                ...cloned,
                originalId: cloned.id,
                options: newOptions,
                correctAnswer: targetPosition,
                targetCorrectPosition: targetPosition
            };
        });
    }

    createBalancedCorrectPositions(totalQuestions) {
        const positions = [];
        const base = [0, 1, 2, 3];

        while (positions.length < totalQuestions) {
            positions.push(...base);
        }

        return this.shuffleArray(positions.slice(0, totalQuestions));
    }

    resetQuizState() {
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(this.filteredQuestions.length).fill(null);
        this.quizStarted = false;
        this.quizCompleted = false;
        this.settingsLocked = false;
        this.startTime = null;
        this.endTime = null;

        this.restoreControlsAfterQuiz();
        this.updateScoreDisplay();
        this.resetExplanation();
    }

    restoreControlsAfterQuiz() {
        this.elements.difficultyFilter.disabled = false;
        this.elements.shuffleCheckbox.disabled = false;
        this.elements.startButton.disabled = false;
        this.elements.startButton.innerHTML = '<i class="fas fa-play"></i> Начать тест';
        this.elements.startButton.style.opacity = '1';

        if (!this.isFinalTestMode) {
            this.elements.showAnswersCheckbox.disabled = false;
            this.elements.showAnswersCheckbox.checked = this.showAnswersImmediately;
        }
    }

    restoreSettings() {
        this.elements.difficultyFilter.value = this.isFinalTestMode ? 'final' : this.elements.difficultyFilter.value;
        this.elements.showAnswersCheckbox.checked = this.showAnswersImmediately;
    }

    showLockedSettingsMessage() {
        alert('Настройки заблокированы во время теста. Сначала завершите текущую попытку.');
    }

    startQuiz() {
        if (!this.filteredQuestions.length) {
            alert('Нет вопросов для выбранного режима. Измените фильтр и попробуйте снова.');
            return;
        }

        this.quizStarted = true;
        this.quizCompleted = false;
        this.settingsLocked = true;
        this.startTime = new Date();

        this.elements.difficultyFilter.disabled = true;
        this.elements.shuffleCheckbox.disabled = true;
        this.elements.showAnswersCheckbox.disabled = true;
        this.elements.startButton.disabled = true;
        this.elements.startButton.innerHTML = '<i class="fas fa-play"></i> Тест идёт';
        this.elements.startButton.style.opacity = '0.72';

        this.showScreen('question-screen');
        this.loadQuestion();
    }

    loadQuestion() {
        const question = this.filteredQuestions[this.currentQuestionIndex];
        if (!question) return;

        this.elements.questionNumber.textContent = `Вопрос ${this.currentQuestionIndex + 1}`;
        this.elements.questionText.textContent = question.question;

        if (question.image) {
            this.elements.questionImage.src = question.image;
            this.elements.questionImage.style.display = 'block';
            this.elements.questionImage.alt = `Изображение для вопроса ${question.originalId || question.id}`;
        } else {
            this.elements.questionImage.style.display = 'none';
            this.elements.questionImage.removeAttribute('src');
        }

        this.setDifficultyStyle(question.difficulty);
        this.renderOptions(question);
        this.renderExplanationState(question);
        this.updateProgressBar();
        this.updateNavigation();
    }

    renderOptions(question) {
        this.elements.optionsContainer.innerHTML = '';
        const answer = this.userAnswers[this.currentQuestionIndex];
        const locked = !!answer && (!this.showAnswersImmediately || this.isFinalTestMode) && !this.quizCompleted;

        question.options.forEach((optionText, index) => {
            const optionElement = document.createElement('button');
            optionElement.type = 'button';
            optionElement.className = 'option';
            optionElement.dataset.index = String(index);
            optionElement.innerHTML = `
                <span class="option-index">${index + 1}</span>
                <span class="option-text">${optionText}</span>
            `;

            if (answer) {
                const isSelected = answer.selectedIndex === index;
                const isCorrect = question.correctAnswer === index;

                if (isSelected) optionElement.classList.add('selected');

                if ((this.showAnswersImmediately && answer) || this.quizCompleted) {
                    if (isCorrect) optionElement.classList.add('correct');
                    if (isSelected && !isCorrect) optionElement.classList.add('incorrect');
                }

                if (locked) optionElement.classList.add('option-locked');
            }

            optionElement.addEventListener('click', () => this.selectOption(index));
            this.elements.optionsContainer.appendChild(optionElement);
        });
    }

    selectOption(selectedIndex) {
        if (!this.quizStarted || this.quizCompleted) return;

        const currentAnswer = this.userAnswers[this.currentQuestionIndex];
        const question = this.filteredQuestions[this.currentQuestionIndex];

        if (currentAnswer && (!this.showAnswersImmediately || this.isFinalTestMode)) {
            alert('В текущем режиме ответ на этот вопрос уже зафиксирован и менять его нельзя.');
            return;
        }

        this.userAnswers[this.currentQuestionIndex] = {
            selectedIndex,
            isCorrect: selectedIndex === question.correctAnswer,
            timestamp: new Date().toISOString()
        };

        this.renderOptions(question);
        this.renderExplanationState(question);
        this.updateScoreDisplay();
        this.updateNavigation();
    }

    renderExplanationState(question) {
        const answer = this.userAnswers[this.currentQuestionIndex];

        if (!answer) {
            this.resetExplanation();
            return;
        }

        if (this.showAnswersImmediately || this.quizCompleted) {
            this.showExplanation(answer.isCorrect, question.explanation);
            return;
        }

        this.elements.explanationTitle.textContent = 'Ответ сохранён';
        this.elements.resultIndicator.innerHTML = '<i class="fas fa-lock"></i> Зафиксировано';
        this.elements.resultIndicator.className = 'result-indicator';
        this.elements.explanationText.textContent = 'Ответ записан. Правильность и пояснение будут показаны после завершения теста.';
    }

    showExplanation(isCorrect, explanation) {
        this.elements.explanationTitle.textContent = isCorrect ? '✓ Правильный ответ' : '✗ Неправильный ответ';
        this.elements.resultIndicator.innerHTML = isCorrect
            ? '<i class="fas fa-check-circle"></i> Правильно'
            : '<i class="fas fa-times-circle"></i> Неправильно';
        this.elements.resultIndicator.className = `result-indicator ${isCorrect ? 'correct' : 'incorrect'}`;
        this.elements.explanationText.textContent = explanation;
    }

    resetExplanation() {
        this.elements.explanationTitle.textContent = 'Объяснение';
        this.elements.resultIndicator.innerHTML = '<i class="fas fa-info-circle"></i> Выберите ответ';
        this.elements.resultIndicator.className = 'result-indicator';
        this.elements.explanationText.textContent = this.showAnswersImmediately
            ? 'После выбора вы сразу увидите, верен ли ответ, и получите пояснение.'
            : 'Выберите вариант ответа. Проверка и пояснения будут показаны после завершения теста.';
    }

    nextQuestion() {
        if (!this.quizStarted) return;

        const currentAnswer = this.userAnswers[this.currentQuestionIndex];
        if (!currentAnswer) {
            alert('Сначала выберите вариант ответа.');
            return;
        }

        if (this.currentQuestionIndex >= this.filteredQuestions.length - 1) {
            this.finishQuiz();
            return;
        }

        this.currentQuestionIndex += 1;
        this.loadQuestion();
    }

    prevQuestion() {
        if (!this.quizStarted || this.currentQuestionIndex === 0) return;
        this.currentQuestionIndex -= 1;
        this.loadQuestion();
    }

    finishQuiz() {
        if (!this.quizStarted && !this.quizCompleted) return;

        const answeredCount = this.userAnswers.filter(Boolean).length;
        if (answeredCount === 0) {
            alert('Вы ещё не ответили ни на один вопрос.');
            return;
        }

        this.quizCompleted = true;
        this.quizStarted = false;
        this.settingsLocked = false;
        this.endTime = new Date();

        this.restoreControlsAfterQuiz();
        this.elements.startButton.innerHTML = '<i class="fas fa-redo"></i> Пройти заново';
        this.showScreen('results-screen');
        this.showResults();
    }

    restartQuiz() {
        this.applyFilters();
        this.showScreen('welcome-screen');
    }

    showResults() {
        const answeredQuestions = this.userAnswers.filter(Boolean).length;
        const correctAnswers = this.userAnswers.filter((answer) => answer && answer.isCorrect).length;
        const percentage = answeredQuestions ? Math.round((correctAnswers / answeredQuestions) * 100) : 0;

        const timeDiff = this.startTime && this.endTime ? this.endTime - this.startTime : 0;
        const minutes = Math.floor(timeDiff / 60000);
        const seconds = Math.floor((timeDiff % 60000) / 1000);

        this.elements.scorePercentage.textContent = `${percentage}%`;
        this.elements.correctAnswers.textContent = String(correctAnswers);
        this.elements.totalQuestions.textContent = String(answeredQuestions);
        this.elements.timeTaken.textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;
        this.elements.performanceLevel.textContent = this.getPerformanceLabel(percentage);

        const scoreCircle = document.querySelector('.score-circle');
        if (scoreCircle) {
            scoreCircle.style.background = `conic-gradient(var(--success-color) ${percentage}%, rgba(226,232,240,.9) ${percentage}%)`;
        }

        this.showDifficultyStats();
    }

    getPerformanceLabel(percentage) {
        if (percentage >= 90) return 'Эксперт (CCIE)';
        if (percentage >= 75) return 'Продвинутый (CCNP)';
        if (percentage >= 55) return 'Уверенный уровень (CCNA)';
        return 'Есть что подтянуть';
    }

    showDifficultyStats() {
        const stats = DIFFICULTIES.reduce((acc, difficulty) => {
            acc[difficulty] = { total: 0, correct: 0 };
            return acc;
        }, {});

        this.filteredQuestions.forEach((question, index) => {
            const answer = this.userAnswers[index];
            if (!answer || !stats[question.difficulty]) return;
            stats[question.difficulty].total += 1;
            if (answer.isCorrect) stats[question.difficulty].correct += 1;
        });

        this.elements.difficultyStats.innerHTML = Object.entries(stats)
            .filter(([, value]) => value.total > 0)
            .map(([difficulty, value]) => {
                const percentage = Math.round((value.correct / value.total) * 100);
                return `
                    <div class="difficulty-stat">
                        <span class="stat-difficulty">${difficulty}</span>
                        <div class="stat-bar">
                            <div class="stat-fill" style="width:${percentage}%; background:${this.getDifficultyColor(difficulty)}"></div>
                        </div>
                        <span class="stat-score">${value.correct}/${value.total} (${percentage}%)</span>
                    </div>
                `;
            })
            .join('') || '<p>Нет данных для отображения.</p>';
    }

    showAnswersReview() {
        const reviewHtml = this.filteredQuestions.map((question, index) => {
            const answer = this.userAnswers[index];
            const isAnswered = !!answer;
            const isCorrect = !!answer?.isCorrect;
            return `
                <div class="review-item ${isAnswered ? (isCorrect ? 'correct' : 'incorrect') : 'unanswered'}">
                    <div class="review-question"><strong>Вопрос ${index + 1}.</strong> ${question.question}</div>
                    ${question.image ? `<img src="${question.image}" class="review-image" alt="Изображение вопроса">` : ''}
                    <div class="review-answer">
                        <strong>Ваш ответ:</strong>
                        ${isAnswered ? question.options[answer.selectedIndex] : 'Нет ответа'}
                        ${isAnswered
                            ? `<span class="result-badge ${isCorrect ? 'correct' : 'incorrect'}"><i class="fas ${isCorrect ? 'fa-check' : 'fa-times'}"></i>${isCorrect ? 'Правильно' : 'Неправильно'}</span>`
                            : '<span class="result-badge unanswered"><i class="fas fa-minus"></i>Без ответа</span>'}
                    </div>
                    <div class="review-correct"><strong>Правильный ответ:</strong> ${question.options[question.correctAnswer]}</div>
                    <div class="review-explanation"><strong>Пояснение:</strong> ${question.explanation}</div>
                </div>
            `;
        }).join('');

        this.elements.answersList.innerHTML = reviewHtml;
        this.showAnswersModal();
    }

    showAnswersModal() {
        this.elements.answersModal.classList.add('active');
    }

    hideAnswersModal() {
        this.elements.answersModal.classList.remove('active');
    }

    showScreen(screenName) {
        this.elements.welcomeScreen.classList.remove('active');
        this.elements.questionScreen.classList.remove('active');
        this.elements.resultsScreen.classList.remove('active');
        document.getElementById(screenName).classList.add('active');
    }

    setDifficultyStyle(difficulty) {
        this.elements.questionDifficulty.textContent = difficulty;
        this.elements.questionDifficulty.className = `difficulty-badge ${difficulty.toLowerCase()}`;
        this.elements.difficultyText.textContent = difficulty;
        this.elements.difficultyText.className = `difficulty-label ${difficulty.toLowerCase()}`;
    }

    getDifficultyColor(difficulty) {
        switch (difficulty) {
            case 'CCNA': return 'linear-gradient(135deg, #22c55e, #16a34a)';
            case 'CCNP': return 'linear-gradient(135deg, #f59e0b, #d97706)';
            case 'CCIE': return 'linear-gradient(135deg, #ef4444, #dc2626)';
            default: return 'linear-gradient(135deg, #3b82f6, #2563eb)';
        }
    }

    updateProgressBar() {
        const total = this.filteredQuestions.length;
        if (!total || !this.quizStarted) {
            this.elements.progressText.textContent = `Вопрос 0/${total}`;
            this.elements.progressFill.style.width = '0%';
            return;
        }

        const current = this.currentQuestionIndex + 1;
        const percentage = (current / total) * 100;
        this.elements.progressText.textContent = `Вопрос ${current}/${total}`;
        this.elements.progressFill.style.width = `${percentage}%`;
    }

    updateNavigation() {
        const currentAnswer = this.userAnswers[this.currentQuestionIndex];
        const answeredCount = this.userAnswers.filter(Boolean).length;
        const total = this.filteredQuestions.length;
        const isLastQuestion = this.currentQuestionIndex === total - 1;

        this.elements.prevButton.disabled = !this.quizStarted || this.currentQuestionIndex === 0;
        this.elements.nextButton.disabled = !this.quizStarted || !currentAnswer;
        this.elements.nextButton.innerHTML = isLastQuestion
            ? 'Завершить <i class="fas fa-flag-checkered"></i>'
            : 'Далее <i class="fas fa-arrow-right"></i>';

        this.elements.finishButton.disabled = !this.quizStarted || answeredCount === 0;
        this.elements.totalScore.textContent = String(total);
    }

    updateScoreDisplay() {
        const correctAnswers = this.userAnswers.filter((answer) => answer && answer.isCorrect).length;
        this.elements.currentScore.textContent = String(correctAnswers);
        this.elements.totalScore.textContent = String(this.filteredQuestions.length);
    }

    handleKeyPress(event) {
        if (!this.quizStarted || this.quizCompleted) return;

        if (event.key >= '1' && event.key <= '4') {
            const index = Number(event.key) - 1;
            const currentQuestion = this.filteredQuestions[this.currentQuestionIndex];
            if (currentQuestion && index < currentQuestion.options.length) {
                this.selectOption(index);
            }
            return;
        }

        if (event.key === 'ArrowLeft') {
            this.prevQuestion();
        } else if (event.key === 'ArrowRight' || event.key === 'Enter') {
            this.nextQuestion();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        window.quizApp = new NetworkEngineeringQuiz();
        console.log('Network Engineering Quiz успешно загружен');
    } catch (error) {
        console.error('Ошибка инициализации приложения:', error);
        alert('Не удалось запустить тест. Проверьте консоль браузера.');
    }
});
