const formatTime = (time) => {
    const dtFormat = new Intl.DateTimeFormat('id-ID', {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: 'UTC',
    });

    return dtFormat.format(new Date(time));
};

export default formatTime;