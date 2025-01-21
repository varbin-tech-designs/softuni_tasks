int tournaments = int.Parse(Console.ReadLine());
int startingPoints = int.Parse(Console.ReadLine());
int winningPoints = 0;
int wins = 0;

for (int i = 0; i < tournaments; i++)
{
    string stage = Console.ReadLine();

    if (stage == "W")
    {
        winningPoints += 2000;
        wins++;
    }
    else if (stage == "F") winningPoints += 1200;
    else if (stage == "SF") winningPoints += 720;
}
double avrPoints = winningPoints / tournaments;
Console.WriteLine($"Final points: {startingPoints + winningPoints}");
Console.WriteLine($"Average points: {Math.Floor(avrPoints)}");
Console.WriteLine($"{wins / (double)tournaments * 100:f2}%");