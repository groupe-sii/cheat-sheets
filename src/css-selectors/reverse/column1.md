# Universal selector

`*` is used to apply style on __EVERY__ element. He is called __universal selector__.
```css
* { } /*targets every element in the DOM*/
div * { } /*targets every element inside a <div> element*/
```
|         |         |
|---------|---------|
|<span class="inline-img">![WARNING : ](../assets/images/warning-icon.png)</span> | <small>*Don't use it too much, your browser and collegues will thank you...*</small>|

# Combinators

## Multiple selectors

Using multiple selectors without space, you target every element that fullfills all the conditions.

```css
button#my-id.my-class
```

## Child combinators

You can target an element that is a child of another element with the `space` combinator.

```css
#parent-id  .child-class
```

You can target an element that is a **direct** child of another element with the `>` combinator.

```css
#parent-id > .direct-child-class
```

## Adjacent combinator

The `~` combinator is used to target an element that shares its direct parent with another element and is preceded by this element.
```html
<div class="parent">
  <div class="my-class"></div>
  <div id="my-iD"></div>
  <div class="separator"></div>
  <div class="my-class"></div>
</div>
```
```css
#my-id ~ .my-class /*here we are targeting the second ".my-class" element above*/
```

