#!/bin/bash
export DENO_INSTALL="/home/runner/Erika-Farmer/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
deno run --lock=lock.json --lock-write --allow-all mod.ts