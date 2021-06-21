/**
 * Strategies
 */
function Fedex() {
  this.calculate = package => {
    // fedex calculations ...
    return 2.45
  }
}

function UPS() {
  this.calculate = package => {
    // ups calculations ...
    return 1.56
  }
}

function USPS() {
  this.calculate = package => {
    // usps calculations ...
    return 4.5
  }
}

/**
 * Strategy Manager
 */
function Shipping() {
  this.company = ''

  this.setStrategy = company => {
    this.company = company
  }

  this.calculate = package => {
    return this.company.calculate(package)
  }
}

const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS()
const package = { from: 'Cairo', to: 'Alex', weight: 1.56 }

// console.log(ups.calculate(package))

const shipping = new Shipping()

shipping.setStrategy(fedex)
console.log('Fedex: ', shipping.calculate(package))

shipping.setStrategy(ups)
console.log('UPS: ', shipping.calculate(package))

shipping.setStrategy(usps)
console.log('USPS: ', shipping.calculate(package))
