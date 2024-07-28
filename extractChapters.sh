#!/bin/bash

# Read the input file
input_file="leviathan.html"

# Counter for naming output files
counter=1

# Use sed to extract content between the specified tags
sed -n '/<div class="chapter">/,/<!--end chapter-->/p' "$input_file" | 
while IFS= read -r line
do
    if [[ $line == '<div class="chapter">'* ]]; then
        # Start of a new chapter, create a new file
        output_file="chapter_$counter.txt"
        echo "$line" > "$output_file"
    elif [[ $line == *'<!--end chapter-->' ]]; then
        # End of the chapter, increment counter
        echo "$line" >> "$output_file"
        echo $counter > counter.txt
        ((counter++))
    else
        # Content of the chapter, append to current file
        echo "$line" >> "$output_file"
    fi
done