var currentlySellingSoap = 0; //if the sell menu is open

sellSoapMenuModalContentIncreasePrice.onclick = function() {
  if (player.costs.sellprice) {
    player.costs.sellprice = Number(player.costs.sellprice);
    player.costs.sellprice += 0.05;
    player.costs.sellprice = Number(player.costs.sellprice).toFixed(2);
    O("sellSoapMenuModalContentCurrentPriceSpan").innerHTML = player.costs.sellprice;
    sellSoapChance();
  }
}

sellSoapMenuModalContentDecreasePrice.onclick = function() {
  if (player.costs.sellprice > 0.05) {
    player.costs.sellprice -= 0.05;
    player.costs.sellprice = Number(player.costs.sellprice).toFixed(2);
    O("sellSoapMenuModalContentCurrentPriceSpan").innerHTML = player.costs.sellprice;
    sellSoapChance();
  }
}

function sellSoapChance() {
    if (player.costs.sellprice > 1) {
        player.costs.sellchance = ((1 / (player.costs.sellprice - 1)) / player.costs.sellchancemodifier).toFixed(2);
        O("sellSoapMenuModalContentCurrentSellChanceSpan").innerHTML = player.costs.sellchance;
    } else {
        player.costs.sellchance = 1;
        O("sellSoapMenuModalContentCurrentSellChanceSpan").innerHTML = player.costs.sellchance;
    }
}

function sellSoapLoop () {
  console.log(player.misc.currentlySellingSoap)
  if ((Math.random() * 100 < Number(player.costs.sellchance)) && (player.inventory.soap >= 1)) {
    sellSoap();
    console.log("2")
  }
  console.log(player.misc.currentlySellingSoap)
  if (player.misc.currentlySellingSoap === 1) {
    console.log("3")
    setTimeout(sellSoapLoop, player.costs.sellSoapInterval); //sets a timeout for the function to happen again
  }
}

function sellSoap () {
    player.inventory.soap--;
    player.inventory.money += Number(player.costs.sellprice);
    O('soapAmount').innerHTML = player.inventory.soap;
    O('moneyAmount').innerHTML = player.inventory.money;
}

function createMarketerDiv () {

}

function buyMarketers () {
    if (player.inventory.moneyAmount >= 10) {
        player.inventory.moneyAmount -= 10;
        player.employees.marketers++;
    }
}

//// TODO: fix the thing
