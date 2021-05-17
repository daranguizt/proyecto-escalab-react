
export const isFavorite = (manga, list) => {
    return list.find((item) => item.id === manga?.id);
}