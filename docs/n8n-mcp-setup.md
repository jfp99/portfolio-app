# n8n MCP Server Setup Guide

> Guide for setting up the advanced n8n-mcp server with Claude Code/Claude Desktop

## Overview

**Package:** [n8n-mcp by czlonkowski](https://github.com/czlonkowski/n8n-mcp)

This MCP server provides AI assistants with comprehensive access to n8n:
- 543+ nodes with 99% property coverage
- 2,709 workflow templates
- Node validation and workflow testing
- Full workflow management via API

## Prerequisites

- Node.js 18+
- n8n instance with API access enabled
- n8n API key

## Getting Your n8n API Key

1. Go to your n8n instance
2. Navigate to **Settings > API > API Keys**
3. Create a new API key
4. Copy the key (JWT token format)

## Configuration

### For Claude Code

Add to `~/.claude/mcp.json`:

```json
{
  "mcpServers": {
    "n8n": {
      "command": "npx",
      "args": ["-y", "n8n-mcp"],
      "env": {
        "MCP_MODE": "stdio",
        "LOG_LEVEL": "error",
        "DISABLE_CONSOLE_OUTPUT": "true",
        "N8N_API_URL": "https://your-n8n-instance.com",
        "N8N_API_KEY": "your-api-key-here"
      },
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

### For Claude Desktop

Add to `claude_desktop_config.json`:

**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
**Linux:** `~/.config/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "n8n": {
      "command": "npx",
      "args": ["-y", "n8n-mcp"],
      "env": {
        "MCP_MODE": "stdio",
        "LOG_LEVEL": "error",
        "DISABLE_CONSOLE_OUTPUT": "true",
        "N8N_API_URL": "https://your-n8n-instance.com",
        "N8N_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `MCP_MODE` | Yes | Set to `stdio` for Claude |
| `LOG_LEVEL` | No | `error`, `warn`, `info`, `debug` |
| `DISABLE_CONSOLE_OUTPUT` | No | Set `true` to suppress debug output |
| `N8N_API_URL` | Yes | Your n8n instance URL |
| `N8N_API_KEY` | Yes | API key from n8n settings |

## Available Tools

### Core Documentation (7 tools)

| Tool | Description |
|------|-------------|
| `search_nodes` | Search 543+ nodes with real examples |
| `get_node` | Get node info/docs/properties/versions |
| `validate_node` | Validate node configuration |
| `validate_workflow` | Validate complete workflows |
| `search_templates` | Find templates by task/keyword |
| `get_template` | Get workflow JSON from template |
| `tools_documentation` | Help for all tools |

### n8n Management (13 tools)

| Tool | Description |
|------|-------------|
| `n8n_create_workflow` | Create new workflows |
| `n8n_get_workflow` | Retrieve workflow details |
| `n8n_update_full_workflow` | Complete workflow replacement |
| `n8n_update_partial_workflow` | Diff-based updates |
| `n8n_delete_workflow` | Delete workflows |
| `n8n_list_workflows` | List all workflows |
| `n8n_validate_workflow` | In-instance validation |
| `n8n_autofix_workflow` | Auto-correct errors |
| `n8n_test_workflow` | Run with test data |
| `n8n_workflow_versions` | Version management |
| `n8n_deploy_template` | Deploy from n8n.io |
| `n8n_executions` | Execution history |
| `n8n_health_check` | API connectivity check |

## Usage Examples

### Search for nodes
```
Search for HTTP Request node with examples
```

### Validate a workflow
```
Validate my workflow for errors
```

### Get node details
```
Get detailed properties for the Slack node
```

### Create a workflow
```
Create a new workflow that triggers on webhook and sends email
```

## Troubleshooting

### Server not connecting

1. Verify `npx n8n-mcp` runs without errors:
   ```bash
   npx n8n-mcp --help
   ```

2. Check your n8n instance is accessible:
   ```bash
   curl https://your-n8n-instance.com/api/v1/workflows -H "X-N8N-API-KEY: your-key"
   ```

3. Restart Claude Code/Desktop after config changes

### API key issues

- Ensure the key hasn't expired
- Verify the key has appropriate permissions
- Check the key format (should be JWT)

## Current Configuration

**Instance:** `https://n8n.srv1160517.hstgr.cloud`
**Package:** `n8n-mcp` (via npx)
**Status:** Configured in Claude Desktop

---

*Last updated: 2025-12-19*
