[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/NYae883E)
# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

## My Analysis

My overall complexity is $\theta(n^2)$ where n is the number of nodes in the graph. The worst case scenario is if the graphs are isomorphic to eachother because then all steps of the process need to happen. I will break down each function to find their complexites.

```function checkEdge(g1, g2)``` has 2 for loops that arent nested and run $n$ times each which gives that a complexity of $\theta(2n)$

```function setDegree(g)``` has one for loop that runs $n$ times which gives it a complexity of $\theta(n)$

```function checkDegree(deg1, deg2)``` has 2 for loops that each run $n$ times and they are nested which gives it a complexity of $\theta(n^2)$

if we add this all up we get $\theta(3n + n^2)$ or just $\theta(n^2)$ after we drop the lower orders.

## sources

https://www.w3schools.com/jsref/jsref_shift.asp - how to remove the first element in an array















