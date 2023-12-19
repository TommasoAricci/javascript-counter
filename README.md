[RUN THE COUNTER](https://tommasoaricci.github.io/javascript-counter/)

# Ready to coun'til you can?

Welcome everyone to my new Javascript project, a beautiful counter!

## About the project

**Ready to coun'til you can** is the title of this project. It works mainly as a simple counter but it has some more functions. You can have fun trying to get your best reaching the highest record pressing the buttons as more as you can.  

This counter is a challenge for your fingers. The rule is only one: **count untill you can!**

## How it works

Its operation is as simple as playing a game:

- Press the buttons + and - to increment or decrement the counter
- Press reset to view the actual record reached
- Press reset a second time to reset the counter

Having two buttons it's possible to count above and below zero.   
It will be recorded the max positive number and the max negative number reached.

Different sounds have been added to get the program more dynamic and funny.

<img src="https://i.postimg.cc/W134vYJv/Screenshot-2023-12-16-142807.png" alt="Testo alternativo" width="300" height="200">

## How Javascript is structured

First of all I set some global variables and then I created the **counter section** with different functions:

```
function plusOne()
function minOne()
function reset()
```

These three functions set what happens if we click the buttons +, - and reset, through the ```onclick``` event in Html.

```
function gradual()
function resetSound()
```

Here I've set the counter to gradually count back to zero and the sound of the reset button.

Then I got the record section that contains only one function:

```
function record()
```
In this function I determined what has to be the maximum and the minimum numbers that need to be recorded, modifying also the h1 titles.

And for last:

```
function removeTitle()
function margin()
```
I used these last two functions to modify the DOM deleting elements or to change the css style.

## What made me do that

After weeks stydying the basics of Javascript I wanted to challenge myself creating a simple counter. As I started the project I got passionate about Js language, figuring out all the issues and finding different ways to write the code. That's why I haven't created just a simple counter but I decided to add some more functions, in order to have something more interactive.  

## License

[MIT](https://choosealicense.com/licenses/mit/)

