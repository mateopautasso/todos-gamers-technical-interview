export const getFieldValues = <T>(formData: FormData) => {
	const fields = Object.fromEntries(formData.entries().filter((entry) => entry[0][0] !== '$'))
	return fields as T
}
