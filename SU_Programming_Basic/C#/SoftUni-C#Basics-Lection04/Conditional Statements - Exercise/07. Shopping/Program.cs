double budget = double.Parse(Console.ReadLine());
int gpuCount = int.Parse(Console.ReadLine());
int cpuCount = int.Parse(Console.ReadLine());
int ramCount = int.Parse(Console.ReadLine());

double gpuPrice = 250;
double cpuPrice = gpuPrice * gpuCount * 0.35;
double ramPrice = gpuPrice * gpuCount * 0.1;

double totalPrice = gpuPrice * gpuCount + cpuPrice * cpuCount + ramPrice * ramCount;

if (gpuCount > cpuCount)
{
    totalPrice *= 0.85;
}

if (budget >= totalPrice)
{
    double remainingMoney = budget - totalPrice;
    Console.WriteLine($"You have {remainingMoney:f2} leva left!");
}
else
{
    double neededMoney = totalPrice - budget;
    Console.WriteLine($"Not enough money! You need {neededMoney:f2} leva more!");
}