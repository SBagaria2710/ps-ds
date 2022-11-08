function two_crystal_balls(breaks) {
    const jmpCount = Math.floor(Math.sqrt(breaks));

    let i = jmpCount;
    for (; i < breaks.length; i += jmpCount) {
        if (breaks[i]) break;
    }

    i -= jmpCount;
    for (let j = 0; j < jmpCount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) return i;
    }

    return -1;
}