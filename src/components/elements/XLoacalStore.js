
module.exports = {
    set: function (key, value) {
        localStorage.setItem(key, value);
        console.log("***************LOCAL STORAGE" + localStorage.getItem(key))
    },
    get: function (key) {
        return localStorage.getItem(key);
    }
};

var zemba = function () {
}