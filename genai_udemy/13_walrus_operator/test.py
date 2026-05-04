# value = 17
# remainder = value % 5

# if remainder:
#     print(f"Not divisible, remainder is {remainder}")


# walrus operator
# value = 17

# if remainder := value % 5:
#     print(f"Not divisible, remainder is {remainder}")


# available_sizes = ["small", "medium", "large"]

# if (requested_size := input("Enter your chai cup size: ").lower()) in available_sizes:
#     print(f"Serving {requested_size} chai")
# else:
#     print(f"{requested_size} chai is unavailable")


flavors = ["masala", "lemon", "ginger"]

print(f"Available flavors: {flavors}")

while (flavor := input("Choose your flavor: ").lower()) not in flavors:
    print(f"Sorry, {flavor} is not available")

print(f"You chose {flavor} flavor")
