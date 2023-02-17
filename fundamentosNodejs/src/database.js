

export class DataBase {
  #database = {};

  selected(table){
    const data = this.#database[table] ?? []
    return data
  }

  insert(table, data){
    if(Array.isArray(this.#database[table])){
      this.#database[table].push(data)
    }else{
      this.#database[table] = data
    }
    return
  }
}
