double excursionPrice = double.Parse(Console.ReadLine());
double budget = double.Parse(Console.ReadLine());
int spendDays = 0;
int totalDays = 0;
bool isFailed = false;

while (budget < excursionPrice)
{
    string command = Console.ReadLine();
    double amount = double.Parse(Console.ReadLine());

    totalDays++;

    if (command == "spend")
    {
        budget -= amount;
        spendDays++;
        if (budget < 0)
        {
            budget = 0;
        }
        if (spendDays == 5)
        {
            isFailed = true;
            break;
        }
    }
    else if (command == "save")
    {
        budget += amount;
        spendDays = 0;
    }
}
if (isFailed)
{
    Console.WriteLine($"You can't save the money.");
    Console.WriteLine($"{totalDays}");
}
else
{
    Console.WriteLine($"You saved the money for {totalDays} days.");
}