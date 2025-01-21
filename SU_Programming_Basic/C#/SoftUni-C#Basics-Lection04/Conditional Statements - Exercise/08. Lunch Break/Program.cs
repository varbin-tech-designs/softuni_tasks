string seriesName = Console.ReadLine();
int episodeDuration = int.Parse(Console.ReadLine());
int breakDuration = int.Parse(Console.ReadLine());

double lunchTime = breakDuration / 8.0;
double relaxTime = breakDuration / 4.0;
double timeToWatch = breakDuration - relaxTime - lunchTime;

if (timeToWatch >= episodeDuration)
{
    double remainingTime = timeToWatch - episodeDuration;
    Console.WriteLine($"You have enough time to watch {seriesName} and left with {Math.Ceiling(remainingTime)} minutes free time.");
}
else
{
    double neededTime = episodeDuration - timeToWatch;
    Console.WriteLine($"You don't have enough time to watch {seriesName}, you need {Math.Ceiling(neededTime)} more minutes.");
}