type Size = "normal" |  "large"

export function score (contrast: number, size: Size ) {
    if (size === "large") return largeScore(contrast)
    if (size === "normal") return normalScore(contrast)
    throw new Error("Unreachable");
}

const largeScore = (constrast: number) => {
    if (constrast >= 4.5) {
        return 'AAA';
    }

    if (constrast >= 3) {
        return 'AA';
    }

    return 'Fail'
}

const normalScore = (constrast: number) => {
    if (constrast >= 7) {
        return 'AAA';
    }

    if (constrast >= 4.5) {
        return 'AA';
    }

    return 'Fail'
}