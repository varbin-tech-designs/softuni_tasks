﻿int length = int.Parse(Console.ReadLine());
int width = int.Parse(Console.ReadLine());
int height = int.Parse(Console.ReadLine());
double percentage = double.Parse(Console.ReadLine());

double volume = (length * width * height) * 0.001;
double freeSpace = volume - (volume * (percentage / 100));

Console.WriteLine(freeSpace);