title:: Working With the File System on Node.js (highlights)
author:: [[2ality.com]]
full-title:: "Working With the File System on Node.js"
category:: #articles
url:: https://2ality.com/2022/06/nodejs-file-system.html

- Highlights first synced by [[Readwise]] [[Feb 20th, 2023]]
	- Whenever a Node.js function accepts a file system path in a string (line A), it usually also accepts an instance of URL (line B):
	  
	  import * as fs from 'node:fs';
	  
	  assert.equal(
	  fs.readFileSync(
	    '/tmp/text-file.txt', {encoding: 'utf-8'}), // (A)
	  'Text content'
	  );
	  assert.equal(
	  fs.readFileSync(
	    new URL('file:///tmp/text-file.txt'), {encoding: 'utf-8'}), // (B)
	  'Text content'
	  );
	  Manually converting between paths and file: URLs seems easy but has surprisingly many pitfalls: percent encoding or decoding, Windows drive letters, etc. Instead, it’s better to use the following two functions:
	  
	  url.pathToFileURL()
	  url.fileURLToPath()
	- Class Buffer represents fixed-length byte sequences on Node.js. It is a subclass of Uint8Array (a TypedArray). Buffers are mostly used when working with binary files and therefore of less interest in this blog post.
	  
	  Whenever Node.js accepts a Buffer, it also accepts a Uint8Array. Thus, given that Uint8Arrays are cross-platform and Buffers aren’t, the former is preferable.
	  
	  Buffers can do one thing that Uint8Arrays can’t: encoding and decoding text in various encodings. If we need to encode or decode UTF-8 in Uint8Arrays, we can use class TextEncoder or class TextDecoder. These classes are available on most JavaScript platforms:
	  
	  > new TextEncoder().encode('café')
	  Uint8Array.of(99, 97, 102, 195, 169)
	  > new TextDecoder().decode(Uint8Array.of(99, 97, 102, 195, 169))
	  'café'
	- Some functions accept or return native Node.js streams:
	  
	  stream.Readable is Node’s class for readable streams. Module node:fs uses fs.ReadStream which is a subclass.
	  stream.Writable is Node’s class for writable streams. Module node:fs uses fs.WriteStream which is a subclass.
	  Instead of native streams, we can now use cross-platform web streams on Node.js. The blog post “Using web streams on Node.js” explains how.
	- We can also read text files via streams:
	  
	  import * as fs from 'node:fs';
	  import {Readable} from 'node:stream';
	  
	  const nodeReadable = fs.createReadStream(
	  'text-file.txt', {encoding: 'utf-8'});
	  const webReadableStream = Readable.toWeb(nodeReadable);
	  const lineStream = webReadableStream.pipeThrough(
	  new ChunksToLinesStream());
	  for await (const line of lineStream) {
	  console.log(line);
	  }
	  
	  // Output:
	  // 'there\r\n'
	  // 'are\n'
	  // 'multiple\n'
	  // 'lines'
	  We used the following external functionality:
	  
	  fs.createReadStream(filePath, options?) creates a Node.js stream (an instance of stream.Readable).
	  stream.Readable.toWeb(streamReadable) converts a readable Node.js stream to a web stream (an instance of ReadableStream).
	  The TransformStream class ChunksToLinesStream is explained in the blog post “Using web streams on Node.js”. Chunks are the pieces of data produced by streams. If we have a stream whose chunks are strings with arbitrary lengths and pipe it through a ChunksToLinesStream, then we get a stream whose chunks are lines.
	  Web streams are asynchronously iterable, which is why we can use a for-await-of loop to iterate over lines.
	  
	  If we are not interested in text lines, then we don’t need ChunksToLinesStream, can iterate over webReadableStream and get chunks with arbitrary lengths.
	- The following code uses a stream to append text to an existing file:
	  
	  import * as fs from 'node:fs';
	  import {Writable} from 'node:stream';
	  
	  const nodeWritable = fs.createWriteStream(
	  'existing-file.txt', {encoding: 'utf-8', flags: 'a'});
	  const webWritableStream = Writable.toWeb(nodeWritable);
	  
	  const writer = webWritableStream.getWriter();
	  try {
	  await writer.write('First appended line\n');
	  await writer.write('Second appended line\n');
	  await writer.close();
	  } finally {
	  writer.releaseLock()
	  }
	  This code is almost the same as the one we used to overwrite existing content (see the previous section for more information). The only difference is that we added the option .flags: The value 'a' means that we append data. Other possible values (e.g. to throw an error if a file doesn’t exist yet) are explained in the Node.js documentation.
	  
	  Watch out: In some functions, this option is named .flag, in others .flags.