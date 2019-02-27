var api = 'http://127.0.0.1:11898';
var donationAddress = "";
var blockTargetInterval = 30; // enter the block interval in seconds
var coinUnits = 100;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
var totalSupply =  100000000000000; // enter the total supply in atomic units
var symbol = 'trtl'; // enter the coin's ticker
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
 "trtl": [
  ["Remix", "https://coinsforhash.com:8130"],
  ["Swap", "https://coinsforhash.com:8119"],
  ["Fred", "https://coinsforhash.com:8124"],
  ["Nibble", "https://coinsforhash.com:8125"],
  ["Dragonglass", "https://coinsforhash..gq:8120"],
  ["Minercoin", "https://coinsforhash.gq:8122"],
  ["Electronero Pulse", "https://coinsforhash.tk:8118"],
  ["Bitcoin Mono", "https://coinsforhash.tk:8120"],
  ["Rhodium", "https://coinsforhash.tk:8122"],
  ["Mox", "https://coinsforhash.tk:8130"],
  ["Catalyst", "https://coinsforhash.gq:8124"],
  ["Elphyre", "https://coinsforhash.com:8127"]
 ]
};

var networkStat2 = {
    "trtl": [
	[""]
 ]
};
