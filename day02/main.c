#include <stdio.h>
#include <stdlib.h>

#define SIZEOF(a) (&a)[1] - a;

int main(int argc, char **argv) {

  int ARR_SIZE = 201;

  char **nums = malloc(sizeof(char *) * ARR_SIZE);
  int *num = malloc(sizeof(int) * ARR_SIZE);

  if (nums == NULL) {
    fprintf(stderr, "Memory allocation failed\n");
    exit(1);
  }

  FILE *fp = fopen("input.txt", "r");

  if (fp == NULL) {
    fprintf(stderr, "Error opening input file\n");
    exit(2);
  }

  int i;
  for (i = 0; 1; i++) {
    int j;
    if (i >= ARR_SIZE) {
      int new_size;

      new_size = ARR_SIZE * 2;
      ARR_SIZE = new_size;

      nums = (char **)realloc(nums, sizeof(char *) * new_size);
      if (nums == NULL) {
        fprintf(stderr, "Memory allocation failed\n");
        exit(3);
      }
    }

    nums[i] = malloc(16);
    if (nums[i] == NULL) {
      fprintf(stderr, "Memory allocation failed");
      exit(4);
    }

    if (fgets(nums[i], 16 - 1, fp) == NULL) {
      break;
    }

    for (j = strlen(nums[i]) - 1;
         j >= 0 && (nums[i][j] == '\n' || nums[i][j] == '\r'); j--)
      ;
    nums[i][j + 1] = '\0';
  }

  for (int i = 0; i < ARR_SIZE; i++) {
    if (strlen(nums[i]) > 0)
      num[i] = atoi(nums[i]);
  }

  


  return 0;
}