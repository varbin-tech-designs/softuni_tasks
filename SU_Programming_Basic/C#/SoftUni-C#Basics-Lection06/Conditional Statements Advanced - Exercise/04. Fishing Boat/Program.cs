int budget = int.Parse(Console.ReadLine());
string season = Console.ReadLine();
int fishermenCount = int.Parse(Console.ReadLine());
double rentPrice = 0.0;

if (season == "Spring") rentPrice = 3000;
else if (season == "Summer" || season == "Autumn") rentPrice = 4200;
else if (season == "Winter") rentPrice = 2600;

if (fishermenCount <= 6) rentPrice *= 0.9;
else if (fishermenCount > 6 && fishermenCount <= 11) rentPrice *= 0.85;
else if (fishermenCount > 11) rentPrice *= 0.75;

if (fishermenCount % 2 == 0 && season != "Autumn")
    rentPrice *= 0.95;

if (budget >= rentPrice) Console.WriteLine($"Yes! You have {(budget - rentPrice):f2} leva left.");
else Console.WriteLine($"Not enough money! You need {(rentPrice - budget):f2} leva.");