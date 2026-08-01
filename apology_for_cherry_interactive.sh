#!/usr/bin/env bash
# CherryBot v1.1 — Interactive Love & Apology CLI
# Run: chmod +x apology_for_cherry_interactive.sh && ./apology_for_cherry_interactive.sh

clear
cat <<'EOF'
  🍒  CherryBot — PATCH: Apology v1.1  🍒

  Hello Cherry — I'm running a very important fix:
  I got frustrated and I lost my cool. I'm sorry.
  That was on me. You didn't deserve that, and I hate that I hurt you.

  I love you more than my favorite keyboard shortcuts.
  You're my main branch, my favorite feature, my always-on background process.
  Please accept this patch with lots of hugs, patience, and better behavior.
EOF

echo
echo "▶ Things I'm committing to (no more accidental crashes):"
echo "  - Actively listen before reacting"
echo "  - Take a 10-second timeout when I'm heated"
echo "  - Say sorry sooner and mean it"
echo "  - Make it up to you in ways that matter to you ❤️"
echo

# Menu
options=(
  "Hug — 1 big hug + forehead kiss"
  "Dinner — I cook / we order your favorite"
  "Movie night — Your pick, full snack mode"
  "Sit & talk — I listen, you lead"
  "Time & space — I'll wait patiently"
  "Forgive instantly — If you're feeling generous :)"
)

function show_menu {
  echo "Choose forgiveness options (enter numbers separated by spaces)."
  echo "Type 'q' to quit without choosing, or 'a' for all."
  echo
  for i in "${!options[@]}"; do
    printf "  %d) [ ] %s\n" $((i+1)) "${options[i]}"
  done
  echo
}

show_menu
read -rp "Your choice: " -a choices

if [[ ${choices[0]} == "q" || ${choices[0]} == "Q" ]]; then
  echo
  echo "I understand. Take all the time you need. I'm here whenever you're ready."
  echo
  echo "— vansh ❤️"
  exit 0
fi

if [[ ${choices[0]} == "a" || ${choices[0]} == "A" ]]; then
  choices=(1 2 3 4 5 6)
fi

# Deduplicate & validate
declare -A picked
for c in "${choices[@]}"; do
  if [[ $c =~ ^[1-6]$ ]]; then
    picked[$c]=1
  fi
done

echo
echo "Processing your selections..."
echo

# Responses
for num in "${!picked[@]}"; do
  case $num in
    1)
      echo "🤗 Hug queued: Preparing the warmest hug and a forehead kiss."
      ;;
    2)
      echo "🍽️ Dinner queued: I'll make your favorite or order whatever you want."
      ;;
    3)
      echo "🎬 Movie night queued: Pajamas, snacks, and your pick — I'm in."
      ;;
    4)
      echo "🗣️ Talk queued: I'm ready to listen. No interruptions, no excuses."
      ;;
    5)
      echo "⏳ Time queued: I'll give you space and be patient — always."
      ;;
    6)
      echo "💖 Forgiveness requested: If you say it, I'll treasure it forever."
      ;;
  esac
done

echo
# Summary
echo "========== Summary =========="
for i in {1..6}; do
  if [[ ${picked[$i]} ]]; then
    printf "  %d) [x] %s\n" $i "${options[$((i-1))]}"
  else
    printf "  %d) [ ] %s\n" $i "${options[$((i-1))]}"
  fi
done
echo "============================="
echo
echo "If none of this fits right now, that's okay — I will keep working on being better."
echo
echo "I love you. I'm sorry. Please tell me how I can make this better."
echo
echo "— vansh ❤️"
