# Thomas Hobbes's Leviathan

## Motivation 

- Get used to the Next.js development 

## Development log

Use Claude to generate

- Regular expression to use on VS Code to select all occurrences of "CHAPTER" and the latin numeral that immediately follows that.

  > ```CHAPTER\s+\p{L}{1,4}.```

- Extract the chapters into separate files.  This is more complex: the result after some tweaking is at ```extractChapters.sh```.

- Use ```addLinks.sh``` to add wire up chapters to the table of contents.

- Chapter 44 is not working.  Need to devise a test to see if a relevant "page.tsx" is longer (say) than 5 lines.