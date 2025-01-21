string command = Console.ReadLine();
int maxGoals = 0;
string playerName = "";

while (command != "END")
{
    int goals = int.Parse(Console.ReadLine());

    if (goals > maxGoals)
    {
        maxGoals = goals;
        playerName = command;
    }
    if (goals >= 10)
    {
        break;
    }
    command = Console.ReadLine();
}
Console.WriteLine($"{playerName} is the best player!");
if (maxGoals >= 3)
{
    Console.WriteLine($"He has scored {maxGoals} goals and made a hat-trick !!!");
}
else
{
    Console.WriteLine($"He has scored {maxGoals} goals.");
}