def fibonacci(n):
  fib_list=[0,1]
  for x in range(0,n-1):
    fib_list.append(fib_list[x]+fib_list[x+1])
  return fib_list[-1]
print(fibonacci(7))




