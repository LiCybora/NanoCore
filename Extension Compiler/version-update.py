import json

moz_id = "{0f929014-5ed2-4527-8b8d-86a9c889b129}";

with open("updates.json", 'r') as v:
	data = v.read()
	info = json.loads(data)
	old_version = info["addons"][moz_id]["updates"][0]["version"]

	with open("../src/manifest.json", 'r') as f:
		new_version = json.load(f)["version"]

	data = data.replace(old_version, new_version)

with open("updates.json", 'w') as v:
	v.write(data)
