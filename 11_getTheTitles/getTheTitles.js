const getTheTitles = function(books) {
    const titles = books.reduce((arr, book) => {
        arr.push(book.title);
        return arr;
    }, [])

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
