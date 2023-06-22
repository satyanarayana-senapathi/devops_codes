#!/bin/bash
read -p "enter directory name:" dir

mkdir $dir

cd $dir 

pwd

cd ..

read -p "delete the directory(Y|N):" ans

if [ $ans = "Y" ]
then 
	$(rm -rf $dir)
fi
