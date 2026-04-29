# ingredients = ["water", "milk", "black tea"]
# ingredients.append("sugar")
# print(f"Ingredients are: {ingredients}")

# ingredients.remove("water")
# print(f"Ingredients are: {ingredients}")


spice_options = ["ginger", "cloves"]
chai_ingredients = ["water", "milk"]

chai_ingredients.extend(spice_options)
print(f"chai: {chai_ingredients}")

chai_ingredients.insert(2, "black tea")
print(f"chai: {chai_ingredients}")
