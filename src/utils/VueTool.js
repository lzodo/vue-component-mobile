import Vue from 'vue'

Vue.prototype.handleGoto = function (type, query) {
    let q = query || {};
    this.$router.push({
        path: type,
        query: q
    });
}