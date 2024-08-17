import WinPhrases from "../../config/WinPhrasesMemory"

export default function getPhrase(score: number): {title: string, desc: string} {
    let scoreBlockAsign: string;
    if (score <= 4) {
        scoreBlockAsign = 'low';
    } else if (score <= 9) {
        scoreBlockAsign = 'medium';
    } else {
        scoreBlockAsign = 'high';
    }

    const filteredPhrases = WinPhrases.filter(phrase => phrase.score === scoreBlockAsign);
    const randomPhrase = filteredPhrases[Math.floor(Math.random() * filteredPhrases.length)];

    return {
        title: randomPhrase.title,
        desc: randomPhrase.desc,
    };
}
