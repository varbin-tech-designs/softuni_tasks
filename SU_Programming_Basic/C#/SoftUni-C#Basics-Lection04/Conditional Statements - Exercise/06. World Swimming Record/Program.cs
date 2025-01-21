double record = double.Parse(Console.ReadLine());
double distance = double.Parse(Console.ReadLine());
double timePerOneMeter = double.Parse(Console.ReadLine());

double time = distance * timePerOneMeter;
double delay = (Math.Floor(distance / 15)) * 12.5;
double newTime = time + delay;

if (newTime < record)
{
    Console.WriteLine($"Yes, he succeeded! The new world record is {newTime:f2} seconds.");
}
else
{
    double neededTime = newTime - record;
    Console.WriteLine($"No, he failed! He was {neededTime:f2} seconds slower.");
}