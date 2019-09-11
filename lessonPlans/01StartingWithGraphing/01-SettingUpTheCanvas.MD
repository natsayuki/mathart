# 01-01 | Setting Up The Canvas

Before we can start drawing stuff, we need a canvas to draw on.
In `HTML`, we have an element we can use called `<canvas>`.
The `<canvas>` element is exactly what it sounds like,
a blanks canvas for us to use.  Before we can do anything
with it though, we need to do a bit of setup.

### Setup your webpage

First things first, we need to make an `HTML` file.
Make a new folder on your computer and inside it create a new file called `index.html`.


Now that we have an `HTML` file, open it in a text editor
and let's get some basic `HTML`.

```HTML
<html>
  <head>
    <title>Getting started project</title>
  </head>
  <body>

  </body>
</html>
```

This is just a simple page with an empty body.
Let's add a canvas.

```HTML
<html>
  <head>
    <title>Getting started project</title>
  </head>
  <body>
    <canvas></canvas>
  </body>
</html>
```

We can't do much with just the canvas element though.
In order to draw on it, we will use a programming language called `JavaScript`.
In order to do that, we need a `JavaScript` file to hold our `JavaScript` code.
Create a new file in the same folder as your `HTML` file called `script.js`.
Open it in a text editor too. In order to use our `JavaScript` in our webpage,
we need to link it. We can do this with a `<script>` tag in our `HTML`.
Add the following line to the bottom of the body in your `HTML` file.

```HTML
<script src="script.js"></script>
```

The `src="script.js"` in the `<script>` tag is called an attribute.
There are many attributes in `HTML`, however for now we just need
to worry about `src`. `src` stands for source and whatever we put inside
the quotes needs to be a valid pathway to a file. In our case, as long as you
made sure to put your `script.js` file in the same folder as your `index.html`
file, the path `script.js` will suffice. This `<script>` tag is going to our
`script.js` file and loading it into the webpage so that the code we put
in it is run in the webpage.  

So now that we have a `script.js` file, let's write some `JavaScript` code.
We can start with something simple just to make sure the file is connected
correctly.  Add the following line to your `script.js` file.

```JavaScript
console.log('Hello, world!');
```
Let's go ahead and open up our webpage and see what happens.
If you open a new page in your browser of choice and press `ctrl+o`,
you can browse you computer for a file to open.  Navigate to your
project folder and open your `index.html` file. You should recognize
`console.log` from the previous unit, but you may also be a bit confused.
Our website is still blank. This is because our `JavaScript` is logging the
string `Hello, world!` to the console.  In order to see your console, right click
on your webpage and click `inspect` in the context menu. This will open
the web inspecting tool.  At the top of the inspect tool you should see a few
different tabs. Click the one that says `console` and if your script is linked
correctly, you should see `Hello, world!` at the top of your console. This console
works the same as the `Node.js` console that we used through the command
prompt earlier.

Now that we know our `script.js` file is linked and working, we can start
drawing on the canvas.

### Drawing on the canvas

Before we can do anything with the canvas in `JavaScript` we need a
way to access it.  In order to do this, we need to give the canvas a
unique id that we can identify it by. To do this, we are going to use
another attribute, this time aptly called `id`. To add an id to our
canvas, it looks like this.

```HTML
<canvas id="canvas"></canvas>
```

For now, we will just give it the id `canvas`. Now that we have a way to identify it,
we can access it in `JavaScript`. To do this, add the following line of `JavaScript`.

```JavaScript
var canvas = document.getElementById('canvas');
```

This creates a new `variable` called `canvas` which is set equal
to our canvas element. The `document.getElementById()` does
exactly what it sounds like. It goes into webpage and grabs
the element with the `id` of whatever you pass it, in our case, `canvas`.
Now that we have access to the canvas, we need one more thing
before we can start drawing. We need to get a `context` of
the canvas. The `context` is essentially the interface through
which we will be drawing. Let's create a new context `variable`.

```JavaScript
var ctx = canvas.getContext('2d');
```

The new `variable` `ctx` is short for `context`. We set it
equal to the 2d context of our canvas element. Now we have
everything setup, so it's time to get drawing. Let's start by
drawing a box.

```JavaScript
ctx.fillRect(0, 0, 20, 20);
```

`fillRect` is a method that draws rectangles on our canvas,
short for fill rectangle. It takes four arguments, the starting
x position, the starting y position, the width of the rectangle,
and the height of the rectangle. If we want to change the
color we can add the following line **BEFORE** the `fillRect`.

```JavaScript
ctx.fillStyle = 'blue';
```

You can put a lot of different color names where the `blue`
is like `red` or `yellow`.  
