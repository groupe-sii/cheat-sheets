Date : __Feb 2018__

# Element

Used to apply style on all the elements targeted by their __tag__ name :

```css
div { } /*targets all <div> elements*/
span { } /*targets all <span> elements*/
input { } /*targets all <input> elements*/
```
# Class

`.` is a __class__ selector. It targets every element with a specific class attribute :

```css
.my-class { } /*targets every element with the "my-class" class*/
div.my-class { } /*targets every div with "my-class" class*/
```
# Id

`#` is the __id__ selector. It targets every element with a specific id attribute :

```css
#my-id { } /*targets every element with the "my-id" id*/
```

<small>(note that an id should be unique and applied to only one element but the css will be applied anyway on every element with the same id attribute ! )</small>

# Attributes

You can target an element by any of its attributes and attributes value :

```css
[alt] { } /*targets every element with an alt attribute */
input[type="checkbox"] { } /*targets every <input> element with the "type" attribute value set to "checkbox"*/
```

You can also use regex in your attribute selector :

```css
a[href*="www"] { } /*targets every <a> element with a "href" attribute value containing "www"*/
```
