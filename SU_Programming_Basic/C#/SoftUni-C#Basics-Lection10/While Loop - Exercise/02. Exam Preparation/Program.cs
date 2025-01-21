int badGradesLimit = int.Parse(Console.ReadLine());
string command = Console.ReadLine();
int gradesCount = 0;
int badGrades = 0;
string lastProblem = "";
int gradeSum = 0;
bool isReachedLimit = false;

while (command != "Enough")
{
    int grade = int.Parse(Console.ReadLine());
    gradeSum += grade;
    gradesCount++;

    if (grade <= 4)
    {
        badGrades++;
        if (badGrades == badGradesLimit)
        {
            isReachedLimit = true;
            break;
        }
    }
    lastProblem = command;
    command = Console.ReadLine();
}
if (isReachedLimit)
{
    Console.WriteLine($"You need a break, {badGrades} poor grades.");
}
else
{
    Console.WriteLine($"Average score: {(double)gradeSum / gradesCount:f2}");
    Console.WriteLine($"Number of problems: {gradesCount}");
    Console.WriteLine($"Last problem: {lastProblem}");
}