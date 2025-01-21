string fruit = Console.ReadLine();
string day =  Console.ReadLine();
double quantity = double.Parse(Console.ReadLine());
double pricePerFruit = 0.0;

if (day == "Monday" || day == "Tuesday" || day == "Wednesday"
    || day == "Thursday" || day == "Friday")
{
    switch(fruit)
    {
        case "banana":
            pricePerFruit = 2.5;
            break;
        case "apple":
            pricePerFruit = 1.2;
            break;
        case "orange":
            pricePerFruit = 0.85;
            break;
        case "grapefruit":
            pricePerFruit = 1.45;
            break;
        case "kiwi":
            pricePerFruit = 2.7;
            break;
        case "pineapple":
            pricePerFruit = 5.5;
            break;
        case "grapes":
            pricePerFruit = 3.85;
            break;
        default:
            Console.WriteLine("error");
            return;
    }
    Console.WriteLine($"{(pricePerFruit * quantity):f2}");
}
else if (day == "Saturday" || day == "Sunday")
{
    switch (fruit)
    {
        case "banana":
            pricePerFruit = 2.7;
            break;
        case "apple":
            pricePerFruit = 1.25;
            break;
        case "orange":
            pricePerFruit = 0.9;
            break;
        case "grapefruit":
            pricePerFruit = 1.6;
            break;
        case "kiwi":
            pricePerFruit = 3;
            break;
        case "pineapple":
            pricePerFruit = 5.6;
            break;
        case "grapes":
            pricePerFruit = 4.2;
            break;
        default:
            Console.WriteLine("error");
            return;
    }
    Console.WriteLine($"{(pricePerFruit * quantity):f2}");
}
else
{
    Console.WriteLine("error");
}

