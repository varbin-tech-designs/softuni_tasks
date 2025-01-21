int width = int.Parse(Console.ReadLine());
int length = int.Parse(Console.ReadLine());
int heigh = int.Parse(Console.ReadLine());

int flatArea = width * length * heigh;

string command = Console.ReadLine();

while (command != "Done")
{
    int ocupatedSpace = int.Parse(command);
    flatArea -= ocupatedSpace;
    if (flatArea <= 0)
    {
        Console.WriteLine($"No more free space! You need {Math.Abs(flatArea)} Cubic meters more.");
        return;
    }
    command = Console.ReadLine();
}
Console.WriteLine($"{flatArea} Cubic meters left.");