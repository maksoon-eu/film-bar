export const statusTranslation = (status: string) => {
    const statusList = [
        { name: 'announced', translate: 'анонсирован' },
        { name: 'completed', translate: 'завершен' },
        { name: 'filming', translate: 'в процессе съемки' },
        { name: 'post-production', translate: 'окончательный монтаж' },
        { name: 'pre-production', translate: 'подготовка к производству' },
    ];

    const foundStatus = statusList.find((statusItem) => statusItem.name === status);

    return foundStatus?.translate;
};
