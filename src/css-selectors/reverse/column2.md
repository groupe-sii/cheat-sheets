
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

# Priority rules


## Chronology

If a property is defined and redefined with the same selector, this is the last occurence in the stylsheet that will be applied

## Precision

The more you specify selectors for an element, the more the properties inside have chances to be applied.

## Priority

Priority rules can be sorted in 4 different categories, with an ascending priority from right to left: 

![specificity](../assets/images/css-selectors-specificity.png)

<small>**source : ** [ https://specificity.keegan.st/]( https://specificity.keegan.st/)</small>

## But...

|         |         |
|---------|---------|
|<span class="inline-img">![WARNING : ](../assets/images/warning-icon.png)</span> | <small>*Don't use `!important` it will break everything above*</small>|
