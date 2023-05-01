#include <iostream>
#include <iomanip>
#include <cmath>
#include <ctime>

using namespace std;

const long FLIPS[] = { 10, 50, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000 };

void printTable() {
    cout << setw(11) << "Flips" << setw(20) << "Heads Chance (%)" << setw(20) << "Tails Chance (%)" << endl;
    cout << setw(11) << "-----" << setw(20) << "---------------" << setw(20) << "---------------" << endl;

    for (int i = 0; i < 10; i++) {
        long flips = FLIPS[i];

        long headsCount = 0;
        long tailsCount = 0;

        for (int j = 0; j < flips; j++) {
            if (rand() % 2 == 0) {
                headsCount++;
            }
            else {
                tailsCount++;
            }
        }

        double headsChance = static_cast<double>(headsCount) / flips * 100;
        double tailsChance = static_cast<double>(tailsCount) / flips * 100;

        cout << setw(11) << flips << setw(20) << fixed << setprecision(10) << headsChance << setw(20) << tailsChance << endl;
    }
}

int main() {
    srand(time(nullptr));

    printTable();

    return 0;
}