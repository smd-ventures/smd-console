# CLAUDE.md - SMD Console

This file provides guidance for Claude Code agents working in this repository.

## About This Repository

SMD Console is the central infrastructure and documentation hub for SMD Ventures.

## Session Start

Always run `/sod` at the start of every session to:
- Create session in Context Worker
- Download current documentation
- Establish session context for handoffs

## Common Commands

```bash
/sod                    # Start of day - load context
/eod                    # End of day - create handoff
/update                 # Update session context mid-session
/heartbeat              # Keep session alive
/commit                 # Create commit with good message
```

## Build Commands

TBD - add venture-specific build commands as projects are added.

## Security Requirements

- Never commit secrets to the repository
- Use Bitwarden/environment variables for credentials
- Validate all input at API boundaries
