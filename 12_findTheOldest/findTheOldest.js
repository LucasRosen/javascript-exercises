const findTheOldest = function(people) {
    const sortedByAge = people.sort((a, b) => {
        if (!a.yearOfDeath) {a.yearOfDeath = 2024};
        if (!b.yearOfDeath) {b.yearOfDeath = 2024};

        const lastPerson = a.yearOfBirth - a.yearOfDeath;
        const nextPerson = b.yearOfBirth - b.yearOfDeath;

        return lastPerson > nextPerson ? 1 : -1;
    })

    return sortedByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
