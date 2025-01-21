string input = Console.ReadLine();
double sum = 0;

while (input != "NoMoreMoney")
{
    double num = double.Parse(input);
    if (num < 0)
    {
        Console.WriteLine("Invalid operation!");
        break;
    }
    Console.WriteLine($"Increase: {num:f2}");
    sum += num;
    input = Console.ReadLine();
}
Console.WriteLine($"Total: {sum:f2}");