// Script to fetch Figma design via MCP server
// This attempts to call the Figma MCP tools via JSON-RPC

const MCP_SERVER_URL = 'http://127.0.0.1:3845/mcp';

async function callMCPTool(toolName, params = {}) {
  const request = {
    jsonrpc: '2.0',
    id: Date.now(),
    method: 'tools/call',
    params: {
      name: toolName,
      arguments: params
    }
  };

  try {
    const response = await fetch(MCP_SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request)
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error calling ${toolName}:`, error);
    return null;
  }
}

async function extractFigmaDesign() {
  console.log('Attempting to extract Figma design...');
  console.log('Target frame: node-id=2015-58\n');

  // Try to get design context (plain HTML + CSS)
  console.log('1. Fetching design context...');
  const designContext = await callMCPTool('get_design_context', {
    prompt: 'generate my Figma selection in plain HTML + CSS'
  });
  
  if (designContext && designContext.result) {
    console.log('✓ Design context received');
    return {
      designContext: designContext.result,
      variables: null
    };
  }

  // Try to get variable definitions
  console.log('2. Fetching variable definitions...');
  const variables = await callMCPTool('get_variable_defs', {
    prompt: 'list the variable names and their values used in my Figma selection'
  });

  if (variables && variables.result) {
    console.log('✓ Variables received');
  }

  return {
    designContext: designContext?.result || null,
    variables: variables?.result || null
  };
}

// Run extraction
extractFigmaDesign()
  .then(result => {
    if (result.designContext || result.variables) {
      console.log('\n✓ Extraction successful!');
      console.log('\nDesign data:', JSON.stringify(result, null, 2));
    } else {
      console.log('\n⚠ Could not extract design data.');
      console.log('Please ensure:');
      console.log('1. Figma Desktop is open');
      console.log('2. Frame (node-id=2015-58) is selected');
      console.log('3. Figma MCP server is enabled');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
