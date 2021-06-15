
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments)
}

gtag("consent", "default", {
    // ad_storage: "denied",
    // analytics_storage: "granted",
    // wait_for_update: 2000 // milliseconds
    'ad_storage': 'denied',
    'analytics_storage': 'granted',
    'functionality_storage': 'granted',
    'personalization_storage': 'granted',
    'security_storage': 'granted'
});

gtag("set", "ads_data_redaction", true);
console.log("gtm is great");

(function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-N47NT6J'); 
