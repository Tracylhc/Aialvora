import fs from 'fs';
import path from 'path';

function crc32(data) {
    let crc = 0xffffffff;
    const table = [];
    for (let i = 0; i < 256; i++) {
        let c = i;
        for (let j = 0; j < 8; j++) {
            c = (c >> 1) ^ (c & 1 ? 0xedb88320 : 0);
        }
        table[i] = c;
    }
    for (const byte of data) {
        crc = table[(crc ^ byte) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
}

function createChunk(type, data) {
    const length = Buffer.alloc(4);
    length.writeUInt32BE(data.length);
    const typeBuffer = Buffer.from(type, 'ascii');
    const crcData = Buffer.concat([typeBuffer, data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(crcData));
    return Buffer.concat([length, typeBuffer, data, crc]);
}

const logos = {
    chatgpt: [6, 182, 212],
    claude: [139, 92, 246],
    gemini: [34, 197, 94],
    midjourney: [249, 115, 22],
    flux: [236, 72, 153],
    stablediffusion: [6, 182, 212],
    runway: [245, 158, 11],
    pika: [16, 185, 129],
    cursor: [59, 130, 246],
    github: [55, 65, 81],
    canva: [0, 196, 204],
    notion: [0, 0, 0],
    deepseek: [16, 185, 129],
    windsurf: [6, 182, 212],
    elevenlabs: [244, 63, 94],
    copyai: [245, 158, 11],
    agentgpt: [249, 115, 22],
    langchain: [139, 92, 246],
};

async function main() {
    const zlib = await import('zlib');
    const outputDir = path.join(path.dirname(import.meta.url).replace('file:///', ''), '../public/logos');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    for (const [name, [r, g, b]] of Object.entries(logos)) {
        const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
        
        const ihdr = Buffer.alloc(13);
        ihdr.writeUInt32BE(128, 0);
        ihdr.writeUInt32BE(128, 4);
        ihdr[8] = 8;
        ihdr[9] = 6;
        ihdr[10] = ihdr[11] = ihdr[12] = 0;
        
        const rawData = [];
        for (let y = 0; y < 128; y++) {
            rawData.push(0);
            for (let x = 0; x < 128; x++) {
                rawData.push(r, g, b, 255);
            }
        }
        
        const compressed = zlib.deflateSync(Buffer.from(rawData));
        
        const ihdrChunk = createChunk('IHDR', ihdr);
        const idatChunk = createChunk('IDAT', compressed);
        const iendChunk = createChunk('IEND', Buffer.alloc(0));
        
        const png = Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
        fs.writeFileSync(path.join(outputDir, `${name}.png`), png);
        console.log(`Created ${name}.png`);
    }

    console.log('All logos generated!');
}

main();
