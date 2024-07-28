#!/bin/bash

# Read the input file
input_file="leviathan.html"

# Counter for naming output directories
counter=0

echo "Starting to process file: $input_file"

# Use sed to extract content between the specified tags
sed -n '/<div class="chapter">/,/<!--end chapter-->/p' "$input_file" |
while IFS= read -r line
do
    if [[ $line == '<div class="chapter">'* ]]; then
        ((counter++))
        echo "Creating directory: Chapter_$counter"
        mkdir "Chapter_$counter"
        output_file="Chapter_$counter/page.tsx"
    elif [[ $line == *'<!--end chapter-->' ]]; then
        # End of the chapter, append the end tag and increment counter
        echo "$line" >> "$output_file"
    else
        echo "$line" >> "$output_file"
    fi
done

echo "Script execution completed"