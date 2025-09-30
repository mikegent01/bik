import os

# Folder path
folder_path = r"C:\Users\mikeg\Downloads\bik\Reputation-Matrix2"

def delete_zero_byte_files(path):
    count = 0
    for root, dirs, files in os.walk(path):
        for file in files:
            file_path = os.path.join(root, file)
            try:
                if os.path.getsize(file_path) == 0:
                    os.remove(file_path)
                    print(f"Deleted: {file_path}")
                    count += 1
            except Exception as e:
                print(f"Error processing {file_path}: {e}")
    print(f"\nDone! Deleted {count} zero-byte files.")

if __name__ == "__main__":
    delete_zero_byte_files(folder_path)
