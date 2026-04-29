# chai_desc = "Aromatic and Bold"

# print(f"First word: {chai_desc[0:8]}")  # Aromatic
# print(f"First word: {chai_desc[:8]}")  # Aromatic
# print(f"First word: {chai_desc[0:8:2]}")  # Aoai
# print(f"Last word: {chai_desc[:]}")  # Aromatic and Bold
# print(f"Reverse: {chai_desc[::-1]}")  # dloB dna citamorA


label_text = "Chai Spécial"
encoded_label = label_text.encode("utf-8")

print(f"Non-encoded label: {label_text}")
print(f"Encoded label: {encoded_label}")

decoded_label = encoded_label.decode("utf-8")
print(f"Decoded label: {decoded_label}")
