String.prototype.equalsIgnoreCase = function (compareString) { return this.toUpperCase() === compareString.toUpperCase(); };

function getDomainName() {
    var hostname = window.location.hostname;
    var parts = hostname.split('.');
    return parts.length > 2 ? parts[parts.length-2] : parts[0];
}
const domainName = getDomainName();
let ads = null;
if(domainName.equalsIgnoreCase("google")) {
    ads = document.getElementById('taw');
    ads.style.display = "none";
} else if(domainName.equalsIgnoreCase("duckduckgo")) {
    ads = document.getElementById('ads');
    //ads.remove();
    ads.style.display = "none";
} else if(domainName.equalsIgnoreCase("bing")) {
    ads = document.getElementById("b_results").firstChild;
    ads.style.display = "none";
} else if(domainName.equalsIgnoreCase("startpage")) {
    if(document.querySelector(".block-display")) { // is adblock enabled?
        document.querySelector(".block-display").style.display = "none";
    } else {
        document.getElementById("master-1").style.display = "none";
        document.getElementById("slave-1-1").style.display = "none";
    }
}
console.log("[SEAR] Detected domain: " + domainName);