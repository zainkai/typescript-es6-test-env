class Trie {
  constructor() {
    this.map = {}
  }

  insert(s) {
    let key = ''
    // insert path
    for(let i = 0; i < s.length +1; i++) {
      const child = s.slice(0,i)
      if(this.map[key] === undefined) this.map[key] = []
      if(!this.map[key].includes(child)) this.map[key].push(child)
      key = child
    }

    //insert word
    if(this.map[s] === undefined) {
      this.map[s] = [s]
    } else if(!this.map[s].includes(s)) {
      this.map[s].push(s)
    }
  }
  search(s) {
    // only return word
    return this.map[s] !== undefined && this.map[s].includes(s)
     ? true
     : false
  }
  prefix(s) {
    // only return path
    return this.map[s] !== undefined
     ? true
     : false
  }
}


const trie = new Trie();

trie.insert("apple")
console.log(trie.search("apple")) // returns true
console.log(trie.search("app")) // returns false
console.log(trie.prefix("app")) // returns true
trie.insert("app")
console.log(trie.search("app")) // returns true
console.log(trie)