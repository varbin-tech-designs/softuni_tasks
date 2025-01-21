int age = int.Parse(Console.ReadLine());
double machinePrice = double.Parse(Console.ReadLine());
int pricePerToy = int.Parse(Console.ReadLine());
int money = 0;

for (int currentAge = 1; currentAge <= age; currentAge++)
{
    if (currentAge % 2 == 0) money += currentAge * 5 - 1;
    else money += pricePerToy;
}

if (money >= machinePrice)
    Console.WriteLine($"Yes! {money - machinePrice:f2}");
else 
    Console.WriteLine($"No! {machinePrice - money:f2}");