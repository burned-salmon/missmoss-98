var sites = [];

sites.push("curiocities.neocities.org");
sites.push("missmoss.neocities.org");
sites.push("curiocities.neocities.org");

var thisSite = -1;
for (var i = 0, n = sites.length; i < n; i++) {
  if (location.host.indexOf(sites[i]) != -1) {
    thisSite = i;
  }
}
thisSite = 1;
var result = '';
result += '<a href="https://' + sites[thisSite < 1 ? sites.length - 1 : thisSite - 1] + '"><img src="https://nuthead.neocities.org/ring/prev.png" alt="Prev" /></a>';
result += '<a href="https://missmoss.neocities.org/ring/enderweb/"><img src="https://i.pinimg.com/originals/26/66/b1/2666b1b713885e8ffaaed82b1615b7e3.png" height="32px" /></a>'
result += '<a href="https://' + sites[thisSite >= sites.length - 1 ? 0 : thisSite + 1] + '"><img src="https://nuthead.neocities.org/ring/next.png" alt="Next"/></a>';
document.write(result);
