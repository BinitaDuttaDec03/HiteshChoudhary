# You run an online tea store.

# If the order amount is more than 300, delivrey is free; otherwise it costs 30.

# Task:
#     Input: order_amt
#     Use ternary operator to decide delivery fee


order_amt = int(input("Enter order amt: "))

delivery_fees = 0 if order_amt > 300 else 30

print(f"Delivery fees charged = {delivery_fees}")
