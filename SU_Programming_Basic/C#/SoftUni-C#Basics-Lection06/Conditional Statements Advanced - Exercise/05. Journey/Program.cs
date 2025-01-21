double budget = double.Parse(Console.ReadLine());
string season = Console.ReadLine();
string accommodation = "";
string destination = "";

if (budget <= 100)
{
    destination = "Bulgaria";
    switch(season)
    {
        case "summer":
            budget *= 0.3;
            accommodation = "Camp";
            break;
        case "winter":
            budget *= 0.7;
            accommodation = "Hotel";
            break;
    }
}
else if (budget <= 1000)
{
    destination = "Balkans";
    switch (season)
    {
        case "summer":
            budget *= 0.4;
            accommodation = "Camp";
            break;
        case "winter":
            budget *= 0.8;
            accommodation = "Hotel";
            break;
    }
}
else
{
    destination = "Europe";
    switch (season)
    {
        case "summer":
        case "winter":
            budget *= 0.9; ;
            accommodation = "Hotel";
            break;
    }
}

Console.WriteLine($"Somewhere in {destination}");
Console.WriteLine($"{accommodation} - {budget:f2}");

