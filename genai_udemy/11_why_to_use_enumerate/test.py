# You're creating a tea menu board.
# Each item must be numbered.

# Task:
#     - Use enumerate() to print menu items with numbers.


menu_board = ["Lemon", "Black", "Masala"]

for idx, item in enumerate(menu_board, start=1):
    print(f"{idx}: {item} chai")
