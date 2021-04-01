
function fade(type, elem, ms, prop) {
    let  isIn = type === 'in'
        let opacity = isIn ? 0 : 1
        let interval = 50
        let duration = ms
        let gap = interval / duration
        let self = elem;
    
      if(isIn) {
        if (prop === undefined || prop === null) {
            self.style.display = 'block';
        } else {
            self.style.display = prop
        }

        self.style.opacity = opacity;
      }
    
      function func() {
        opacity = isIn ? opacity + gap : opacity - gap;
        self.style.opacity = opacity;
    
        if(opacity <= 0) self.style.display = 'none'
        if(opacity <= 0 || opacity >= 1) window.clearInterval(fading);
      }
    
      var fading = window.setInterval(func, interval);
}

//Returns true if it is a DOM element    
function isNode(o){
    return (
      typeof Node === "object" ? o instanceof Node : 
      o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
    );
  }


class jQueryPetiteElement {
    
    constructor(element, allElements) {
        this.elem = element;
        this.allElements = allElements;
    }
    // hide function
    hide() {
        for (let i=0;i<this.allElements.length;i++) {
            this.allElements[i].style.display = 'none'
        }
    }
    // show function
    show(displayProp) {
        let dis = 'block'
        if (displayProp !== undefined && displayProp !== null ){
            dis = displayProp
        }
        for(let i=0; i<this.allElements.length;i++) {
            this.allElements[i].style.display = dis;
            this.allElements[i].style.visibility = 'visible';
        }

    }
    // set a css property
    css(prop, value) {
        for(let i=0; i<this.allElements.length;i++) {
            this.allElements[i].style[prop] = value;
        }
    }
    // fadein
    fadeIn(ms, prop) {
        for(let i=0; i<this.allElements.length;i++) {
            fade("in", this.allElements[i], ms, prop)
        }
    }
    // fadeout
    fadeOut(ms, prop) {
        for(let i=0; i<this.allElements.length;i++) {
            fade("out", this.allElements[i], ms, prop)
        }
    }
    // set innerhtml
    html(markup) {
        if (markup === undefined || markup === null) {
            return this.elem.innerHtml;
        }
        for(let i=0; i<this.allElements.length;i++) {
            this.allElements[i].innerHtml = markup;
        }

    }
    // set atrributes
    attr(name, value) {
        for (let i=0;i<this.allElements.length;i++) {
            this.allElements[i].setAttribute(name, value);
        }
    }
    // call function for each element
    each(callback) {
        for (let i=0; i<this.allElements.length;i++) {
            callback(i, this.allElements[i])
        }
    }
    // get first element from query object
    first() {
        if (this.allElements.length > 0) {
            return $(this.allElements[0])
        }
        return null
    }
    // get last element from query object
    last() {
        if (this.allElements.length > 0) {
            return $(this.allElements[this.allElements.length - 1])
        }
        return null
    }
    // used as a private function for addClass and removeClass
    _modifyClass(classToAdd, remove) {
        if (classToAdd instanceof Array || typeof classToAdd === 'array') {
            var classesToAdd = classToAdd
        } else if (classToAdd instanceof String || typeof classToAdd === 'string') {
            var classesToAdd = classToAdd.split(" ")
        }
        console.log(classesToAdd)
        // if user passed in array or string
        if (classesToAdd !== undefined && classesToAdd !== null) {
            for (let i=0;i<this.allElements.length;i++) {
                for (let x=0;x<classesToAdd.length;x++) {
                    if (remove === true ) {
                        console.log(x, classesToAdd[x])
                        this.allElements[i].classList.remove(classesToAdd[x])
                    } else {
                        this.allElements[i].classList.add(classesToAdd[x])
                    }
                }
            }
        } else if (typeof classToAdd === 'function') { // if user passed in function
            for (let j=0;j<this.allElements.length;j++) {
                let res = classToAdd(j)
                if (res instanceof Array || typeof res === 'array') {
                    var classesToAdd = res
                } else if (res instanceof String || typeof res === 'string') {
                    var classesToAdd = res.split(" ")
                }
                for (let y=0; y<classesToAdd.length; y++) {
                    if (remove === true) {
                        this.allElements[j].classList.remove(classesToAdd[y])
                    } else {
                        this.allElements[j].classList.add(classesToAdd[y])
                    }
    
                }
            }
        }
    }
    // add a class css class to an element
    addClass(classToAdd) {
        this._modifyClass(classToAdd, false);
    }
    removeClass(classToRemove) {
        this._modifyClass(classToRemove, true);
    }
    // add event listener
    on(event, callback) {
        for(let i=0;i<this.allElements.length;i++) {
            this.allElements[i].addEventListener(event, callback)
        }
    }
    // remove event listener
    off(event, callback) {
        for (let i=0; i<this.allElements.length;i++) {
            this.allElements[i].removeEventListener(event, callback)
        }
    }
    // on click or programatically click an element
    click(callback) {
        if (callback === undefined || callback === null || typeof callback !== "function") {
            for (let i=0; i<this.allElements.length; i++) {
                this.allElements[i].click();
            }
            return
        } else {
            for (let i=0; i<this.allElements.length; i++) {
                this.allElements[i].addEventListener("click", callback)
            }
        }

    }
    // gets or sets the value of an element
    val(newValue) {
        // user passed in nothing
        if (newValue === undefined || newValue === null) {
            return this.allElements[0].value;
        }
        // user passed in a string or number 
        for(let i =0;i<this.allElements.length;i++) {
            this.allElements[i].value = newValue;
        }
    }
}



// main $ function
const $ = (selector) => {
    // user passed in a document node
    if (isNode(selector)) {
        return new jQueryPetiteElement(selector, [selector]) 
    }
    // has nodes
    let x = document.querySelectorAll(selector)
    if (x.length > 0) {
        return new jQueryPetiteElement(x[0], x)
    }
    // empty
    return new jQueryPetiteElement(null, x)
}