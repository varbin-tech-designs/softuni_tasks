﻿string name = Console.ReadLine();
int sum = 0;

for (int i = 0; i < name.Length; i++)
{
    char letter = name[i];

    if (letter == 'a') sum++;
    else if (letter == 'e') sum += 2;
    else if (letter == 'i') sum += 3;
    else if (letter == 'o') sum += 4;
    else if (letter == 'u') sum += 5;
}
Console.WriteLine(sum);
   

