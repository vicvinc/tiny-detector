# simple and tiny browser dector

```javascript
import Dector from "tiny-dector";

const d = new Dector();

console.log(d);
```

the dector instance contains the below attributes.

PC:

```json
{
  "browser": "Chrome",
  "device": "PC",
  "engine": "Blink",
  "os": "Mac OS",
  "osVersion": "10.14.2",
  "version": "71.0.3578.98"
}
```

Mobile:

```json
{
  "browser": "Safari",
  "device": "Mobile",
  "engine": "WebKit",
  "os": "iOS",
  "osVersion": "Mozilla/5.0 (iPhone; CPU iPhone OS 11.0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
  "version": "11.0"
}
```
