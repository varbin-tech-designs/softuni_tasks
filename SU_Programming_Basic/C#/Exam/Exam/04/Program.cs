int computersCount = int.Parse(Console.ReadLine());
double totalSales = 0;
int raiting = 0;

for (int index = 1; index <= computersCount; index++)
{
    int number = int.Parse(Console.ReadLine());
    double possibleSales = number / 10;

    if (number % 10 == 2)
    {
        totalSales += possibleSales * 0;
        raiting += 2;
    }
    else if (number % 10 == 3)
    {
        totalSales += possibleSales * 0.5;
        raiting += 3;
    }
    else if (number % 10 == 4)
    {
        totalSales += possibleSales * 0.7;
        raiting += 4;
    }
    else if (number % 10 == 5)
    {
        totalSales += possibleSales * 0.85;
        raiting += 5;
    }
    else if (number % 10 == 6)
    {
        totalSales += possibleSales;
        raiting += 6;
    }
}
Console.WriteLine($"{totalSales:f2}");
Console.WriteLine($"{(double)raiting / computersCount:f2}");