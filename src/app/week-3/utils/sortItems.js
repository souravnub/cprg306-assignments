function sortByString(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

export default function sortItems(items, sortBy) {
    return items.sort((a, b) => {
        if (sortBy === "name") {
            return sortByString(a.name, b.name);
        } else if (sortBy === "category") {
            return sortByString(a.category, b.category);
        }
    });
}
