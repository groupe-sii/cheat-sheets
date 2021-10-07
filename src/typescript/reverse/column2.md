# Inheritance

_validation.ts_

```
export abstract class StringValidator {
    abstract isAcceptable(s: string): boolean;
}

let lettersRegexp = /^[A-Za-z]+$/,
    numberRegexp = /^[0-9]+$/;

export class Letters extends StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}
```

# Module import

_random.ts_

```
export default function random() {
    return Math.random();
}
```

_hello-world.ts_

```
import { StringValidator, Letters } from './validation'

import random from './hello-world'
import { random as RD } from './hello-world'
```

# Elvis operator
Test existence of an element :
```
let x = foo?.bar;
// is equivalent to
let x = foo === null || foo === undefined ? undefined : foo.bar;
```
