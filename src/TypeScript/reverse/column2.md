# Modules

_validation.ts_

```
export interface StringValidator {
    isAcceptable(s: string): boolean;
}

let lettersRegexp = /^[A-Za-z]+$/,
    numberRegexp = /^[0-9]+$/;

export class Letters implements StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}
```

_random.ts_

```
export default function random() {
    return Math.random();
}
```

# Module import

_hello-world.ts_

```
import { StringValidator, Letters } from './validation'

import random from './hello-world'
import { random as RD } from './hello-world'
```
