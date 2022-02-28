## Run javascript with Nodejs

### Prerequisites
- Nodejs

### Node Project folder structure


```
project
    |--- 📁 src
    |--- 📁 node_modules
    +--- package.json
```

### Install packages
This will create __📁 node_modules__ and install all packages from __package.json__.

```
lab1$> npm install
```

### Run Challenge

There are some examples and challenges. once you implement challenge, you can run challenge using following example.
```
lab1$> node src/index.js $challenge $arg1 $arg2 ...
```

### Challenge Topics

- How to import modules
- Javascript object, array and spread expression
- Array operations
- Arrow functions, inline function
- Promise functions

#### Import Module

- how to import functions
```javascript
// import export default function, you can name default function freely.
// you can export only one default function from a module.
// default function name is commonly same as module name.
import moduleA from './moduleA'

// import exported functions
import {funcA,funcB, funcC} from './moduleA'

// use alias function name
import {funcA as fa,funcB, funcC} from './moduleA'

// import all exported functions with namespace. 
// call function => ma.funcA
import * as ma from './moduleA'

// import with index file
import ... from './package'

```
- how to export functions
```js
//package/moduleA.js
export default ()=>{}

export const funcA =()=>{}
export const funcB =()=>{}
export const funcC =()=>{}
```
- Use index file to export functions from your package.

```js
//package/index.js

import moduleA from './moduleA'
export * from './moduleA'
export {moduleA}
```

