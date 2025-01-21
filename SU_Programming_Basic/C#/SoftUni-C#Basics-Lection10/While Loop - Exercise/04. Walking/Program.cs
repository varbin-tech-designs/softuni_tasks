string command = Console.ReadLine();
int totalSteps = 0;
    while (command != "Going home")
{
    int newSteps = int.Parse(command);
    totalSteps += newSteps;
    if (totalSteps >= 10000)
    {
        Console.WriteLine($"Goal reached! Good job!");
        Console.WriteLine($"{totalSteps - 10000} steps over the goal!");
        return;
    }
    command = Console.ReadLine();
}
int finalNewSteps = int.Parse(Console.ReadLine());
totalSteps += finalNewSteps;
if (totalSteps >= 10000)
{
    Console.WriteLine($"Goal reached! Good job!");
    Console.WriteLine($"{totalSteps - 10000} steps over the goal!");
}
else
{
    Console.WriteLine($"{10000 - totalSteps} more steps to reach goal.");
}

