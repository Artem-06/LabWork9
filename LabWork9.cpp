#include <iostream>
#include <iomanip>
#include "Windows.h"
#include "func.h"

using namespace std;

int main()
{
	float x_1, y, x_2, alpha;

	cout << "Input x for A: ";
	cin >> x_1;
	cout << "Input y for A: ";
	cin >> y;
	cout << "Input x for B: ";
	cin >> x_2;
	cout << "Input alpha for B: ";
	cin >> alpha;

	cout << "Result = " << func3(func1(x_1, y), func2(x_2, alpha));
}