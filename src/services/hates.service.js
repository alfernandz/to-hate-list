
export const hatesService = {
    getHates,
    setHate,
    deleteHates,
};

function getHates() {
    return JSON.parse(localStorage.getItem('hates'));
}

function setHate(hate) {
    const hates = getHates() || [];
    hates.push(hate)
    localStorage.setItem('hates', JSON.stringify(hates));
    return hates;
}

function deleteHates() {
    localStorage.removeItem('hates');
    return null;
}