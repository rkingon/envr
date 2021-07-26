#!/usr/bin/env node
const { spawn } = require('cross-spawn')
require('dotenv-flow').config()

const args = process.argv.slice(2)
const command = args.shift()

spawn(command, args, { stdio: 'inherit' })
