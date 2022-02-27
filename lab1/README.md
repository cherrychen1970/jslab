## Run javascript with Nodejs

### Prerequisites
- Nodejs

### Node Project folder structure


```ditaa {cmd=true args=["-E"]}
project
    |
    +--- src
    |
    +--- package.json
    |
    +--- node_modules
```

### Install packages
This will create ==node_modules== folder and install all packages.

```
$ npm install
```


### Run hello.js script
```
$ node src/hello.js
```

### Challenge Topics

- How to import modules
- Javascript object, array and spread expression
- Array operations
- Arrow functions, inline function
- Promise functions

#### Import Module

```javascript
// import export default function, you can name default function freely.
// you can export only one default function from a module.
// default function name is commonly same as module name.
import moduleA from 'moduleA'

// import exported functions
import {funcA,funcB, funcC} from 'moduleA'

// use alias function name
import {funcA as fa,funcB, funcC} from 'moduleA'

// import all exported functions with namespace. 
// call function => ma.funcA
import * as ma from 'moduleA'

// import with index file
import ... from 'package'

```

### Run Challenge

Implement challenge and then run challenge script with challenge number
```
$ node src/index.js $challenge
```
