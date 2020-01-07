// import { useState, useEffect } from "react";

export default function useVibration(pattern) {
  navigator.vibrate(pattern);
}
