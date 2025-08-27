1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
        answer:::
        getElementById('id') returns one element of that id .

        getElementsByClassName('class') gives HTML collection of all elements of that class .

        querySelector('cssSelector) gives the first element of  matches CSS selector like like, class

        querySelectorAll('cssSelector') gives a  array like Nodelist

        querySelectorAll

2.How do you **create and insert a new element into the DOM**?
answer:: 
        create element - document.createElement('tag') and store in a variable;
        add content- (variable name).innerText='something'; and store in an another variable
        parent.appendChild(another varible name);

3. What is **Event Bubbling** and how does it work?
answer::
        Evene Bubbling is a system  when an event happend on an element , it first runs its own handler and goes upward triggering the same event type if listeners exit

4. What is **Event Delegation** in JavaScript? Why is it useful?
answer::
        There is no need to add event listener to many child elements, we can add one listener to a parent and handle events as the bubble up

5. What is the difference between **preventDefault() and stopPropagation()** methods?
answer::

        preventDefault()- stop browser default action like form submit
        stopPropagation()- stop the event bubbling in the DOM