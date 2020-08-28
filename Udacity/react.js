function Sandwich(bread, meat, vegetables){
    this.bread = bread;
    this.meat = meat;
    this.vegetables = vegetables;
}

let sub = new Sandwich('whole wheat', ['salami', 'prosciutto'], ['lettuce, tomato'])

console.log(sub);