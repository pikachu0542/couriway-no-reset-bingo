/**
 * Generates a random integer within a specified range (inclusive)
 * @param min The lower bound of the range
 * @param max The upper bound of the range
 * @returns A randomly generated integer within the specified range
 */
export function RandomRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}