# Figma Design Extraction Guide

## Figma File
- **URL**: https://www.figma.com/design/qxjEtrBAKxhfrzZwaYSR9m/StudioRomneya?node-id=2015-58&t=1OjxlgZblL7klIgK-11
- **Target Frame**: node-id=2015-58

## Steps to Extract Design

### Option 1: Using Figma MCP (Recommended)
1. Open Figma Desktop
2. Navigate to the StudioRomneya file
3. Select the frame with node-id=2015-58
4. Ensure Figma MCP server is running (Preferences → DevMode → Enable MCP)
5. In Cursor, the agent should be able to call:
   - `get_design_context` with prompt: "generate my Figma selection in plain HTML + CSS"
   - `get_variable_defs` to get colors, spacing, typography variables

### Option 2: Manual Extraction
If MCP is not available:
1. Open the Figma file in browser or Desktop
2. Select the frame (node-id=2015-58)
3. Use Dev Mode to inspect:
   - Colors: Check fill/stroke colors
   - Typography: Font family, size, weight, line height
   - Spacing: Padding, margins, gaps
   - Layout: Column spans, grid structure
4. Update `css/tokens.css` with extracted values
5. Update `index.html` with structure from Figma
6. Update `css/main.css` with component styles

## Design Requirements
- 12-column grid
- 24px padding around container
- Responsive breakpoints: mobile (768px), tablet (1024px), desktop (1440px)
- All styles should use CSS custom properties from `tokens.css`
