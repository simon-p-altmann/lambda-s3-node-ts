// esbuild.config.js
const { build } = require('esbuild');

build({
  entryPoints: ['src/handler.ts'], // Entry point for your application
  bundle: true, // Bundle all dependencies into the output file
  minify: true, // Minify the output
  sourcemap: true, // Generate a source map
  platform: 'node', // Set the platform to Node.js
  target: ['node20'], // Specify the target environment (Node.js version)
  tsconfig: 'tsconfig.json', // Specify the path to your tsconfig.json
  outdir: 'dist', // Output directory
}).catch(() => process.exit(1));
