// База вопросов для тестирования сетевого инженера
const ALL_QUESTIONS = [
    // === БАЗОВЫЕ ВОПРОСЫ ДЛЯ НАЧИНАЮЩИХ ===
    {
        id: 1,
        question: "Что такое IP-адрес?",
        options: [
            "Уникальный числовой идентификатор устройства в сети",
            "Название сети",
            "Тип кабельного соединения",
            "Скорость интернет-соединения"
        ],
        correctAnswer: 0,
        explanation: "✅ IP-адрес - это уникальный числовой идентификатор устройства в сети, позволяющий находить и общаться с другими устройствами.",
        difficulty: "CCNA"
    },
    {
        id: 2,
        question: "Какой стандартный порт используется для HTTP?",
        options: [
            "80",
            "443",
            "21",
            "25"
        ],
        correctAnswer: 0,
        explanation: "✅ Порт 80 используется для HTTP (HyperText Transfer Protocol) - протокола передачи веб-страниц.",
        difficulty: "CCNA"
    },
    {
        id: 3,
        question: "Что такое MAC-адрес?",
        options: [
            "Адрес производителя сетевой карты",
            "IP-адрес маршрутизатора",
            "Пароль сети Wi-Fi",
            "Номер порта"
        ],
        correctAnswer: 0,
        explanation: "✅ MAC-адрес - это уникальный физический адрес сетевого интерфейса, назначенный производителем.",
        difficulty: "CCNA"
    },
    {
        id: 4,
        question: "Что делает маршрутизатор?",
        options: [
            "Передает данные между разными сетями",
            "Усиливает Wi-Fi сигнал",
            "Создает локальную сеть",
            "Шифрует трафик"
        ],
        correctAnswer: 0,
        explanation: "✅ Маршрутизатор передает пакеты данных между разными сетями, выбирая оптимальный путь.",
        difficulty: "CCNA"
    },
    {
        id: 5,
        question: "Что такое DNS?",
        options: [
            "Система доменных имен",
            "Тип сетевого кабеля",
            "Протокол шифрования",
            "Марка маршрутизатора"
        ],
        correctAnswer: 0,
        explanation: "✅ DNS (Domain Name System) преобразует доменные имена (например, google.com) в IP-адреса.",
        difficulty: "CCNA"
    },
    {
        id: 6,
        question: "Какой протокол используется для безопасного соединения с веб-сайтами?",
        options: [
            "HTTPS",
            "FTP",
            "SMTP",
            "Telnet"
        ],
        correctAnswer: 0,
        explanation: "✅ HTTPS (HTTP Secure) использует шифрование SSL/TLS для безопасной передачи данных.",
        difficulty: "CCNA"
    },
    {
        id: 7,
        question: "Что такое локальная сеть (LAN)?",
        options: [
            "Сеть в пределах одного здания или кампуса",
            "Глобальная интернет-сеть",
            "Беспроводная сеть",
            "Сеть между странами"
        ],
        correctAnswer: 0,
        explanation: "✅ LAN (Local Area Network) - локальная сеть, ограниченная географически небольшой областью.",
        difficulty: "CCNA"
    },
    {
        id: 8,
        question: "Какой кабель чаще всего используется в проводных сетях?",
        options: [
            "Витая пара (Ethernet)",
            "Коаксиальный",
            "Оптоволоконный",
            "USB"
        ],
        correctAnswer: 0,
        explanation: "✅ Кабель типа 'витая пара' (Ethernet) наиболее распространен в локальных сетях.",
        difficulty: "CCNA"
    },
    {
        id: 9,
        question: "Что такое Wi-Fi?",
        options: [
            "Технология беспроводной локальной сети",
            "Тип кабельного соединения",
            "Марка маршрутизатора",
            "Скорость интернета"
        ],
        correctAnswer: 0,
        explanation: "✅ Wi-Fi - это технология беспроводной локальной сети, использующая радиоволны.",
        difficulty: "CCNA"
    },
    {
        id: 10,
        question: "Какой диапазон IP-адресов является частным?",
        options: [
            "192.168.0.0 - 192.168.255.255",
            "8.8.8.8",
            "200.100.50.25",
            "Все адреса частные"
        ],
        correctAnswer: 0,
        explanation: "✅ Диапазон 192.168.x.x является частным и используется во внутренних сетях.",
        difficulty: "CCNA"
    },
    {
        id: 11,
        question: "Что такое DHCP?",
        options: [
            "Протокол автоматической настройки IP-адресов",
            "Тип сетевого кабеля",
            "Сервер доменных имен",
            "Протокол шифрования"
        ],
        correctAnswer: 0,
        explanation: "✅ DHCP автоматически назначает IP-адреса устройствам в сети.",
        difficulty: "CCNA"
    },
    {
        id: 12,
        question: "Какой порт использует SSH?",
        options: [
            "22",
            "23",
            "80",
            "443"
        ],
        correctAnswer: 0,
        explanation: "✅ Порт 22 используется для SSH (Secure Shell) - безопасного удаленного доступа.",
        difficulty: "CCNA"
    },
    {
        id: 13,
        question: "Что такое ping?",
        options: [
            "Утилита проверки доступности узла",
            "Тип сетевой атаки",
            "Протокол передачи файлов",
            "Марка оборудования"
        ],
        correctAnswer: 0,
        explanation: "✅ Ping проверяет доступность узла в сети и измеряет время отклика.",
        difficulty: "CCNA"
    },
    {
        id: 14,
        question: "Что такое коммутатор?",
        options: [
            "Устройство для соединения устройств в одной сети",
            "Маршрутизатор",
            "Модем",
            "Точка доступа Wi-Fi"
        ],
        correctAnswer: 0,
        explanation: "✅ Коммутатор соединяет устройства в пределах одной локальной сети.",
        difficulty: "CCNA"
    },
    {
        id: 15,
        question: "Что такое VPN?",
        options: [
            "Виртуальная частная сеть",
            "Очень быстрая сеть",
            "Новая версия IP",
            "Тип Wi-Fi"
        ],
        correctAnswer: 0,
        explanation: "✅ VPN создает защищенное соединение через публичную сеть (например, интернет).",
        difficulty: "CCNA"
    },
    {
        id: 16,
        question: "Какой протокол используется для электронной почты?",
        options: [
            "SMTP",
            "HTTP",
            "FTP",
            "SSH"
        ],
        correctAnswer: 0,
        explanation: "✅ SMTP используется для отправки электронной почты.",
        difficulty: "CCNA"
    },
    {
        id: 17,
        question: "Что такое брандмауэр?",
        options: [
            "Система безопасности сети",
            "Усилитель сигнала",
            "Сервер DNS",
            "Маршрутизатор"
        ],
        correctAnswer: 0,
        explanation: "✅ Брандмауэр фильтрует сетевой трафик на основе правил безопасности.",
        difficulty: "CCNA"
    },
    {
        id: 18,
        question: "Какой диапазон портов является динамическим?",
        options: [
            "49152-65535",
            "0-1023",
            "1024-49151",
            "1-1000"
        ],
        correctAnswer: 0,
        explanation: "✅ Порти 49152-65535 используются для временных клиентских соединений.",
        difficulty: "CCNA"
    },
    {
        id: 19,
        question: "Что такое TCP?",
        options: [
            "Надежный протокол передачи данных",
            "Беспроводной протокол",
            "Тип кабеля",
            "Серверная ОС"
        ],
        correctAnswer: 0,
        explanation: "✅ TCP обеспечивает надежную, упорядоченную доставку данных.",
        difficulty: "CCNA"
    },
    {
        id: 20,
        question: "Что такое UDP?",
        options: [
            "Ненадежный, но быстрый протокол",
            "Протокол для электронной почты",
            "Протокол шифрования",
            "Тип DNS-запроса"
        ],
        correctAnswer: 0,
        explanation: "✅ UDP быстрее, но менее надежен чем TCP; используется для VoIP, видео.",
        difficulty: "CCNA"
    },
    {
        id: 21,
        question: "Какой IP-адрес у localhost?",
        options: [
            "127.0.0.1",
            "192.168.1.1",
            "0.0.0.0",
            "255.255.255.255"
        ],
        correctAnswer: 0,
        explanation: "✅ 127.0.0.1 - адрес локального компьютера (loopback).",
        difficulty: "CCNA"
    },
    {
        id: 22,
        question: "Что такое NAT?",
        options: [
            "Преобразование сетевых адресов",
            "Новый тип атаки",
            "Протокол передачи файлов",
            "Тип DNS"
        ],
        correctAnswer: 0,
        explanation: "✅ NAT преобразует частные IP-адреса в публичные для выхода в интернет.",
        difficulty: "CCNA"
    },
    {
        id: 23,
        question: "Какой порт используется для FTP?",
        options: [
            "21",
            "22",
            "80",
            "443"
        ],
        correctAnswer: 0,
        explanation: "✅ Порт 21 используется для управления FTP-сессией.",
        difficulty: "CCNA"
    },
    {
        id: 24,
        question: "Что такое subnet mask?",
        options: [
            "Определяет, какая часть IP-адреса относится к сети",
            "Пароль сети",
            "Тип шифрования",
            "Скорость сети"
        ],
        correctAnswer: 0,
        explanation: "✅ Маска подсети разделяет IP-адрес на часть сети и часть хоста.",
        difficulty: "CCNA"
    },
    {
        id: 25,
        question: "Что такое default gateway?",
        options: [
            "Маршрутизатор для выхода в другие сети",
            "Основной DNS-сервер",
            "Главный коммутатор",
            "Сервер DHCP"
        ],
        correctAnswer: 0,
        explanation: "✅ Шлюз по умолчанию - это маршрутизатор, через который идет трафик за пределы локальной сети.",
        difficulty: "CCNA"
    },
    {
        id: 26,
        question: "Какой протокол использует порт 443?",
        options: [
            "HTTPS",
            "HTTP",
            "SSH",
            "FTP"
        ],
        correctAnswer: 0,
        explanation: "✅ Порт 443 используется для HTTPS (защищенного HTTP).",
        difficulty: "CCNA"
    },
    {
        id: 27,
        question: "Что такое ARP?",
        options: [
            "Протокол определения MAC-адреса по IP",
            "Протокол маршрутизации",
            "Протокол шифрования",
            "Тип DNS-запроса"
        ],
        correctAnswer: 0,
        explanation: "✅ ARP находит MAC-адрес устройства по его IP-адресу в локальной сети.",
        difficulty: "CCNA"
    },
    {
        id: 28,
        question: "Какой кабель используется для подключения двух компьютеров напрямую?",
        options: [
            "Перекрестный кабель",
            "Прямой кабель",
            "Коаксиальный",
            "Оптоволоконный"
        ],
        correctAnswer: 0,
        explanation: "✅ Перекрестный кабель используется для прямого соединения двух одинаковых устройств.",
        difficulty: "CCNA"
    },
    {
        id: 29,
        question: "Что такое bandwidth?",
        options: [
            "Пропускная способность сети",
            "Длина кабеля",
            "Количество устройств",
            "Сила Wi-Fi сигнала"
        ],
        correctAnswer: 0,
        explanation: "✅ Пропускная способность - максимальная скорость передачи данных в сети.",
        difficulty: "CCNA"
    },
    {
        id: 30,
        question: "Что такое ICMP?",
        options: [
            "Протокол для диагностики сети",
            "Протокол электронной почты",
            "Протокол передачи файлов",
            "Протокол маршрутизации"
        ],
        correctAnswer: 0,
        explanation: "✅ ICMP используется для диагностических сообщений (ping, traceroute).",
        difficulty: "CCNA"
    },
    {
        id: 31,
        question: "Какой стандарт описывает Ethernet?",
        options: [
            "IEEE 802.3",
            "IEEE 802.11",
            "IEEE 802.1Q",
            "IEEE 802.1D"
        ],
        correctAnswer: 0,
        explanation: "✅ IEEE 802.3 определяет стандарт проводного Ethernet.",
        difficulty: "CCNA"
    },
    {
        id: 32,
        question: "Что такое SSID?",
        options: [
            "Идентификатор беспроводной сети",
            "Пароль Wi-Fi",
            "Тип шифрования",
            "Скорость Wi-Fi"
        ],
        correctAnswer: 0,
        explanation: "✅ SSID - это название Wi-Fi сети, которое видят пользователи.",
        difficulty: "CCNA"
    },
    {
        id: 33,
        question: "Какой протокол использует порт 25?",
        options: [
            "SMTP",
            "POP3",
            "IMAP",
            "HTTP"
        ],
        correctAnswer: 0,
        explanation: "✅ Порт 25 используется для SMTP (отправки почты).",
        difficulty: "CCNA"
    },
    {
        id: 34,
        question: "Что такое трассировка маршрута?",
        options: [
            "Определение пути пакета через сеть",
            "Измерение скорости",
            "Поиск IP-адреса",
            "Настройка сети"
        ],
        correctAnswer: 0,
        explanation: "✅ Traceroute показывает путь пакета через маршрутизаторы к целевому узлу.",
        difficulty: "CCNA"
    },
    {
        id: 35,
        question: "Что такое модем?",
        options: [
            "Устройство для подключения к интернету через телефонную линию",
            "Маршрутизатор",
            "Коммутатор",
            "Точка доступа"
        ],
        correctAnswer: 0,
        explanation: "✅ Модем преобразует цифровые сигналы в аналоговые для передачи по телефонным линиям.",
        difficulty: "CCNA"
    },
    {
        id: 36,
        question: "Какой стандарт для Wi-Fi?",
        options: [
            "IEEE 802.11",
            "IEEE 802.3",
            "IEEE 802.1Q",
            "IEEE 802.1D"
        ],
        correctAnswer: 0,
        explanation: "✅ IEEE 802.11 определяет стандарты беспроводных сетей Wi-Fi.",
        difficulty: "CCNA"
    },
    {
        id: 37,
        question: "Что такое DNS-сервер?",
        options: [
            "Сервер, преобразующий доменные имена в IP-адреса",
            "Сервер электронной почты",
            "Сервер файлов",
            "Веб-сервер"
        ],
        correctAnswer: 0,
        explanation: "✅ DNS-сервер хранит записи о соответствии доменных имен и IP-адресов.",
        difficulty: "CCNA"
    },
    {
        id: 38,
        question: "Какой порт используется для Telnet?",
        options: [
            "23",
            "22",
            "21",
            "25"
        ],
        correctAnswer: 0,
        explanation: "✅ Порт 23 используется для Telnet (небезопасного удаленного доступа).",
        difficulty: "CCNA"
    },
    {
        id: 39,
        question: "Что такое ядро сети?",
        options: [
            "Центральная часть сети с высокой пропускной способностью",
            "Главный компьютер",
            "Основной кабель",
            "Центр управления сетью"
        ],
        correctAnswer: 0,
        explanation: "✅ Ядро сети - это высокоскоростная центральная магистраль, соединяющая разные части сети.",
        difficulty: "CCNA"
    },
    {
        id: 40,
        question: "Что такое клиент-серверная архитектура?",
        options: [
            "Модель, где клиенты запрашивают услуги у серверов",
            "Все устройства равны",
            "Только один компьютер в сети",
            "Сеть без серверов"
        ],
        correctAnswer: 0,
        explanation: "✅ В клиент-серверной модели клиенты запрашивают ресурсы, а серверы предоставляют их.",
        difficulty: "CCNA"
    },
    {
        id: 41,
        question: "Что такое топология 'звезда'?",
        options: [
            "Все устройства подключены к центральному узлу",
            "Устройства соединены по цепочке",
            "Каждое устройство соединено со всеми",
            "Кольцевое соединение"
        ],
        correctAnswer: 0,
        explanation: "✅ В топологии 'звезда' все устройства подключены к центральному коммутатору или концентратору.",
        difficulty: "CCNA"
    },
    {
        id: 42,
        question: "Что такое HTTP-код 404?",
        options: [
            "Страница не найдена",
            "Ошибка сервера",
            "Доступ запрещен",
            "Успешный запрос"
        ],
        correctAnswer: 0,
        explanation: "✅ Код 404 означает, что запрошенная страница или ресурс не найден на сервере.",
        difficulty: "CCNA"
    },
    {
        id: 43,
        question: "Что такое QoS?",
        options: [
            "Качество обслуживания",
            "Количество сервисов",
            "Скорость запроса",
            "Тип сервера"
        ],
        correctAnswer: 0,
        explanation: "✅ QoS приоритизирует определенные типы трафика для лучшего качества.",
        difficulty: "CCNA"
    },
    {
        id: 44,
        question: "Что такое MAC-фильтрация?",
        options: [
            "Контроль доступа по MAC-адресам",
            "Фильтр по IP-адресам",
            "Блокировка портов",
            "Шифрование данных"
        ],
        correctAnswer: 0,
        explanation: "✅ MAC-фильтрация разрешает или запрещает доступ устройствам по их MAC-адресам.",
        difficulty: "CCNA"
    },
    {
        id: 45,
        question: "Что такое пассивный сетевой компонент?",
        options: [
            "Кабель, разъем, патч-панель",
            "Маршрутизатор",
            "Коммутатор",
            "Сервер"
        ],
        correctAnswer: 0,
        explanation: "✅ Пассивные компоненты не требуют питания и не обрабатывают сигнал (кабели, разъемы).",
        difficulty: "CCNA"
    },
    {
        id: 46,
        question: "Что такое активный сетевой компонент?",
        options: [
            "Устройство, требующее питания и обрабатывающее сигнал",
            "Кабель",
            "Разъем",
            "Стойка"
        ],
        correctAnswer: 0,
        explanation: "✅ Активные компоненты требуют питания и могут усиливать/обрабатывать сигнал (маршрутизаторы, коммутаторы).",
        difficulty: "CCNA"
    },
    {
        id: 47,
        question: "Что такое виртуальная машина?",
        options: [
            "Программная эмуляция компьютера",
            "Физический сервер",
            "Сетевой кабель",
            "Операционная система"
        ],
        correctAnswer: 0,
        explanation: "✅ Виртуальная машина создает изолированную среду внутри физического компьютера.",
        difficulty: "CCNA"
    },
    {
        id: 48,
        question: "Что такое облачные вычисления?",
        options: [
            "Предоставление IT-ресурсов как услуги через интернет",
            "Локальный сервер",
            "Персональный компьютер",
            "Wi-Fi сеть"
        ],
        correctAnswer: 0,
        explanation: "✅ Облачные вычисления предоставляют ресурсы (серверы, хранилища) через интернет по запросу.",
        difficulty: "CCNA"
    },
    {
        id: 49,
        question: "Что такое патч-корд?",
        options: [
            "Коммутационный кабель для подключения устройств",
            "Основной магистральный кабель",
            "Беспроводное соединение",
            "Оптоволоконный кабель"
        ],
        correctAnswer: 0,
        explanation: "✅ Патч-корд - короткий кабель для подключения устройств к сетевым портам.",
        difficulty: "CCNA"
    },
    {
        id: 50,
        question: "Что такое сетевой протокол?",
        options: [
            "Набор правил для обмена данными в сети",
            "Тип кабеля",
            "Марка оборудования",
            "Скорость соединения"
        ],
        correctAnswer: 0,
        explanation: "✅ Протокол определяет правила и форматы для связи между устройствами.",
        difficulty: "CCNA"
    },

    // === CCNA ВОПРОСЫ (оригинальные) ===
    {
        id: 51,
        question: "Какой диапазон портов является 'well-known ports' согласно IANA?",
        options: [
            "0-1023",
            "1024-49151", 
            "49152-65535",
            "1-1024"
        ],
        correctAnswer: 0,
        explanation: "✅ Порты 0-1023 зарезервированы для общеизвестных сервисов (HTTP-80, SSH-22, DNS-53). Эти порты требуют привилегий суперпользователя для прослушивания.",
        difficulty: "CCNA"
    },
    {
        id: 52,
        question: "Какой протокол использует алгоритм DUAL для вычисления маршрутов?",
        options: [
            "OSPF",
            "EIGRP", 
            "RIP",
            "BGP"
        ],
        correctAnswer: 1,
        explanation: "✅ EIGRP использует алгоритм DUAL (Diffusing Update Algorithm) для бесшовной реконвергенции и предотвращения петель. DUAL вычисляет резервные маршруты (feasible successors) заранее.",
        difficulty: "CCNA"
    },
    {
        id: 53,
        question: "Какая команда на Cisco IOS показывает таблицу MAC-адресов коммутатора?",
        options: [
            "show mac-address-table",
            "show mac table", 
            "show arp",
            "show cam table"
        ],
        correctAnswer: 0,
        explanation: "✅ Команда 'show mac-address-table' отображает таблицу MAC-адресов коммутатора, где показаны привязки MAC-адресов к портам и VLAN.",
        difficulty: "CCNA"
    },
    {
        id: 54,
        question: "Какой стандарт описывает Rapid Spanning Tree Protocol (RSTP)?",
        options: [
            "IEEE 802.1D",
            "IEEE 802.1w", 
            "IEEE 802.1Q",
            "IEEE 802.1s"
        ],
        correctAnswer: 1,
        explanation: "✅ RSTP описан в стандарте IEEE 802.1w, обеспечивая быструю конвергенцию (до 6 секунд против 30-50 секунд у классического STP).",
        difficulty: "CCNA"
    },
    {
        id: 55,
        question: "Что такое Administrative Distance (AD) в маршрутизации Cisco?",
        options: [
            "Метрика маршрута",
            "Надежность источника маршрута (0-255)", 
            "Скорость интерфейса",
            "Задержка передачи"
        ],
        correctAnswer: 1,
        explanation: "✅ AD - это надежность источника маршрута (0-255). Чем меньше AD, тем надежнее источник. Например: Connected=0, Static=1, EIGRP=90, OSPF=110, RIP=120.",
        difficulty: "CCNA"
    },
    {
        id: 56,
        question: "Какой протокол использует multicast адрес 224.0.0.5?",
        options: [
            "EIGRP",
            "OSPF", 
            "RIP",
            "BGP"
        ],
        correctAnswer: 1,
        explanation: "✅ OSPF использует 224.0.0.5 для всех OSPF маршрутизаторов (AllSPFRouters) и 224.0.0.6 для DR/BDR (AllDRouters).",
        difficulty: "CCNA"
    },
    {
        id: 57,
        question: "Что такое VTP (VLAN Trunking Protocol)?",
        options: [
            "Протокол для создания VLAN",
            "Протокол синхронизации информации о VLAN между коммутаторами", 
            "Протокол для туннелирования VLAN",
            "Протокол безопасности VLAN"
        ],
        correctAnswer: 1,
        explanation: "✅ VTP синхронизирует информацию о VLAN между коммутаторами в одном домене. Это позволяет централизованно управлять VLAN на VTP сервере.",
        difficulty: "CCNA"
    },
    {
        id: 58,
        question: "Какая команда переводит порт в режим trunk на Cisco IOS?",
        options: [
            "switchport mode trunk",
            "port mode trunk", 
            "interface trunk",
            "trunk enable"
        ],
        correctAnswer: 0,
        explanation: "✅ 'switchport mode trunk' настраивает порт как магистральный для передачи нескольких VLAN с тегами 802.1Q.",
        difficulty: "CCNA"
    },
    {
        id: 59,
        question: "Что такое CDP (Cisco Discovery Protocol)?",
        options: [
            "Протокол маршрутизации",
            "Протокол обнаружения соседних устройств Cisco", 
            "Протокол управления сетью",
            "Протокол резервирования"
        ],
        correctAnswer: 1,
        explanation: "✅ CDP - проприетарный протокол Cisco для обнаружения соседних устройств. Показывает информацию об устройстве, интерфейсах, версиях IOS.",
        difficulty: "CCNA"
    },
    {
        id: 60,
        question: "Какой протокол использует порт 179 для установления соединения?",
        options: [
            "OSPF",
            "BGP", 
            "EIGRP",
            "RIP"
        ],
        correctAnswer: 1,
        explanation: "✅ BGP использует TCP порт 179 для установления сессий между пирами. Это обеспечивает надежную доставку обновлений маршрутизации.",
        difficulty: "CCNA"
    },
    
    // === CCNP ВОПРОСЫ ===
    {
        id: 61,
        question: "Что такое OSPF Network Type 'point-to-multipoint non-broadcast'?",
        options: [
            "Тип сети без выбора DR/BDR, требует статической настройки соседей",
            "Тип сети с выбором DR/BDR", 
            "Тип сети только для Ethernet",
            "Тип сети с широковещательными рассылками"
        ],
        correctAnswer: 0,
        explanation: "✅ Point-to-multipoint non-broadcast используется в NBMA сетях без broadcast (например, Frame Relay). Требует статической настройки соседей, DR/BDR не выбираются.",
        difficulty: "CCNP"
    },
    {
        id: 62,
        question: "Как работает BGP Route Reflector?",
        options: [
            "Отражает маршруты всем соседям",
            "Отражает маршруты от клиентов к другим клиентам и не-клиентам", 
            "Фильтрует все маршруты",
            "Только получает маршруты"
        ],
        correctAnswer: 1,
        explanation: "✅ Route Reflector отражает маршруты от клиентов другим клиентам и не-клиентам, нарушая правило 'no readvertisement to iBGP peers'. Это уменьшает количество iBGP сессий.",
        difficulty: "CCNP"
    },
    {
        id: 63,
        question: "Что такое MPLS LDP (Label Distribution Protocol)?",
        options: [
            "Протокол распределения меток в MPLS",
            "Протокол маршрутизации", 
            "Протокол управления QoS",
            "Протокол безопасности"
        ],
        correctAnswer: 0,
        explanation: "✅ LDP автоматически распределяет метки между LSR для построения LSP (Label Switched Paths) на основе информации IGP (OSPF, IS-IS).",
        difficulty: "CCNP"
    },
    {
        id: 64,
        question: "Какой механизм использует EIGRP для предотвращения петель?",
        options: [
            "Split Horizon",
            "Feasible Successor", 
            "Poison Reverse",
            "Hold-down Timer"
        ],
        correctAnswer: 1,
        explanation: "✅ EIGRP использует Feasible Successor (резервный маршрут) и Feasibility Condition (FD advertised < FD current) для предотвращения петель без hold-down timers.",
        difficulty: "CCNP"
    },
    {
        id: 65,
        question: "Что такое VRF (Virtual Routing and Forwarding)?",
        options: [
            "Виртуальная таблица маршрутизации для изоляции трафика",
            "Протокол виртуальной маршрутизации", 
            "Метод шифрования трафика",
            "Технология агрегации каналов"
        ],
        correctAnswer: 0,
        explanation: "✅ VRF создает изолированные виртуальные таблицы маршрутизации в одном физическом устройстве. Используется для MPLS L3VPN и multi-tenant сред.",
        difficulty: "CCNP"
    },
    
    // === CCIE ВОПРОСЫ ===
    {
        id: 66,
        question: "Как работает BGP Add-Path для load balancing?",
        options: [
            "Отправляет multiple paths для prefix, позволяя ECMP",
            "Добавляет путь к AS_PATH", 
            "Удаляет дублирующиеся пути",
            "Фильтрует по community"
        ],
        correctAnswer: 0,
        explanation: "✅ BGP Add-Path отправляет несколько путей для одного prefix, позволяя ECMP в iBGP. Требует поддержки на передающем и принимающем устройствах.",
        difficulty: "CCIE"
    },
    {
        id: 67,
        question: "Что такое Segment Routing (SR)?",
        options: [
            "Архитектура MPLS без LDP/RSVP, использующая prefix SID",
            "Новый протокол маршрутизации", 
            "Метод шифрования трафика",
            "Технология агрегации"
        ],
        correctAnswer: 0,
        explanation: "✅ Segment Routing использует MPLS или IPv6, кодирует путь как список сегментов (SID) в заголовке пакета. Устраняет необходимость в LDP/RSVP.",
        difficulty: "CCIE"
    },
    {
        id: 68,
        question: "Как работает EVPN (Ethernet VPN) для L2VPN?",
        options: [
            "Использует BGP для сигнализации MAC адресов через MPLS/IP",
            "Только через VPLS", 
            "Только для point-to-point",
            "Без MPLS"
        ],
        correctAnswer: 0,
        explanation: "✅ EVPN использует MP-BGP для обмена MAC/IP информация через MPLS или VXLAN туннели. Обеспечивает лучшую масштабируемость чем VPLS.",
        difficulty: "CCIE"
    },
    {
        id: 69,
        question: "Что такое BGP FlowSpec?",
        options: [
            "Распространение правил фильтрации трафика через BGP",
            "Измерение потока трафика", 
            "Балансировка нагрузки BGP",
            "Мониторинг BGP сессий"
        ],
        correctAnswer: 0,
        explanation: "✅ BGP FlowSpec распространяет правила фильтрации DDoS атак через BGP NLRI. Позволяет быстро реагировать на атаки на всех edge маршрутизаторах.",
        difficulty: "CCIE"
    },
    {
        id: 70,
        question: "Как работает MPLS L3VPN с Route Target?",
        options: [
            "RT импорта/экспорта определяют принадлежность к VRF",
            "Только для фильтрации", 
            "Для аутентификации",
            "Для шифрования"
        ],
        correctAnswer: 0,
        explanation: "✅ Route Target community определяет, какие маршруты импортировать в какой VRF. RT export помечает маршруты, RT import выбирает какие маршруты принять.",
        difficulty: "CCIE"
    }
];

// Экспортируем вопросы для использования в основном скрипте
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ALL_QUESTIONS;
}