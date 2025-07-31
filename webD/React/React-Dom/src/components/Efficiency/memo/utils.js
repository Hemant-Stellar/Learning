export function createTodos(){
    const todos = [];
    for(let i = 0; i < 50 ; i++){
        todos.push({
            id : i,
            text : "Todo" + (i+1),
            completed : (Math.random() > 0.5)
        })
    }
    return todos;
}