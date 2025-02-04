/**
 * Converts a string to start with uppercase and makes the rest lowercase
 * @param str - The input string to be converted
 * @returns The converted string with first letter uppercase and rest lowercase
 * @example
 * capitalizeFirstLetter("hELLo WoRLD") // returns "Hello world"
 * capitalizeFirstLetter("JOHN") // returns "John"
 */
export const capitalizeFirstLetter = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Converts each word in a string to start with uppercase and makes the rest lowercase
 * @param str - The input string to be converted
 * @returns The converted string with each word capitalized
 * @example
 * capitalizeEachWord("hello world") // returns "Hello World"
 * capitalizeEachWord("JOHN DOE") // returns "John Doe"
 */
export const capitalizeEachWord = (str: string): string => {
  if (!str) return str;
  return str
    .split(' ')
    .map(word => capitalizeFirstLetter(word))
    .join(' ');
};

/**
 * Converts a string to lowercase, typically used for email addresses
 * @param str - The input string to be converted
 * @returns The converted string in lowercase
 * @example
 * toLowerCase("Test@EXAMPLE.com") // returns "test@example.com"
 * toLowerCase("John.Doe@Company.COM") // returns "john.doe@company.com"
 */
export const toLowerCase = (str: string): string => {
  if (!str) return str;
  return str.toLowerCase();
};

/**
 * Validates and cleans a name string by removing special characters and numbers
 * @param str - The input string to be validated and cleaned
 * @returns The cleaned string with only letters and spaces
 * @example
 * cleanName("John123") // returns "John"
 * cleanName("Mary@Smith") // returns "Mary Smith"
 */
export const cleanName = (str: string): string => {
  if (!str) return str;
  // Replace special characters and numbers with spaces, then normalize spaces
  const cleaned = str.replace(/[^a-zA-Z\s-]/g, ' ').replace(/\s+/g, ' ').trim();
  return cleaned;
};

/**
 * Checks if a string contains only letters and spaces
 * @param str - The input string to be validated
 * @returns boolean indicating if the string is valid
 * @example
 * isValidName("John") // returns true
 * isValidName("John123") // returns false
 */
export const isValidName = (str: string): boolean => {
  if (!str) return true; // Empty string is considered valid for form validation purposes
  return /^[a-zA-Z\s-]+$/.test(str);
};
