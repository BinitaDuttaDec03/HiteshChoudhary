# ingredients = ["water", "milk", "black tea"]
# ingredients.append("sugar")

# print(f"Ingredients are: {ingredients}")

# ingredients.remove("water")
# print(f"Ingredients are: {ingredients}")


# spice_options = ["ginger", "cardamom"]
# chai_ingredients = ["water", "milk"]

# chai_ingredients.extend(spice_options)
# print(f"Chai ingredients are: {chai_ingredients}")

# chai_ingredients.insert(2, "black tea")
# print(f"Chai ingredients are: {chai_ingredients}")

# last_added = chai_ingredients.pop()
# print(f"Chai ingredients are: {chai_ingredients}")

# chai_ingredients.reverse()
# print(f"Chai ingredients are: {chai_ingredients}")

# chai_ingredients.sort()
# print(f"Chai ingredients are: {chai_ingredients}")


# Operator Overloading
# base_liquid = ["water", "milk"]
# extra_flavor = ["black tea", "ginger"]

# full_liquid_mix = base_liquid+extra_flavor
# print(full_liquid_mix)

# strong_brew = ["black tea", "water"]*3
# print(strong_brew)


raw_spice_data = bytearray(b"CINNAMON")
raw_spice_data = raw_spice_data.replace(b"CINNA", b"CARDA")
print(raw_spice_data)
