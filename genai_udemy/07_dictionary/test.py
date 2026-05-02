chai_order = dict(type="Masala chai", size="Large", sugar=2)
print(f"Chai order: {chai_order}")


chai_recipe = {}
chai_recipe["base"] = "black tea"
chai_recipe["liquid"] = "milk"

print(f"Recipe base: {chai_recipe["base"]}")
del chai_recipe["base"]
# print(f"Recipe base: {chai_recipe["base"]}")
