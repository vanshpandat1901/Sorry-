#!/usr/bin/env bash
# CherryBot v1.0 — Love & Apology CLI
# (A tiny terminal script from someone who lost their cool and wants to make it right)

cat <<'EOF'
  🍒  CherryBot — PATCH: Apology v1.0  🍒

  Hello Cherry — I'm running a very important fix:
  I got frustrated and I lost my cool. I'm sorry.
  That was on me. You didn't deserve that, and I hate that I hurt you.

  I love you more than my favorite keyboard shortcuts.
  You're my main branch, my favorite feature, my always-on background process.
  Please accept this patch with lots of hugs, patience, and better behavior.

EOF

# Promise block
echo
echo "▶ Things I'm committing to (no more accidental crashes):"
echo "  - Actively listen before reacting"
echo "  - Take a 10-second timeout when I'm heated"
echo "  - Say sorry sooner and mean it"
echo "  - Make it up to you in ways that matter to you ❤️"
echo

# Interactive (pretend) menu — for fun choices you can actually check below:
cat <<'EOF'
Choose a forgiveness option (pick one, or check multiple on the message I send you):

  1) [ ] /forgive hug          — 1 big hug + forehead kiss
  2) [ ] /forgive dinner       — I cook / we order your favorite
  3) [ ] /forgive movie-night  — Your pick, full snack mode
  4) [ ] /forgive talk         — We sit down, I listen, you lead
  5) [ ] /forgive time         — I give you space, I wait patiently
  6) [ ] /forgive instant      — If you're feeling generous :') 

Commands you can "run" (for fun):
  $ git commit -m "fix: sincerely sorry, Cherry" --author="vansh <you@love.me>"
  $ ./cherry --forgive --level=full
  $ echo "I forgive you" > /dev/heart

EOF

# Gentle fallback if none selected
cat <<'EOF'
If none of the above feels right yet, that's okay — take the time you need.
I'll be here, ready to listen and to prove it with actions, not just words.

I love you. I'm sorry. Please tell me how I can make this better.

— vansh ❤️
EOF
