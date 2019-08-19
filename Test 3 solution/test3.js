// returns the index as stated in the question.
LowerIndex = (Magic, dist) => {
    let responseMagic, responsedist, difference, result;
    Magic = [3, 2, 5, 4];
    dist = [4, 3, 1, 3];
    if (!Array.isArray(Magic) || !Array.isArray(dist)) {
        return 'input only an array';
    }
    responseMagic = Magic.reduce((acc, item) => {
        return acc + item;
    }, 0);
    responsedist = dist.reduce((acc, item) => {
        return acc + item;
    }, 0);
    if (responsedist > responseMagic) {
        return -1;
    }
    else {
        difference = responseMagic - responsedist;
        result = Magic.indexOf(difference);
    }
    return result;
};

console.log(LowerIndex());