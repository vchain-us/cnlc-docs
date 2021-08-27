#!/bin/bash

echo "updating help json list file"

# change directory temporaly to ./pages/careers
pushd './pages/help/'

HELP_FILE='../../help.json'

# clear careers file
> $HELP_FILE

# get number of filenames matching regex
length=`find "." -type f -name "*.md" | wc -l`
length=$((length - 3))
echo $length

# append json start character
echo "{" >> $HELP_FILE

i=1
for filename in *.md; do
    # if filename path is valid
    [ -e "$filename" ] || continue
    
    f=$(echo "$filename" | cut -f 1 -d '.')
    echo "---"
    echo $f


    if [[ $i == $length ]]
    then
        echo "  \"/$f\": \"$f\"" >> $HELP_FILE
        break
    else 
        echo "  \"/$f\": \"$f\"," >> $HELP_FILE
    fi 
    ((i=i+1))
done

# append json end character
echo "}" >> $HELP_FILE

echo "new help file has {$length} entries"

# goes back to starting directory
popd

