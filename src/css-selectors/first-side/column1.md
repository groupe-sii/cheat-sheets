Date : __Feb 2018__

# Element

Used to apply style on all the elements targeted by their __tag__.

```css
div { } /*targets all <div> elements*/
span { } /*targets all <span> elements*/
input { } /*targets all <input> elements*/
```
# Class

"__.__" is a __class__ selector. It targets every element with a specific class attribute.

```css
.myClass { } /*targets every element with the "myClass" class*/
div.myClass { } /*targets every div with "myClass" class*/
```
# Id

"__#__" is the __id__ selector. It targets every element with a specific id attribute.

(note that an id should be unique and applied to only one element but the css will be applied anyway on every element with the same id attribute ! )

```css
#myId { } /*targets every element with the "myId" id*/
```
# Attributes

You can target an element by any of its attributes and attributes value.

```css
[alt] { } /*targets every element with an alt attribute */
input[type="checkbox"] { } /*targets every <input> element with the "type" attribute value set to "checkbox"*/
```

You can specify that you want to filter by only a part of the attribute value.

<small>\* *__word__ has to be either alone, or followed by a hyphen ( - )*</small>
