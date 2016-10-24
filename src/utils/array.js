const Array = class Array {};

Array.remove = (array, element) => {
    if (!array || array.length == 0) {
        return array;
    }

    const index = array.indexOf(element);

    if (index == -1) {
        return array;
    }

    array.splice(index, 1);

    return array;
};

Array.addOrRemove = (array, element) => {
    if (array.includes(element)) {
        return Array.remove(array, element);
    }

    array.push(element);

    return array;
};

export default Array;
