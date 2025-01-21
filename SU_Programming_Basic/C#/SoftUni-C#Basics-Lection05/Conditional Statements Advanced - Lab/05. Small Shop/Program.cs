string product = Console.ReadLine();
string city = Console.ReadLine();
double quantity = double.Parse(Console.ReadLine());
double pricePerOneProduct = 0.0;

if (city == "Sofia")
{
    if (product == "coffee") pricePerOneProduct = 0.5;
    else if (product == "water") pricePerOneProduct = 0.8;
    else if (product == "beer") pricePerOneProduct = 1.2;
    else if (product == "sweets") pricePerOneProduct = 1.45;
    else if (product == "peanuts") pricePerOneProduct = 1.6;
}
else if (city == "Plovdiv")
{
    if (product == "coffee") pricePerOneProduct = 0.4;
    else if (product == "water") pricePerOneProduct = 0.7;
    else if (product == "beer") pricePerOneProduct = 1.15;
    else if (product == "sweets") pricePerOneProduct = 1.30;
    else if (product == "peanuts") pricePerOneProduct = 1.5;
}
else if (city == "Varna")
{
    if (product == "coffee") pricePerOneProduct = 0.45;
    else if (product == "water") pricePerOneProduct = 0.7;
    else if (product == "beer") pricePerOneProduct = 1.1;
    else if (product == "sweets") pricePerOneProduct = 1.35;
    else if (product == "peanuts") pricePerOneProduct = 1.55;
}

double totalPrice = pricePerOneProduct * quantity;
Console.WriteLine(totalPrice);