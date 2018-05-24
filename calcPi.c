#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <stdio.h>

void Randomize() {
	// Declare variable to hold seconds on clock.
	time_t seconds;
	time(&seconds);
	srand((unsigned int) seconds);
}


double RandomReal(double lower, double upper) {
	double tmp = rand()* 1.0 / RAND_MAX;  // tmp is between 0.0-1.0
	return lower + (upper - lower) * tmp;

}

double calcPi(int numTrials) {
    int inCircle = 0;   
    for(int i = 0; i < numTrials; i++) {
        double x = RandomReal(0, 1);
        double y = RandomReal(0, 1);
        if (x*x + y*y <= 1.0) {
            inCircle++;
        }
    }
    return 4.0 * inCircle / numTrials;
}


void piMonteCarlo(double* arr, int arrLen){
    for (int i = 0; i < arrLen; i++) {
        arr[i] = calcPi(100000);
    }

}

int main() {

    Randomize();
    double piArr[1000];
    piMonteCarlo(piArr, 1000);
    // printf("pi: %f\n", calcPi(100000));
    for(int i = 0; i < 1000; i++) {
        printf("%f,", piArr[i]);
    }

    return 0;
}