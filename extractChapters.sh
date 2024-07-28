#!/bin/bash

# Read the input file
input_file="leviathan.html"

# Counter for naming output files
counter=1

echo "Starting to process file: $input_file"

# Use sed to extract content between the specified tags
sed -n '/<div class="chapter">/,/<!--end chapter-->/p' "$input_file" | 
while IFS= read -r line
do
    
    if [[ $line == '<div class="chapter">'* ]]; then
        # Start of a new chapter, create a new file
        output_file="chapter_$counter.txt"
    elif [[ $line == *'<!--end chapter-->' ]]; then
        # End of the chapter, increment counter
        echo "Current counter: $counter"
        ((counter++))
        echo "Incremented counter to: $counter"
    else
        # Content of the chapter, append to current file
        echo "Appending content to $output_file"
        echo "$line" >> "$output_file"
    fi
done

echo "Finished processing all lines"

# Read the final counter value
if [ -f counter.txt ]; then
    final_counter=$(<counter.txt)
    echo "Total chapters extracted: $final_counter"
    rm counter.txt
    echo "Removed temporary counter file"
else
    echo "No chapters were extracted"
fi

echo "Script execution completed"