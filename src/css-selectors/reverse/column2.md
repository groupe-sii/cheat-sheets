
## Siblings combinator
The `+` combinator is used to select an element that shares its direct parent with another element and is **directly** preceded by this element.
```html
<div class="parent">
  <div id="my-iD"></div>
  <div class="my-class"></div>
</div>
```

```css
#my-id + .my-class
```

# Priority rules

## Specificity

If an element is targeted twice, the style defined with the most **specific** selector will override the others.
Two classes with a combinator are more specific than a single class, but a single ID is more specific than mutliple classes, respecting this pattern : inline style > id > class, attribute and pseudo-class > element and pseudo-element.

In the picture below, the second example is more specific than the first.

![specificity](../assets/images/css-selectors-specificity.png)


<small>**source : ** [ https://specificity.keegan.st/]( https://specificity.keegan.st/)</small>

## Chronology

If a property is defined twice for the same element and with equal specificity, the last occurence in the stylesheet will override the first.

## But...

|         |         |
|---------|---------|
|<span class="inline-img">![WARNING : ](../assets/images/warning-icon.png)</span> | <small>*Don't use `!important` it will break everything said above*</small>|

