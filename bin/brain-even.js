#!/usr/bin/env node

import { runGame } from '../src/index.js'
import { rules, generateRound } from '../src/games/even.js'
runGame(rules, generateRound)
