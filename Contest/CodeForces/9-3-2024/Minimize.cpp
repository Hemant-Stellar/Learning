// You are given two integers a and b (a≤b). Over all possible integer values of c (a≤c≤b), find the minimum value of (c−a)+(b−c).

// Input
// The first line contains t (1≤t≤55) — the number of test cases.

// Each test case contains two integers a and b (1≤a≤b≤10).

// Output
// For each test case, output the minimum possible value of (c−a)+(b−c) on a new line.

// Example
// Input
// 3
// 1 2
// 3 10
// 5 5
// Output
// 1
// 7
// 0
// Note
// In the first test case, you can choose c=1 and obtain an answer of (1−1)+(2−1)=1. It can be shown this is the minimum value possible.

// In the second test case, you can choose c=6 and obtain an answer of (6−3)+(10−6)=7. It can be shown this is the minimum value possible.



#include <iostream>
using namespace std;

int main() {
    int t;
    cin >> t;

    while (t--) {
        int a, b;
        cin >> a >> b;

        // The minimum value of the expression (c - a) + (b - c) is simply b - a
        int result = b - a;

        cout << result << endl;
    }

    return 0;
}
