# Thomas Hobbes's Leviathan

## Motivation 

- Get used to the Next.js development 

## Development log

Use Claude to generate

- Regular expression to use on VS Code to select all occurances of "CHAPTER" and the latin numeral that immediately follows that.

  > ```CHAPTER\s+\p{L}{1,4}.```

- Extract the chapters into separate files.

> ```sed -n '/<div class="chapter">/,/<!--end chapter-->/p' leviathan.html | awk '/<div class="chapter">/{f="chapter-"++i".html"; next} /<!--end chapter-->/{close(f)} {print > f} END{close(f)}'```