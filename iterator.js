const items = [1, 'instabug', false, 1.24]

function Iterator(items) {
  this.items = items
  this.index = items.length - 1
}

Iterator.prototype = {
  hasNext: function () {
    return this.index >= 0
  },
  next: function () {
    return this.items[this.index--]
  }
}

const iterator = new Iterator(items)

while (iterator.hasNext()) {
  console.log(iterator.next())
}
