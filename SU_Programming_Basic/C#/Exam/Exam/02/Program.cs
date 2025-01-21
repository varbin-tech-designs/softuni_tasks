double startingBudget = double.Parse(Console.ReadLine());
double amountPerDay = double.Parse(Console.ReadLine());
double costs = double.Parse(Console.ReadLine());
double presentPrice = double.Parse(Console.ReadLine());

double totalAmount = amountPerDay * 5;
double savedMoney = startingBudget * 5;
double totalMoney = totalAmount + savedMoney - costs;
if (totalMoney >= presentPrice)
{
    Console.WriteLine($"Profit: {totalMoney:f2} BGN, the gift has been purchased.");
}
else
{
    Console.WriteLine($"Insufficient money: {presentPrice - totalMoney:f2} BGN.");
}