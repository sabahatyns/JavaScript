def first_patt():
    for i in range(4):
        row = ""
        for j in range(4):
            row += "* "
        print(row)

# first_patt()

# second patern
def second_patt():
    for i in range(4):
        row = ""
        for j in range(i):
            row += "* "
        print(row)

# second_patt()


# third pattern 
def third_patt():
    for i in range(1, 6):
        for j in range(1, i+1):
         print(j, end=" ")
        print()

# third_patt()


# forth pattern 
def forth_patt():
    for i in range(1, 6):
        for j in range(1, i+1):
         print(i, end=" ")
        print()

# forth_patt()


# fifth pattern
def fifth_patt(n):
    for i in range(1, n):
        for j in range(1, n-i+1):
         print("*", end=" ")
        print()

fifth_patt(6)