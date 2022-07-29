# Revelation effect to Elements as divs, sections, or any container object when scroll HTML Pages

To use this feature add the reveal.css file to your HTML page and mark all elements that will be revealed with the reveal class. 
After that include the reveal.js in your script section in your page. You can do this adding before to ending `</head>` section with the option "defer" `<script defer>` in your script or close to ending `</body>` section.

The idea is when you scroll down your page the hidden container elements on the bottom page will be revealed

You can download the index.html page as example

## index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reveal Elements When Scroll Down HTML Pages</title>
    
    <!--Include the CSS file-->
    <link rel="stylesheet" href="reveal.css">
    <!--first option to include the script -->
    <script src="reveal.js" defer></script>
</head>
<body>
    <section>
        <div id="section-1" class="container">
            <h1>Section 1</h1>
        </div>
    </section>

    <section>
        <div id="section-2" class="container reveal">
            <h1>Section 2</h1>
        </div>
    </section>

    <section>
        <div id="section-3" class="container reveal">
            <h1>Section 3</h1>
        </div>
    </section>
    <!-- <script src="reveal.js" ></script> -->
</body>
</html>

```
