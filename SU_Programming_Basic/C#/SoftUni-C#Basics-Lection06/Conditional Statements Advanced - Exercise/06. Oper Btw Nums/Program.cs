int num1 = int.Parse(Console.ReadLine());
int num2 = int.Parse(Console.ReadLine());
char symbol = char.Parse(Console.ReadLine());

double result = 0.0;
if (symbol == '-' || symbol == '+' || symbol == '*')
{
    if (symbol == '+') result = num1 + num2;
    else if (symbol == '-') result = num1 - num2;
    else if (symbol == '*') result = num1 * num2;

    if (result % 2 == 0) Console.WriteLine($"{num1} {symbol} {num2} = {result} - even");
    else Console.WriteLine($"{num1} {symbol} {num2} = {result} - odd");
}
else
{
    if (num2 == 0)
    {
        Console.WriteLine($"Cannot divide {num1} by zero");
        return;
    }

    if (symbol == '/')
    {
        result = (double)num1 / num2;
        Console.WriteLine($"{num1} {symbol} {num2} = {result:f2}");
    }
    else if (symbol == '%')
    {
        result = num1 % num2;
            Console.WriteLine($"{num1} {symbol} {num2} = {result}");
    }
    }



