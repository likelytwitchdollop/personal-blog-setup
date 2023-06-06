const Colors = {}

const getFormattedDate = (dateString: string): string => {
	return new Intl.DateTimeFormat('en-ZW', { dateStyle: 'long' }).format(
		new Date(dateString)
	)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	Colors,
	getFormattedDate,
}
