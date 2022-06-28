#!/usr/bin/bash


# Given an integer x, return true if x is palindrome integer.
# An integer is a palindrome when it reads the same backward as forward.


read -p "Enter integer " integer

#revint=($integer | rev)

#echo $revint

folder_to_count=/dev

file_count=$(ls $folder_to_count | wc -l)

echo $file_count files in $folder_to_count
