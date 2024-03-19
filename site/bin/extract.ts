import * as child_process from 'child_process';
import * as fs from 'fs';

// Get the zip file path from the command line arguments
const zipFilePath = process.argv[2] || "~/Downloads/logseq-export.zip";

// Define the directories
const contentDir = 'src/content/logseq';
const assetsDir = 'src/assets';
const tmpDir = '.tmp';

// Define the command to unzip the file
const unzipCommand = `unzip -o ${zipFilePath} -d ${tmpDir}`;

// Execute the unzip command
child_process.execSync(unzipCommand);

// Remove the existing directories

if (fs.existsSync(contentDir)) {
    fs.rmdirSync(contentDir, { recursive: true });
}

if (fs.existsSync(assetsDir)) {
    fs.rmdirSync(assetsDir, { recursive: true });
}
const movePagesCommand = `mv ${tmpDir}/pages ${contentDir}`;
const moveAssetsCommand = `mv ${tmpDir}/assets ${assetsDir}`;
// Execute the move commands
child_process.execSync(movePagesCommand);
child_process.execSync(moveAssetsCommand);

// Remove the zip file and the extracted folder
fs.unlinkSync(zipFilePath);
fs.rmdirSync('.tmp', { recursive: true });