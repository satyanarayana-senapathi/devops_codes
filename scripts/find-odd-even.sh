#!/bin/bash
for i in {1..10}
do
    if [ $((i % 2)) -eq 0 ]
    then
        echo "$i is even"
    else
        echo "$i is odd"
    fi
done

i=0

while [ "$i" -le 10 ]
do
    echo "$i"
    i=$((i + 1))
done
