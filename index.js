const quotes = [
    "Live by the sword, die by the sword",
    "Anger leads to hate, hate to suffering, suffering to the darkside",
    "Life is like a box of chocolates",
    "Get busy living, or get busy dying",
    "Happiness is a state of mind"
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}