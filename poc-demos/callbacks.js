/* Task A - takes 4 sec (each second is a microtask)
   Task B - takes 3 sec (each second is a microtask)

   Option 1: A1 - A2 - A3 - B1 - B2 - B3 (7 seconds)
   Option 2: A1 - B1 - A2 - B2 - A3 - B3 (7 seconds)

   ...

   Asynchronous pragramming == managing concurrency 
   
   Async Pattern: 
    - callbacks
        + pro: simple enough
        + cons: readability (callback hell, inversion of control)

    -thunk
        + definition (synchronous and asynchronous)
        + relationship to closures
        + replace callbacks with thunks

    - Promises
        + then/catch syntax
        + async/await syntax


*/
