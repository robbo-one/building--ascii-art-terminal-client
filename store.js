const STORE = {}

// Store a file list as an object (effectively, a _hashmap_)
function setList (files, store = STORE) {
  files.forEach((f, i) => store[i] = f)
}

// Get a single filename by index
function getItem (index, store = STORE) {
  if (!store.hasOwnProperty(index)) {
    throw new Error("Sorry, that option doesn't exist.")
  }

  return { [index]: store[index] }
}

// Get a formatted list of files with associated keys
function getList (store = STORE) {
  return Object.keys(store).map(k => `${k}. ${store[k]}`)
}

module.exports = {
  getItem,
  getList,
  setList
}
