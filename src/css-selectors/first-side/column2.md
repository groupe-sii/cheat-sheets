```css
a[href^="https://"] { } /*targets every <a> element with a "href" attribute value beginning with "https://"*/
a[href$=".com"] { } /*targets every <a> element with a "href" attribute value ending with ".com"*/

a[href~="example"] { } /*targets every <a> element with a "href" attribute value containing the word* "example"*/
a[href|="example"] { } /*targets every <a> element with a "href" attribute value beginning with the word* "example"*/

a[href*="www"] { } /*targets every <a> element with a "href" attribute value containing "www"*/
```

# Pseudo-class

A __pseudo-class__ selector is a selector preceded by `:` or `::`. 

Some are used to apply style on a specific __state__ of an element.

```css
button:hover { } /*the style will apply on a button when the user's mouse hovers it*/
button:disabled { } /*the style will apply on every button with "disabled" attribute*/
a:visited { } /*targets the <a> elements the user has visited*/
```

Others are used to targets specific elements by their __position__ in the DOM.

```css
div p:last-child { } /*targets the last <p> in a <div> element*/
div p:first-child { } /*targets the first <p> in a <div> element*/
div p:nth-child {even} /*targets all the even <p> elements in a <div> (even, odd, 1n, 2n, 2n+1, ...)
```

`:not()` pseudo-class can be used to __avoid__ applying style on specific elements.

It takes every selector type as argument.

```css
div:not(.myClass) { } /* targets every <div> that doesn't have the "myClass" class attribute.*/
div p:not(:last-child) { } /*targets all <p> elements in my <div> except the last one*/
input:not([type="checkbox"]) { } /*targets all <input> elements that are not checkboxes type*/
```
