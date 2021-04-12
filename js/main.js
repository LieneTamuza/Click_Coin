let totalCoins = 0;
let availableCoins = 0;
let smallUpgradeCount = 0;
let smallUpgradePrice = 10;
let bigUpgradeCount = 0;
let bigUpgradePrice = 90;

setInterval(function () {
    if (availableCoins < smallUpgradePrice) {
        document.getElementById('buy-small-upgrade').disabled = true;
    } else {
        document.getElementById('buy-small-upgrade').disabled = false;
    }
    totalCoins += smallUpgradeCount / 100;
    availableCoins += smallUpgradeCount / 100;

    if (availableCoins < bigUpgradePrice) {
        document.getElementById('buy-big-upgrade').disabled = true;
    } else {
        document.getElementById('buy-big-upgrade').disabled = false;
    }
    totalCoins += bigUpgradeCount / 10;
    availableCoins += bigUpgradeCount / 10;

    document.querySelector('#total-coins span').innerHTML = totalCoins.toFixed(0);
    document.querySelector('#available-coins span').innerHTML = availableCoins.toFixed(0);
    document.querySelector('#small-upgrade-count').innerHTML = smallUpgradeCount;
    document.querySelector('#big-upgrade-count').innerHTML = bigUpgradeCount;
    document.querySelector('#small-upgrade-price').innerHTML = smallUpgradePrice.toFixed(0);
    document.querySelector('#big-upgrade-price').innerHTML = bigUpgradePrice.toFixed(0);
}, 10);

document.getElementById('click-me').addEventListener('click', function () {
    totalCoins++;
    availableCoins++;
});

document.getElementById('buy-small-upgrade').addEventListener('click', function () {
    smallUpgradeCount++;
    availableCoins -= smallUpgradePrice;
    smallUpgradePrice *= 1.1;
});

document.getElementById('buy-big-upgrade').addEventListener('click', function () {
    bigUpgradeCount++;
    availableCoins -= bigUpgradePrice;
    bigUpgradePrice *= 1.1;
});