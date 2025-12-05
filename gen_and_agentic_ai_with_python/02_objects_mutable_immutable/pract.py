# num = 2
# print(f"Initial value of num = {num}")
# print(f"Id of 2 = {id(num)}")  # immutable

# num = 12
# print(f"Modified value of num = {num}")
# print(f"Id of 12 = {id(12)}")  # immutable


spice_mix = set()
print(f"Initial spice mix id: {id(spice_mix)}")  # mutable
print(f"{spice_mix}")

spice_mix.add("Ginger")
spice_mix.add("Cardamon")

print(f"Modified spice mix id: {id(spice_mix)}")  # mutable
print(f"{spice_mix}")
