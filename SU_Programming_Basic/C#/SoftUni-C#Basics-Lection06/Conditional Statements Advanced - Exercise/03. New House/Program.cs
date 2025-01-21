string flower = Console.ReadLine();
int flowerCount = int.Parse(Console.ReadLine());
int budget = int.Parse(Console.ReadLine());

double rosesPrice = 5.0;
double dahliasPrice = 3.8;
double tulipsPrice = 2.8;
double narcissusPrice = 3.0;
double gladiolusPrice = 2.5;

double totalPrice = 0.0;

if (flower == "Roses")
{
    totalPrice = rosesPrice * flowerCount;
    if (flowerCount > 80) totalPrice *= 0.9;
}
else if (flower == "Tulips")
{
    totalPrice = tulipsPrice * flowerCount;
    if (flowerCount > 80) totalPrice *= 0.85;
}
else if (flower == "Dahlias")
{
    totalPrice = dahliasPrice * flowerCount;
    if (flowerCount > 90) totalPrice *= 0.85;
}
else if (flower == "Narcissus")
{
    totalPrice = narcissusPrice * flowerCount;
    if (flowerCount < 120) totalPrice *= 1.15;
}
else if (flower == "Gladiolus")
{
    totalPrice = gladiolusPrice * flowerCount;
    if (flowerCount < 80) totalPrice *= 1.2;
}

if (budget >= totalPrice) Console.WriteLine($"Hey, you have a great garden with {flowerCount} {flower} and {(budget - totalPrice):f2} leva left.");
else Console.WriteLine($"Not enough money, you need {(totalPrice - budget):f2} leva more.");