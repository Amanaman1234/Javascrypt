const junkfood = false;
const healthyfood = true;
if (!junkfood) {
  console.log("good for you");
} else if (healthyfood && !junkfood) {
  console.log("Great!");
} else {
  console.log("Don't know what to say....");
}
