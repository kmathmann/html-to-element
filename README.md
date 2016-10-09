##HTML-to-Element

####What does HTML-to-Element?
  In one short sentence: "HTML-to-Element converts HTML from string to js dom element."

####Install
```
npm install html-to-element -D
```
####Import
 ```javascript
 import htmlToElement from 'html-to-element';
 ```

###Examples:

  ```javascript
    import htmlToElement from 'html-to-element';
    
    let element = htmlToElement(`<div id="example">
        <p>Example</p>
        <div style="width:200px">Click me!</div>
    </div>`);
    
    document.body.appendChild(element);
  ```
       
 