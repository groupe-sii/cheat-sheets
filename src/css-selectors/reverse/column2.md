
Select an element that is adjacent to an other element with the `+` combinator. Both elements have to have the same **direct** parent and `#myId` is placed **directly** before `.myClass` in the DOM.

```html
<div class="parent">
  <div id="myID"></div>
  <div class="myClass"></div>
</div>
```

```css
.parentElement #myId + .myClass
```
