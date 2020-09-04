/**
 * Utilities for working with {@link string}s.
 */
export default class Strings {
  private static SPLIT_WITH_QUOTE_PATTERN = /\s*(?:(["'])([^]*?)\1|(\S+))\s*/g;

  /**
   * Splits a string into a string array, split by spaces into words.
   *
   * Handles double and single quotes in the string, considering the inner portion
   * of the quotes a a single string.
   *
   * Double quotes are stripped from the beginning and end of each string.
   *
   * **Example:**
   * - **Input:** `hello "this fantastic" world`
   * - **Output:** `["hello", "this fantastic", "world"]`
   *
   * TODO: Support escaped quotes inside quotes.
   *
   * @param input The string to break apart into words.
   * @return String array containing the input string split into words, with
   *         sections in quotes considered their own string.
   */
  static splitWithQuotes(input: string): string[] {
    const clean = input.trim();
    const list: string[] = [];

    const pattern = Strings.SPLIT_WITH_QUOTE_PATTERN;

    let match = pattern.exec(clean);
    while (match) {
      list.push(match[2] || match[3]);
      match = pattern.exec(clean);
    }
    return list;
  }
}
