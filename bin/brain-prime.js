#!/usr/bin/env node

import { runGame } from '../src/index.js'
import { rules, generateRound } from '../src/games/prime.js'
runGame(rules, generateRound)
