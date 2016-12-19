# Bitwig API Proxy

This set of proxy classes wrap the Bitwig Controller Scripting API in a way that automatically caches observed properties and created objects, while having the added benefit of removing the need for stub files. It exists as part of the Typewig framework, but can be used generally.


## Installation

```bash
$ npm install --save bitwig-api-proxy
```

## Usage

Once you have setup an observer for the first time or called a create method...

```ts
import { host } from 'bitwig-api-proxy';


const transport = host.createTransport();
transport.addIsPlayingObserver(isPlaying => {/* ...do something */});
```

...the associated value will be added to the cache of the method's class instance (as shown below).

```ts
console.log(transport.cache.isPlaying);  // always reflects the current isPlaying state
```


## Limitations

The cache, while helpful, currently has its limitations. Cached property names will be the same for method calls with the same methodName, but different args. That means that if you call a create method more than once, each subsequent call will replace the associated cached reference. The same goes for observer methods.

