export const formatDate = (dateToTransform: string) => {
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ];

    const date = new Date(dateToTransform);

    const day = date.getDay();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}г.`;
};
