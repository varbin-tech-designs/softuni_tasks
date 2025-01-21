int groups = int.Parse(Console.ReadLine());

int counter1 = 0;
int counter2 = 0;
int counter3 = 0;
int counter4 = 0;
int counter5 = 0;

int totalPeople = 0;

for (int currentGroup = 1; currentGroup <= groups; currentGroup++)
{
    int peoplePerGroup = int.Parse(Console.ReadLine());

    if (peoplePerGroup <= 5) counter1 += peoplePerGroup;
    else if (peoplePerGroup <= 12) counter2 +=  peoplePerGroup;
    else if (peoplePerGroup <= 25) counter3 += peoplePerGroup;
    else if (peoplePerGroup <= 40) counter4 += peoplePerGroup;
    else counter5 += peoplePerGroup;

    totalPeople += peoplePerGroup;
}

Console.WriteLine($"{(double)counter1 / totalPeople * 100:f2}%");
Console.WriteLine($"{(double)counter2 / totalPeople * 100:f2}%");
Console.WriteLine($"{(double)counter3 / totalPeople * 100:f2}%");
Console.WriteLine($"{(double)counter4 / totalPeople * 100:f2}%");
Console.WriteLine($"{(double)counter5 / totalPeople * 100:f2}%");