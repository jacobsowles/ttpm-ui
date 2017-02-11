module.exports = {
    groupBy(items, key) {
        return items.reduce((accumulated, currentItem) => {
            const value = key instanceof Function ? key(currentItem) : currentItem[key];
            const item = accumulated.find(item => item && item.key === value);

            if (item) {
                item.values.push(currentItem);
            } else {
                accumulated.push({ key: value, values: [currentItem] });
            }

            return accumulated;
        }, []);
    }
};
