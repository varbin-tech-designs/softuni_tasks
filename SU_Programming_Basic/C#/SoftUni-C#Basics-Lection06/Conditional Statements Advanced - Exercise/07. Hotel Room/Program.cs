string month = Console.ReadLine();
int nights = int.Parse(Console.ReadLine());
double priceApartment = 0.0;
double priceStudio = 0.0;

if (month == "May" || month == "October")
{
    priceStudio = 50;
    priceApartment = 65;

    if (nights > 7 && nights <= 14) priceStudio *= 0.95;
    else if (nights > 14) priceStudio *= 0.7;
}
else if (month == "June" || month == "Semptember")
{
    priceStudio = 75.2;
    priceApartment = 68.7;

    if (nights > 14) priceStudio *= 0.8;
}
else if (month == "July" || month == "August")
{
    priceStudio = 76;
    priceApartment = 77;
}

if (nights > 14) priceApartment *= 0.9;

Console.WriteLine($"Apartment: {(priceApartment * nights):f2} lv.");
Console.WriteLine($"Studio: {(priceStudio * nights):f2} lv.");