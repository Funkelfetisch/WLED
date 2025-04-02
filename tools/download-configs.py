import requests

base_url = "http://4.3.2.1/"

def download_file(filename):
    url = base_url + filename
    print(f"Downloading {filename} from {url}...")
    response = requests.get(url)
    if response.status_code == 200:
        with open(filename, "wb") as f:
            f.write(response.content)
        print(f"Saved {filename}")
    else:
        print(f"Failed to download {filename} (Status code: {response.status_code})")

# Download presets.json and cfg.json
for file_name in ["presets.json", "cfg.json"]:
    download_file(file_name)

# Download rec-1.jpg to rec-255.jpg
for i in range(1, 256):
    file_name = f"rec-{i}.jpg"
    download_file(file_name)