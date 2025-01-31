const getTotalAmount = (listEntries) => {
  return listEntries.reduce((total, entry) => {
    return total + entry.price
  }, 0)
}

module.exports = getTotalAmount
