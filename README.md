<p align="center">
<img src="https://user-images.githubusercontent.com/103118542/163263986-b74ed5c3-9566-4f10-a328-2a88a1ab5b3a.svg" width="400">
</p>

# UnitConverted

<span><img src="https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6" /> </span>
<span><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> </span>
<span><img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" /> </span>
<span><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /> </span>

UnitConverted.com is a free unit converter where you can easily convert all common types
of units: length, temperature, area, volume, weight, time, and speed. It is a super
helpful tool if you expect to have some units converted fast. In addition, you can read
the definitions of each unit with direct reference to scientific sources.

Live app ➡️ https://unitconverted.netlify.app/

## Case Study

The goal of this project was to design and build an application. I chose to develop a Unit Converter from scratch.
I wanted to <b>challenge myself and try to build a scalable application, a size, and complexity which would be difficult for any novice programmer</b>.

I did my best and worked diligently to accomplish this project.
<b>I am aware that this app could have been done better however, this is my first project ever done completely by myself - being a total JS beginner 😉</b>
My goal in developing this app was to challenge myself, design a modern interface, and develop it from scratch. All suggestions are welcome.

## Project Timeline

I was excited to develop my first web application after just 1 month of learning JavaScript - actually my first programming language. The entire application development process went
successfully as intended. However, this was a constant work, around 8 hours/day, 6
days/week.

<p align="center">
<img src="https://user-images.githubusercontent.com/103118542/163339916-b4a0d213-9c55-4171-8347-4111712554fa.png">
</p>

## Programming problems to solve

 <ul>
            <li>program the category search filter</li>
            <li>
              write functions that will convert a user input value and return converted value when the "convert" button is clicked
            </li>
            <li>
              program select options so a user can change units easily in the app's interface
            </li>
            <li>
              access DOM elements to display dynamically a calculation result and formula of calculation on the screen
            </li>
          </ul>

## General designing concepts

- dark color scheme
- modern and clean UI
- easy to navigate interface
- design that is memorable and stands out from competing applications

<p align="center">
<img src="https://user-images.githubusercontent.com/103118542/163340737-39d7a0d8-17fe-4f9e-a51b-ff47f48d661a.jpg">
</p>
<p align="center">
<img src="https://user-images.githubusercontent.com/103118542/163340857-305d2093-8bd8-4074-8c8c-e6a5dfb6b95f.jpg">
</p>

## Problems I encountered during the development process

Honestly, I didn't encounter many problems while coding. To a surprise, with a little
bit of analyzing I was actually able to match javascript concepts very fast to solve any
problems. However, I got stuck for a while styling website ...

<b>SCSS and nested classes</b>  
What I love about SCSS are nested classes. I just find it comfortable to create some
sort of "class trees". I say it's comfortable because anytime I am back to a specific
class to add some extra styling, someway I can easily locate this class, without using
the built VS Code 'search' tool. Certainly, there are other advantages of nesting
classes such as clean code and not having to repeat code. For example, if div with a
class of 'flex' is inside a div with a class of 'wrapper', and there's a &lt;p&gt; tag
inside that div 'flex', you may write it that way.

```
.wrapper {

            .flex {

            p { }

            }

            }

            //instead of

            .wrapper {}

            .flex p {}

            .flex {}
```

However, nested classes can be tricky especially when you want to override some styles.
That's what I experienced.

I tried to override some styles, especially doing media queries, and even though I added
styles to a certain HTML element with a class of 'x', the styles were not overridden.

Well, it's all because I ignored initially declared nested classes. What I mean, based
on the random example given above is if you declared initially div with a class of
'flex' to be nested inside the 'wrapper', the compiled result of this nesting in the
style.css sheet will be:

```
.wrapper .flex {}

 .wrapper .flex p {}
```

So in fact if you want to override any styles doing for example media queries, you
should use previously declared nested classes - otherwise it's not going to work.

## Overall feelings

I am happy that I was able to write my first application. It is not something innovative, but it
is mine, from A to Z designed and coded by me.

<b>I am aware that this could be coded way better so I hope to come back to this project one day and refactor this long code.</b>
