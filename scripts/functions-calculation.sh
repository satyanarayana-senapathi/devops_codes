#!/bin/bash

function greet() {
    local name=$1
    echo "Hello, $name!"
}

function add() {
    local num1=$1
    local num2=$2
    local sum=$((num1 + num2))
    echo "The sum of $num1 and $num2 is: $sum"
}

function is_even() {
    local num=$1
    if ((num % 2 == 0)); then
        echo "$num is even."
    else
        echo "$num is odd."
    fi
}

greet "satya"
add 5 3
is_even 7

