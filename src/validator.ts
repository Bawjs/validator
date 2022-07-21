export default class Validator {
	/**
	 * Check if the email address is valid or not.
	 *
	 * @param email Email to validate
	 * @returns true if email is valid
	 */
	static email(email: string): boolean {
		return /^[\w\.]+@[\w\.\-]+(\.[a-z]+)+$/i.test(email)
	}

	/**
	 * Check if the date is valid in the following formats: [YYYY-MM-DD, YYYY-DD-MM, YYYY/DD/MM, YYYY/MM/DD, YYYY.MM.DD, YYYY.DD.MM]
	 *
	 * @param date Date to validate
	 * @returns True if date is valid
	 */
	static date(date: string): boolean {
		return /^([0-9]{4}\-([0-3]{1}[0-9]{1}|[0-1]{1}[0-9]{1})\-([0-3]{1}[0-9]{1}|[0-1]{1}[0-9]{1})|[0-9]{4}\.([0-3]{1}[0-9]{1}|[0-1]{1}[0-9]{1})\.([0-3]{1}[0-9]{1}|[0-1]{1}[0-9]{1})|[0-9]{4}\/([0-3]{1}[0-9]{1}|[0-1]{1}[0-9]{1})\/([0-3]{1}[0-9]{1}|[0-1]{1}[0-9]{1}))$/.test(
			date
		)
	}
}
