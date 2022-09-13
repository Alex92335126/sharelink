let num = 5;

if (num > 0) {
  ("positive");
} else if (num < 0) {
  ("negative");
} else {
  ("zero");
}

num > 0 ? "positive" : num < 0 ? "negative" : "zero";