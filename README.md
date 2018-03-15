This is a quick n dirty JS+HTML system for loading html content from content.html into index.html, without a webserver.

(NOTE: it will only work in Firefox; Chrome will refuse to so, due to same origin policies)

The motivation to do so, is to allow content (in content.html) to be easily updatable, and decoupled from the rest of the webpage files.

Folder structure:

```
book-website/
├── content.html    ----> CONTENT
├── index.html      ----> LANDING PAGE 
├── jquery-3.1.1.min.js 
├── load.js         ----> JS where content is loaded, sections and TOC are created
├── README.md
└── style.css       ----> CSS style info

```


To load content into the index we will use the load.js with function: readTextFile
It will load the content from content.html onto the div#content element

content.html will store updatable content

style.css stores the CSS Making changes to CSS can be done in 

index.html allows  HTML (such as menus) to be added can be done in




In index.html A menu structure,  like the one bellow is build with generate_toc function, using the h1 elements to create entries:

```
    <ul>
    <li><a href="#id_of_firsth1">First h1</a></li>
    <li><a href="#id_ofsecond_h1">Second h2</a></li>
    <ul>
```