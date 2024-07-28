#!/bin/bash

# Read the input file
input_file="leviathan.html"

# Output directory
output_dir="chapters"

# Create the output directory if it doesn't exist
mkdir -p "$output_dir"

# Counter for naming output files
counter=0

echo "Starting to process file: $input_file"

# Use sed to extract content between the specified tags
sed -n '/<div class="chapter">/,/<!--end chapter-->/p' "$input_file" | 
while IFS= read -r line
do
    if [[ $line == '<div class="chapter">'* ]]; then
        ((counter++))
        echo "Incremented counter to: $counter"      
        # Start of a new chapter, create a new file
        output_file="$output_dir/chapter_$counter.html"
    elif [[ $line == *'<!--end chapter-->' ]]; then
        # End of the chapter, append the end tag and increment counter
        echo "$line" >> "$output_file"

    else
        echo "$line" >> "$output_file"
    fi
done

echo "Script execution completed"