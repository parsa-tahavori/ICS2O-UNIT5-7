// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Parsa Tahavori
// Created on: Dec 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-07-JS/sw.js", {
    scope: "/ICS20-Unit-5-07-JS/",
  })
}

/**
 * Input
 */
function myButtonClicked() {
  const numChosen = parseInt(document.getElementById("num").value)
  let sum = 0

  for (let counter = 1; counter <= num; counter++) {
    sum += counter
  }
  document.getElementById("answer").innerHTML = "The answer is: " + sum
}
