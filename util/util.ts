/**
 * Generates a random number between the specified minimum (inclusive) and maximum (exclusive)
 * @param min The lower bound of the range to generate from
 * @param max The upper bound of the range to generate from
 * @returns A pseudorandomly generated integer within the specified range
 */
export function RandomRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}