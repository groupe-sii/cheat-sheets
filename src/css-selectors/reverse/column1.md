# Universal selector

"__*__" is used to apply style on __EVERY__ element. He is called __universal selector__.
```css
* { } /*targets every element in the DOM*/
div * { } /*targets every element inside a <div> element*/
```
|         |         |
|---------|---------|
|<span class="inline-img">![WARNING : ](../assets/images/warning-icon.png)</span> | <small>*Don't use it too much, be precise in elements selection, your browser and collegues will thank you...*</small>|

# Combinators

## Multiple selectors

Select an element with multiple selectors at once, the element has to have all the conditions to be selected:

```css
#myId.myClass
```

## Child combinator

Select an element that is a child of an other element with the `space` combinator.

```css
#myId  .myClass
```

Select an element that is a **direct** child of an other element with the `>` combinator.

```css
#myId > .myClass
```

## Adjacent combinator

Select an element that is adjacent to an other element with the `~` combinator. Both elements have to have the same **direct** parent and `#myId` is one of the elements placed before `.myClass` in the DOM.

```html
<div class="parent">
  <div id="myID"></div>
  <div class="separator"></div>
  <div class="myClass"></div>
</div>
```
```css
.parent #myId ~ .myClass
```
