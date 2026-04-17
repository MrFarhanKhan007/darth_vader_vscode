
def main():
    print("Hello, World!")
    result = addsum(5, 10)
    print(f"The sum of 5 and 10 is: {result}")

if __name__ == "__main__":
    main()

def addsum1(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def addsum(a, b):
    return a + b

def divide(a, b):
    if b == 0:
        return "Cannot divide by zero"
    return a / b

def modulus(a,b):
    return a % b

def power(a, b):
    return a ** b
