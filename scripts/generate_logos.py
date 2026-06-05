import os
import struct

def create_png(width, height, r, g, b, a=255):
    png = []
    
    def crc32(data):
        crc = 0xffffffff
        table = [0] * 256
        for i in range(256):
            c = i
            for j in range(8):
                c = (c >> 1) ^ (0xedb88320 if c & 1 else 0)
            table[i] = c
        for byte in data:
            crc = table[(crc ^ byte) & 0xff] ^ (crc >> 8)
        return (crc ^ 0xffffffff) & 0xffffffff
    
    def chunk(type_name, data):
        length = struct.pack(">I", len(data))
        chunk_data = type_name.encode() + data
        crc = struct.pack(">I", crc32(chunk_data))
        return length + chunk_data + crc
    
    png.append(b'\x89PNG\r\n\x1a\n')
    png.append(chunk('IHDR', struct.pack(">IIBBBBB", width, height, 8, 6, 0, 0, 0)))
    
    raw_data = []
    for y in range(height):
        raw_data.append(0)
        for x in range(width):
            raw_data.extend([r, g, b, a])
    
    def deflate(data):
        result = bytearray([0x78, 0x01])
        block_size = 65535
        for i in range(0, len(data), block_size):
            block = data[i:i + block_size]
            is_last = i + block_size >= len(data)
            result.append(0x01 if is_last else 0x00)
            result.append(len(block) & 0xff)
            result.append((len(block) >> 8) & 0xff)
            result.append((~len(block)) & 0xff)
            result.append(((~len(block)) >> 8) & 0xff)
            result.extend(block)
        
        adler = 1
        s1, s2 = 1, 0
        for byte in data:
            s1 = (s1 + byte) % 65521
            s2 = (s2 + s1) % 65521
        adler = (s2 << 16) | s1
        result.extend(struct.pack(">I", adler))
        return bytes(result)
    
    compressed = deflate(bytes(raw_data))
    png.append(chunk('IDAT', compressed))
    png.append(chunk('IEND', b''))
    
    return b''.join(png)

logos = {
    'chatgpt': (0x06, 0xb6, 0xd4),
    'claude': (0x8b, 0x5c, 0xf6),
    'gemini': (0x22, 0xc5, 0x5e),
    'midjourney': (0xf9, 0x73, 0x16),
    'flux': (0xec, 0x48, 0x99),
    'stablediffusion': (0x06, 0xb6, 0xd4),
    'runway': (0xf5, 0x9e, 0x0b),
    'pika': (0x10, 0xb9, 0x81),
    'cursor': (0x3b, 0x82, 0xf6),
    'github': (0x37, 0x41, 0x51),
    'canva': (0x00, 0xc4, 0xcc),
    'notion': (0x00, 0x00, 0x00),
    'deepseek': (0x10, 0xb9, 0x81),
    'windsurf': (0x06, 0xb6, 0xd4),
    'elevenlabs': (0xf4, 0x3f, 0x5e),
    'copyai': (0xf5, 0x9e, 0x0b),
    'agentgpt': (0xf9, 0x73, 0x16),
    'langchain': (0x8b, 0x5c, 0xf6),
}

output_dir = 'public/logos'
os.makedirs(output_dir, exist_ok=True)

for name, (r, g, b) in logos.items():
    png_data = create_png(128, 128, r, g, b)
    with open(f'{output_dir}/{name}.png', 'wb') as f:
        f.write(png_data)
    print(f'Created {name}.png')

print('All logos generated!')
