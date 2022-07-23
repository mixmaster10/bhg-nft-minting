
count=0

for entry in `ls | grep \.png`; do
	echo "entry=${entry}"
	if [ $entry == "test.sh" ]; then
		echo "excetion"
		continue
	fi

	old_file=$entry
	new_file="CAhooper#0000${count}.png"

    mv $old_file $new_file
    (( count=count+1 ))
done

count=0

for entry in `ls | grep \.json`; do
	echo "entry=${entry}"
	if [ $entry == "test.sh" ]; then
		echo "excetion"
		continue
	fi

	old_file=$entry
	new_file="CAhooper#0000${count}.json"

    mv $old_file $new_file

    jq '.image = ""' "$new_file" > temp && mv temp "$new_file"

    new_edition=${new_file:9:5}


    jq -r --arg EDITION "$new_edition" '.edition = $EDITION' "$new_file" > temp && mv temp "$new_file"

   	jq --arg name "$new_file" '.name = $name' "$new_file" > temp && mv temp "$new_file"


    (( count=count+1 ))
done
