int dancersCount = int.Parse(Console.ReadLine());
double points = double.Parse(Console.ReadLine());
string season = Console.ReadLine();
string place = Console.ReadLine();

double money = 0;
int costs = 0;

if (place == "Bulgaria")
{
    switch (season)
    {
        case "summer":
            costs = 5;
            break;
        case "winter":
            costs = 8;
            break;
    }
    money = points * dancersCount;
}
else if (place == "Abroad")
{
    switch (season)
    {
        case "summer":
            costs = 10;
            break;
        case "winter":
            costs = 15;
            break;
    }
    money = points * dancersCount + points * dancersCount * 0.5;
}
double finalBill = money - (money * costs / 100);
double forCharity = finalBill * 0.75;
double moneyPerDancer = (finalBill - forCharity) / dancersCount;
Console.WriteLine($"Charity - {forCharity:f2}");
Console.WriteLine($"Money per dancer - {moneyPerDancer:f2}");
