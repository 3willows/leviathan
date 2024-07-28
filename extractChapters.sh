#!/bin/bash

# Read the input file
input_file="leviathan.html"

# Parent directory for chapter directories
parent_dir="contents"

# Create the parent directory if it doesn't exist
mkdir -p "$parent_dir"

# Counter for naming output directories
counter=0

echo "Starting to process file: $input_file"

# Use sed to extract content between the specified tags
sed -n '/<div class="chapter">/,/<!--end chapter-->/p' "$input_file" |
while IFS= read -r line
do
    if [[ $counter -lt 3 ]]; then
        if [[ $line == '<div class="chapter">'* ]]; then
            ((counter++))
            echo "Creating directory: $parent_dir/Chapter_$counter"
            mkdir "$parent_dir/Chapter_$counter"
            output_file="$parent_dir/Chapter_$counter/page.tsx"
            echo 'export default function Page() {return (<div>' >> "$output_file"
        elif [[ $line == *'<!--end chapter-->'* ]]; then
            echo "</div>)}" >> "$output_file"
        else
            echo "$line" >> "$output_file"
        fi
    fi
done

echo "Script execution completed"