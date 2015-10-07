# Note: Experimental

transform AMD module definition to ES6 syntax
========================

[Motivation](https://github.com/thomasloh/5to6)

Converts (partial) ES5 code to ES6. Converted files are expected to be used with  ES6 transpilers like Babel.

Uses [recast](https://github.com/benjamn/recast) to get code's AST and detect then modify certain syntax to the equivalent in ES6. Semantics don't change, only the syntax.

# Supported conversions

```javascript

define(['foo', 'bar'], function(Foo, Bar){
        Foo.xxx();
        Bar.yyy();
        return {
            value: 'xxx'
        };
});
=>
import Foo from 'foo';
import Bar from 'bar';

Foo.xxx();
Bar.yyy();
export default {
    value: 'xxx'
};

```

# Usage

```bash
transform -s src    # converts all js or jsx files in "src" folder (relative to current directory)

```
Huge credit goes to [recast](https://github.com/benjamn/recast) by [benjamn](https://github.com/benjamn)
