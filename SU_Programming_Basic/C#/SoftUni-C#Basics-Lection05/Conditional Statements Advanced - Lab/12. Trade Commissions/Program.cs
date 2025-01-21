string city = Console.ReadLine();
double sales = double.Parse(Console.ReadLine());
double percentage = 0.0;

if (city == "Sofia" && sales > 0)
{
    if (sales >= 0 && sales <= 500) percentage = 0.05;
    else if (sales > 500 && sales <= 1000) percentage = 0.07;
    else if (sales > 1000 && sales <= 10000) percentage = 0.08;
    else if (sales > 10000) percentage = 0.12;
}
else if (city == "Varna" && sales > 0)
{
    if (sales >= 0 && sales <= 500) percentage = 0.045;
    else if (sales > 500 && sales <= 1000) percentage = 0.075;
    else if (sales > 1000 && sales <= 10000) percentage = 0.1;
    else if (sales > 10000) percentage = 0.13;
}
else if (city == "Plovdiv" && sales > 0)
{
    if (sales >= 0 && sales <= 500) percentage = 0.055;
    else if (sales > 500 && sales <= 1000) percentage = 0.08;
    else if (sales > 1000 && sales <= 10000) percentage = 0.12;
    else if (sales > 10000) percentage = 0.145;
}
else
{
    Console.WriteLine("error");
    return;
}

Console.WriteLine($"{(sales * percentage):f2}");

