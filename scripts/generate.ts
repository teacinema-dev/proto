import { execSync } from 'child_process'
import { glob } from 'glob'
import path from 'path'

const protoDir = path.resolve(__dirname, '../src')
const outDir = path.resolve(__dirname, '../dist')

const protoFiles = glob.sync(`${protoDir}/**/*.proto`)

if (protoFiles.length === 0) {
	console.error('No proto files found!')
	process.exit(1)
}

const files = protoFiles.map((f) => `"${f}"`).join(' ')

console.log('Generating TS types for proto files:')
console.log(files)

execSync(
	`npx proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir "${outDir}" ${files}`,
	{ stdio: 'inherit' }
)

console.log('✅ TypeScript types generated in', outDir)
