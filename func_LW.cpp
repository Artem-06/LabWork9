#include <cmath>
#include "func.h"
#define _USE_MATH_DEFINES
#include "math.h"

double func1(float x, float y)
{
	return (10 + cos(pow(x, 2))) / 17 * x + abs(5 * y - y / (1 + pow(x, 3) * y)) / pow(x - pow(y, 2), 1 / 3);
}

double func2(float x, float alpha)
{
	return pow(cos(x), 2) + tan(M_PI / 3) - sin(alpha * M_PI / 180 - 27 * M_PI / 180);
}

double func3(int A, float B)
{
	int res;

	B = int(B) ? res = B - 1 : res = B;

	return res;
}