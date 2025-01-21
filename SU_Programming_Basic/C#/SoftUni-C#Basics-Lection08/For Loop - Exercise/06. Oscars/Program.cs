string actorName = Console.ReadLine();
double points = double.Parse(Console.ReadLine());
int judges = int.Parse(Console.ReadLine());

for (int i = 0;  i < judges; i++)
{
    string currentJudge = Console.ReadLine();
    double addPoints = double.Parse(Console.ReadLine());

    points += currentJudge.Length * addPoints / 2;

    if (points > 1250.5)
    {
        Console.WriteLine($"Congratulations, {actorName} got a nominee for leading role with {points:f1}!");
        return;
    }
}
Console.WriteLine($"Sorry, {actorName} you need {1250.5 - points:f1} more!");