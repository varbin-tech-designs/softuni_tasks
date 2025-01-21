string name = Console.ReadLine();
int failedClass = 0;
int currentClass = 1;
double gradeSum = 0;

while (currentClass <= 12)
{
    double grade = double.Parse(Console.ReadLine());
    if (grade < 4) failedClass++;
    else currentClass++;
    if (failedClass == 2)
    {
        Console.WriteLine($"{name} has been excluded at {currentClass} grade");
        return;
    }
    gradeSum += grade;
}
Console.WriteLine($"{name} graduated. Average grade: {gradeSum / 12:f2}");