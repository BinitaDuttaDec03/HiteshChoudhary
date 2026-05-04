# You're preparing an order summary with customer names and their total bill.

# Task:
#     - Use 2 lists: one for names and one for bills
#     - Print: "[Name] paid [amount]"


names = ["Binita", "Sushil", "Barun"]
bills = ["10", "20", "30"]

for name, amt in zip(names, bills):
    print(f"{name} paid {amt} rupees")
