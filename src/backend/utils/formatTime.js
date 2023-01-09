export const formatTime = (time) => {
	const dtFormat = new Intl.DateTimeFormat("id-ID", {
		dateStyle: 'short',
        timeStyle: 'medium',
		timeZone: "UTC",
	});

	return dtFormat.format(new Date(time));
};
