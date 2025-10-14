export const slideAndMergeRow = (row: number[]): { newRow: number[]; score: number } => {
    // Filter out zeros
    const filteredRow = row.filter(cell => cell !== 0);

    // Merge tiles
    let newScore = 0;
    for (let i = 0; i < filteredRow.length - 1; i++) {
        if (filteredRow[i] === filteredRow[i + 1]) {
            filteredRow[i] *= 2;
            newScore += filteredRow[i];
            filteredRow[i + 1] = 0;
        }
    }
    // Filter out new zeros
    const mergedRow = filteredRow.filter(cell => cell !== 0);

    const newRow = [...mergedRow, ...Array(row.length - mergedRow.length).fill(0)];

    return { newRow, score: newScore };
};
