int examHour = int.Parse(Console.ReadLine());
int examMinute = int.Parse(Console.ReadLine());
int arrivalHour = int.Parse(Console.ReadLine());
int arivalMinute = int.Parse(Console.ReadLine());

int totalExamMin = examHour * 60 + examMinute;
int totalArrivalMin = arrivalHour * 60 + arivalMinute;
int minDiffPlus = totalExamMin - totalArrivalMin;

if (minDiffPlus >= 0 && minDiffPlus <= 30) 
{
    Console.WriteLine("On time");
    if (minDiffPlus > 0)
    {
        Console.WriteLine($"{minDiffPlus} minutes before the start");
    }
}
else if (minDiffPlus > 30)
{
    if (minDiffPlus >= 60)
    {
        int mins = minDiffPlus % 60;
        if (mins < 10)
        {
            Console.WriteLine($"Early {minDiffPlus / 60}:0{mins} hours before the start");
            return;
        }
        else
        {
            Console.WriteLine($"Early {minDiffPlus / 60}:{mins} hours before the start");
            return;
        }
    }
    Console.WriteLine($"Early {minDiffPlus} minutes before the start");
}
else if (minDiffPlus < 0)
{
    if (minDiffPlus <= -60)
    {
        int mins = Math.Abs( minDiffPlus % 60);
        if (mins < 10)
        {
            Console.WriteLine($"Late {Math.Abs(minDiffPlus / 60)}:0{mins} hours after the start");
            return;
        }
        else
        {
            Console.WriteLine($"Late {Math.Abs(minDiffPlus / 60)}:{mins} hours after the start");
            return;
        }
    }
    Console.WriteLine($"Late {Math.Abs(minDiffPlus)} minutes after the start");
}

