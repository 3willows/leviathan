#!/bin/bash

# Input file
input_file="./app/page.tsx"

# Output file
output_file="output.html"

# Counter for chapter numbers
counter=1

# Read input file and process each line
while IFS= read -r line; do
    # Check if the line contains <li>
    if [[ "$line" == *"<li>"*"</li>" ]]; then
        # Extract the content between <li> and </li>
        content="${line#*<li>}"
        content="${content%%</li>*}"

        # Replace <li>content</li> with <li><a href="/chapter/X">content</a></li>
        new_line="<li><a href=\"/chapter/$counter\">$content</a></li>"
        echo "$new_line"

        # Increment counter
        ((counter++))
     elif [[ "$line" == *"<li>"* ]]; then
        # Reset the content variable
        content=""

        # Accumulate content until </li> is found
        while [[ "$line" != *"</li>"* ]]; do
            content="$content$line"
            read -r line || break
        done

        # Extract the content between <li> and </li>
        content="${content#*<li>}"
        content="${content%%</li>*}"

        # Replace <li>content</li> with <li><a href="/chapter/X">content</a></li>
        new_line="<li><a href=\"/chapter/$counter\">$content</a></li>"
        echo "$new_line"

        # Increment counter
        ((counter++))
    else
        # Print the line as is
        echo "$line"
    fi


done < "$input_file" > "$output_file"

echo "Conversion completed. Output saved to $output_file"