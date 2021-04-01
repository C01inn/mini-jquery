# Jquery Petite

Jquery-petite is an tiny alternative to jquery. Jquery-Petite is less than 1.7kB gzipped compared to over 30kB gzipped for jquery. Jquery petite is very similar to jquery except it kept only the most used methods and reduced the bloat. This package was make to solve the problem of bloat.

## Selector

The selector used for jquery-petite is similar but not identical to the jquery-selector. The $ function takes in a selector string with the exact same syntax as the document.querySelector javascript function.

## Methods

All methods have the same functionality has the same method in the offical jquery package.

### show()

show() displays an element if it is hidden.

#### Example, display the element with the id "im".

```
$("#im").show();
```

### hide()

hide() hides an element if it is visable.

#### Example, hide the element with the id "elem".

```
$("#elem").hide();
```

### css()

css() is used to add css styles to an element.

#### Example, add padding to an element with the id "elem".

```
$("#elem).css("padding", "1rem");
```

### fadeIn()

fadeIn() is used to gradually fade an element into view.

#### Example, fade an element into view over a period of 1 second.

```
$("#elem").fadeIn(1000);
```

### fadeOut()

fadeOut() is used to gradually fade an element out of view.

#### Example, fade an element out of view over a period of 1 second.

```
$("#elem").fadeOut(1000);
```

### html()

html() is used to set the inner html of an element or get the inner html of an element.

#### Example, set the inner html of an element.

```
$("#elem").html("<p>My Html Content</p>");
```

#### Example, get the inner html of an element.

```
var theHtml = $("#elem").html();
```

### attr()

attr() is used to set html attributes to an element.

#### Example, set the id of an element to "myid".

```
$("#elem").attr("id", "myid");
```

### each()

each() is used to perform a function for each selected element.

#### Example, print each image element to the console.

```
$("img").each(function(index, element) {
    console.log(element);
})
```

### first()

first() is used to get the first selected element as a jqueryPetiteElement.

#### Example, get the first image.

```
var firstImage = $("img").first();
```

### last()

last() is used to get the last selected element as a jqueryPetiteElement.

#### Example, get the last image.

```
var lastImage = $("img").last();
```

### on()

on() is used to add an event listener to an element.

#### Example, listen for a click on any button element.

```
function clicked() {
    console.log("clicked");
}

$("button").on("click", clicked);
```

### off()

off() is used to remove an event listener from an element.

#### Example, remove the previously added event listener from all buttons.

```
function clicked() {
    console.log("clicked");
}

$("button").off("click", clicked);
```

### addClass()

addClass() is used to add a css class to an element.

#### Example, add the class "my-image" to all images.

```
$("img").addClass("my-image");
```

### removeClass()

removeClass() is used to remove a css class from an element.

#### Example, remove the class "my-image" from all images.

```
$("img").removeClass("my-image");
```

### click()

click() is used to listen for a click event on an element or to click and element.

#### Example, listen for a click on any button element.

```
$("button").click(function() {
    console.log("clicked");
})
```

#### Example, click a button with the id of "my-btn".

```
$("#my-btn").click();
```

### val()

val() is used to retrieve or set the value of an element such as an input box.

#### Example, set the value of all input elements to "my-value".

```
$("input").val("my-value");
```

#### Example, get the value of the input element with an id of "my-input".

```
var inputValue = $("#my-input").val();
```

#### The find() method is expected very soon.
