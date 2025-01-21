double budget = double.Parse(Console.ReadLine());
int bgActors = int.Parse(Console.ReadLine());
double clothingPerActor = double.Parse(Console.ReadLine());

double totalClothingPrice = bgActors * clothingPerActor;
double decorPrice = budget * 0.1;

if (bgActors > 150)
{
    totalClothingPrice *= 0.9;
}
double finalBill = totalClothingPrice + decorPrice;

if (finalBill > budget)
{
    double neededMoney = finalBill - budget;
    Console.WriteLine("Not enough money!");
    Console.WriteLine($"Wingard needs {neededMoney:f2} leva more.");
}
else
{
    double remainingMoney = budget - finalBill;
    Console.WriteLine("Action!");
    Console.WriteLine($"Wingard starts filming with {remainingMoney:f2} leva left.");
}