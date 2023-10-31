export function parseParts(expression: string): {horizontal: string, vertical: string} {
    const parts = expression.split(",").map(s => s.trim());

    return {
        horizontal: parts[0],
        vertical: parts[1] || parts[0]
    };
}

export function toSize(size: string | undefined) {
    if (!size) {
        return "1rem";
    }

    if (size.endsWith("pt")) {
        var sizePt = parseInt(size.substring(0, size.length - 2))
        return `${sizePt / 8}rem`;
    }

    return "1rem";
}

export function *gridCoordinates(width: number, height: number): IterableIterator<{x: number, y: number}> {
    for (let y = height; y >= 1; y--) {
        for (let x = 1; x <= width; x++) {
            yield {x, y};
        }
    }
}