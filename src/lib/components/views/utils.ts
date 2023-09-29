export function parseParts(expression: string): {horizontal: string, vertical: string} {
    const parts = expression.split(",").map(s => s.trim());

    return {
        horizontal: parts[0],
        vertical: parts[1] || parts[0]
    };
}