num = 1;
count = 0;
i = 1;
for (i = 1; i <= num; i++) {
  if (num % i == 0) {
    count++;
  }
}

if (count > 2) {
  console.log("Not a prime number");
} else {
  console.log("Prime");
}
