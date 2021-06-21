// External API Service
function CryptocurrencyAPI() {
  this.getValue = function (coin) {
    console.log('Calling External API...')

    switch (coin) {
      case 'Bitcoin':
        return '$3,500'
      case 'Litecoin':
        return '$50'
      case 'Ethereum':
        return '$175'
    }
  }
}

// ==============================

// const api = new CryptocurrencyAPI()

// console.log(api.getValue('Bitcoin'))
// console.log(api.getValue('Litecoin'))
// console.log(api.getValue('Ethereum'))

function CryptocurrencyProxy() {
  this.api = new CryptocurrencyAPI()
  this.cache = {}

  this.getValue = function (coin) {
    if (!this.cache[coin]) {
      this.cache[coin] = this.api.getValue(coin)
    }
    return this.cache[coin]
  }
}

const proxy = new CryptocurrencyProxy()

console.log(proxy.getValue('Bitcoin'))
console.log(proxy.getValue('Litecoin'))
console.log(proxy.getValue('Ethereum'))

console.log(proxy.getValue('Bitcoin'))
console.log(proxy.getValue('Litecoin'))
console.log(proxy.getValue('Ethereum'))
console.log(proxy.getValue('Bitcoin'))
console.log(proxy.getValue('Litecoin'))
console.log(proxy.getValue('Ethereum'))
console.log(proxy.getValue('Bitcoin'))
console.log(proxy.getValue('Litecoin'))
console.log(proxy.getValue('Ethereum'))
