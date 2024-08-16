const Questions = [
    {
        id: "1",
        question: "¿Cuál es el término para una narración corta que generalmente contiene una lección moral?",
        answers: [
            {answer: "Ensayo", isCorrect: false},
            {answer: "Fábula", isCorrect: true},
            {answer: "Épica", isCorrect: false},
            {answer: "Novela", isCorrect: false}
        ],
        block: 1
    },
    {
        id: "2",
        question: "¿Quién es el autor de la novela 'Cien años de soledad'?",
        answers: [
            {answer: "Pablo Neruda", isCorrect: false},
            {answer: "Mario Vargas Llosa", isCorrect: false},
            {answer: "Gabriel García Márquez", isCorrect: true},
            {answer: "Jorge Luis Borges", isCorrect: false}
        ],
        block: 1
    },
    {
        id: "3",
        question: "¿Qué es una 'paradoja'?",
        answers: [
            {answer: "Una exageración extrema", isCorrect: false},
            {answer: "Una combinación de palabras opuestas", isCorrect: false},
            {answer: "Una afirmación que parece contradecirse pero puede ser verdad", isCorrect: true},
            {answer: "Una repetición de sonidos consonantes", isCorrect: false}
        ],
        block: 1
    },
    {
        id: "4",
        question: "¿Qué famosa frase pronuncia Hamlet en su soliloquio más conocido?",
        answers: [
            {answer: "Ser o no ser, esa es la cuestión", isCorrect: true},
            {answer: "Un caballo, un caballo, mi reino por un caballo", isCorrect: false},
            {answer: "La vida es un sueño", isCorrect: false},
            {answer: "Algo huele a podrido en Dinamarca", isCorrect: false}
        ],
        block: 1
    },
    {
        id: "5",
        question: "¿Cuál es el principal enemigo de Martín Fierro en la historia?",
        answers: [
            {answer: "El ejército", isCorrect: true},
            {answer: "Los indios", isCorrect: false},
            {answer: "Los jueces", isCorrect: false},
            {answer: "Los gauchos rivales", isCorrect: false}
        ],
        block: 1
    },
    {
        id: "6",
        question: "En el libro 'El Fantasma de Canterville' ¿Qué objeto sigue apareciendo manchado de sangre en la mansión?",
        answers: [
            {answer: "Una estatua", isCorrect: false},
            {answer: "Un espejo", isCorrect: false},
            {answer: "Un cuadro", isCorrect: false},
            {answer: "Una alfombra", isCorrect: true}
        ],
        block: 1
    },
    {
        id: "7",
        question: "¿En qué año se publicó 'Don Quijote de la Mancha' de Miguel de Cervantes?",
        answers: [
            {answer: "1492", isCorrect: false},
            {answer: "1605", isCorrect: true},
            {answer: "1776", isCorrect: false},
            {answer: "1815", isCorrect: false}
        ],
        block: 2
    },
    {
        id: "8",
        question: "¿Qué recurso literario se utiliza cuando el autor interrumpe la narración para dirigirse directamente al lector?",
        answers: [
            {answer: "Flashback", isCorrect: false},
            {answer: "Apóstrofe", isCorrect: true},
            {answer: "Sátira", isCorrect: false},
            {answer: "Epíteto", isCorrect: false}
        ],
        block: 2
    },
    {
        id: "9",
        question: "¿Cómo se llama el protagonista principal de 'Los Miserables'?",
        answers: [
            {answer: "Cosette", isCorrect: false},
            {answer: "Marius Pontmercy", isCorrect: false},
            {answer: "Jean Valjean", isCorrect: true},
            {answer: "Javert", isCorrect: false}
        ],
        block: 2
    },
    {
        id: "10",
        question: "¿Qué satiriza Swift en 'Los viajes de Gulliver'?",
        answers: [
            {answer: "La religión", isCorrect: false},
            {answer: "La política y la sociedad de su tiempo", isCorrect: true},
            {answer: "La ciencia ficción", isCorrect: false},
            {answer: "El romanticismo", isCorrect: false}
        ],
        block: 2
    },
    {
        id: "11",
        question: "En el Libro 'De la tierra a la luna' de Julio Verne, ¿Quién es el presidente del Gun Club que propone la misión a la luna?",
        answers: [
            {answer: "Michel Ardan", isCorrect: false},
            {answer: "Captain Nemo", isCorrect: false},
            {answer: "Phileas Fogg", isCorrect: false},
            {answer: "Impey Barbicane", isCorrect: true}
        ],
        block: 2
    },
    {
        id: "12",
        question: "¿Qué es un 'narrador omnisciente'?",
        answers: [
            {answer: "Un narrador que participa activamente en la historia", isCorrect: false},
            {answer: "Un narrador que sabe todo lo que piensan y sienten los personajes", isCorrect: true},
            {answer: "Un narrador que solo conoce lo que el protagonista sabe", isCorrect: false},
            {answer: "Un narrador que habla directamente al lector", isCorrect: false}
        ],
        block: 2
    },
    {
        id: "13",
        question: "¿Qué género literario se caracteriza por relatar eventos que ocurren en un mundo imaginario con elementos mágicos?",
        answers: [
            {answer: "Realismo mágico", isCorrect: false},
            {answer: "Fantasía", isCorrect: true},
            {answer: "Ciencia ficción", isCorrect: false},
            {answer: "Novela histórica", isCorrect: false}
        ],
        block: 3
    },
    {
        id: "14",
        question: "¿Qué es un 'protagonista'?",
        answers: [
            {answer: "El autor del libro", isCorrect: false},
            {answer: "El personaje secundario", isCorrect: false},
            {answer: "El personaje principal de la historia", isCorrect: true},
            {answer: "El narrador de la historia", isCorrect: false}
        ],
        block: 3
    },
    {
        id: "15",
        question: "¿A qué género literario pertenece 'Drácula' de Bram Stoker?",
        answers: [
            {answer: "Ciencia ficción", isCorrect: false},
            {answer: "Fantasía", isCorrect: false},
            {answer: "Terror", isCorrect: true},
            {answer: "Romance", isCorrect: false}
        ],
        block: 3
    },
    {
        id: "16",
        question: "¿En cuántas partes se divide 'La Divina Comedia' y cómo se llaman?",
        answers: [
            {answer: "Dos partes: Infierno y Paraíso", isCorrect: false},
            {answer: "Tres partes: Infierno, Purgatorio y Paraíso", isCorrect: true},
            {answer: "Cuatro partes: Infierno, Purgatorio, Paraíso y Limbo", isCorrect: false},
            {answer: "Una parte: Infierno", isCorrect: false}
        ],
        block: 3
    },
    {
        id: "17",
        question: "¿Quién es 'El Chacho' a quien se refiere Domingo Sarmiento en su libro?",
        answers: [
            {answer: "Un caudillo argentino llamado Ángel Vicente Peñaloza", isCorrect: true},
            {answer: "Un famoso gaucho de la literatura argentina", isCorrect: false},
            {answer: "Un personaje ficticio de las pampas argentinas", isCorrect: false},
            {answer: "Un presidente argentino", isCorrect: false}
        ],
        block: 3
    },
    {
        id: "18",
        question: "¿Qué busca el Espantapájaros en 'El Mago de Oz'?",
        answers: [
            {answer: "Un corazón", isCorrect: false},
            {answer: "Un cerebro", isCorrect: true},
            {answer: "Valor", isCorrect: false},
            {answer: "Su hogar", isCorrect: false}
        ],
        block: 3
    }
];

export default Questions;